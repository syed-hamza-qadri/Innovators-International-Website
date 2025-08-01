"use server"

import { revalidatePath } from "next/cache"

export type FormData = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export type Submission = {
  id: number
  name: string
  email: string
  phone: string
  subject: string
  message: string
  is_read: boolean
  created_at: string
}

// Global variable to store submissions in memory
let submissions: Submission[] = []
let isInitialized = false

// Initialize submissions from localStorage if available
function initializeSubmissions() {
  if (isInitialized) return

  try {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("contact_submissions")
      if (stored) {
        submissions = JSON.parse(stored)
      }
    }
  } catch (error) {
    console.error("Error loading submissions from localStorage:", error)
  }

  isInitialized = true
}

// Save submissions to localStorage
function saveSubmissions() {
  try {
    if (typeof window !== "undefined") {
      localStorage.setItem("contact_submissions", JSON.stringify(submissions))
    }
  } catch (error) {
    console.error("Error saving submissions to localStorage:", error)
  }
}

// Get next ID
function getNextId(): number {
  if (submissions.length === 0) return 1
  return Math.max(...submissions.map((s) => s.id)) + 1
}

export async function submitContactForm(formData: FormData) {
  try {
    // Initialize submissions
    initializeSubmissions()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return { success: false, message: "Please fill in all required fields." }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return { success: false, message: "Please enter a valid email address." }
    }

    // Create new submission
    const newSubmission: Submission = {
      id: getNextId(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || "",
      subject: formData.subject,
      message: formData.message,
      is_read: false,
      created_at: new Date().toISOString(),
    }

    // Add to submissions array
    submissions.unshift(newSubmission)

    // Save to localStorage
    saveSubmissions()

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Revalidate the submissions page
    revalidatePath("/access/submissions")

    return { success: true, message: "Thank you for contacting us. We'll get back to you shortly." }
  } catch (error) {
    console.error("Error in submitContactForm:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

export async function getContactSubmissions(): Promise<Submission[]> {
  try {
    // Initialize submissions
    initializeSubmissions()

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return [...submissions]
  } catch (error) {
    console.error("Error in getContactSubmissions:", error)
    return []
  }
}

export async function markAsRead(id: number) {
  try {
    // Initialize submissions
    initializeSubmissions()

    const submissionIndex = submissions.findIndex((sub) => sub.id === id)

    if (submissionIndex !== -1) {
      submissions[submissionIndex].is_read = true
      saveSubmissions()
    }

    revalidatePath("/access/submissions")
    return true
  } catch (error) {
    console.error("Error in markAsRead:", error)
    return false
  }
}

export async function deleteSubmission(id: number) {
  try {
    // Initialize submissions
    initializeSubmissions()

    submissions = submissions.filter((sub) => sub.id !== id)
    saveSubmissions()

    revalidatePath("/access/submissions")
    return true
  } catch (error) {
    console.error("Error in deleteSubmission:", error)
    return false
  }
}

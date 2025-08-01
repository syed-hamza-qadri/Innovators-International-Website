import { getContactSubmissions, markAsRead, deleteSubmission } from "@/actions/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
import { Trash2, Check } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function SubmissionsPage() {
  const submissions = await getContactSubmissions()

  return (
    <div className="min-h-screen bg-gray-900 pt-28 px-4 pb-4">
      <div className="max-w-6xl mx-auto py-6 relative z-10">
        <div className="flex justify-end mb-6">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 bg-white px-4 py-2 rounded-md shadow-sm hover:shadow transition-all"
          >
            Back to Website
          </Link>
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">No submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((submission) => (
              <Card
                key={submission.id}
                className={`${submission.is_read ? "bg-white" : "bg-blue-50"} shadow-md hover:shadow-lg transition-all`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{submission.subject}</h3>
                      <div className="flex flex-wrap gap-x-2 text-sm text-gray-500 mb-3">
                        <span className="font-medium">{submission.name}</span>
                        <span>({submission.email})</span>
                        {submission.phone && <span>• {submission.phone}</span>}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md mt-2 mb-4">
                        <p className="whitespace-pre-wrap text-gray-700">{submission.message}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <p className="text-sm text-gray-500">
                        {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
                      </p>
                      <div className="flex gap-2 mt-1">
                        {!submission.is_read && (
                          <form
                            action={async () => {
                              "use server"
                              await markAsRead(submission.id)
                            }}
                          >
                            <Button
                              type="submit"
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700 bg-transparent"
                              title="Mark as read"
                            >
                              <Check className="h-4 w-4 mr-1" />
                              <span>Read</span>
                            </Button>
                          </form>
                        )}
                        <form
                          action={async () => {
                            "use server"
                            await deleteSubmission(submission.id)
                          }}
                        >
                          <Button
                            type="submit"
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 bg-transparent"
                            title="Delete submission"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            <span>Delete</span>
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

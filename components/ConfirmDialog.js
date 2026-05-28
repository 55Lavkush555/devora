"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function DeleteButton({ handleDelete, uid }) {

  return (
    <AlertDialog>

      <AlertDialogTrigger asChild>
        <button className="px-4 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
          Delete
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="rounded-2xl">

        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete this blog?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>

          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={() => handleDelete(uid)}
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </AlertDialogAction>

        </AlertDialogFooter>

      </AlertDialogContent>

    </AlertDialog>
  )
}
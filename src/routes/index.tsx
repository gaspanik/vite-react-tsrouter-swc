import { createFileRoute } from '@tanstack/react-router'
import { SquareCode } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-[90vh]">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <SquareCode className="w-6 h-6" />
          <h1 className="font-medium text-gray-900 text-xl">
            React + Tanstack Router and Tailwind CSS v4 Starter
          </h1>
        </div>
        <p className="mt-2 mb-4 text-gray-600 text-sm">
          A modern React setup with TypeScript, SWC compiler, Tanstack Router,
          Tailwind CSS v4, and Lucide icons.
        </p>
      </div>
    </div>
  )
}

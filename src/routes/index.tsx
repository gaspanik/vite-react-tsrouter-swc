import { createFileRoute } from '@tanstack/react-router'
import { SquareCode, Square, CheckSquare2 } from 'lucide-react'
import { Button } from '@/components/ButtonCn'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-[90vh]">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2">
          <SquareCode className="w-6 h-6" />
          <h1 className="font-medium text-slate-900 text-xl">
            React + Tanstack Router and Tailwind CSS v4 Starter
          </h1>
        </div>
        <p className="mt-2 mb-4 text-slate-600 text-sm">
          A modern React setup with TypeScript, SWC compiler, Tanstack Router,
          Tailwind CSS v4, and Lucide icons.
        </p>
        <h2 className="mb-3 font-medium text-md text-slate-600">
          Shadcn/ui `cn` utility function to conditionally join classNames.
        </h2>
        <div className="my-1">
          <Button className="" active>
            <CheckSquare2 className="mr-1 w-4 h-4" />
            Button w/ active
          </Button>
          {` `}
          <Button className="" disabled>
            <Square className="mr-1 w-4 h-4" />
            Button w/ disabled
          </Button>
        </div>
      </div>
    </div>
  )
}

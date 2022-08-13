import { ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="flex flex-col items-center justify-center">
      <h6>Something went wrong</h6>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="p-4">{children}</div>
    </ErrorBoundary>
  )
}

export default Page

import { Box, Button, Typography } from "@mui/material"
import { ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <Box
      role="alert"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6">Something went wrong</Typography>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </Box>
  )
}

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}

export default Page

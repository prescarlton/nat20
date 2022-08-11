import { Box } from "@mui/material"
import { ReactNode } from "react"

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {children}
    </Box>
  )
}
export default PageLayout

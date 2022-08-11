import { Menu } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"
import Page from "../components/Page"

const AppLayout = () => {
  return (
    <Page>
      <Box
        sx={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 2,
              }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Nat 20
            </Typography>
          </Toolbar>
        </AppBar>

        <Outlet />
      </Box>
    </Page>
  )
}
export default AppLayout

import { Menu } from "@mui/icons-material"
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import Page from "../components/Page"

const AppLayout = () => {
  return (
    <Page>
      <Box
        sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      >
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Nat 20
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </Page>
  )
}
export default AppLayout

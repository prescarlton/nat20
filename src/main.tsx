import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"
import { QueryClient, QueryClientProvider } from "react-query"
import { AppProvider } from "./contexts/App"
import { ModalsProvider } from "./contexts/Modals"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ModalsProvider>
          <AppRouter />
        </ModalsProvider>
      </AppProvider>
    </QueryClientProvider>
  </BrowserRouter>
)

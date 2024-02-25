import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Product from './pages/product'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Product id='1' />
        </QueryClientProvider>
    )
}

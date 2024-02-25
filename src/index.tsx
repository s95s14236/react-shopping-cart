import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'

const root = document.getElementById('root')
if (!root) {
    throw new Error("Can't find root element")
}

async function enableMocking() {
    const { worker } = await import('./mocks/browser')

    // 初始化service worker promise
    return worker.start()
}

enableMocking().then(() => {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
})

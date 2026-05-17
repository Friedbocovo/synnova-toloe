import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { AppProvider } from './context/AppContext'

export function render(url) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <AppProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </AppProvider>
    </React.StrictMode>
  )
  return { html }
}

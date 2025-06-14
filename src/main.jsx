import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './stores/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      {/* <UserContext> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </UserContext> */}
    </StrictMode>
  </Provider>,
)

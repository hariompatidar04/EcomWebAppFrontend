import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/reducers/store.js'
// import store from './store/reducer/Store.js'

createRoot(document.getElementById('root')).render(
  // Wrap the App with Redux Provider
   <Provider store={store}>
    <App />
   </Provider>
)

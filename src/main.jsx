import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/homePageComponents/App.jsx'
import './index.css'
import theme from './components/homePageComponents/assets/Theme.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from "./components/homePageComponents/redux/store.js";
import { Provider } from "react-redux"
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

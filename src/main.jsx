import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  typography: {
   body:{
    fontFamily: 'Source Sans Pro, sans-serif',
   },
    h1: {
      fontFamily: 'Oswald, sans-serif',
    },

  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>
)

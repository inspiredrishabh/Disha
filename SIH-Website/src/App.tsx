import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>    
    </>
  )
}

export default App

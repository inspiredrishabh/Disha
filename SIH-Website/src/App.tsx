import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Form from './pages/Form';

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>    
    </>
  )
}

export default App

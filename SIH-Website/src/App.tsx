import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Landing from './pages/Landing';
import Form from './pages/Form';
import { Signup } from './pages/Signup';
import Signin from './pages/Signin';

function App() {

  return (
    <>
    <RecoilRoot>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>    
    </RecoilRoot>
    </>
  )
}

export default App

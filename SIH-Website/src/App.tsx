import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Landing from './pages/Landing';
import Form from './pages/Form';
import { Signup } from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <RecoilRoot>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/landing" replace />} />
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>    
    </RecoilRoot>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import './App.css'
import Wrapper from 'components/Wrapper'
import LandingPage from "pages/Landing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <ToastContainer />
    </Wrapper>
  )
}

export default App

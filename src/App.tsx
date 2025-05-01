import { Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from 'components/Wrapper';
import LandingPage from 'pages/Landing';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Toaster />
    </Wrapper>
  );
}

export default App;

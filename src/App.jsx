import './App.css';
import Navbar from './Components/Navbar';
import Contacts from './Pages/Contacts';
import Homepage from './Pages/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/** Anything out of the routes tag will appear on all pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css'
import Navbar from './Components/Navbar'
import Contacts from './Pages/Contacts'
import Homepage from './Pages/Homepage'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <Navbar/>
      {/**anything out of the routes tage will appear on all pages */}
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
      
    </div>
  )
}

export default App

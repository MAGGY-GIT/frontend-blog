import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootswatch/dist/litera/bootstrap.min.css";
import Contacts from './Components/My-blog/Contacts'
import Homepage from './Components/My-blog/Homepage'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

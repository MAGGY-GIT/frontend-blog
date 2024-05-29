import './Homepage.css'
//image imports
import { Link } from "react-router-dom";


function Homepage() {

  return (
    <div>
      <div className="header">
        <div className='navbar'>
          <ul>
            <Link to="/" reloadDocument>Homepage</Link>
            <Link to="Contacts">Contacts</Link>
          </ul>
        </div>
      </div>

      <div className="body">
        <div className='blogposts'>

          <div className='post'>
            src={'/Components/Assets/x-files.jpeg'}
            <p>Fox Mulder and Dana Scully, two special FBI agents, probe into cases that have been left unresolved. 
              While Mulder believes in the paranormal, Scully settles for a more scientific approach.</p>
          </div>

          <div className='post'>
            src={'/Components/Assets/fallback.jpeg'}
            <p>
              Buffy Summers tries to live a normal life in high school while embracing her 
              responsibilities and destiny as a hunter of vampires and demons.
            </p>
          </div>

          <div className='post'>
            src={'/Components/Assets/outer-limits.jpeg'}
            <p>
              In the tradition of the 1960s cult show of the same name, this anthology series features different actors, many well-known from their previous work, in each episode. 
              The episodes often explore eerie and often supernatural themes with a science-fiction element.
            </p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Homepage

import './Contacts.css';
import { Link } from "react-router-dom";

function Contacts() {

  return (
    <div className='container'>
      <div className="header">
        <div className='navbar'>
          <ul>
            <Link to="Homepage">Homepage</Link>
            <Link to="/" reloadDocument>Contacts</Link>
          </ul>
        </div>
      </div>

      <form action="">
          <div className='header2'>
            <div className='text'>Contact Page</div>
            <div className='underline'></div>
          </div>

          <div className='inputs'>
            <div className="input">
              <input
                type="text"
                name="firstname"
                placeholder='First name'

              />
            </div>

            <div className="input">
              <input
                type="text"
                name="secondname"
                placeholder='Second name'

              />
            </div>

            <div className="input">
              <input
                type="email"
                name="emailaddress"
                placeholder='Email address'

              />
            </div>

            <div className="text2">
              <textarea
                name="message"
                placeholder='Message'

              ></textarea>
            </div>
          </div>

          <div className="submit-container">
            <button className="submit">
              Send message
            </button>
          </div>
        </form>
    </div>
  );
}

export default Contacts;

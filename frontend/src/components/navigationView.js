import {useState} from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExplorePage from "../pages/Explore.js";
import LibraryPage from "../pages/Library.js";
import ListenNowPage from "../pages/ListenNow.js";
import PlayerPage from "../pages/Player.js";
import ProfilePage from "../pages/Profile.js";
import SearchPage from "../pages/search.js";
import SettingsPage from "../pages/setings";



function Text2() {

  const [active, setActive] = useState(1)

  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
          <Navbar.Brand>
            <span style={{fontWeight: 700}}>Playr</span>
          </Navbar.Brand>
            <Navbar.Collapse>
              <Nav>
                <Nav.Link className={active === 1 ? "active" : "inactive text-secondary"} onClick={() => setActive(1)}>Listen Now</Nav.Link>
                <Nav.Link className={active === 2 ? "active" : "inactive text-secondary"} onClick={() => setActive(2)}>Player</Nav.Link>
                <Nav.Link className={active === 3 ? "active" : "inactive text-secondary"} onClick={() => setActive(3)}>Explore</Nav.Link>
                <Nav.Link className={active === 4 ? "active" : "inactive text-secondary"} onClick={() => setActive(4)}>Library</Nav.Link>
                <Nav.Link className={active === 5 ? "active" : "inactive text-secondary"} onClick={() => setActive(5)}>Profile</Nav.Link>
                <Nav.Link className={active === 6 ? "active" : "inactive text-secondary"} onClick={() => setActive(6)}>Search</Nav.Link>
                <Nav.Link className={active === 7 ? "active" : "inactive text-secondary"} onClick={() => setActive(7)}>Setings</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
        <div id="View">
          {active === 1 ? <ListenNowPage/> : null} 
          {active === 2 ? <PlayerPage/> : null}
          {active === 3 ? <ExplorePage/> : null}
          {active === 4 ? <LibraryPage/> : null}
          {active === 5 ? <ProfilePage/> : null}
          {active === 6 ? <SearchPage/> : null}
          {active === 7 ? <SettingsPage/> : null}
        </div>
    </div>
  );
}

export default Text2;
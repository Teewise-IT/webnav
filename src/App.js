import Nav from './nav/Nav';
import Body from './body/Body';
import {useState} from 'react'; 

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className="App">
      <Nav showMenu={showMenu} setShowMenu={setShowMenu} showSubmenu={showSubmenu} setShowSubmenu={setShowSubmenu} />
      <Body setShowSubmenu={setShowSubmenu} />
    </div>
  );
}

export default App;

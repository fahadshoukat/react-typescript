import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Menu from './components/Menu';
import Status from './components/Status';

function App() {

  return (
    <div className="App">
     <Status message='success' />
     <Heading>This is Heading.</Heading>
     <Menu>
       <Heading>This is Menu Heading.</Heading>
     </Menu>
     <Greet name='Fahad' isLoggedIn={true} />
    </div>
  );
}

export default App;

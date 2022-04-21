import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const person = {
    first: 'Sufyan',
    last: 'Baig'
  }

  const names = [
    {
      first: 'Ali',
      last: 'Haider'
    },
    {
      first: 'Muaz',
      last: 'Ashraf'
    },
    {
      first: 'Ahmad',
      last: 'Dogar'
    },
  ]

  return (
    <div className="App">
     <Greet name='Fahad' messageCount={24} isLoggedIn={false} />
     <Person name={person} />
     <PersonList nameList={names} />
    </div>
  );
}

export default App;

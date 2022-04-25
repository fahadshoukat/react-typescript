import './App.css';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';

function App() {

  return (
    <ThemeContextProvider>
    <div className="App">
      <Box />
    </div>
    </ThemeContextProvider>
  );
}

export default App;

import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router} from 'react-router-dom'
import AnimatedPage from './component/AnimatedPage';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <AnimatedPage/>
      </Router>
      
    </div>
  );
}

export default App;

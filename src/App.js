
import './App.css';
import { HomePage } from './MyComponents/HomePage/HomePage';
import Team from './MyComponents/HomePage/Team/Team';
import NavBar from './MyComponents/NavBar/NavBar';


function App() {
  return (
    <>
    <NavBar/>
      <HomePage />
      <Team/>
    </>
  );
}

export default App;

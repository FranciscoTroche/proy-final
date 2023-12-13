import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';

import { Banner } from './Components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './Components/Skills';
import { Project } from './Components/Project';
import { Formulario } from './Components/Formulario';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Project></Project>
      <Formulario></Formulario>
    </div>
  );
}

export default App;

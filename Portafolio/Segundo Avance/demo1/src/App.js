import './App.css';
import Formulari from './components/Formulari';
import Welcome from './components/Bienvenida';
import Texto from './components/Text';
import Imagen from './components/Img';
import Tabla from './components/Table';


function App() {
  return (
    <div className="App">
            <Welcome name="Edilberto" />
            <Welcome msg="Mensaje de ejemplo ejemplificando" />
            <Texto p="Mas texto ejemplificando"/>
            <Imagen/>
            <Tabla/>
            <Formulari/>
    </div>
  );
}

export default App;

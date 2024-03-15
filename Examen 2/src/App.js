import Accordion from 'react-bootstrap/Accordion';
import './App.css';
import Header from './components/Header';
import List_01 from './ListasNFL/List01';
import List_02 from './ListasNFL/List02';
import List_03 from './ListasNFL/List03';
import List_04 from './ListasNFL/List04';
import List_05 from './ListasNFL/List05';
import List_06 from './ListasNFL/List06';
import List_07 from './ListasNFL/List07';

function App() {
  return (
    <div className="App">
      <Header/>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Lista de todos los pendientes - IDs</Accordion.Header>
          <Accordion.Body>
            <List_01/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Lista de todos los pendientes - IDs y Titles</Accordion.Header>
          <Accordion.Body>
            <List_02/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Lista de todos los pendientes sin resolver - ID y Title</Accordion.Header>
          <Accordion.Body>
            <List_03/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Lista de todos los pendientes resueltos - ID y Title</Accordion.Header>
          <Accordion.Body>
            <List_04/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Lista de todos los pendientes - IDs y userID</Accordion.Header>
          <Accordion.Body>
            <List_05/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Lista de todos los pendientes resueltos - ID y userID </Accordion.Header>
          <Accordion.Body>
            <List_06/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Lista de todos los pendientes sin resolver - ID y user ID</Accordion.Header>
          <Accordion.Body>
            <List_07/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;


//Okamymy was here!
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡝⠑⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⠤⠴⠒⠒⠒⠀⠈⠉⠉⠉⠙⠒⠒⠢⠤⢄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢠⠃⠀⠈⢆⠀⠀⠀⠀⠀⠀⠀⣀⠤⠒⠊⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣤⣤⠤⠒⠒⠢⠭⠶⡤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠈⢣⠀⠀⢀⡤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡤⠴⠒⠉⠉⠀⠀⠀⠀⠈⠉⠒⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠈⣷⡖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢸⣁⠀⠀⠀⠀⠀⢱⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⢴⣃⠀⠀⠀⠀⠸⠀⠹⡄⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⣀⡠⠞⠀⠀⠀⠀⠀⡇⠀⠙⣄⠀⠀⣠⣿⠀⠈⠉⠙⠒⠦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄⡀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⢀⠀⢀⡇⠀⠀⠘⣆⢠⣿⣿⡆⠀⠀⠀⠀⠀⠀⠈⠑⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⠀⠙⠢⣀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⣿⡆⠀⠀⠀⢸⢇⢸⣧⣶⣰⡶⠋⠿⠋⠉⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠀⠀⠀⠀⠀⠙⢶⠤⣈⡓⢄⡀
// ⠀⠀⠀⠀⠀⠀⡸⢹⣿⡀⠀⠀⢸⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡦⣄⡀⠀⠀⠀⠑⢄⡉⠉⠛
// ⠀⠀⠀⠀⠀⢠⠇⣼⣿⣷⠀⠀⡜⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠉⠓⠂⠤⠤⢀⡙⠢⠀
// ⠀⠀⠀⠀⠀⢸⠀⠸⣿⣿⡇⡴⠁⠀⠀⣀⣀⣀⣠⣤⣤⣶⠾⢧⢻⡄⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢸⠀⠀⠹⣿⣿⠀⠀⠀⡠⠊⠉⠉⠉⠀⠈⠣⡀⠀⠀⢻⡀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠘⡆⠀⡀⠹⡅⠀⠀⡴⠁⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⣷⡀⠘⣷⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⣸⢆⠹⡒⢚⠀⢰⣁⣀⣀⣀⣀⡀⠀⠀⠀⢸⠀⠀⠀⠃⠱⡄⢧⣣⠀⠀⠀⠀⠀⣧⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣠⠞⠁⠀⢹⠓⠈⠻⣿⣟⡿⢻⠛⠛⠛⠿⠛⠛⢿⡛⠀⢛⡟⠿⣻⢾⡏⣣⡀⠀⠀⠀⢻⡄⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠨⡵⢶⡤⠤⠈⢦⡀⠀⠈⣿⡿⣷⣤⣤⣀⣀⣠⣤⠾⠃⠀⢘⣯⣭⣡⣤⣿⠿⣷⣄⠀⠀⠘⣵⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠈⠓⠤⣀⠈⢏⠚⠲⠤⠁⠀⢸⠏⠉⠉⠉⠀⠀⠀⠀⠀⠰⣾⣿⣿⣿⣿⣿⡿⣿⢦⡀⠀⢣⢣⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠋⠉⠉⠒⠢⢄⡀⠉⠛⠿⠟⣱⣽⠵⠚⠙⠲⣈⣎⠳⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⣄⡠⠞⠁⠀⠀⠀⠀⠀⠈⠛⠆⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⣿⣄⣀⡀⠀⢰⣒⠉⠉⠉⠁⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣭⣿⡟⣿⣿⢿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⣄⠀⠀⠀⠸⡀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⣀⡠⠤⠤⠒⠋⡹⠛⠻⠿⠿⡿⠿⣍⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠑⠦⡀⠀⠱⡀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢘⡿⠖⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠘⣄⠀⠹⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠈⠑⠒⠵⠀⠀⠀
// ⠀⠀⠀⠀⠀⡾⡕⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠈⠳⣄⢫⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⠀⣰⠁⠀⠀⣀⣀⡀⠀⠀⠀⠈⠻⣄⠀⠀⠀⢀⣀⣀⠴⠊⠑⠢⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⡎⠀⠀⠀⠀⠀⣰⢁⣴⣾⣿⣿⣿⣿⣿⣶⣄⠀⣰⣿⣧⠀⢯⣿⠞⢁⣤⢚⡉⠓⠒⠒⠛⣽⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⢰⡅⠀⠀⠀⡠⠎⣸⣿⣿⣿⣛⠋⠉⠉⠛⠻⣿⣾⣿⠟⢉⡇⢸⣿⡠⠟⠊⢉⣈⡑⠢⣤⣀⡏⠀⢱⠀⠀⠀⠀⠀⠀⠀⢀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⡌⠘⠒⠒⠋⠀⢠⡿⠋⠀⠙⣏⠛⠦⣄⠀⠀⠈⣿⠃⢠⡞⣷⣿⣿⣇⡠⠚⠉⢀⡈⢉⣓⡿⠧⢄⠘⡆⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⡸⠁⠀⠀⠀⠈⢧⠀⠈⠙⢦⣀⢀⣴⠋⢰⣽⣿⣿⣿⣄⡴⠋⡹⠛⠉⣀⣠⡤⠊⠀⣇⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⢸⠀⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠈⢷⡀⠀⢀⣹⠿⣅⢀⢷⣿⣿⣿⣿⠋⠀⠀⠉⣩⠟⠋⠀⡇⠀⠀⣿⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⡎⠀⠀⠀⠀⠀⣸⠀⠀⠀⠀⠀⠀⠀⠈⢷⣰⠟⠁⠀⣈⣿⣿⣿⣿⣿⡧⠴⠶⢶⠞⣁⡠⠤⠚⡇⠀⠀⣿⠀⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⢀⠃⠀⠀⠀⠀⢀⣇⠀⠀⠀⠀⠀⠀⣀⣴⣻⣧⣴⣶⣿⣿⣿⣿⣿⣿⣿⣇⣀⣤⡬⢷⣦⣤⣖⡎⠀⠀⠀⡇⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⣸⠀⠀⠀⣀⡠⠼⠜⠒⠒⠉⠉⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣭⣭⠭⠭⠷⠾⠁⠀⠀⢰⢁⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⡇⠀⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⡿⠟⢿⢿⣿⣿⣿⣿⣿⣿⠟⠋⠉⠀⢣⠀⠀⠀⠀⠀⠀⡜⢸⠀⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠽⠛⠉⠀⠀⠀⠀⢸⣿⣿⣿⠟⠋⠀⠀⠀⠀⠀⠀⢇⠀⠀⠀⠀⢠⠃⡼⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⡎⠀⠀⠀⠀⠀⠀⠀⣀⡠⢴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⢸⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡄⠀⠀⢠⠏⠀⡷⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⣸⡄⣀⣀⡠⠤⠖⠂⠉⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⠀⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡧⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

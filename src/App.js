import './App.css';
import Ad from './components/Ad';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainers'
// import ItemDetalContainer from './containers/ItemDetalContainer/index'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={'BIENVENIDOS A MI PAGINA'}/>
    </div>
  );
}

export default App;

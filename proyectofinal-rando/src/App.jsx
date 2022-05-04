import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
    <div className='containerItem'>
    <ItemListContainer />
    </div>
    </div>

  
  );
}

export default App;

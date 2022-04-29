
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
    <div className='containerItem'>
    <ItemListContainer greeting={'Helping interns in a moment that matters'} />
    </div>
    </div>

  
  );
}

export default App;

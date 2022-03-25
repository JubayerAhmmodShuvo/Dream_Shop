
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <div className='p-4'>
        <h1>Let's Buy Your Dream Shoe</h1>
        <h3>You can choose maximum 4 dream product</h3>
      </div>

      <Shop />


    </div>
  );
}

export default App;


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
// import QuestionAns from './components/Question&Ans/QuestionAns';

function App() {
  return (
    <div className="App">
      <div className='p-4 '>
        <h1 className='heading'> Buy Now Your Dream Shoe</h1>
        <h4>You can choose maximum 4 dream product</h4>
      </div>

      <Shop />
      {/* <QuestionAns /> */}


    </div>
  );
}

export default App;

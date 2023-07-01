import imageOne from './basket.jpg';
import imageTwo from './grocery.jpg'
import './App.css';
import { Grocery } from './Grocery';

function App() {
  return (
    <div className="App">
      <img src={imageOne} alt="basket" width={200} />
      <h1>Grocery List</h1>
      <div>
        <Grocery/>
      </div>
      <img src={imageTwo} alt="grocery" width={400} />
    </div>
  );
}

export default App;

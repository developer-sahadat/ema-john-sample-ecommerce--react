import logo from './logo.svg';
import './App.css';
import Header from './Component/Haeder/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
     
     {/* Header component*/}
      <Header></Header>

      {/* Main section component */}
        <Shop></Shop>

    </div>
  );
}

export default App;

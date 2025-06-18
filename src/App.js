
import Greeting from "./component/Greeting";
import HelloWorld from "./component/HelloWorld";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import './App.css'
import StyleModule from "./component/StyleModule";

function App() {
  const props = 'Ini Props';
  const name = 'This is props number 2'
  const anotherprops = 'Yeah another Props'
  const yetanotherprops = 'Yet another Props too'
  return (
    <div className="App">
      <Greeting/>
      <HelloWorld props={props} name={name}/>
      <div className='simple-style'>Ini style dari CSS Stylesheet</div>
      <StyleModule></StyleModule>
      
      {/* Router agar bisa memunculkan 2 atau lebih page pada 1 tampilan yang sama */}
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home props1={anotherprops} props2={yetanotherprops}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

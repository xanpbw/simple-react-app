
import Greeting from "./component/Greeting";
import HelloWorld from "./component/HelloWorld";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

function App() {
  return (
    <div className="App">
      <Greeting/>
      <HelloWorld/>
      
      {/* Router agar bisa memunculkan 2 atau lebih page pada 1 tampilan yang sama */}
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/about">About</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

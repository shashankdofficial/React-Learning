import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <h1>Test</h1>
            <button><li><Link to="/about">About</Link></li></button>
          </>
        } exact />
        <Route path='/about' element={
          <h1>About Us</h1>
        } exact />
      </Routes>
    </div>
  )
}

export default App;

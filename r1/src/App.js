import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

// function App(){
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={
//           <>
//             <h1>Test</h1>
//             <button><li><Link to="/about">About</Link></li></button>
//           </>
//         } exact />
//         <Route path='/about' element={
//           <h1>About Us</h1>
//         } exact />
//       </Routes>
//     </div>
//   )
// }

export default App;

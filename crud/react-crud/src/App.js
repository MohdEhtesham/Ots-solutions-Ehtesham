import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Routercheck from './components/Routercheck';
// import Menubutton from './components/Menubutton';

function App() {
  return (
    <Router>
      {/* <div style={{background:"skyblue"}}> */}
      <div>
        {/* <Menubutton /> */}
        <Routercheck />
        <h2 >React Crud Operations</h2>


        <Routes>
          <Route exact path='/create' element={<Create />} />


          <Route exact path='/read' element={<Read />} />


          <Route exact path='/update' element={<Update />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
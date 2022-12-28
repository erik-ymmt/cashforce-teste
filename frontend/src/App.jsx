import FiscalNotesTable from "./containers/FiscalNotesTable";
import NavBar from "./containers/NavBar";
import './global.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <FiscalNotesTable />
    </div>
  );
}

export default App;

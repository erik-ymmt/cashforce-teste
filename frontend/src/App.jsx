import OrdersTable from "./containers/OrdersTable";
import NavBar from "./containers/NavBar";
import './global.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <OrdersTable />
    </div>
  );
}

export default App;

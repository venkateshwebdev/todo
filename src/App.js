import Home from "./container/Home/Home";
import Navbar from "./container/Navbar/Navbar";
import './App.css'
import Entries from "./container/Entries/Entries";
const App = () => {
  return ( 
    <div className="App">
      <Navbar />
      <Home />
      <Entries />
    </div>
   );
}

export default App;
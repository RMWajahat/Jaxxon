import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routers from './Router/routes';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;

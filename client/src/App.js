import './App.css';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';
import Navbar from './routes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

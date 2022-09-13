import './App.css';
import Citizen from './components/Citizen/Citizen';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Citizen/>  
      <Footer />
    </div>
  );
}

export default App;

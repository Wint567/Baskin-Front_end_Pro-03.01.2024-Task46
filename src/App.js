import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import CenterContainer from './components/CenterContainer';


function App() {


  return (
    <>
      <Header />
      <div style={{display: 'flex'}}> 
        <Navigation />
        <CenterContainer/>
      </div>
      
    </>
    
  );
}

export default App;

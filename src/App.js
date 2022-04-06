import './App.css';
import {Footer, Header,Contact,Tours,Bane,Navbar,Map} from './container/index'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Bane/>
      <Tours/>
      <Contact/>
      <Map/>
      <Footer/>
     
    </div>
  );
}

export default App;

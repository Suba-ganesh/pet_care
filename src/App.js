import './App.css';
import Nav from "./components/Navbar/Nav";
import Main from "./components/Main/Main";
import Aboutus from "./components/About/Aboutus";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";



function App(){
   return (
      <div className="App">
          <Nav />
          <Main />
          <Aboutus />
          <Services />
          <Footer />
      </div>
   )
}

export default App;
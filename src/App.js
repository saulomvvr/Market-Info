import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Header />
      <div style={{height:"1000px"}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';
import Information from './Components/Information';
import NotFound from './Components/NotFound';

function App() {
  //ThemeMods
  const lightColor = "#e9dfff";
  const darkColor = "#000021";
  const [mode, setMode] = useState("Light");
  const [themeStatus, setThemeStatus] = useState("☀️");
  const [themeNow, setThemeNow] = useState(lightColor);
  const [themeNowHF, setThemeNowHF] = useState(darkColor);

  function changeTheme(){
    if(mode === "Light"){
      setMode("Dark");
      setThemeStatus("🌑");
      setThemeNow(darkColor);
      setThemeNowHF(lightColor);
    }
    else{
      setMode("Light");
      setThemeStatus("☀️");
      setThemeNow(lightColor);
      setThemeNowHF(darkColor);
    }
  };

  //Coins
  const [coin,setCoin]=useState({})
  const [order,setOrder]=useState("Popular")

  

    function receiveCoin(c){
      setCoin(c)
    }

    function updateOrder (order){
      console.log(order)
      setOrder(order)
    }

  return (
    <>
      <BrowserRouter>
        <Header changeTheme={changeTheme} themeStatus={themeStatus} themeNowHF={themeNowHF} themeNow={themeNow} updateOrder={updateOrder}/>
        <div style={{ height: "1000px", backgroundColor: themeNow }}>

          <Routes>
            <Route path='/' element={<Home receiveCoin={receiveCoin} order={order}></Home>} />
            <Route path='/information' element={<Information coin={coin} themeNowHF={themeNowHF} themeNow={themeNow}/>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
        <Footer changeTheme={changeTheme} themeStatus={themeStatus} themeNowHF={themeNowHF} />
      </BrowserRouter>
    </>
  );
}

export default App;
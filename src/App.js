import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';
import Information from './Components/Information';

function App() {
  const lightColor = "#e9dfff";
  const darkColor = "#000021";
  const [mode, setMode] = useState("Light");
  const [themeStatus, setThemeStatus] = useState("☀️");
  const [themeNow, setThemeNow] = useState(lightColor);
  const [themeNowHF, setThemeNowHF] = useState(darkColor);

  const [coin,setCoin]=useState({})

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

    function receiveCoin(c){
      setCoin(c)
    }
  return (
    <>
      <Header changeTheme = { changeTheme } themeStatus = { themeStatus } themeNowHF = { themeNowHF } themeNow = { themeNow } />
      <div style={{height:"1000px", backgroundColor: themeNow}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home receiveCoin={receiveCoin}></Home>}/>
            <Route path='/information' element={<Information coin={coin}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer changeTheme = { changeTheme } themeStatus = { themeStatus } themeNowHF = { themeNowHF }/>
    </>
  );
}

export default App;
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { useState } from 'react';

function App() {
  const lightColor = "#FFFFFF";
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
  return (
    <>
      <Header changeTheme = { changeTheme } themeStatus = { themeStatus } themeNowHF = { themeNowHF } themeNow = { themeNow } />
      <div style={{height:"1000px", backgroundColor: themeNow}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer changeTheme = { changeTheme } themeStatus = { themeStatus } themeNowHF = { themeNowHF }/>
    </>
  );
}

export default App;
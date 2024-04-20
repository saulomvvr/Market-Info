import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Header = () => {
    const [mode, setMode] = useState("Light");
    const [buttonColor, setButtonColor] = useState('#000000');
    function changeTheme(){
        if(mode === "Light"){
            setMode("Dark");
            console.log("Dark");
        }
        else{
            setMode("Light");
            console.log("Light");
        }
    };
    return (
        <div className="mt-0 mw-100 w-auto mh-10 h-10 d-flex justify-content-between" style={{backgroundColor: '#482d7b'}}>
            <h1 >
                Market Info
            </h1>
            <Button style={{backgroundColor: {buttonColor}}} onClick={(e) => {changeTheme()}}>
                {mode} Mode
            </Button>{' '}
        </div>
      );
}
export default Header;
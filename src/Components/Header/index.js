import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


const Header = () => {

    const [mode, setMode] = useState("Light");
    const [themeStatus, setThemeStatus] = useState("☀️");

    function changeTheme(){
        if(mode === "Light"){
            setMode("Dark");
            setThemeStatus("🌑");
        }
        else{
            setMode("Light");
            setThemeStatus("☀️");
        }
    };

    return (
        <div className="m-0 p-2 mw-100 w-auto mh-10 h-10 d-flex justify-content-between align-middle" style={{backgroundColor: '#482d7b'}}>
            <h1 className="font-weight-bold text-capitalize text-white">
                market info
            </h1>
        <Form>
            <Form.Check
                type="switch"
                id="custom-switch"
                onClick={(e) => (changeTheme())}
                label={themeStatus}
            />
        </Form>
        </div>
      );
}
export default Header;
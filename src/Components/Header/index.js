import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Header = ({ changeTheme, themeStatus, themeNowHF, themeNow }) => {

    return (
        <Fragment>
            <div className="m-0 p-2 mw-100 w-auto mh-10 h-10 d-flex justify-content-between align-middle" style={{ backgroundColor: themeNowHF }}>
                <Link to={"/"} style={{textDecoration:"none"}}>
                    <h1 className="font-weight-bold text-capitalize" style={{ color: themeNow }}>
                        market info
                    </h1>
                </Link>
                <Form className='d-flex align-self-center '>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        onClick={(e) => (changeTheme())}
                        label={themeStatus}
                    />
                </Form>
            </div>
        </Fragment>

    );
}
export default Header;
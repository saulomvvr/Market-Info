import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


const Header = ({ changeTheme, themeStatus, themeNowHF, themeNow }) => {

    return (
        <div className="m-0 p-2 mw-100 w-auto mh-10 h-10 d-flex justify-content-between align-middle" style={{ backgroundColor: themeNowHF }}>
            <h1 className="font-weight-bold text-capitalize" style={{ color: themeNow }}>
                market info
            </h1>
            <Form className='d-flex align-self-center '>
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
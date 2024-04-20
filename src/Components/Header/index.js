import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Header = ({ changeTheme, themeStatus, themeNowHF, themeNow,updateOrder }) => {

    const textHeader = "font-weight-bold text-capitalize"

    return (
        <Fragment>
            <div className="m-0 p-4 mw-100 w-auto mh-10 h-10 d-flex justify-content-between align-middle" style={{ backgroundColor: themeNowHF }}>
                <div className='d-flex align-items-baseline gap-4'>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                        <h1 className={textHeader} style={{ color: themeNow }} >
                            market info
                        </h1>
                    </Link>
                    <Link to={"/"} style={{ textDecoration: "none" }} onClick={(e)=>{updateOrder("Popular")}}>
                        <h3 className={textHeader} style={{ color: themeNow }}>
                            Popular
                        </h3>
                    </Link>
                    <Link to={"/"} style={{ textDecoration: "none" }} onClick={(e)=>{updateOrder("EmAlta")}}>
                        <h3 className={textHeader} style={{ color: themeNow }}>
                            Em Alta
                        </h3>
                    </Link>
                    <Link to={"/"} style={{ textDecoration: "none" }} onClick={(e)=>{updateOrder("EmBaixa")}}>
                        <h3 className={textHeader} style={{ color: themeNow }}>
                            Em Baixa
                        </h3>
                    </Link>
                </div>
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
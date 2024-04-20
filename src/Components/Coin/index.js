import { Link } from 'react-router-dom';
import btc from '../../Imgs/icons_coins/bitcoin.png';

const Coin = ({coin, receiveCoin}) =>{
    return(
        <Link to={"/information"} onClick={(e)=>{receiveCoin(coin)}} style={{textDecoration:"none"}}>
            <div className="d-flex flex-column align-items-base shadow p-3 mb-5 rounded" style={{backgroundColor:"#603c99", width:"280px"}} >
                    <div className='d-flex align-items-center'>
                    <img src={coin.img} width={"32px"} height={"32px"} className='mx-2'></img>
                    <h3 className="text-light">
                        {`${coin.code}`}
                    </h3>
                </div>
                <h3 className="text-light px-2">{`USD : ${coin.value.toFixed(2)}`}</h3>
            </div>
        </Link>
    )
}
export default Coin
import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from '../Coin';
import bitcoin from '../../Imgs/icons_coins/bitcoin.png'
import solana from '../../Imgs/icons_coins/solana.png'
import ethereum from '../../Imgs/icons_coins/ethereum.png'
import dogecoin from '../../Imgs/icons_coins/dogecoin.png'
import shibainu from '../../Imgs/icons_coins/shiba-inu.png'
import tether from '../../Imgs/icons_coins/tether.png'
import bnb from '../../Imgs/icons_coins/bnb.png'
import usdc from '../../Imgs/icons_coins/usdc.png'
import xrp from '../../Imgs/icons_coins/xrp.png'
import litecoin from '../../Imgs/icons_coins/litecoin.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = ({ receiveCoin }) => {
    const cotations = [
        {
            name:"Bitcoin",
            value:63600,
            code:"BTC",
            img:bitcoin
        },
        {
            name:"Ethereum",
            value:3046,
            code:"ETH",
            img:ethereum
        },
        {
            name:"Solana",
            value:141,
            code:"SOL",
            img:solana
        },
        {
            name:"Shiba Inu",
            value:141,
            code:"SHIB",
            img:shibainu
        },
        {
            name:"Dogecoin",
            value:141,
            code:"DOGE",
            img:dogecoin
        },
        {
            name:"Tether",
            value:141,
            code:"USDT",
            img:tether
        },
        {
            name:"BNB",
            value:141,
            code:"BNB",
            img:bnb
        },
        {
            name:"USDC",
            value:141,
            code:"USDC",
            img:usdc
        },
        {
            name:"XRP",
            value:141,
            code:"XRP",
            img:xrp
        }
        {
            name:"Litecoin",
            value:141,
            code:"LTC",
            img:litecoin
        },
    ];
    return (
        <section className='text-align-center'>
                    <div className='d-flex flex-wrap align-middle'>
                        <div className='d-flex flex-wrap gap-4 p-5'>
                            {cotations.map((coin, index) => {
                                return <Coin coin={coin} key={index} receiveCoin={receiveCoin} />
                            })}
                        </div>
                    </div>
        </section>
    )
}
//fdsf
export default Home
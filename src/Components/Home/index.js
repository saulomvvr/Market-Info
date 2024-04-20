import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from '../Coin';
import bitcoin from '../../Imgs/icons_coins/bitcoin.png'
import solana from '../../Imgs/icons_coins/solana.png'
import ethereum from '../../Imgs/icons_coins/ethereum.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = ({ receiveCoin }) => {
    const cotations = [
        {
            name: "Bitcoin",
            value: 63600,
            code: "BTC",
            img: bitcoin
        },
        {
            name: "Ethereum",
            value: 3046,
            code: "ETH",
            img: ethereum
        },
        {
            name: "Solana",
            value: 141,
            code: "SOL",
            img: solana
        },
        {
            name: "Solana",
            value: 141,
            code: "SOL",
            img: solana
        },
        {
            name: "Solana",
            value: 141,
            code: "SOL",
            img: solana
        },
        {
            name: "Solana",
            value: 141,
            code: "SOL",
            img: solana
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
export default Home
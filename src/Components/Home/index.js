import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from '../Coin';
import bitcoin from '../../Imgs/icons_coins/bitcoin.png'
import solana from '../../Imgs/icons_coins/solana.png'
import ethereum from '../../Imgs/icons_coins/ethereum.png'
import { Container } from 'react-bootstrap';
const Home = () => {
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
    ]

    return (
        <section className=''>
            <div className='p-5 d-flex justify-content-around'>
                {cotations.map((coin, index) => {
                    return <Coin coin={coin} key={index} />
                })}
            </div>
        </section>
    )
}
export default Home
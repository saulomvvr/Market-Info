import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from '../Coin';
const Home = () =>{
    const cotations = [
        {
            name:"Bitcoin",
            value:63600,
            code:"BTC"
        },
        {
            name:"Ethereum",
            value:3046,
            code:"ETH"
        },
        {
            name:"Solana",
            value:141,
            code:"SOL"
        },
    ]

    return(
        <section className=''>
            <div className='m-5 d-flex justify-content-around'>
            {cotations.map((coin,index)=>{
                return <Coin coin={coin} key={index}/>
            })}
            </div>
        </section>
    )
}
export default Home
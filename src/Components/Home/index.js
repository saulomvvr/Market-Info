import 'bootstrap/dist/css/bootstrap.min.css';
import Coin from '../Coin';
import bitcoin from '../../Imgs/icons_coins/bitcoin.png'
import solana from '../../Imgs/icons_coins/solana.png'
import ethereum from '../../Imgs/icons_coins/ethereum.png'
import { useEffect, useState } from 'react';

const Home = ({ receiveCoin,order }) => {

    const cotationsPerm=[
        {
            name:"Bitcoin",
            value:63600,
            code:"BTC",
            img:bitcoin,
            popular:1,
            variant:2.5
        },
        {
            name:"Ethereum",
            value:3046,
            code:"ETH",
            img:ethereum,
            popular:2,
            variant:-2.5
        },
        {
            name:"Solana",
            value:312323,
            code:"SOL",
            img:solana,
            popular:3,
            variant:-6.5
        },
        
    ]

    const [cotations,setCotations] =useState(cotationsPerm);

    useEffect(()=>{
        
        if(order==="Popular"){
            setCotations(cotationsPerm.sort(function(a,b){
                if(a.popular>b.popular){
                    return 1
                }
                if(a.popular<b.popular){
                    return -1
                }
                return 0
            }))
        }
        if(order==="EmBaixa"){
            setCotations(cotationsPerm.filter((coin)=>{return coin.variant<0}))
        }
        if(order==="EmAlta"){
            setCotations(cotationsPerm.filter((coin)=>{return coin.variant>=0}))
        }
    },[order])
    

    
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
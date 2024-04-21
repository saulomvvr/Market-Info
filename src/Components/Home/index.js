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
import { useEffect, useState } from 'react';
import { getCoin } from '../../apiService';

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
            variant:-23.7
        },
        {
            name:"Solana",
            value:141,
            code:"SOL",
            img:solana,
            popular:3,
            variant:4.7
        },
        {
            name:"Shiba Inu",
            value:141,
            code:"SHIB",
            img:shibainu,
            popular:4,
            variant:3.6
        },
        {
            name:"Dogecoin",
            value:141,
            code:"DOGE",
            img:dogecoin,
            popular:5,
            variant:4.5
        },
        {
            name:"Tether",
            value:141,
            code:"USDT",
            img:tether,
            popular:6,
            variant:2.5
        },
        {
            name:"BNB",
            value:141,
            code:"BNB",
            img:bnb,
            popular:7,
            variant:-2.5
        },
        {
            name:"USDC",
            value:141,
            code:"USDC",
            img:usdc,
            popular:8,
            variant:-22.5
        },
        {
            name:"XRP",
            value:141,
            code:"XRP",
            img:xrp,
            popular:9,
            variant:23.5
        },
        {
            name:"Litecoin",
            value:141,
            code:"LTC",
            img:litecoin,
            popular:10,
            variant:42.5
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
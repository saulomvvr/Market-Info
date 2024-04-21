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

const Home = ({ receiveCoin,order }) => {

    const cotationsPerm=[
        {
            name:"Bitcoin",
            value:63600.50,
            code:"BTC",
            img:bitcoin,
            popular:1,
            variant:2.5,
            color: '#ffd700',
            about: `Bitcoin é uma criptomoeda descentralizada originalmente descrita em 2008 em seu whitepaper por uma pessoa, ou grupo de pessoas, usando o pseudônimo Satoshi Nakamoto. Foi lançado um pouco depois, em janeiro de 2009.
            O Bitcoin é uma moeda digital ponto a ponto, o que significa que toda transação ocorre diretamente entre as partes iguais e independentes, sem a necessidade de nenhum intermediário para permitir ou facilitar. O Bitcoin foi criado, de acordo com as próprias palavras do Nakamoto, para permitir que “pagamentos online sejam enviados diretamente de uma parte para a outra, sem passar por uma instituição financeira”.
            Alguns conceitos para um tipo semelhante de moeda eletrônica descentralizada precedem o BTC, mas o Bitcoin possui o diferencial de ser a primeira criptomoeda a realmente entrar em uso. `
        },
        {
            name:"Ethereum",
            value:3046.00,
            code:"ETH",
            img:ethereum,
            popular:2,
            variant:-23.7,
            color: '#7a7a7a',
            about: `Ethereum é um sistema de blockchain descentralizado e open-source, que possui sua própria criptomoeda, o Ether. O ETH funciona como uma plataforma para várias outras criptomoedas, bem como para a execução de [smart contracts] descentralizados (https://coinmarketcap.com/alexandria/glossary/smart-contract).
            Ethereum foi definido pela primeira vez em um whitepaper de 2013 por Vitalik Buterin. Buterin, junto com outros cofundadores. O financiamento para o projeto foi garantido por uma venda pública online no verão de 2014, sendo lançado oficialmente o blockchain em 30 de julho de 2015.
            O próprio objetivo do Ethereum é se tornar uma plataforma global para aplicativos descentralizados, permitindo que usuários de todo o mundo escrevam e executem softwares que sejam resistente à censura, tempo de inatividade e fraude.`
        },
        {
            name:"Solana",
            value:141.00,
            code:"SOL",
            img:solana,
            popular:3,
            variant:4.7,
            color: '#64cc9a',
            about: `Solana é um projeto de código aberto altamente funcional que se baseia na natureza da tecnologia sem permissão do blockchain para oferecer soluções de finanças descentralizadas (DeFi). Embora a ideia e o trabalho inicial do projeto começaram em 2017, a Solana foi oficialmente lançada em março de 2020, pela Solana Foundation com sede em Genebra, Suíça.    
            O protocolo da Solana é projetado para facilitar a criação de aplicativos descentralizados (DApp). Ele visa melhorar a escalabilidade ao introduzir o consenso proof-of-history (PoH), combinado com o consenso subjacente do proof-of-stake (PoS) do blockchain.
            Devido ao modelo de consenso híbrido inovador, Solana aproveita o interesse tanto de traders pequenos, como institucionais. Um foco importante para a Solana Foundation é tornar as finanças descentralizadas acessíveis em uma escala maior.`
        },
        {
            name:"Shiba Inu",
            value:141,
            code:"SHIB",
            img:shibainu,
            popular:4,
            variant:3.6,
            color: '#ff8c00',
            about: `A moeda Shiba Inu foi criada anonimamente em agosto de 2020 sob o pseudônimo de "Ryoshi". A moeda meme rapidamente ganhou velocidade e valor, à medida que a comunidade de investidores foi atraída pelo charme fofo da moeda juntamente com as manchetes e Tweets de personalidades como Elon Musk e Vitalik Buterin.
            A Shiba Inu buscou ser a contraparte, baseada no Ethereum, da Dogecoin, baseada no algoritmo de mineração Srypt. A Shiba Inu e o token SHIB são partes de uma enxame de criptomoedas com tema de cachorro que incluem a Baby Dogecoin (BabyDoge), Dogecoin (DOGE), JINDO INU (JIND), Alaska Inu (LAS) e Alaskan Malamute Token (LASM). Esses tokens de pouco valor atraíram investidores que perderam a alta do Dogecoin de US$0,0002 para quase US$0,75.
            Era uma vez um cão muito especial. Este cão era o shiba inu, e este cão inspirou milhões de pessoas no mundo todo a investirem seu dinheiro em tokens com a imagem de um cão.
            De acordo com o site da SHIBA INU, a SHIB é a "MATADORA DE DOGECOIN" e será listada na sua própria corretora descentralizada, ShibaSwap.`
        },
        {
            name:"Dogecoin",
            value:141,
            code:"DOGE",
            img:dogecoin,
            popular:5,
            variant:4.5,
            color: '#f0e581',
            about: `Dogecoin (DOGE) é baseada no meme popular da internet o "doge" e possui como logotipo um Shiba Inu. A moeda digital de open-source foi criada por Billy Markus de Portland, Oregon e Jackson Palmer de Sydney, Austrália, sendo um fork do Litecoin ocorrido em dezembro de 2013. Os criadores do Dogecoin o imaginaram como algo divertido, uma criptomoeda descontraída que teria maior apelo, indo além do público alvo do Bitcoin, já que foi baseada em meme de cachorro. O CEO da Tesla Elon Musk postou alguns tweets na mídia social dizendo que Dogecoin seria sua moeda favorita.`
        },
        {
            name:"Tether",
            value:141,
            code:"USDT",
            img:tether,
            popular:6,
            variant:2.5,
            color: '#3aab94',
            about: `Tether (USDT) é uma moeda digital criada para espelhar o valor do dólar americano. Lançado em 2014, a ideia por trás do Tether era criar uma criptomoeda estável que pudesse ser usada como um dólar digital, ou “stablecoin.” Tethers é ancorada, ou “tethered,” ao preço do dólar americano.
            Inicialmente o Tether usava a rede Bitcoin, Omni Layer, como seu protocolo de transporte. O Tether agora está disponível como token ERC20 no Ethereum. No total, o Tether é emitido nos blockchains do Bitcoin (tanto protocolo Omni e Liquid), Ethereum, EOS e Tron.
            Os tokens Tether são emitidos pela Tether Limited, que possui o mesmo CEO que a corretora de criptomoedas Bitfinex. O Tether alegou anteriormente que a sua moeda seria 100% resguardada pela sua própria reserva, mas seus advogados, em 2019, notaram que a reserva por trás do Tether era de apenas 74%, ou uma reserva fracionária. O Tether percebeu que a definição de “resguardada totalmente” inclui os empréstimos para empresas afiliadas.`
        },
        {
            name:"BNB",
            value:141,
            code:"BNB",
            img:bnb,
            popular:7,
            variant:-2.5,
            color: '#fffbb8',
            about: `O BNB foi lançado através de uma ICO em 2017, onze dias antes da corretora de criptomoedas Binance ser lançada. Originalmente, ele foi lançado como um token ERC-20 sendo executado na rede Ethereum, com um limite previsto de 200 milhões de moedas, sendo 100 milhões de BNBs oferecidos no ICO. No entanto, as moedas BNB ERC-20 foram trocadas pelo BEP2 BNB, numa corretagem de 1 para 1, em abril de 2019, com o lançamento da mainnet da Binance Chain e, atualmente, não se encontra mais hospedada no Ethereum. O BNB pode ser usado como um método de pagamento, um token de utilidade para pagar por taxas na corretora Binance e para participar nas vendas de tokens nos lançamentos da Binance. O BNB também alimenta a Binance DEX (corretora descentralizada).`
        },
        {
            name:"USDC",
            value:141,
            code:"USDC",
            img:usdc,
            popular:8,
            variant:-22.5,
            color: '#7ea8fc',
            about: `O USD Coin (conhecido pelo seu ticker USDC) é uma stablecoin atrelada ao dólar americano na cotação de 1:1. Cada unidade desta criptomoeda em circulação é lastreada a US$1, mantida numa reserva, numa mistura de dinheiro e títulos do Tesouro Americano de curto prazo. The Centre consortium, responsável por este ativo, alega que o USDC é emitido por instituições financeiras reguladas.
            A stablecoin foi lançada originalmente em uma base limitada, em setembro de 2018. De forma simples, o mantra do USD Coin é “dinheiro digital para uma era digital” — e a stablecoin foi projetada para um mundo em que as transações sem a utilização de dinheiro em espécie estão se tornando mais comuns.    
            O USD Coin demonstrou diversos casos de uso. Além de oferecer um refúgio seguro para os comerciantes de criptomoedas em momentos de alta volatilidade, os responsáveis pela stablecoin defendem que ela também permite que empresas aceitem pagamentos de ativos digitais e movimentem uma série de setores, incluindo finanças descentralizadas e jogos.
            No geral, o objetivo é criar um ecossistema em que USDC seja aceito pelo maior número de carteiras, corretoras, provedores de serviço e dApps.`
        },
        {
            name:"XRP",
            value:141,
            code:"XRP",
            img:xrp,
            popular:9,
            variant:23.5,
            color: '#FFFFFF',
            about: `XRP é a criptomoeda nativa da Ripple, um sistema de pagamento em criptomoedas criado pela Ripple Labs Inc. XRP é seu “ativo digital construído para pagamentos globais,“ o que implica que a Ripple planeja rivalizar com as transferências de dinheiro geralmente conduzidas pelo sistema bancário. XRP permite que os usuários enviem dinheiro a um custo muito baixo, buscando atrair o interesse de clientes de varejo e bancos. Uma proposta de valor importante da Ripple são seus minúsculos custos de transação, enquanto oferece uma finalidade de transação de menos de cinco segundos.
            A empresa foi fundada em 2012 por Chris Larsen e Jed McCaleb, e é baseada no trabalho de Ryan Fugger, que criou a XRP Ledger em 2012. O XRP Ledger é um livro razão criptografado de código aberto fomentado por uma rede ponto a ponto de nós. McCaleb acabou deixando a Ripple e fundou a Stellar, outra criptomoeda para pagamentos. 
            Após a empresa mudar seu nome original de OpenCoin para Ripple, ela buscou parcerias de alto nível com Bank of America, Santander e Standard Chartered. No entanto, a Ripple logo teve problemas legais com as autoridades reguladoras dos EUA por não cumprir as Leis de Sigilo Bancário, e mais tarde foi rotulada como um título não registrado. Até o começo de 2022, esse processo ainda não foi resolvido. Além disso, a empresa foi acusada de propaganda enganosa no começo da sua existência.`
        },
        {
            name:"Litecoin",
            value:141,
            code:"LTC",
            img:litecoin,
            popular:10,
            variant:42.5,
            color: '#173a80',
            about: `Litecoin (LTC) é uma criptomoeda que foi projetada para fornecer pagamentos rápidos, seguros e com baixo custo, aproveitando as propriedades únicas da tecnologia blockchain.
            A criptomoeda foi criada com base no protocolo Bitcoin (BTC), mas se difere em termos do algoritmo de hashing utilizado, limite máximo, tempo de transação do bloco e alguns outros fatores. A Litecoin possui um tempo de bloco de apenas 2,5 minutos e taxas de transação extremamente baixas, tornando-a adequada para micro-transações e pagamentos em pontos de venda.    
            A Litecoin foi lançada via um cliente open-source na GitHub em 7 de outubro de 2011, e a Rede Litecoin passou a funcionar cinco dias mais tarde, em 13 de outubro de 2011. Desde então, ela explodiu tanto em utilidade, quanto em aceitação pelos comerciantes, e passou grande parte da sua existência entre as dez principais criptomoedas por capitalização de mercado.    
            A criptomoeda foi criada por Charlie Lee, um ex-funcionário do Google, que tinha a pretensão da Litecoin se tornar a "versão lite do Bitcoin", e por isso possui muitas das propriedades do Bitcoin — embora mais leve.`
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
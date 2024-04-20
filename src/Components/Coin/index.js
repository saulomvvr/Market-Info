const Coin = ({coin}) =>{
    return(
        <div className="d-flex flex-column align-items-base p-3 rounded" style={{backgroundColor:"#603c99"}}>
            <h3 className="text-dark">{coin.code}</h3>
            <h3 className="text-dark">{coin.name}</h3>
            <h3 className="text-dark">{coin.value}</h3>
        </div>
    )
}
export default Coin
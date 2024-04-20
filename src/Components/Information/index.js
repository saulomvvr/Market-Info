const Information = ({coin,themeNowHF}) => {
    return (
        <div className="p-5">
            <div className="d-flex align-items-end">
                <div className="d-flex align-items-center">
                    <img src={coin.img} width={"50px"} height={"50px"}></img>
                    <h1 className="px-3" style={{color:themeNowHF}}>{coin.code}</h1>
                </div>
                <h3 className="px-3" style={{color:themeNowHF}}>Informations</h3>
                <h3 className="px-3" style={{color:themeNowHF}}>Transations</h3>
            </div>
            <h3 className="px-3 p-2">{`USD ${coin.value.toFixed(2)}`}</h3>
        </div>
    )
}
export default Information
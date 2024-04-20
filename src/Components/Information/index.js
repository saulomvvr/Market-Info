const Information = ({coin}) => {
    return (
        <div className="p-5">
            <div className="d-flex align-items-end">
                <div className="d-flex align-items-center">
                    <img src={coin.img} width={"50px"} height={"50px"}></img>
                    <h1 className="px-3">{coin.code}</h1>
                </div>
                <h3 className="px-3">Informations</h3>
                <h3 className="px-3">Transations</h3>
            </div>
        </div>
    )
}
export default Information
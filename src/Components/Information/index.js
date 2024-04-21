const Information = ({ coin, themeNowHF, themeNow }) => {
    return (
        
        <div /*Fundo da pagina*/className="w-auto mw-100 h-100 mh-100 d-flex justify-content-center p-5" style={{backgroundColor: themeNow}}>
            <div /*Fundo da informaçao*/className="rounded-5 d-flex bd-highlight" style={{backgroundColor: themeNowHF, width: '95%', height: '95%', maxWidth: '95%'}}>
                <div /*Info Left*/className="flex-fill bd-highlight d-flex flex-row" style={{width: '30%'}}>
                    <img src={coin.img} width={'64px'} height={'64px'}></img>
                    <h1 className="">{coin.name}</h1>
                </div>
                <div /*Info Right*/className="flex-fill bd-highlight" style={{width: '70%'}}>
                    <h1>lorem</h1>
                </div>
            </div>
        </div>
    )
}
export default Information
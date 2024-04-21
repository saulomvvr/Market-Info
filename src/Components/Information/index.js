const Information = ({ coin, themeNowHF, themeNow }) => {
    return (

        <div /*Fundo da pagina*/ className="w-auto mw-100 h-100 mh-100 d-flex justify-content-center p-5" style={{ backgroundColor: themeNow }}>
            <div /*Fundo da informaçao*/ className="rounded-5 d-flex bd-highlight" style={{ backgroundColor: themeNowHF, width: '95%', height: '95%', maxWidth: '95%' }}>
                <div /*Info Left*/ className="mb-3 flex-fill bd-highlight d-flex flex-column align-items-start" style={{ width: '50%' }}>
                    <div /*Coin Info*/ className="d-flex align-items-center">
                        <img /*Coin Image*/ className="mt-3 ms-3" src={coin.img} width={'64px'} height={'64px'}></img>
                        <h1 /*Coin Name*/ className="mt-3 ms-3" style={{ fontSize: '64px', color: themeNow }}>{coin.name}</h1>
                        <h2 /*Coin Name*/ className="mt-3 ms-3" style={{ fontSize: '64px', color: coin.color }}>{coin.code}</h2>
                    </div>
                    <div /*Coin Price*/ className="d-flex align-items-center">
                        <h2 /*Coin Price USD*/ className="mt-3 ms-3" style={{ fontSize: '64px', color: themeNow }}>{`${coin.value.toFixed(2)}`}</h2>
                        <h2 /*Coin Price USD*/ className="mt-3 ms-3" style={{ fontSize: '32px', color: themeNow }}>{`USD`}</h2>
                    </div>
                    <div /*Oficials Medias*/ className="d-flex flex-column bd-highlight mb-3">
                        <h4 /*Oficials Links*/ className="mt-3 ms-3" style={{ fontSize: '32px', color: themeNow }}>{`Links Oficiais`}</h4>
                        <div /*Links*/ className="d-flex align-items-center">
                            {coin.site &&
                                <h4 /*ST*/ className="mt-3 ms-3 rounded-2 p-1" style={{ backgroundColor: themeNow, fontSize: '16px', color: themeNow }}>
                                    <a href={coin.site} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: themeNowHF }}>🌐 Site</a>
                                </h4>
                            }
                            {coin.whitepaper &&
                                <h4 /*WP*/ className="mt-3 ms-3 rounded-2 p-1" style={{ backgroundColor: themeNow, fontSize: '16px', color: themeNow }}>
                                    <a href={coin.whitepaper} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: themeNowHF }}>📄 Whitepaper</a>
                                </h4>
                            }
                            {coin.github &&
                                <h4 /*GH*/ className="mt-3 ms-3 rounded-2 p-1" style={{ backgroundColor: themeNow, fontSize: '16px', color: themeNow }}>
                                    <a href={coin.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: themeNowHF }}>🐱 GitHub</a>
                                </h4>
                            }
                            {coin.reddit &&
                                <h4 /*RD*/ className="mt-3 ms-3 rounded-2 p-1" style={{ backgroundColor: themeNow, fontSize: '16px', color: themeNow }}>
                                    <a href={coin.reddit} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: themeNowHF }}>🤖 Reddit</a>
                                </h4>
                            }
                        </div>

                    </div>
                </div>
                <div /*Info Right*/ className="mb-3 flex-fill bd-highlight d-flex flex-column-reverse" style={{ width: '50%' }}>
                    <h3 /*Text About Coin*/ className="mt-3 ms-3 me-5" style={{ fontSize: '16px', color: themeNow }}>{`${coin.about}`}</h3>
                    <h3 /*About Coin*/ className="mt-3 ms-3" style={{ fontSize: '32px', color: themeNow }}>{`Sobre ${coin.name}`}</h3>
                </div>
            </div>
        </div>
    )
}
export default Information
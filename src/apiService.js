export function getCoin(coin){
    const resp = fetch(`https://rest.coinapi.io/v1/exchangerate/${coin}/USD?apikey=41FE106F-EB5E-4466-8EEC-0866900624A1`)

    return resp
}
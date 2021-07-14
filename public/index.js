window.cryptoData = {};
var check = ['Bitcoin','Ethereum', 'Ethereum 2', 'Binance Coin', 'Cardano', 'XRP', 'Dogecoin', 'Polkadot', 'Uniswap', 'Bitcoin Cash', 'Litecoin', 'Solana', 'Chainlink', 'Wrapped Bitcoin', 'Polygon', 'THETA', 'Stellar Lumens', 'Ethereum Classic', 'Internet Computer', 'VeChain', 'Filecoin', 'TRON', 'EOS', 'Monero', 'Aave', 'Crypto.com']

document.querySelector('#refreshCrypto').addEventListener('click', ()=>{
    fetch('http://localhost:3000/products')
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post);
        cryptoData = post;
    });
    

    setTimeout(()=>{
        for (let index = 0; index < check.length; index++) {
            const element = check[index];
            
            var foundCrypto = checkForCrypto(check[index]);
            if(foundCrypto) {
                printInfo(check[index], getCryptoPrice(check[index]));
            } else {
                console.log('crypto name not found: ', check[index])
            }
        }
    }, 3000)

})
function checkForCrypto(cryptoName){
    for(var i = 0; i < cryptoData.data.length; i++){
        if(cryptoData.data[i].name == cryptoName) {
            console.log('match is found for ', cryptoName);
            return true;
        }
    }
}

function getCryptoPrice(cryptoName) {
    for(var i = 0; i < cryptoData.data.length; i++){
        if(cryptoData.data[i].name == cryptoName) {
            return cryptoData.data[i].quote.USD.price;
        }
    }
}

function printInfo(name, price){
    let contain = document.querySelector('.crypto');
    let template = `<div class="cryptoItem"><p>${name} : $${price.toFixed(2)}</p></div>`;

    contain.insertAdjacentHTML('beforeend', template);
}

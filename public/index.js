window.cryptoData = {};
var check = [
    {
        name: 'Bitcoin',
        shortText : `The world’s first cryptocurrency.  Bitcoin uses peer-to-peer technology to operate with no central authority or banks. It manages transactions and the issuing of bitcoins to individuals via an interconnected network of computers. All of this is done through the blockchain; an online, public ledger that catalogues all transactions of bitcoin. What sets the Bitcoin blockchain apart from a bank's ledger is that it is distributed, meaning anyone can view it.`,
        link : 'https://bitcoin.org/en/',
        whitePaper : 'https://www.coinbase.com/bitcoin.pdf',
        image : 'bitcoinLogo.png'
    },
    {
        name: 'Ethereum',
        shortText : `Ethereum is a decentralized computing platform that uses ETH (also called Ether) to pay transaction fees (or “gas”). Developers can use Ethereum to run decentralized applications (dApps) and issue new crypto assets, known as Ethereum tokens. Currently the most used coin
        `,
        link : 'https://ethereum.org/en/',
        whitePaper : 'https://ethereum.org/en/whitepaper/',
        image : 'bitcoinLogo.png'
    }]
//, 'Ethereum 2', 'Binance Coin', 'Cardano', 'XRP', 'Dogecoin', 'Polkadot', 'Uniswap', 'Bitcoin Cash', 'Litecoin', 'Solana', 'Chainlink', 'Wrapped Bitcoin', 'Polygon', 'THETA', 'Stellar Lumens', 'Ethereum Classic', 'Internet Computer', 'VeChain', 'Filecoin', 'TRON', 'EOS', 'Monero', 'Aave', 'Crypto.com'

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
            
            var foundCrypto = checkForCrypto(check[index].name);
            if(foundCrypto) {
                printInfo(check[index].name, getCryptoPrice(check[index].name),check[index].image,check[index].shortText, check[index].link, getCryptoSymbol(check[index].name));
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

function getCryptoSymbol(cryptoName) {
    for(var i = 0; i < cryptoData.data.length; i++){
        if(cryptoData.data[i].name == cryptoName) {
            return cryptoData.data[i].symbol;
        }
    }
}

function printInfo(name, price, imageSrc, text, link, ticker){
    let contain = document.querySelector('.crypto');
    // let template = `<div class="cryptoItem"><p>${name} : $${price.toFixed(2)}</p></div>`;
    let template = `
    <div class="cryptoList">
    <div class="cryptoItem">
                   
        <p> 
            <img src="img/${imageSrc}" alt=""> ${name} : <span>${ticker}</span>
        </p>
        <p>$${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
    </div>
    <div class="cryptoDescription">
        <p>${text}</p>
        <a href="${link}">${link}</a>
    </div>
    </div>`;

    contain.insertAdjacentHTML('beforeend', template);
}

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
        shortText : `Ethereum is a decentralized platform that uses Ether (ETH) to pay transaction fees known as “gas”. Developers can use Ethereum to run decentralized applications, called “dApps” and create new crypto assets known as Ethereum tokens. An upgrade will be released in 2022 called Ethereum 2.0. Ethereum 2.0 will bring updates in its consensus mechanism, scalability and security. This upgrade will use Proof-of-stake (PoS) consensus, as opposed to the traditional Proof-of-Work (PoW) consensus.`,
        link : 'https://ethereum.org/en/ ',
        whitePaper : 'ethereum.org/whitepaper/',
        image : 'ethereumLogo.png'
},
{
    name: 'Binance Coin',
    shortText : `Binance Coin is a cryptocurrency used to pay fees on the Binance Cryptocurrency Exchange. Fees paid in Binance Coin on the Binance Exchange receive a discount.`,
    link : 'https://www.binance.com/en',
    whitePaper : 'https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf',
    image : 'BinanceCoinLogo.png'
},
{
    name: 'Cardano',
    shortText : `Cardano is a blockchain platform built on a Proof-of-Stake (PoS) protocol called Ouroboros, which validates transactions without high energy costs (gas fees). Cardano uses the Haskell programming language, which enables Cardano to pursue evidence -bsed development for security and stability. Cardano’s token, ADA, is named after the 19th century mathematician, Ada Lovelace.`,
    link : 'https://cardano.org/',
    whitePaper : 'https://whitepaperdatabase.com/cardano-ada-whitepaper/',
    image : 'CardanoLogo.png'
},
{
    name: 'XRP',
    shortText : `XRP is the cryptocurrency used by the Ripple Payment Network. Built for enterprise, XRP aims to be a fast, cost-efficient cryptocurrency for cross-border payment`,
    link : 'https://ripple.com/xrp/',
    whitePaper : 'https://ripple.com/files/ripple_consensus_whitepaper.pdf',
    image : 'XRPLogo.png'
},
{
    name: 'Dogecoin',
    shortText : `Dogecoin is a lighthearted alternative to traditional cryptocurrencies. Unlike Bitcoin, which is designed to be scarce, Dogecoin is designed to be abundant. There is no maximum supply and 10,000 new coins are mined into circulation every minute.`,
    link : 'https://dogecoin.com/',
    whitePaper : 'N/A',
    image : 'DogecoinLogo.png'
},
{
    name: 'Polkadot',
    shortText : `Polkadot enables cross-blockchain transfers of any type of data or asset. Utilizing multiple blockchains, Polkadot aims to achieve high levels of security and scalability. DOT serves as the protocol’s governance token and can be used for staking to secure the network or connect to new chains.`,
    link : 'https://polkadot.network/',
    whitePaper : 'https://polkadot.network/PolkaDotPaper.pdf',
    image : 'PolkadotLogo.png'
},
{
    name: 'Uniswap',
    shortText : `Uniswap is an Ethereum token that powers Uniswap, an automated liquidity provider that’s designed to make it easy to exchange tokens created on the Ethereum blockchain (ERC-20). Tokens are exchanged through liquidity pools that are defined by smart contracts.`,
    link : 'https://uniswap.org/',
    whitePaper : 'https://uniswap.org/whitepaper.pdf',
    image : 'UniswapLogo.png'
},
{
    name: 'Bitcoin Cash',
    shortText : `Bitcoin Cash is a fork of the Bitcoin Blockchain that seeks to add more transaction capacity to the network in order to be useful for everyday transactions.`,
    link : 'https://bch.info/en/',
    whitePaper : 'https://bch.info/bitcoin.pdf',
    image : 'BitcoinCashLogo.png'
},
{
    name: 'Litecoin',
    shortText : `Litecoin uses a faster payment confirmation schedule and a different encoded algorithm than Bitcoin. Litecoin enables instant, near-zero cost payments to anyone in the world. Mathematics secures the network, helping to establish Litecoin as a proven medium of commerce.`,
    link : 'https://litecoin.org/',
    whitePaper : 'https://theliteschool.com/technology/',
    image : 'LitecoinLogo.png'
},
{
    name: 'Solana',
    shortText : `Solana is a decentralized computing platform that uses SOL to pay for transactions. Solana aims to improve blockchain scalability by using Proof-of-Stake (PoS) and Proof-of History (PoH). Solana claims to be able to support 50,000 transactions per second without sacrificing decentralization.`,
    link : 'https://solana.com/',
    whitePaper : 'https://solana.com/solana-whitepaper.pdf',
    image : 'SolanaLogo.png'
},
{
    name: 'Chainlink',
    shortText : `ChainLink is an Ethereum token that powers the Chainlink Oracle Network. This network allows smart contracts on Ethereum to securely connect external data sources, APIs, and payment systems.`,
    link : 'https://chain.link/',
    whitePaper : 'https://link.smartcontract.com/whitepaper',
    image : 'ChainlinkLogo.png'
},
{
    name: 'Wrapped Bitcoin',
    shortText : `Wrapped Bitcoin is an Ethereum token that intends to represent Bitcoin on the Ethereum blockchain. It is not Bitcoin, rather an Ethereum (ERC-20) token that tracks Bitcoin’s value. WBTC was created to allow Bitcoin holders to participate in decentralized finance (DeFi) apps on Ethereum. One WBTC can be exchanged for one Bitcoin.`,
    link : 'https://wbtc.network/',
    whitePaper : 'https://wbtc.network/assets/wrapped-tokens-whitepaper.pdf',
    image : 'WrappedBitcoin.png'
},
{
    name: 'Polygon',
    shortText : `Formerly Called Matic Network. MATIC, Polygon’s token, is an Ethereum token that powers the Polygon Network, a scaling solution for Ethereum. Polygon aims to provide faster and cheaper transactions using Layer 2 sidechains, which are blockchains that run alongside the Ethereum mainchain. The MATIC token is used to pay transactions fees and participate in Proof-of-Stake (PoS) consensus.`,
    link : 'https://polygon.technology/',
    whitePaper : 'https://polygon.technology/lightpaper-polygon.pdf',
    image : 'PolygonLogo.png'
},
{
    name: 'THETA',
    shortText : `THETA Network is the leading video delivery network powered by blockchain technology. THETA allows users to volunteer their spare bandwidth and computing resources to relay video to other users and earn token rewards for their contributions. Users can contribute to the THETA Network on any PC, mobile device, or smart TV.`,
    link : 'https://www.thetatoken.org/',
    whitePaper : 'https://s3.us-east-2.amazonaws.com/assets.thetatoken.org/Theta-white-paper-3-0-latest.pdf',
    image : 'THETALogo.png'
},
{
    name: 'Stellar Lumens',
    shortText : `The Stellar Lumen XLM powers the Stellar payment network. Stellar aims to connect banks, payment systems, and individuals reliably across the globe.`,
    link : 'https://www.stellar.org/',
    whitePaper : 'https://www.stellar.org/papers/stellar-consensus-protocol',
    image : 'StellarLumensLogo.png'
},
{
    name: 'Ethereum Classic',
    shortText : `Ethereum Classic allows applications to run exactly as programmed without the possibility of censorship, downtime, or third-party interference. Focusing on immutability popularly expressed as “code of law”.`,
    link : 'https://ethereumclassic.org/',
    whitePaper : 'https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence',
    image : 'EthereumClassicLogo.png'
},
{
    name: 'Internet Computer',
    shortText : `The Internet Computer network aims to help developers to create websites, enterprise IT systems, internet services, and DeFi apps by “installing their code directly on the public Internet”. ICP can be staked to power computation for dApps and traditional applications on the Internet Computer Blockchain.`,
    link : 'https://dfinity.org/',
    whitePaper : 'https://sdk.dfinity.org/docs/interface-spec/index.html',
    image : 'InternetComputerLogo.png'
},
{
    name: 'VeChain',
    shortText : `VeChain is a cryptocurrency and smart contracts platform focused on supply chain management. Allowing manufacturers to add sensors, such as RFID tags, to their products that can then record data onto the VeChain blockchain.`,
    link : 'https://www.vechain.org/',
    whitePaper : 'https://cdn.vechain.com/vechainthor_development_plan_and_whitepaper_en_v1.0.pdf',
    image : 'VeChainLogo.png'
},
{
    name: 'Filecoin',
    shortText : `Filecoin is a decentralized peer-to-peer file storage network that aims to let anyone store, retrieve, and host digital information. FIL tokens are used as payment for these services and as an economic incentive to ensure files are stored reliably.`,
    link : 'https://filecoin.io/',
    whitePaper : 'https://filecoin.io/filecoin.pdf',
    image : 'FilecoinLogo.png'
},
{
    name: 'TRON',
    shortText : `Tronix (TRX) is a cryptocurrency running on the TRON blockchain. TRON’s purpose is to create a decentralized Internet.`,
    link : 'https://tron.network/',
    whitePaper : 'https://tron.network/static/doc/white_paper_v_2_0.pdf',
    image : 'FilecoinLogo.png'
},
{
    name: 'EOS',
    shortText : `EOS is designed to support large-scale applications. There are no fees to send or receive EOS. The protocol rewards the entities that run the network periodically with new EOS, substituting inflation for transaction fees.`,
    link : 'https://eos.io/',
    whitePaper : 'https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md',
    image : 'EOSLogo.png'
},
{
    name: 'Monero',
    shortText : `Monero is focused on privacy. Transactions on the Monero blockchain can’t be tracked or traced. Monero uses Proof-of-Work (PoS) consensus to issue new coins and secure transactions.`,
    link : 'https://www.getmonero.org/',
    whitePaper : 'https://www.getmonero.org/resources/research-lab/',
    image : 'MoneroLogo.png'
},
{
    name: 'Aave',
    shortText : `Aave is a decentralized non-custodial money market protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow cryptocurrencies in exchange for paying an interest rate.`,
    link : 'https://aave.com/',
    whitePaper : 'https://github.com/aave/aave-protocol/blob/master/docs/Aave_Protocol_Whitepaper_v1_0.pdf',
    image : 'AaveLogo.png'
},
{
    name: 'Crypto.com',
    shortText : `Crypto.com is a service that aims to allow users to pay for goods and services with cryptocurrency while receiving cashback rewards.`,
    link : 'https://crypto.com/us/',
    whitePaper : 'N/A',
    image : 'Crypto(CRO)Logo.png'
}

]


document.querySelector('#refreshCrypto').addEventListener('click', ()=>{
    fetch('/products')
    .then(data => {
        return data.json();
    })
    .then(post => {
        console.log(post);
        cryptoData = post;
        clearText()
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

function clearText(){
    if(document.querySelector('.cryptoList')){
        document.querySelectorAll('.cryptoList').forEach((item)=>{item.remove()});
    }
}

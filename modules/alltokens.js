function load(network,chain){
    const blockchains = [
       {
         "name": "Aeternity",
         "img": "../../assets/images/tokens/aeternity.png",
         "website": "https://aeternity.com",
         "description": "Aeternity is a blockchain platform with turing complete smart contracts. The platform implemented decentralized oracles to make it possible for decentralized applications to use real world data.",
         "explorer": "https://www.aeknow.org/",
         "research": "https://research.binance.com/en/projects/aeternity",
         "symbol": "AE",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/aeternity"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/aeternity"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Aeternity"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/aeternity/white-paper/blob/master/paper.pdf"
           }
         ]
       },
       {
         "name": "Aion",
         "img": "../../assets/images/tokens/aion.png",
         "website": "https://theoan.com",
         "description": "The Aion blockchain addresses the scalabilty problem. It has a bridging mechanism that makes inter-blockchain communication with data and value possible. The Aion blockchain also addresses the scalability problem with its virtual machine and enabling of applications to establish a multiple chain connection.",
         "explorer": "https://mainnet.aion.network",
         "research": "https://research.binance.com/en/projects/aion",
         "symbol": "AION",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/aionnetwork"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Aion_OAN"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/AionNetwork"
           },
           {
             "name": "whitepaper",
             "url": "https://aion.network/developers/#whitepapers"
           }
         ]
       },
       {
         "name": "Algorand",
         "img": "../../assets/images/tokens/algorand.png",
         "website": "http://algorand.foundation",
         "description": "Algorand is the first blockchain to provide immediate transaction finality. No forking. No uncertainty. Algorand removes the technical barriers that for years undermined mainstream blockchain adoption: decentralization, scale, and security.",
         "explorer": "https://algoexplorer.io/",
         "research": "https://research.binance.com/en/projects/algorand",
         "symbol": "ALGO",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/algorand"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/AlgoFoundation"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/AlgorandOfficial"
           },
           {
             "name": "whitepaper",
             "url": "https://www.algorand.com/resources/white-papers/"
           }
         ]
       },
       {
         "name": "Arbitrum",
         "img": "../../assets/images/tokens/arbitrum.png",
         "website": "https://offchainlabs.com",
         "description": "Arbitrum is a Layer 2 cryptocurrency platform that makes smart contracts scalable, fast, and private",
         "explorer": "https://arbiscan.io",
         "research": "https://coinmarketcap.com/alexandria/article/what-is-arbitrum",
         "symbol": "ARETH",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "twitter",
             "url": "https://twitter.com/arbitrum"
           }
         ],
         "tokens": [
           {
             "asset": "c10042221_t0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
             "type": "ARBITRUM",
             "address": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
             "name": "Wrapped Ether",
             "symbol": "WETH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0x82af49447d8a07e3bd95bd0d56f35241523fbab1/logo.png"
           },
           {
             "asset": "c10042221_t0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
             "type": "ARBITRUM",
             "address": "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
             "name": "GMX",
             "symbol": "GMX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a/logo.png"
           },
           {
             "asset": "c10042221_t0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
             "type": "ARBITRUM",
             "address": "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
             "name": "USD Coin (Arb1)",
             "symbol": "USDC",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8/logo.png"
           },
           {
             "asset": "c10042221_t0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
             "type": "ARBITRUM",
             "address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
             "name": "Tether USD",
             "symbol": "USDT",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9/logo.png"
           },
           {
             "asset": "c10042221_t0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
             "type": "ARBITRUM",
             "address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
             "name": "Dai Stablecoin",
             "symbol": "DAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1/logo.png"
           }
         ]
       },
       {
         "name": "Ark",
         "img": "../../assets/images/tokens/ark.png",
         "website": "http://ark.io/",
         "description": "ARK provides users, developers, and startups with innovative blockchain technologies. Aim to create an entire ecosystem of linked chains and a virtual spiderweb of endless use-cases that make ARK highly flexible, adaptable, and scalable.",
         "explorer": "https://explorer.ark.io",
         "research": "https://research.binance.com/en/projects/ark",
         "symbol": "ARK",
         "type": "coin",
         "decimals": 8,
         "status": "abandoned",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/ArkEcosystem"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/ArkEcosystem"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/ArkEcosystem"
           },
           {
             "name": "whitepaper",
             "url": "https://ark.io/Whitepaper.pdf"
           }
         ]
       },
       {
         "name": "Aurora",
         "img": "../../assets/images/tokens/aurora.png",
         "website": "https://aurora.dev",
         "description": "Aurora provides Ethereum compatibility, NEAR Protocol scalability, and industry-first user experience through affordable transactions.",
         "explorer": "https://explorer.mainnet.aurora.dev/",
         "research": "",
         "symbol": "ETH",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "twitter",
             "url": "https://twitter.com/auroraisnear"
           }
         ]
       },
       {
         "name": "Avalanche C-Chain",
         "img": "../../assets/images/tokens/avalanche.png",
         "website": "http://avax.network",
         "description": "Avalanche is an open-source platform for launching highly decentralized applications, new financial primitives, and new interoperable blockchains. This is the C-Chain, the default smart contract blockchain on Avalanche that enables the creation of any Ethereum-compatible smart contracts.",
         "explorer": "https://explorer.avax.network",
         "research": "https://research.binance.com/en/projects/avalanche",
         "symbol": "AVAX",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "tags": [
           "defi"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/ava-labs"
           },
           {
             "name": "whitepaper",
             "url": "https://www.avalabs.org/whitepapers"
           }
         ]
       },
       {
         "name": "BandChain",
         "img": "../../assets/images/tokens/band.png",
         "website": "https://bandprotocol.com/",
         "description": "Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts.",
         "explorer": "https://cosmoscan.io/",
         "research": "https://research.binance.com/en/projects/band-protocol",
         "symbol": "BAND",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/bandprotocol/bandchain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/bandprotocol"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/bandprotocol/"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/bandprotocol/bandchain/wiki"
           }
         ]
       },
       {
         "name": "BNB",
         "img": "../../assets/images/tokens/bnb.png",
         "website": "https://binance.org/",
         "description": "Fast and secure decentralized digital asset exchange. The new crypto currency trading standard is here.",
         "explorer": "https://explorer.binance.org/",
         "research": "https://research.binance.com/en/projects/bnb",
         "symbol": "BNB",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "default",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/binance-chain/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/binance_dex"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/BinanceExchange"
           },
           {
             "name": "whitepaper",
             "url": "https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf"
           }
         ],
         "tokens": [
           {
             "asset": "c714_tBUSD-BD1",
             "type": "BEP2",
             "address": "BUSD-BD1",
             "name": "Binance USD",
             "symbol": "BUSD",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BUSD-BD1/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tADA-9F4",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tATOM-596",
                 "lotSize": "10000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tAVA-645",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tBAKE-5E0",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tBAND-34B",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tBCH-1FD",
                 "lotSize": "1000000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tBTCB-1DE",
                 "lotSize": "1000",
                 "tickSize": "10000000"
               },
               {
                 "base": "c714_tBURGER-33A",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tCAKE-435",
                 "lotSize": "10000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tDOGE-B67",
                 "lotSize": "1000000000",
                 "tickSize": "10"
               },
               {
                 "base": "c714_tDOT-64C",
                 "lotSize": "10000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tEOS-CDD",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tETH-1C9",
                 "lotSize": "100000",
                 "tickSize": "1000000"
               },
               {
                 "base": "c714_tFRM-DE7",
                 "lotSize": "10000000000",
                 "tickSize": "10"
               },
               {
                 "base": "c714_tINJ-FAE",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tLTC-F07",
                 "lotSize": "1000000",
                 "tickSize": "10000"
               },
               {
                 "base": "c714_tONT-33D",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tRUNE-B1A",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tSHR-DB6",
                 "lotSize": "100000000000",
                 "tickSize": "1"
               },
               {
                 "base": "c714_tSWINGBY-888",
                 "lotSize": "10000000000",
                 "tickSize": "1"
               },
               {
                 "base": "c714_tSXP-CCC",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tXRP-BF2",
                 "lotSize": "100000000",
                 "tickSize": "100"
               },
               {
                 "base": "c714_tXTZ-F7A",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tXVS-795",
                 "lotSize": "10000000",
                 "tickSize": "1000"
               },
               {
                 "base": "c714_tYFII-061",
                 "lotSize": "100000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tZEC-93E",
                 "lotSize": "1000000",
                 "tickSize": "10000"
               }
             ]
           },
           {
             "asset": "c714_tUSDSB-1AC",
             "type": "BEP2",
             "address": "USDSB-1AC",
             "name": "USDS",
             "symbol": "USDSB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/USDSB-1AC/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tBTCB-1DE",
                 "lotSize": "1000",
                 "tickSize": "10000000"
               },
               {
                 "base": "c714_tCOS-2E4",
                 "lotSize": "10000000000",
                 "tickSize": "10"
               },
               {
                 "base": "c714_tONE-5F9",
                 "lotSize": "1000000000",
                 "tickSize": "10"
               },
               {
                 "base": "c714_tUND-EBC",
                 "lotSize": "10000000000",
                 "tickSize": "10"
               }
             ]
           },
           {
             "asset": "c714_tBTCB-1DE",
             "type": "BEP2",
             "address": "BTCB-1DE",
             "name": "Bitcoin BEP2",
             "symbol": "BTCB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BTCB-1DE/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "1"
               },
               {
                 "base": "c714_tANKR-E97",
                 "lotSize": "1000000000",
                 "tickSize": "1"
               },
               {
                 "base": "c714_tBOLT-4C6",
                 "lotSize": "100000000000",
                 "tickSize": "1"
               },
               {
                 "base": "c714_tCOS-2E4",
                 "lotSize": "10000000000",
                 "tickSize": "1"
               }
             ]
           },
           {
             "asset": "c714_tTUSDB-888",
             "type": "BEP2",
             "address": "TUSDB-888",
             "name": "TrueUSD",
             "symbol": "TUSDB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TUSDB-888/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tBTCB-1DE",
                 "lotSize": "1000",
                 "tickSize": "10000000"
               },
               {
                 "base": "c714_tLTC-F07",
                 "lotSize": "1000000",
                 "tickSize": "10000"
               }
             ]
           },
           {
             "asset": "c714_tIDRTB-178",
             "type": "BEP2",
             "address": "IDRTB-178",
             "name": "Rupiah Token",
             "symbol": "IDRTB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/IDRTB-178/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "1000000000"
               },
               {
                 "base": "c714_tBUSD-BD1",
                 "lotSize": "100000000",
                 "tickSize": "10000000"
               }
             ]
           },
           {
             "asset": "c714_tUSDT-6D8",
             "type": "BEP2",
             "address": "USDT-6D8",
             "name": "USDTBEP2",
             "symbol": "USDT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/USDT-6D8/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100000"
               },
               {
                 "base": "c714_tBUSD-BD1",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               }
             ]
           },
           {
             "asset": "c714_tDAI-D75",
             "type": "BEP2",
             "address": "DAI-D75",
             "name": "DaiBEP2",
             "symbol": "DAI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DAI-D75/logo.png",
             "pairs": [
               {
                 "base": "c714_tBUSD-BD1",
                 "lotSize": "100000000",
                 "tickSize": "1000"
               }
             ]
           },
           {
             "asset": "c714_tETH-1C9",
             "type": "BEP2",
             "address": "ETH-1C9",
             "name": "ETH BEP2",
             "symbol": "ETH",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ETH-1C9/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100"
               }
             ]
           },
           {
             "asset": "c714_tTAUDB-888",
             "type": "BEP2",
             "address": "TAUDB-888",
             "name": "TrueAUD",
             "symbol": "TAUDB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TAUDB-888/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "100000"
               }
             ]
           },
           {
             "asset": "c714_tTHKDB-888",
             "type": "BEP2",
             "address": "THKDB-888",
             "name": "TrueHKD",
             "symbol": "THKDB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/THKDB-888/logo.png",
             "pairs": [
               {
                 "base": "c714",
                 "lotSize": "100000",
                 "tickSize": "1000000"
               }
             ]
           },
           {
             "asset": "c714_tADA-9F4",
             "type": "BEP2",
             "address": "ADA-9F4",
             "name": "CardanoBEP2",
             "symbol": "ADA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ADA-9F4/logo.png"
           },
           {
             "asset": "c714_tAERGO-46B",
             "type": "BEP2",
             "address": "AERGO-46B",
             "name": "Aergo",
             "symbol": "AERGO",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/AERGO-46B/logo.png"
           },
           {
             "asset": "c714_tANKR-E97",
             "type": "BEP2",
             "address": "ANKR-E97",
             "name": "ANKR",
             "symbol": "ANKR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ANKR-E97/logo.png"
           },
           {
             "asset": "c714_tARPA-575",
             "type": "BEP2",
             "address": "ARPA-575",
             "name": "ARPA",
             "symbol": "ARPA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ARPA-575/logo.png"
           },
           {
             "asset": "c714_tART-3C9",
             "type": "BEP2",
             "address": "ART-3C9",
             "name": "Maecenas ART Token",
             "symbol": "ART",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ART-3C9/logo.png"
           },
           {
             "asset": "c714_tATOM-596",
             "type": "BEP2",
             "address": "ATOM-596",
             "name": "ATOMBEP2",
             "symbol": "ATOM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ATOM-596/logo.png"
           },
           {
             "asset": "c714_tATP-38C",
             "type": "BEP2",
             "address": "ATP-38C",
             "name": "Atlas Protocol",
             "symbol": "ATP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ATP-38C/logo.png"
           },
           {
             "asset": "c714_tAVA-645",
             "type": "BEP2",
             "address": "AVA-645",
             "name": "Travala.com Token",
             "symbol": "AVA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/AVA-645/logo.png"
           },
           {
             "asset": "c714_tAWC-986",
             "type": "BEP2",
             "address": "AWC-986",
             "name": "Atomic Wallet Token",
             "symbol": "AWC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/AWC-986/logo.png"
           },
           {
             "asset": "c714_tAXPR-777",
             "type": "BEP2",
             "address": "AXPR-777",
             "name": "AXPR.B",
             "symbol": "AXPR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/AXPR-777/logo.png"
           },
           {
             "asset": "c714_tBAKE-5E0",
             "type": "BEP2",
             "address": "BAKE-5E0",
             "name": "BakeryToken",
             "symbol": "BAKE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BAKE-5E0/logo.png"
           },
           {
             "asset": "c714_tBAND-34B",
             "type": "BEP2",
             "address": "BAND-34B",
             "name": "BandProtocolBEP2",
             "symbol": "BAND",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BAND-34B/logo.png"
           },
           {
             "asset": "c714_tBCH-1FD",
             "type": "BEP2",
             "address": "BCH-1FD",
             "name": "BCH BEP2",
             "symbol": "BCH",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BCH-1FD/logo.png"
           },
           {
             "asset": "c714_tBCPT-95A",
             "type": "BEP2",
             "address": "BCPT-95A",
             "name": "Blockmason Credit Protocol",
             "symbol": "BCPT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BCPT-95A/logo.png"
           },
           {
             "asset": "c714_tBEAR-14C",
             "type": "BEP2",
             "address": "BEAR-14C",
             "name": "3X Short Bitcoin Token",
             "symbol": "BEAR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BEAR-14C/logo.png"
           },
           {
             "asset": "c714_tBET-844",
             "type": "BEP2",
             "address": "BET-844",
             "name": "EOSBet Token",
             "symbol": "BET",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BET-844/logo.png"
           },
           {
             "asset": "c714_tBKBT-3A6",
             "type": "BEP2",
             "address": "BKBT-3A6",
             "name": "Bitwires Token",
             "symbol": "BKBT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BKBT-3A6/logo.png"
           },
           {
             "asset": "c714_tBLINK-9C6",
             "type": "BEP2",
             "address": "BLINK-9C6",
             "name": "Blockmason Link",
             "symbol": "BLINK",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BLINK-9C6/logo.png"
           },
           {
             "asset": "c714_tBOLT-4C6",
             "type": "BEP2",
             "address": "BOLT-4C6",
             "name": "BOLT Token",
             "symbol": "BOLT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BOLT-4C6/logo.png"
           },
           {
             "asset": "c714_tBST2-2F2",
             "type": "BEP2",
             "address": "BST2-2F2",
             "name": "BOOSTO",
             "symbol": "BST2",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BST2-2F2/logo.png"
           },
           {
             "asset": "c714_tBTTB-D31",
             "type": "BEP2",
             "address": "BTTB-D31",
             "name": "BTTB",
             "symbol": "BTTB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BTTB-D31/logo.png"
           },
           {
             "asset": "c714_tBULL-BE4",
             "type": "BEP2",
             "address": "BULL-BE4",
             "name": "3x Long Bitcoin Token",
             "symbol": "BULL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BULL-BE4/logo.png"
           },
           {
             "asset": "c714_tBURGER-33A",
             "type": "BEP2",
             "address": "BURGER-33A",
             "name": "Burger Swap",
             "symbol": "BURGER",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BURGER-33A/logo.png"
           },
           {
             "asset": "c714_tBZNT-464",
             "type": "BEP2",
             "address": "BZNT-464",
             "name": "Bezant Token",
             "symbol": "BZNT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/BZNT-464/logo.png"
           },
           {
             "asset": "c714_tCAKE-435",
             "type": "BEP2",
             "address": "CAKE-435",
             "name": "PancakeSwap Token",
             "symbol": "CAKE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CAKE-435/logo.png"
           },
           {
             "asset": "c714_tCAN-677",
             "type": "BEP2",
             "address": "CAN-677",
             "name": "CanYaCoin",
             "symbol": "CAN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CAN-677/logo.png"
           },
           {
             "asset": "c714_tCAS-167",
             "type": "BEP2",
             "address": "CAS-167",
             "name": "CASHAA",
             "symbol": "CAS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CAS-167/logo.png"
           },
           {
             "asset": "c714_tCBIX-3C9",
             "type": "BEP2",
             "address": "CBIX-3C9",
             "name": "Cubiex",
             "symbol": "CBIX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CBIX-3C9/logo.png"
           },
           {
             "asset": "c714_tCBM-4B2",
             "type": "BEP2",
             "address": "CBM-4B2",
             "name": "CryptoBonusMiles",
             "symbol": "CBM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CBM-4B2/logo.png"
           },
           {
             "asset": "c714_tCHZ-ECD",
             "type": "BEP2",
             "address": "CHZ-ECD",
             "name": "Chiliz",
             "symbol": "CHZ",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CHZ-ECD/logo.png"
           },
           {
             "asset": "c714_tCNNS-E16",
             "type": "BEP2",
             "address": "CNNS-E16",
             "name": "Crypto Neo-value Neural System",
             "symbol": "CNNS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CNNS-E16/logo.png"
           },
           {
             "asset": "c714_tCOS-2E4",
             "type": "BEP2",
             "address": "COS-2E4",
             "name": "Contentos",
             "symbol": "COS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/COS-2E4/logo.png"
           },
           {
             "asset": "c714_tCOTI-CBB",
             "type": "BEP2",
             "address": "COTI-CBB",
             "name": "COTI",
             "symbol": "COTI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/COTI-CBB/logo.png"
           },
           {
             "asset": "c714_tCOVA-218",
             "type": "BEP2",
             "address": "COVA-218",
             "name": "Covalent Token",
             "symbol": "COVA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/COVA-218/logo.png"
           },
           {
             "asset": "c714_tCRPT-8C9",
             "type": "BEP2",
             "address": "CRPT-8C9",
             "name": "Crypterium Token",
             "symbol": "CRPT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CRPT-8C9/logo.png"
           },
           {
             "asset": "c714_tCSM-734",
             "type": "BEP2",
             "address": "CSM-734",
             "name": "“Consentium”",
             "symbol": "CSM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/CSM-734/logo.png"
           },
           {
             "asset": "c714_tDEFI-FA5",
             "type": "BEP2",
             "address": "DEFI-FA5",
             "name": "DeFi Token",
             "symbol": "DEFI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DEFI-FA5/logo.png"
           },
           {
             "asset": "c714_tDOGE-B67",
             "type": "BEP2",
             "address": "DOGE-B67",
             "name": "Dogecoin",
             "symbol": "DOGE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DOGE-B67/logo.png"
           },
           {
             "asset": "c714_tDOS-120",
             "type": "BEP2",
             "address": "DOS-120",
             "name": "DOS Network Token",
             "symbol": "DOS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DOS-120/logo.png"
           },
           {
             "asset": "c714_tDOT-64C",
             "type": "BEP2",
             "address": "DOT-64C",
             "name": "PolkadotBEP2",
             "symbol": "DOT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DOT-64C/logo.png"
           },
           {
             "asset": "c714_tDREP-7D2",
             "type": "BEP2",
             "address": "DREP-7D2",
             "name": "DREP",
             "symbol": "DREP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DREP-7D2/logo.png"
           },
           {
             "asset": "c714_tDUSK-45E",
             "type": "BEP2",
             "address": "DUSK-45E",
             "name": "Dusk Network",
             "symbol": "DUSK",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/DUSK-45E/logo.png"
           },
           {
             "asset": "c714_tEBST-783",
             "type": "BEP2",
             "address": "EBST-783",
             "name": "eBoost",
             "symbol": "EBST",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EBST-783/logo.png"
           },
           {
             "asset": "c714_tENTRP-C8D",
             "type": "BEP2",
             "address": "ENTRP-C8D",
             "name": "Hut34 Entropy",
             "symbol": "ENTRP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ENTRP-C8D/logo.png"
           },
           {
             "asset": "c714_tEOS-CDD",
             "type": "BEP2",
             "address": "EOS-CDD",
             "name": "EOS BEP2",
             "symbol": "EOS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EOS-CDD/logo.png"
           },
           {
             "asset": "c714_tEOSBEAR-721",
             "type": "BEP2",
             "address": "EOSBEAR-721",
             "name": "3X Short EOS Token",
             "symbol": "EOSBEAR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EOSBEAR-721/logo.png"
           },
           {
             "asset": "c714_tEOSBULL-F0D",
             "type": "BEP2",
             "address": "EOSBULL-F0D",
             "name": "3X Long EOS Token",
             "symbol": "EOSBULL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EOSBULL-F0D/logo.png"
           },
           {
             "asset": "c714_tEQL-586",
             "type": "BEP2",
             "address": "EQL-586",
             "name": "EQUAL",
             "symbol": "EQL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EQL-586/logo.png"
           },
           {
             "asset": "c714_tERD-D06",
             "type": "BEP2",
             "address": "ERD-D06",
             "name": "Elrond",
             "symbol": "ERD",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ERD-D06/logo.png"
           },
           {
             "asset": "c714_tETHBEAR-B2B",
             "type": "BEP2",
             "address": "ETHBEAR-B2B",
             "name": "3X Short Ethereum Token",
             "symbol": "ETHBEAR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ETHBEAR-B2B/logo.png"
           },
           {
             "asset": "c714_tETHBULL-D33",
             "type": "BEP2",
             "address": "ETHBULL-D33",
             "name": "3X Long Ethereum Token",
             "symbol": "ETHBULL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ETHBULL-D33/logo.png"
           },
           {
             "asset": "c714_tEVT-49B",
             "type": "BEP2",
             "address": "EVT-49B",
             "name": "everiToken",
             "symbol": "EVT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/EVT-49B/logo.png"
           },
           {
             "asset": "c714_tFRM-DE7",
             "type": "BEP2",
             "address": "FRM-DE7",
             "name": "Ferrum Network Token",
             "symbol": "FRM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/FRM-DE7/logo.png"
           },
           {
             "asset": "c714_tFSN-E14",
             "type": "BEP2",
             "address": "FSN-E14",
             "name": "Fusion",
             "symbol": "FSN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/FSN-E14/logo.png"
           },
           {
             "asset": "c714_tFTM-A64",
             "type": "BEP2",
             "address": "FTM-A64",
             "name": "Fantom",
             "symbol": "FTM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/FTM-A64/logo.png"
           },
           {
             "asset": "c714_tGIV-94E",
             "type": "BEP2",
             "address": "GIV-94E",
             "name": "Givly Coin",
             "symbol": "GIV",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/GIV-94E/logo.png"
           },
           {
             "asset": "c714_tGMAT-FC8",
             "type": "BEP2",
             "address": "GMAT-FC8",
             "name": "GoWithMi",
             "symbol": "GMAT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/GMAT-FC8/logo.png"
           },
           {
             "asset": "c714_tGTO-908",
             "type": "BEP2",
             "address": "GTO-908",
             "name": "Gifto",
             "symbol": "GTO",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/GTO-908/logo.png"
           },
           {
             "asset": "c714_tHNST-3C9",
             "type": "BEP2",
             "address": "HNST-3C9",
             "name": "Honest",
             "symbol": "HNST",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/HNST-3C9/logo.png"
           },
           {
             "asset": "c714_tHYN-F21",
             "type": "BEP2",
             "address": "HYN-F21",
             "name": "Hyperion Token",
             "symbol": "HYN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/HYN-F21/logo.png"
           },
           {
             "asset": "c714_tINJ-FAE",
             "type": "BEP2",
             "address": "INJ-FAE",
             "name": "Injective Protocol",
             "symbol": "INJ",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/INJ-FAE/logo.png"
           },
           {
             "asset": "c714_tIRIS-D88",
             "type": "BEP2",
             "address": "IRIS-D88",
             "name": "IRIS Network",
             "symbol": "IRIS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/IRIS-D88/logo.png"
           },
           {
             "asset": "c714_tKAT-7BB",
             "type": "BEP2",
             "address": "KAT-7BB",
             "name": "Kambria Token",
             "symbol": "KAT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/KAT-7BB/logo.png"
           },
           {
             "asset": "c714_tLBA-340",
             "type": "BEP2",
             "address": "LBA-340",
             "name": "Lend-Borrow-Asset",
             "symbol": "LBA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/LBA-340/logo.png"
           },
           {
             "asset": "c714_tLIT-099",
             "type": "BEP2",
             "address": "LIT-099",
             "name": "LITION",
             "symbol": "LIT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/LIT-099/logo.png"
           },
           {
             "asset": "c714_tLOKI-6A9",
             "type": "BEP2",
             "address": "LOKI-6A9",
             "name": "Loki",
             "symbol": "LOKI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/LOKI-6A9/logo.png"
           },
           {
             "asset": "c714_tLTC-F07",
             "type": "BEP2",
             "address": "LTC-F07",
             "name": "LTC BEP2",
             "symbol": "LTC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/LTC-F07/logo.png"
           },
           {
             "asset": "c714_tLTO-BDF",
             "type": "BEP2",
             "address": "LTO-BDF",
             "name": "LTO Network",
             "symbol": "LTO",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/LTO-BDF/logo.png"
           },
           {
             "asset": "c714_tMATIC-84A",
             "type": "BEP2",
             "address": "MATIC-84A",
             "name": "Matic Token",
             "symbol": "MATIC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MATIC-84A/logo.png"
           },
           {
             "asset": "c714_tMDAB-D42",
             "type": "BEP2",
             "address": "MDAB-D42",
             "name": "MDAB",
             "symbol": "MDAB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MDAB-D42/logo.png"
           },
           {
             "asset": "c714_tMEETONE-031",
             "type": "BEP2",
             "address": "MEETONE-031",
             "name": "MEET.ONE",
             "symbol": "MEETONE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MEETONE-031/logo.png"
           },
           {
             "asset": "c714_tMITH-C76",
             "type": "BEP2",
             "address": "MITH-C76",
             "name": "Mithril",
             "symbol": "MITH",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MITH-C76/logo.png"
           },
           {
             "asset": "c714_tMITX-CAA",
             "type": "BEP2",
             "address": "MITX-CAA",
             "name": "Morpheus Infrastructure Token",
             "symbol": "MITX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MITX-CAA/logo.png"
           },
           {
             "asset": "c714_tMTV-4C6",
             "type": "BEP2",
             "address": "MTV-4C6",
             "name": "MultiVAC",
             "symbol": "MTV",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MTV-4C6/logo.png"
           },
           {
             "asset": "c714_tMVL-7B0",
             "type": "BEP2",
             "address": "MVL-7B0",
             "name": "Mass Vehicle Ledger",
             "symbol": "MVL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MVL-7B0/logo.png"
           },
           {
             "asset": "c714_tMZK-2C7",
             "type": "BEP2",
             "address": "MZK-2C7",
             "name": "Muzika",
             "symbol": "MZK",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/MZK-2C7/logo.png"
           },
           {
             "asset": "c714_tNEW-09E",
             "type": "BEP2",
             "address": "NEW-09E",
             "name": "NEWTON",
             "symbol": "NEW",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NEW-09E/logo.png"
           },
           {
             "asset": "c714_tNEXO-A84",
             "type": "BEP2",
             "address": "NEXO-A84",
             "name": "Nexo",
             "symbol": "NEXO",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NEXO-A84/logo.png"
           },
           {
             "asset": "c714_tNOIZB-878",
             "type": "BEP2",
             "address": "NOIZB-878",
             "name": "NOIZ Token",
             "symbol": "NOIZB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NOIZB-878/logo.png"
           },
           {
             "asset": "c714_tNOW-E68",
             "type": "BEP2",
             "address": "NOW-E68",
             "name": "NOW Token",
             "symbol": "NOW",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NOW-E68/logo.png"
           },
           {
             "asset": "c714_tNPXB-1E8",
             "type": "BEP2",
             "address": "NPXB-1E8",
             "name": "NPX Binance token",
             "symbol": "NPXB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NPXB-1E8/logo.png"
           },
           {
             "asset": "c714_tNPXSXEM-89C",
             "type": "BEP2",
             "address": "NPXSXEM-89C",
             "name": "Pundi X NEM",
             "symbol": "NPXSXEM",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/NPXSXEM-89C/logo.png"
           },
           {
             "asset": "c714_tONE-5F9",
             "type": "BEP2",
             "address": "ONE-5F9",
             "name": "Harmony.One",
             "symbol": "ONE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ONE-5F9/logo.png"
           },
           {
             "asset": "c714_tONT-33D",
             "type": "BEP2",
             "address": "ONT-33D",
             "name": "ONTBEP2",
             "symbol": "ONT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ONT-33D/logo.png"
           },
           {
             "asset": "c714_tPHB-2DF",
             "type": "BEP2",
             "address": "PHB-2DF",
             "name": "Red Pulse Phoenix Binance",
             "symbol": "PHB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PHB-2DF/logo.png"
           },
           {
             "asset": "c714_tPHV-4A1",
             "type": "BEP2",
             "address": "PHV-4A1",
             "name": "PathHive Network",
             "symbol": "PHV",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PHV-4A1/logo.png"
           },
           {
             "asset": "c714_tPIBNB-43C",
             "type": "BEP2",
             "address": "PIBNB-43C",
             "name": "PCHAIN Token",
             "symbol": "PIBNB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PIBNB-43C/logo.png"
           },
           {
             "asset": "c714_tPLG-D8D",
             "type": "BEP2",
             "address": "PLG-D8D",
             "name": "Pledge Coin",
             "symbol": "PLG",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PLG-D8D/logo.png"
           },
           {
             "asset": "c714_tPVT-554",
             "type": "BEP2",
             "address": "PVT-554",
             "name": "Pivot Token",
             "symbol": "PVT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PVT-554/logo.png"
           },
           {
             "asset": "c714_tPYN-C37",
             "type": "BEP2",
             "address": "PYN-C37",
             "name": "paycentos",
             "symbol": "PYN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/PYN-C37/logo.png"
           },
           {
             "asset": "c714_tQBX-38C",
             "type": "BEP2",
             "address": "QBX-38C",
             "name": "qiibeeToken",
             "symbol": "QBX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/QBX-38C/logo.png"
           },
           {
             "asset": "c714_tRAVEN-F66",
             "type": "BEP2",
             "address": "RAVEN-F66",
             "name": "Raven Protocol",
             "symbol": "RAVEN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/RAVEN-F66/logo.png"
           },
           {
             "asset": "c714_tRUNE-B1A",
             "type": "BEP2",
             "address": "RUNE-B1A",
             "name": "Rune",
             "symbol": "RUNE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/RUNE-B1A/logo.png"
           },
           {
             "asset": "c714_tSHR-DB6",
             "type": "BEP2",
             "address": "SHR-DB6",
             "name": "ShareToken",
             "symbol": "SHR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SHR-DB6/logo.png"
           },
           {
             "asset": "c714_tSLV-986",
             "type": "BEP2",
             "address": "SLV-986",
             "name": "Silverway",
             "symbol": "SLV",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SLV-986/logo.png"
           },
           {
             "asset": "c714_tSPNDB-916",
             "type": "BEP2",
             "address": "SPNDB-916",
             "name": "Spendcoin",
             "symbol": "SPNDB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SPNDB-916/logo.png"
           },
           {
             "asset": "c714_tSTYL-65B",
             "type": "BEP2",
             "address": "STYL-65B",
             "name": "Yin Lang Music IP Token",
             "symbol": "STYL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/STYL-65B/logo.png"
           },
           {
             "asset": "c714_tSWINGBY-888",
             "type": "BEP2",
             "address": "SWINGBY-888",
             "name": "Swingby Token",
             "symbol": "SWINGBY",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SWINGBY-888/logo.png"
           },
           {
             "asset": "c714_tSWIPE.B-DC0",
             "type": "BEP2",
             "address": "SWIPE.B-DC0",
             "name": "SWIPE Token",
             "symbol": "SWIPE.B",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SWIPE.B-DC0/logo.png"
           },
           {
             "asset": "c714_tSXP-CCC",
             "type": "BEP2",
             "address": "SXP-CCC",
             "name": "Swipe",
             "symbol": "SXP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/SXP-CCC/logo.png"
           },
           {
             "asset": "c714_tTM2-0C4",
             "type": "BEP2",
             "address": "TM2-0C4",
             "name": "Traxia 2",
             "symbol": "TM2",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TM2-0C4/logo.png"
           },
           {
             "asset": "c714_tTOMOB-4BC",
             "type": "BEP2",
             "address": "TOMOB-4BC",
             "name": "TomoChain",
             "symbol": "TOMOB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TOMOB-4BC/logo.png"
           },
           {
             "asset": "c714_tTOP-491",
             "type": "BEP2",
             "address": "TOP-491",
             "name": "TOP Network",
             "symbol": "TOP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TOP-491/logo.png"
           },
           {
             "asset": "c714_tTROY-9B8",
             "type": "BEP2",
             "address": "TROY-9B8",
             "name": "TROY",
             "symbol": "TROY",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TROY-9B8/logo.png"
           },
           {
             "asset": "c714_tTRUE-D84",
             "type": "BEP2",
             "address": "TRUE-D84",
             "name": "TrueChain",
             "symbol": "TRUE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TRUE-D84/logo.png"
           },
           {
             "asset": "c714_tTRXB-2E6",
             "type": "BEP2",
             "address": "TRXB-2E6",
             "name": "TRXB",
             "symbol": "TRXB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TRXB-2E6/logo.png"
           },
           {
             "asset": "c714_tTWT-8C2",
             "type": "BEP2",
             "address": "TWT-8C2",
             "name": "Trust Wallet",
             "symbol": "TWT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/TWT-8C2/logo.png"
           },
           {
             "asset": "c714_tUGAS-B0C",
             "type": "BEP2",
             "address": "UGAS-B0C",
             "name": "Ultrain Coin",
             "symbol": "UGAS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/UGAS-B0C/logo.png"
           },
           {
             "asset": "c714_tUND-EBC",
             "type": "BEP2",
             "address": "UND-EBC",
             "name": "United Network Distribution",
             "symbol": "UND",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/UND-EBC/logo.png"
           },
           {
             "asset": "c714_tUPX-F3E",
             "type": "BEP2",
             "address": "UPX-F3E",
             "name": "UPX",
             "symbol": "UPX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/UPX-F3E/logo.png"
           },
           {
             "asset": "c714_tVDX-A17",
             "type": "BEP2",
             "address": "VDX-A17",
             "name": "Vodi X",
             "symbol": "VDX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/VDX-A17/logo.png"
           },
           {
             "asset": "c714_tVIDT-F53",
             "type": "BEP2",
             "address": "VIDT-F53",
             "name": "V-ID Token",
             "symbol": "VIDT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/VIDT-F53/logo.png"
           },
           {
             "asset": "c714_tVOTE-FD4",
             "type": "BEP2",
             "address": "VOTE-FD4",
             "name": "Vote",
             "symbol": "VOTE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/VOTE-FD4/logo.png"
           },
           {
             "asset": "c714_tWICC-01D",
             "type": "BEP2",
             "address": "WICC-01D",
             "name": "WaykiChain Coin",
             "symbol": "WICC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/WICC-01D/logo.png"
           },
           {
             "asset": "c714_tWINB-41F",
             "type": "BEP2",
             "address": "WINB-41F",
             "name": "WINB",
             "symbol": "WINB",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/WINB-41F/logo.png"
           },
           {
             "asset": "c714_tWISH-2D5",
             "type": "BEP2",
             "address": "WISH-2D5",
             "name": "MyWish",
             "symbol": "WISH",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/WISH-2D5/logo.png"
           },
           {
             "asset": "c714_tWRX-ED1",
             "type": "BEP2",
             "address": "WRX-ED1",
             "name": "WazirX Token",
             "symbol": "WRX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/WRX-ED1/logo.png"
           },
           {
             "asset": "c714_tXBASE-CD2",
             "type": "BEP2",
             "address": "XBASE-CD2",
             "name": "Eterbase Coin",
             "symbol": "XBASE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XBASE-CD2/logo.png"
           },
           {
             "asset": "c714_tXRP-BF2",
             "type": "BEP2",
             "address": "XRP-BF2",
             "name": "XRP BEP2",
             "symbol": "XRP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XRP-BF2/logo.png"
           },
           {
             "asset": "c714_tXRPBEAR-00B",
             "type": "BEP2",
             "address": "XRPBEAR-00B",
             "name": "3X Short XRP Token",
             "symbol": "XRPBEAR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XRPBEAR-00B/logo.png"
           },
           {
             "asset": "c714_tXRPBULL-E7C",
             "type": "BEP2",
             "address": "XRPBULL-E7C",
             "name": "3X Long XRP Token",
             "symbol": "XRPBULL",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XRPBULL-E7C/logo.png"
           },
           {
             "asset": "c714_tXTZ-F7A",
             "type": "BEP2",
             "address": "XTZ-F7A",
             "name": "XTZ BEP2",
             "symbol": "XTZ",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XTZ-F7A/logo.png"
           },
           {
             "asset": "c714_tXVS-795",
             "type": "BEP2",
             "address": "XVS-795",
             "name": "Venus",
             "symbol": "XVS",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/XVS-795/logo.png"
           },
           {
             "asset": "c714_tYFII-061",
             "type": "BEP2",
             "address": "YFII-061",
             "name": "YFIIBEP2",
             "symbol": "YFII",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/YFII-061/logo.png"
           },
           {
             "asset": "c714_tZEBI-84F",
             "type": "BEP2",
             "address": "ZEBI-84F",
             "name": "ZEBI",
             "symbol": "ZEBI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ZEBI-84F/logo.png"
           },
           {
             "asset": "c714_tZEC-93E",
             "type": "BEP2",
             "address": "ZEC-93E",
             "name": "ZECBEP2",
             "symbol": "ZEC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/binance/assets/ZEC-93E/logo.png"
           }
         ]
       },
       {
         "name": "Bitcoin",
         "img": "../../assets/images/tokens/bitcoin.png",
         "website": "https://bitcoin.org",
         "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
         "explorer": "https://blockchain.info",
         "research": "https://research.binance.com/en/projects/bitcoin",
         "symbol": "BTC",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "default",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/bitcoin"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Bitcoin"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Bitcoin"
           },
           {
             "name": "whitepaper",
             "url": "https://bitcoin.org/bitcoin.pdf"
           }
         ]
       },
       {
         "name": "Bitcoin Cash",
         "img": "../../assets/images/tokens/bitcoincash.png",
         "website": "https://bitcoincash.org/",
         "description": "Bitcoin ABC is an electronic cash platform that allows peer-to-peer online cash payments. It is a fork (a copy in a way) of Bitcoin (BTC).",
         "explorer": "https://blockchair.com/bitcoin-cash",
         "research": "https://research.binance.com/en/projects/bitcoin-cash",
         "symbol": "BCH",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/bitcoincashorg/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/BITCOlNCASH"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Bitcoincash"
           },
           {
             "name": "whitepaper",
             "url": "https://www.bitcoincash.org/bitcoin.pdf"
           }
         ]
       },
       {
         "name": "Cardano",
         "img": "../../assets/images/tokens/cardano.png",
         "website": "https://cardano.org",
         "description": "Cardano (ADA) is a decentralized platform that will allow complex programmable transfers of value in a secure and scalable fashion. Cardano is built in the secure Haskell programming language.",
         "explorer": "https://cardanoexplorer.com/",
         "research": "https://research.binance.com/en/projects/cardano",
         "symbol": "ADA",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/input-output-hk/cardano-sl/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/cardano"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/cardano"
           },
           {
             "name": "whitepaper",
             "url": "https://www.cardano.org/en/academic-papers/"
           }
         ]
       },
       {
         "name": "Callisto Network",
         "img": "../../assets/images/tokens/callisto.png",
         "website": "https://callisto.network",
         "description": "Callisto Network is a blockchain platform with its own cryptocurrency (CLO) that is based on Ethereum protocol. Callisto Network is developed by Ethereum Commonwealth.",
         "explorer": "https://explorer2.callisto.network",
         "symbol": "CLO",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/EthereumCommonwealth"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/CallistoSupport"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/CallistoCrypto"
           },
           {
             "name": "whitepaper",
             "url": "https://whitepaper.callisto.network/"
           }
         ]
       },
       {
         "name": "Cosmos",
         "img": "../../assets/images/tokens/cosmos.png",
         "website": "https://cosmos.network/",
         "description": "Cosmos is a secure & scalable blockchain ecosystem where thousands of dApps interoperate to create the foundation for a new token economy.",
         "explorer": "https://www.mintscan.io/",
         "research": "https://research.binance.com/en/projects/cosmos-network",
         "symbol": "ATOM",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/cosmos"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/cosmos"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/cosmosnetwork"
           },
           {
             "name": "whitepaper",
             "url": "https://cosmos.network/resources/whitepaper"
           }
         ]
       },
       {
         "name": "Dash",
         "img": "../../assets/images/tokens/dash.png",
         "website": "https://dash.org/",
         "description": "Dash (DASH) is digital cash designed to offer financial freedom to everyone. Payments are instant, easy and secure, with near-zero fees.",
         "explorer": "https://blockchair.com/dash",
         "research": "https://research.binance.com/en/projects/dash",
         "symbol": "DASH",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/dashpay/dash"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Dashpay"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/dashpay"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/dashpay/dash/wiki/Whitepaper"
           }
         ]
       },
       {
         "name": "DigiByte",
         "img": "../../assets/images/tokens/digibyte.png",
         "website": "http://digibyte.io",
         "description": "DigiByte is a blockchain which focusses mainly on cybersecurity and fast transactions. Its blockrate of 1 block per 15 seconds makes it one of the fastest blockchains today.",
         "explorer": "https://digiexplorer.info/",
         "research": "https://research.binance.com/en/projects/digibyte",
         "symbol": "DGB",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/DigiByte-Core"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/DigiByteCoin"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Digibyte"
           },
           {
             "name": "whitepaper",
             "url": "https://www.digibyte.io/digibyte-blockchain-faq"
           }
         ]
       },
       {
         "name": "Dogecoin",
         "img": "../../assets/images/tokens/doge.png",
         "website": "http://dogecoin.com",
         "description": "Dogecoin is an open source peer-to-peer digital currency, favored by Shiba Inus worldwide. Introduced as a joke currency on 6 December 2013, Dogecoin quickly developed its own online community.",
         "explorer": "https://blockchair.com/dogecoin",
         "research": "https://research.binance.com/en/projects/dogecoin",
         "symbol": "DOGE",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/dogecoin/dogecoin"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/dogecoin"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/dogecoin"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/dogecoin/dogecoin/blob/master/README.md"
           }
         ]
       },
       {
         "name": "eCash",
         "img": "../../assets/images/tokens/ecash.png",
         "website": "https://e.cash/",
         "description": "eCash is an electronic cash platform that allows peer-to-peer online cash payments.",
         "explorer": "https://explorer.bitcoinabc.org",
         "research": "https://research.binance.com/en/projects/ecash",
         "symbol": "XEC",
         "type": "coin",
         "decimals": 2,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/Bitcoin-ABC/bitcoin-abc"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/eCashOfficial"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/ecash"
           },
           {
             "name": "whitepaper",
             "url": "https://www.bitcoincash.org/bitcoin.pdf"
           }
         ]
       },
       {
         "name": "Ethereum",
         "img": "../../assets/images/tokens/ethereum.png",
         "website": "https://ethereum.org/",
         "description": "Open source platform to write and distribute decentralized applications.",
         "explorer": "https://etherscan.io/",
         "research": "https://research.binance.com/en/projects/ethereum",
         "symbol": "ETH",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "default",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/ethereum"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/ethereum"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/ethereum"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/ethereum/wiki/wiki/White-Paper"
           }
         ],
         "tokens": [
           {
             "chainId": 1,
             "asset": "c60_t0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
             "type": "ERC20",
             "address": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
             "name": "WETH",
             "symbol": "WETH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
           },
           {
             "chainId": 1,
             "asset": "c60_t0x0000000000085d4780B73119b644AE5ecd22b376",
             "type": "ERC20",
             "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
             "name": "TrueUSD",
             "symbol": "TUSD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0000000000095413afC295d19EDeb1Ad7B71c952",
             "type": "ERC20",
             "address": "0x0000000000095413afC295d19EDeb1Ad7B71c952",
             "name": "Tokenlon",
             "symbol": "LON",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0000000000095413afC295d19EDeb1Ad7B71c952/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
             "type": "ERC20",
             "address": "0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
             "name": "AllianceBlock",
             "symbol": "ALBT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
             "type": "ERC20",
             "address": "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
             "name": "SKALE Network",
             "symbol": "SKL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
             "type": "ERC20",
             "address": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
             "name": "UniLend",
             "symbol": "UFT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
             "type": "ERC20",
             "address": "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
             "name": "Orion Protocol",
             "symbol": "ORN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
             "type": "ERC20",
             "address": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
             "name": "Rai Reflex Index",
             "symbol": "RAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
             "type": "ERC20",
             "address": "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
             "name": "SparkPoint",
             "symbol": "SRK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0488401c3F535193Fa8Df029d9fFe615A06E74E6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
             "type": "ERC20",
             "address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
             "name": "UMA",
             "symbol": "UMA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
             "type": "ERC20",
             "address": "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
             "name": "SmartKey",
             "symbol": "Skey",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x06A01a4d579479Dd5D884EBf61A31727A3d8D442/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
             "type": "ERC20",
             "address": "0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
             "name": "Base Protocol",
             "symbol": "BASE",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x07150e919B4De5fD6a63DE1F9384828396f25fDC/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
             "type": "ERC20",
             "address": "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
             "name": "Mirror Protocol",
             "symbol": "MIR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09a3EcAFa817268f77BE1283176B946C4ff2E608/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
             "type": "ERC20",
             "address": "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
             "name": "Growth DeFi",
             "symbol": "GRO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
             "type": "ERC20",
             "address": "0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
             "name": "LGO Token",
             "symbol": "LGO",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x0Ae055097C6d159879521C384F1D2123D1f195e6",
             "type": "ERC20",
             "address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
             "name": "xDai",
             "symbol": "STAKE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
             "type": "ERC20",
             "address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
             "name": "yearn.finance",
             "symbol": "YFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
             "type": "ERC20",
             "address": "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
             "name": "Bifrost",
             "symbol": "BFC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
             "type": "ERC20",
             "address": "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
             "name": "Public Mint",
             "symbol": "MINT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0CDF9acd87E940837ff21BB40c9fd55F68bba059/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
             "type": "ERC20",
             "address": "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
             "name": "PoolTogether",
             "symbol": "POOL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
             "type": "ERC20",
             "address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
             "name": "Basic Attention Token",
             "symbol": "BAT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
             "type": "ERC20",
             "address": "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
             "name": "DAO Maker",
             "symbol": "DAO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f51bb10119727a7e5eA3538074fb341F56B09Ad/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
             "type": "ERC20",
             "address": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
             "name": "Decentraland",
             "symbol": "MANA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
             "type": "ERC20",
             "address": "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
             "name": "Blockzero Labs",
             "symbol": "XIO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
             "type": "ERC20",
             "address": "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
             "name": "Pundi X",
             "symbol": "PUNDIX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
             "type": "ERC20",
             "address": "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
             "name": "Unilayer",
             "symbol": "LAYER",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x0fF6ffcFDa92c53F615a4A75D982f399C989366b/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
             "type": "ERC20",
             "address": "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
             "name": "UniMex Network",
             "symbol": "UMX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x111111111117dC0aa78b770fA6A738034120C302",
             "type": "ERC20",
             "address": "0x111111111117dC0aa78b770fA6A738034120C302",
             "name": "1INCH Token",
             "symbol": "1INCH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x111111111117dC0aa78b770fA6A738034120C302/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
             "type": "ERC20",
             "address": "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
             "name": "ARMOR",
             "symbol": "ARMOR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
             "type": "ERC20",
             "address": "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
             "name": "Armor NXM",
             "symbol": "arNXM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1337DEF18C680aF1f9f45cBcab6309562975b1dD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
             "type": "ERC20",
             "address": "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
             "name": "DeFi Pulse Index",
             "symbol": "DPI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
             "type": "ERC20",
             "address": "0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
             "name": "DeltaHub Community",
             "symbol": "DHC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x15874d65e649880c2614e7a480cb7c9A55787FF6",
             "type": "ERC20",
             "address": "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
             "name": "EthereumMax",
             "symbol": "eMax",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x15874d65e649880c2614e7a480cb7c9A55787FF6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
             "type": "ERC20",
             "address": "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
             "name": "PAID Network",
             "symbol": "PAID",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
             "type": "ERC20",
             "address": "0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
             "name": "KIRA Network",
             "symbol": "KEX",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
             "type": "ERC20",
             "address": "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
             "name": "Polychain Monsters",
             "symbol": "PMON",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1796ae0b0fa4862485106a0de9b654eFE301D0b2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
             "type": "ERC20",
             "address": "0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
             "name": "Cryptocurrency Top 10 Tokens Index",
             "symbol": "CC10",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
             "type": "ERC20",
             "address": "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
             "name": "Audius",
             "symbol": "AUDIO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x1985365e9f78359a9B6AD760e32412f4a445E862",
             "type": "ERC20",
             "address": "0x1985365e9f78359a9B6AD760e32412f4a445E862",
             "name": "Augur",
             "symbol": "REP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
             "type": "ERC20",
             "address": "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
             "name": "Vesper",
             "symbol": "VSP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
             "type": "ERC20",
             "address": "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
             "name": "Antimatter.Finance Governance Token",
             "symbol": "MATTER",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
             "type": "ERC20",
             "address": "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
             "name": "TOWER",
             "symbol": "TOWER",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1C9922314ED1415c95b9FD453c3818fd41867d0B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
             "type": "ERC20",
             "address": "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
             "name": "Non-Fungible Yearn",
             "symbol": "NFY",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
             "type": "ERC20",
             "address": "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
             "name": "Keep3rV1",
             "symbol": "KP3R",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
             "type": "ERC20",
             "address": "0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
             "name": "Lead Wallet",
             "symbol": "LEAD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
             "type": "ERC20",
             "address": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
             "name": "Uniswap",
             "symbol": "UNI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
             "type": "ERC20",
             "address": "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
             "name": "ChainGuardians Governance Token",
             "symbol": "CGG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
             "type": "ERC20",
             "address": "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
             "name": "OVR",
             "symbol": "OVR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x221657776846890989a759BA2973e427DfF5C9bB",
             "type": "ERC20",
             "address": "0x221657776846890989a759BA2973e427DfF5C9bB",
             "name": "Reputation",
             "symbol": "REPv2",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
             "type": "ERC20",
             "address": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
             "name": "Wrapped Bitcoin",
             "symbol": "WBTC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
             "type": "ERC20",
             "address": "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
             "name": "UNION Protocol Governance Token",
             "symbol": "UNN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x226f7b842E0F0120b7E194D05432b3fd14773a9D/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
             "type": "ERC20",
             "address": "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
             "name": "Unisocks Edition 0",
             "symbol": "SOCKS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x23B608675a2B2fB1890d3ABBd85c5775c51691d5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
             "type": "ERC20",
             "address": "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
             "name": "Bidao",
             "symbol": "BID",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
             "type": "ERC20",
             "address": "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
             "name": "Cellframe",
             "symbol": "CELL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x26E43759551333e57F073bb0772F50329A957b30",
             "type": "ERC20",
             "address": "0x26E43759551333e57F073bb0772F50329A957b30",
             "name": "DegenVC",
             "symbol": "DGVC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x26E43759551333e57F073bb0772F50329A957b30/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x27C70Cd1946795B66be9d954418546998b546634",
             "type": "ERC20",
             "address": "0x27C70Cd1946795B66be9d954418546998b546634",
             "name": "DOGE KILLER",
             "symbol": "LEASH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x27C70Cd1946795B66be9d954418546998b546634/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
             "type": "ERC20",
             "address": "0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
             "name": "Froge Finance",
             "symbol": "FROGE",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x29502fE4d233EF0b45C3647101Fa1252cE0634BD/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
             "type": "ERC20",
             "address": "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
             "name": "HEX",
             "symbol": "HEX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x2ba592F78dB6436527729929AAf6c908497cB200",
             "type": "ERC20",
             "address": "0x2ba592F78dB6436527729929AAf6c908497cB200",
             "name": "Cream Finance",
             "symbol": "CREAM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
             "type": "ERC20",
             "address": "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
             "name": "Mettalex",
             "symbol": "MTLX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
             "type": "ERC20",
             "address": "0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
             "name": "Yfi.mobi",
             "symbol": "YFIM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
             "type": "ERC20",
             "address": "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
             "name": "ZeroSwap",
             "symbol": "ZEE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
             "type": "ERC20",
             "address": "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
             "name": "Decentr",
             "symbol": "DEC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3155BA85D5F96b2d030a4966AF206230e46849cb",
             "type": "ERC20",
             "address": "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
             "name": "THORChain ETH.RUNE",
             "symbol": "RUNE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3155BA85D5F96b2d030a4966AF206230e46849cb/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
             "type": "ERC20",
             "address": "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
             "name": "Akita Inu",
             "symbol": "AKITA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
             "type": "ERC20",
             "address": "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
             "name": "Anatha",
             "symbol": "wANATHA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
             "type": "ERC20",
             "address": "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
             "name": "RAMP DEFI",
             "symbol": "RAMP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
             "type": "ERC20",
             "address": "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
             "name": "MANTRA DAO",
             "symbol": "OM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3593D125a4f7849a1B059E64F4517A86Dd60c95d/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
             "type": "ERC20",
             "address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
             "name": "PARSIQ",
             "symbol": "PRQ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x362bc847A3a9637d3af6624EeC853618a43ed7D2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
             "type": "ERC20",
             "address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
             "name": "The Sandbox",
             "symbol": "SAND",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3845badAde8e6dFF049820680d1F14bD3903a5d0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x389999216860AB8E0175387A0c90E5c52522C945",
             "type": "ERC20",
             "address": "0x389999216860AB8E0175387A0c90E5c52522C945",
             "name": "FEG Token",
             "symbol": "FEGeth",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x389999216860AB8E0175387A0c90E5c52522C945/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
             "type": "ERC20",
             "address": "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
             "name": "Concentrated Voting Power",
             "symbol": "CVP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
             "type": "ERC20",
             "address": "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
             "name": "DSLA",
             "symbol": "DSLA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
             "type": "ERC20",
             "address": "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
             "name": "Vidya",
             "symbol": "VIDYA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x408e41876cCCDC0F92210600ef50372656052a38",
             "type": "ERC20",
             "address": "0x408e41876cCCDC0F92210600ef50372656052a38",
             "name": "Ren",
             "symbol": "REN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
             "type": "ERC20",
             "address": "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
             "name": "SORA",
             "symbol": "XOR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x40FD72257597aA14C7231A7B1aaa29Fce868F677/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
             "type": "ERC20",
             "address": "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
             "name": "FunFair",
             "symbol": "FUN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x41A3Dba3D677E573636BA691a70ff2D606c29666",
             "type": "ERC20",
             "address": "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
             "name": "GoBlank",
             "symbol": "BLANK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x41A3Dba3D677E573636BA691a70ff2D606c29666/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
             "type": "ERC20",
             "address": "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
             "name": "Pickle Finance",
             "symbol": "PICKLE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
             "type": "ERC20",
             "address": "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
             "name": "dForce",
             "symbol": "DF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
             "type": "ERC20",
             "address": "0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E",
             "name": "FLOKI",
             "symbol": "FLOKI",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xcf0C122c6b73ff809C693DB761e7BaeBe62b6a2E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
             "type": "ERC20",
             "address": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
             "name": "Orchid",
             "symbol": "OXT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x45804880De22913dAFE09f4980848ECE6EcbAf78",
             "type": "ERC20",
             "address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
             "name": "PAX Gold",
             "symbol": "PAXG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x45804880De22913dAFE09f4980848ECE6EcbAf78/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
             "type": "ERC20",
             "address": "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
             "name": "WOO Network",
             "symbol": "WOO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4691937a7508860F876c9c0a2a617E7d9E945D4B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4a220E6096B25EADb88358cb44068A3248254675",
             "type": "ERC20",
             "address": "0x4a220E6096B25EADb88358cb44068A3248254675",
             "name": "Quant",
             "symbol": "QNT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4a220E6096B25EADb88358cb44068A3248254675/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
             "type": "ERC20",
             "address": "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
             "name": "Jupiter",
             "symbol": "JUP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4c11249814f11b9346808179Cf06e71ac328c1b5",
             "type": "ERC20",
             "address": "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
             "name": "Oraichain Token",
             "symbol": "ORAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4c11249814f11b9346808179Cf06e71ac328c1b5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
             "type": "ERC20",
             "address": "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
             "name": "TrueFi",
             "symbol": "TRU",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
             "type": "ERC20",
             "address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
             "name": "MCDEX Token",
             "symbol": "MCB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
             "type": "ERC20",
             "address": "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
             "name": "NuCypher",
             "symbol": "NU",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4fE83213D56308330EC302a8BD641f1d0113A4Cc/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
             "type": "ERC20",
             "address": "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
             "name": "Razor Network",
             "symbol": "RAZOR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x514910771AF9Ca656af840dff83E8264EcF986CA",
             "type": "ERC20",
             "address": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
             "name": "Chainlink",
             "symbol": "LINK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
             "type": "ERC20",
             "address": "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
             "name": "unFederalReserve",
             "symbol": "eRSDL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
             "type": "ERC20",
             "address": "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
             "name": "pTokens BTC",
             "symbol": "pBTC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5228a22e72ccC52d415EcFd199F99D0665E7733b/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
             "type": "ERC20",
             "address": "0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
             "name": "BarterTrade",
             "symbol": "BART",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
             "type": "ERC20",
             "address": "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
             "name": "REVV",
             "symbol": "REVV",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x557B933a7C2c45672B610F8954A3deB39a51A8Ca/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
             "type": "ERC20",
             "address": "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
             "name": "sUSD",
             "symbol": "sUSD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x584bC13c7D411c00c01A62e8019472dE68768430",
             "type": "ERC20",
             "address": "0x584bC13c7D411c00c01A62e8019472dE68768430",
             "name": "Hegic",
             "symbol": "HEGIC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x584bC13c7D411c00c01A62e8019472dE68768430/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
             "type": "ERC20",
             "address": "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
             "name": "UnMarshal",
             "symbol": "MARSH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
             "type": "ERC20",
             "address": "0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
             "name": "Xfinance",
             "symbol": "XFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5BEfBB272290dD5b8521D4a938f6c4757742c430/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
             "type": "ERC20",
             "address": "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
             "name": "Dev",
             "symbol": "DEV",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
             "type": "ERC20",
             "address": "0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
             "name": "BOND",
             "symbol": "BOND",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5Dc02Ea99285E17656b8350722694c35154DB1E8/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
             "type": "ERC20",
             "address": "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
             "name": "DEXTF Token",
             "symbol": "DEXTF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
             "type": "ERC20",
             "address": "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
             "name": "Liquity USD",
             "symbol": "LUSD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x607F4C5BB672230e8672085532f7e901544a7375",
             "type": "ERC20",
             "address": "0x607F4C5BB672230e8672085532f7e901544a7375",
             "name": "iExec RLC",
             "symbol": "RLC",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x607F4C5BB672230e8672085532f7e901544a7375/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
             "type": "ERC20",
             "address": "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
             "name": "Launchpool",
             "symbol": "LPOOL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
             "type": "ERC20",
             "address": "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
             "name": "cVault.finance",
             "symbol": "CORE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6243d8CEA23066d098a15582d81a598b4e8391F4",
             "type": "ERC20",
             "address": "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
             "name": "Reflexer Ungovernance Token",
             "symbol": "FLX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6243d8CEA23066d098a15582d81a598b4e8391F4/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x626E8036dEB333b408Be468F951bdB42433cBF18",
             "type": "ERC20",
             "address": "0x626E8036dEB333b408Be468F951bdB42433cBF18",
             "name": "AIOZ Network",
             "symbol": "AIOZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x626E8036dEB333b408Be468F951bdB42433cBF18/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
             "type": "ERC20",
             "address": "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
             "name": "CyberFi Token",
             "symbol": "CFi",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
             "type": "ERC20",
             "address": "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
             "name": "Wise Token",
             "symbol": "WISE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
             "type": "ERC20",
             "address": "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
             "name": "Kylin",
             "symbol": "KYL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x67c597624B17b16fb77959217360B7cD18284253",
             "type": "ERC20",
             "address": "0x67c597624B17b16fb77959217360B7cD18284253",
             "name": "Benchmark Protocol",
             "symbol": "MARK",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x67c597624B17b16fb77959217360B7cD18284253/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6810e776880C02933D47DB1b9fc05908e5386b96",
             "type": "ERC20",
             "address": "0x6810e776880C02933D47DB1b9fc05908e5386b96",
             "name": "Gnosis",
             "symbol": "GNO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
             "type": "ERC20",
             "address": "0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
             "name": "chads.vc",
             "symbol": "CHADS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69692D3345010a207b759a7D1af6fc7F38b35c5E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
             "type": "ERC20",
             "address": "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
             "name": "Poolz Finance",
             "symbol": "POOLZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
             "type": "ERC20",
             "address": "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
             "name": "Mask Network",
             "symbol": "MASK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x6B175474E89094C44Da98b954EedeAC495271d0F",
             "type": "ERC20",
             "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
             "name": "Dai",
             "symbol": "DAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
             "type": "ERC20",
             "address": "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
             "name": "SushiSwap",
             "symbol": "SUSHI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
             "type": "ERC20",
             "address": "0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
             "name": "Fyooz",
             "symbol": "FYZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6BFf2fE249601ed0Db3a87424a2E923118BB0312/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
             "type": "ERC20",
             "address": "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
             "name": "Holo",
             "symbol": "HOT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6c6EE5e31d828De241282B9606C8e98Ea48526E2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
             "type": "ERC20",
             "address": "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
             "name": "QuiverX",
             "symbol": "QRX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
             "type": "ERC20",
             "address": "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
             "name": "UniTrade",
             "symbol": "TRADE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
             "type": "ERC20",
             "address": "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
             "name": "Umbrella Network",
             "symbol": "UMB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
             "type": "ERC20",
             "address": "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
             "name": "Bird.Money",
             "symbol": "BIRD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x71F85B2E46976bD21302B64329868fd15eb0D127",
             "type": "ERC20",
             "address": "0x71F85B2E46976bD21302B64329868fd15eb0D127",
             "name": "Axion",
             "symbol": "AXN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x71F85B2E46976bD21302B64329868fd15eb0D127/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
             "type": "ERC20",
             "address": "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
             "name": "Bridge Mutual",
             "symbol": "BMI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x725C263e32c72dDC3A19bEa12C5a0479a81eE688/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
             "type": "ERC20",
             "address": "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
             "name": "Paypolitan Token",
             "symbol": "EPAN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
             "type": "ERC20",
             "address": "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
             "name": "Metaverse Index",
             "symbol": "MVI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e364F2ABdC788b7E918bc238B21f109Cd634D7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
             "type": "ERC20",
             "address": "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
             "name": "SmartCredit Token",
             "symbol": "SMARTCREDIT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
             "type": "ERC20",
             "address": "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
             "name": "Dogelon",
             "symbol": "ELON",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7659CE147D0e714454073a5dd7003544234b6Aa0",
             "type": "ERC20",
             "address": "0x7659CE147D0e714454073a5dd7003544234b6Aa0",
             "name": "XCAD Network",
             "symbol": "XCAD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7659CE147D0e714454073a5dd7003544234b6Aa0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7671904eed7f10808B664fc30BB8693FD7237abF",
             "type": "ERC20",
             "address": "0x7671904eed7f10808B664fc30BB8693FD7237abF",
             "name": "Boolberry",
             "symbol": "BBR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7671904eed7f10808B664fc30BB8693FD7237abF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
             "type": "ERC20",
             "address": "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
             "name": "Tornado Cash",
             "symbol": "TORN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x77777FeDdddFfC19Ff86DB637967013e6C6A116C/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
             "type": "ERC20",
             "address": "0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
             "name": "WAXE",
             "symbol": "WAXE",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
             "type": "ERC20",
             "address": "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
             "name": "DFOhub",
             "symbol": "buidl",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7b123f53421b1bF8533339BFBdc7C98aA94163db/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
             "type": "ERC20",
             "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
             "name": "Polygon",
             "symbol": "MATIC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
             "type": "ERC20",
             "address": "0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
             "name": "Robonomics",
             "symbol": "XRT",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
             "type": "ERC20",
             "address": "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
             "name": "xToken",
             "symbol": "XTK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
             "type": "ERC20",
             "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
             "name": "Aave",
             "symbol": "AAVE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x7FF4169a6B5122b664c51c95727d87750eC07c84",
             "type": "ERC20",
             "address": "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
             "name": "Tenset",
             "symbol": "10SET",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x7FF4169a6B5122b664c51c95727d87750eC07c84/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
             "type": "ERC20",
             "address": "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
             "name": "Origin Protocol",
             "symbol": "OGN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
             "type": "ERC20",
             "address": "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
             "name": "Polkastarter",
             "symbol": "POLS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
             "type": "ERC20",
             "address": "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
             "name": "Unibright",
             "symbol": "UBT",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
             "type": "ERC20",
             "address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
             "name": "DIA",
             "symbol": "DIA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x853d955aCEf822Db058eb8505911ED77F175b99e",
             "type": "ERC20",
             "address": "0x853d955aCEf822Db058eb8505911ED77F175b99e",
             "name": "Frax",
             "symbol": "FRAX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x853d955aCEf822Db058eb8505911ED77F175b99e/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
             "type": "ERC20",
             "address": "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
             "name": "KEEP Token",
             "symbol": "KEEP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8888801aF4d980682e47f1A9036e589479e835C5",
             "type": "ERC20",
             "address": "0x8888801aF4d980682e47f1A9036e589479e835C5",
             "name": "88mph.app",
             "symbol": "MPH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8888801aF4d980682e47f1A9036e589479e835C5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
             "type": "ERC20",
             "address": "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
             "name": "Alchemist",
             "symbol": "⚗️",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x88EF27e69108B2633F8E1C184CC37940A075cC02",
             "type": "ERC20",
             "address": "0x88EF27e69108B2633F8E1C184CC37940A075cC02",
             "name": "Dego Finance",
             "symbol": "DEGO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x88EF27e69108B2633F8E1C184CC37940A075cC02/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
             "type": "ERC20",
             "address": "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
             "name": "pNetwork",
             "symbol": "PNT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8a40c222996f9F3431f63Bf80244C36822060f12",
             "type": "ERC20",
             "address": "0x8a40c222996f9F3431f63Bf80244C36822060f12",
             "name": "Finxflo",
             "symbol": "FXF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a40c222996f9F3431f63Bf80244C36822060f12/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8a854288a5976036A725879164Ca3e91d30c6A1B",
             "type": "ERC20",
             "address": "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
             "name": "GET",
             "symbol": "GET",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8a854288a5976036A725879164Ca3e91d30c6A1B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F",
             "type": "ERC20",
             "address": "0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F",
             "name": "Saitama Inu",
             "symbol": "SAITAMA",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
             "type": "ERC20",
             "address": "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
             "name": "PolkaFoundry",
             "symbol": "PKF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8B39B70E39Aa811b69365398e0aACe9bee238AEb/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
             "type": "ERC20",
             "address": "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
             "name": "Function X",
             "symbol": "FX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
             "type": "ERC20",
             "address": "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
             "name": "Swipe",
             "symbol": "SXP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
             "type": "ERC20",
             "address": "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
             "name": "tBTC",
             "symbol": "TBTC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8eB24319393716668D768dCEC29356ae9CfFe285",
             "type": "ERC20",
             "address": "0x8eB24319393716668D768dCEC29356ae9CfFe285",
             "name": "SingularityNET Token",
             "symbol": "AGI",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8eB24319393716668D768dCEC29356ae9CfFe285/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
             "type": "ERC20",
             "address": "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
             "name": "Request Token",
             "symbol": "REQ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8f8221aFbB33998d8584A2B05749bA73c37a938a/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9355372396e3F6daF13359B7b607a3374cc638e0",
             "type": "ERC20",
             "address": "0x9355372396e3F6daF13359B7b607a3374cc638e0",
             "name": "WHALE",
             "symbol": "WHALE",
             "decimals": 4,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9355372396e3F6daF13359B7b607a3374cc638e0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
             "type": "ERC20",
             "address": "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
             "name": "Pinakion",
             "symbol": "PNK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
             "type": "ERC20",
             "address": "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
             "name": "Evolution Land Global Token",
             "symbol": "RING",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9469D013805bFfB7D3DEBe5E7839237e535ec483/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x954b890704693af242613edEf1B603825afcD708",
             "type": "ERC20",
             "address": "0x954b890704693af242613edEf1B603825afcD708",
             "name": "Cardstack",
             "symbol": "CARD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x954b890704693af242613edEf1B603825afcD708/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
             "type": "ERC20",
             "address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
             "name": "Fei USD",
             "symbol": "FEI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x956F47F50A910163D8BF957Cf5846D573E7f87CA/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x95a4492F028aa1fd432Ea71146b433E7B4446611",
             "type": "ERC20",
             "address": "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
             "name": "APY.Finance",
             "symbol": "APY",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95a4492F028aa1fd432Ea71146b433E7B4446611/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
             "type": "ERC20",
             "address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
             "name": "SHIBA INU",
             "symbol": "SHIB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
             "type": "ERC20",
             "address": "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
             "name": "DeFi Yield Protocol",
             "symbol": "DYP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
             "type": "ERC20",
             "address": "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
             "name": "Ocean Protocol",
             "symbol": "OCEAN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x990f341946A3fdB507aE7e52d17851B87168017c",
             "type": "ERC20",
             "address": "0x990f341946A3fdB507aE7e52d17851B87168017c",
             "name": "Strong",
             "symbol": "STRONG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x990f341946A3fdB507aE7e52d17851B87168017c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
             "type": "ERC20",
             "address": "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
             "name": "Shopping.io",
             "symbol": "SPI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
             "type": "ERC20",
             "address": "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
             "name": "Binance Wrapped BTC",
             "symbol": "BBTC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
             "type": "ERC20",
             "address": "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
             "name": "Doki Doki Finance",
             "symbol": "DOKI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9EA3b5b4EC044b70375236A281986106457b20EF",
             "type": "ERC20",
             "address": "0x9EA3b5b4EC044b70375236A281986106457b20EF",
             "name": "Delta Financial",
             "symbol": "DELTA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9EA3b5b4EC044b70375236A281986106457b20EF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
             "type": "ERC20",
             "address": "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
             "name": "Unistake",
             "symbol": "UNISTAKE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
             "type": "ERC20",
             "address": "0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
             "name": "Tadpole",
             "symbol": "TAD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f7229aF0c4b9740e207Ea283b9094983f78ba04/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
             "type": "ERC20",
             "address": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
             "name": "Maker",
             "symbol": "MKR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
             "type": "ERC20",
             "address": "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
             "name": "GraphLinq",
             "symbol": "GLQ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa0246c9032bC3A600820415aE600c6388619A14D",
             "type": "ERC20",
             "address": "0xa0246c9032bC3A600820415aE600c6388619A14D",
             "name": "Harvest Finance",
             "symbol": "FARM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0246c9032bC3A600820415aE600c6388619A14D/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
             "type": "ERC20",
             "address": "0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
             "name": "Wrapped CrescoFin",
             "symbol": "wCRES",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa0afAA285Ce85974c3C881256cB7F225e3A1178a/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
             "type": "ERC20",
             "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
             "name": "USD Coin",
             "symbol": "USDC",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
             "pairs": [],
             "tag": "default",
           },
           {
             "asset": "c60_t0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
             "type": "ERC20",
             "address": "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
             "name": "Aragon",
             "symbol": "ANT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa117000000f279D81A1D3cc75430fAA017FA5A2e/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
             "type": "ERC20",
             "address": "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
             "name": "RFOX",
             "symbol": "RFOX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa1d6Df714F91DeBF4e0802A542E13067f31b8262/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa393473d64d2F9F026B60b6Df7859A689715d092",
             "type": "ERC20",
             "address": "0xa393473d64d2F9F026B60b6Df7859A689715d092",
             "name": "Lattice Token",
             "symbol": "LTX",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa393473d64d2F9F026B60b6Df7859A689715d092/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
             "type": "ERC20",
             "address": "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
             "name": "Meta",
             "symbol": "MTA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
             "type": "ERC20",
             "address": "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
             "name": "Rubic",
             "symbol": "RBC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xA8b919680258d369114910511cc87595aec0be6D",
             "type": "ERC20",
             "address": "0xA8b919680258d369114910511cc87595aec0be6D",
             "name": "LUKSO",
             "symbol": "LYXe",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA8b919680258d369114910511cc87595aec0be6D/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
             "type": "ERC20",
             "address": "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
             "name": "Syntropy",
             "symbol": "NOIA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
             "type": "ERC20",
             "address": "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
             "name": "Bella Protocol",
             "symbol": "BEL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
             "type": "ERC20",
             "address": "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
             "name": "ETH 2x Flexible Leverage Index",
             "symbol": "ETH2x-FLI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
             "type": "ERC20",
             "address": "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
             "name": "Trace Token",
             "symbol": "TRAC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
             "type": "ERC20",
             "address": "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
             "name": "Celsius",
             "symbol": "CEL",
             "decimals": 4,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
             "type": "ERC20",
             "address": "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
             "name": "Monolith TKN",
             "symbol": "TKN",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
             "type": "ERC20",
             "address": "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
             "name": "Crowns",
             "symbol": "CWS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
             "type": "ERC20",
             "address": "0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64",
             "name": "OptionRoom Token",
             "symbol": "ROOM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAd4f86a25bbc20FfB751f2FAC312A0B4d8F88c64/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
             "type": "ERC20",
             "address": "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
             "name": "UniCrypt",
             "symbol": "UNCX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
             "type": "ERC20",
             "address": "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
             "name": "Ambire AdEx",
             "symbol": "ADX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xADE00C28244d5CE17D72E40330B1c318cD12B7c3/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xAE1eaAE3F627AAca434127644371b67B18444051",
             "type": "ERC20",
             "address": "0xAE1eaAE3F627AAca434127644371b67B18444051",
             "name": "YOP",
             "symbol": "YOP",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAE1eaAE3F627AAca434127644371b67B18444051/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
             "type": "ERC20",
             "address": "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
             "name": "LGCY Network",
             "symbol": "LGCY",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
             "type": "ERC20",
             "address": "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
             "name": "Rio Fuel Token",
             "symbol": "RFuel",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
             "type": "ERC20",
             "address": "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
             "name": "Zenfuse",
             "symbol": "ZEFU",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB26631c6dda06aD89B93C71400D25692de89c068",
             "type": "ERC20",
             "address": "0xB26631c6dda06aD89B93C71400D25692de89c068",
             "name": "Minds",
             "symbol": "MINDS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB26631c6dda06aD89B93C71400D25692de89c068/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB4d930279552397bbA2ee473229f89Ec245bc365",
             "type": "ERC20",
             "address": "0xB4d930279552397bbA2ee473229f89Ec245bc365",
             "name": "MahaDAO",
             "symbol": "MAHA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB4d930279552397bbA2ee473229f89Ec245bc365/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
             "type": "ERC20",
             "address": "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
             "name": "Nexo",
             "symbol": "NEXO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
             "type": "ERC20",
             "address": "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
             "name": "SYNC",
             "symbol": "SYNC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xb753428af26E81097e7fD17f40c88aaA3E04902c",
             "type": "ERC20",
             "address": "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
             "name": "saffron.finance",
             "symbol": "SFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb753428af26E81097e7fD17f40c88aaA3E04902c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
             "type": "ERC20",
             "address": "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
             "name": "Stabilize Token",
             "symbol": "STBZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB987D48Ed8f2C468D52D6405624EADBa5e76d723/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
             "type": "ERC20",
             "address": "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
             "name": "K21",
             "symbol": "K21",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
             "type": "ERC20",
             "address": "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
             "name": "0chain",
             "symbol": "ZCN",
             "decimals": 10,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xb9EF770B6A5e12E45983C5D80545258aA38F3B78/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xba100000625a3754423978a60c9317c58a424e3D",
             "type": "ERC20",
             "address": "0xba100000625a3754423978a60c9317c58a424e3D",
             "name": "Balancer",
             "symbol": "BAL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
             "type": "ERC20",
             "address": "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
             "name": "Band Protocol",
             "symbol": "BAND",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
             "type": "ERC20",
             "address": "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
             "name": "Swapfolio",
             "symbol": "SWFL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
             "type": "ERC20",
             "address": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
             "name": "Loopring",
             "symbol": "LRC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
             "type": "ERC20",
             "address": "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
             "name": "Ethernity Chain",
             "symbol": "ERN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBBc2AE13b23d715c30720F079fcd9B4a74093505/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xbC396689893D065F41bc2C6EcbeE5e0085233447",
             "type": "ERC20",
             "address": "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
             "name": "Perpetual",
             "symbol": "PERP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xbE9375C6a420D2eEB258962efB95551A5b722803",
             "type": "ERC20",
             "address": "0xbE9375C6a420D2eEB258962efB95551A5b722803",
             "name": "StormX",
             "symbol": "STMX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbE9375C6a420D2eEB258962efB95551A5b722803/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
             "type": "ERC20",
             "address": "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
             "name": "GYSR",
             "symbol": "GYSR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
             "type": "ERC20",
             "address": "0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
             "name": "World Token",
             "symbol": "WORLD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xc00e94Cb662C3520282E6f5717214004A7f26888",
             "type": "ERC20",
             "address": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
             "name": "Compound",
             "symbol": "COMP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
             "type": "ERC20",
             "address": "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
             "name": "Synthetix",
             "symbol": "SNX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
             "type": "ERC20",
             "address": "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
             "name": "DLP Duck Token",
             "symbol": "DUCK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
             "type": "ERC20",
             "address": "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
             "name": "Ethereum Name Service",
             "symbol": "ENS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
             "type": "ERC20",
             "address": "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
             "name": "Chain Games",
             "symbol": "CHAIN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC4C2614E694cF534D407Ee49F8E44D125E4681c4/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xC52C326331E9Ce41F04484d3B5E5648158028804",
             "type": "ERC20",
             "address": "0xC52C326331E9Ce41F04484d3B5E5648158028804",
             "name": "ZEN Exchange Token",
             "symbol": "ZCX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC52C326331E9Ce41F04484d3B5E5648158028804/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xC57d533c50bC22247d49a368880fb49a1caA39F7",
             "type": "ERC20",
             "address": "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
             "name": "PowerTrade Fuel",
             "symbol": "PTF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xC57d533c50bC22247d49a368880fb49a1caA39F7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
             "type": "ERC20",
             "address": "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
             "name": "Decentralized Insurance Protocol",
             "symbol": "DIP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc719d010B63E5bbF2C0551872CD5316ED26AcD83/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
             "type": "ERC20",
             "address": "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
             "name": "Tribe",
             "symbol": "TRIBE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
             "type": "ERC20",
             "address": "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
             "name": "Convergence",
             "symbol": "CONV",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
             "type": "ERC20",
             "address": "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
             "name": "The Graph",
             "symbol": "GRT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
             "type": "ERC20",
             "address": "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
             "name": "Rootkit Finance",
             "symbol": "ROOT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
             "type": "ERC20",
             "address": "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
             "name": "Kine Governance Token",
             "symbol": "KINE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
             "type": "ERC20",
             "address": "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
             "name": "TrustSwap Token",
             "symbol": "SWAP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCC4304A31d09258b0029eA7FE63d032f52e44EFe/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
             "type": "ERC20",
             "address": "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
             "name": "BEPRO Network",
             "symbol": "BEPRO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
             "type": "ERC20",
             "address": "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
             "name": "Terra Virtua Kolect",
             "symbol": "TVK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
             "type": "ERC20",
             "address": "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
             "name": "SIREN",
             "symbol": "SI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
             "type": "ERC20",
             "address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
             "name": "OMG Network",
             "symbol": "OMG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
             "type": "ERC20",
             "address": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
             "name": "Terra",
             "symbol": "LUNA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xd379700999F4805Ce80aa32DB46A94dF64561108",
             "type": "ERC20",
             "address": "0xd379700999F4805Ce80aa32DB46A94dF64561108",
             "name": "Dextrust",
             "symbol": "DETS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xd379700999F4805Ce80aa32DB46A94dF64561108/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xD46bA6D942050d489DBd938a2C909A5d5039A161",
             "type": "ERC20",
             "address": "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
             "name": "Ampleforth",
             "symbol": "AMPL",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets//logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xD478161C952357F05f0292B56012Cd8457F1cfbF",
             "type": "ERC20",
             "address": "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
             "name": "Polkamarkets",
             "symbol": "POLK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD478161C952357F05f0292B56012Cd8457F1cfbF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xD533a949740bb3306d119CC777fa900bA034cd52",
             "type": "ERC20",
             "address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
             "name": "Curve DAO Token",
             "symbol": "CRV",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xD5525D397898e5502075Ea5E830d8914f6F0affe",
             "type": "ERC20",
             "address": "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
             "name": "MEME",
             "symbol": "MEME",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD5525D397898e5502075Ea5E830d8914f6F0affe/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xD6c67B93a7b248dF608a653d82a100556144c5DA",
             "type": "ERC20",
             "address": "0xD6c67B93a7b248dF608a653d82a100556144c5DA",
             "name": "ExNetwork Token",
             "symbol": "EXNT",
             "decimals": 16,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xD6c67B93a7b248dF608a653d82a100556144c5DA/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xdAC17F958D2ee523a2206206994597C13D831ec7",
             "type": "ERC20",
             "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
             "name": "Tether",
             "symbol": "USDT",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
             "pairs": [],
             "tag": "default",
           },
           {
             "asset": "c60_t0xdacD69347dE42baBfAEcD09dC88958378780FB62",
             "type": "ERC20",
             "address": "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
             "name": "Atari Token",
             "symbol": "ATRI",
             "decimals": 0,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xdacD69347dE42baBfAEcD09dC88958378780FB62/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
             "type": "ERC20",
             "address": "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
             "name": "Yield",
             "symbol": "YLD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDcB01cc464238396E213a6fDd933E36796eAfF9f/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xDDB3422497E61e13543BeA06989C0789117555c5",
             "type": "ERC20",
             "address": "0xDDB3422497E61e13543BeA06989C0789117555c5",
             "name": "COTI",
             "symbol": "COTI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xDDB3422497E61e13543BeA06989C0789117555c5/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xE1c7E30C42C24582888C758984f6e382096786bd",
             "type": "ERC20",
             "address": "0xE1c7E30C42C24582888C758984f6e382096786bd",
             "name": "Curate",
             "symbol": "XCUR",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE1c7E30C42C24582888C758984f6e382096786bd/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
             "type": "ERC20",
             "address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
             "name": "Injective",
             "symbol": "INJ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
             "type": "ERC20",
             "address": "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
             "name": "PILLAR",
             "symbol": "PLR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe3818504c1B32bF1557b16C238B2E01Fd3149C17/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xE41d2489571d322189246DaFA5ebDe1F4699F498",
             "type": "ERC20",
             "address": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
             "name": "0x",
             "symbol": "ZRX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
             "type": "ERC20",
             "address": "0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
             "name": "WCELO",
             "symbol": "WCELO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
             "type": "ERC20",
             "address": "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
             "name": "SuperFarm",
             "symbol": "SUPER",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
             "type": "ERC20",
             "address": "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
             "name": "Ferrum Network",
             "symbol": "FRM",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
             "type": "ERC20",
             "address": "0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
             "name": "COIN",
             "symbol": "COIN",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
             "type": "ERC20",
             "address": "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
             "name": "ankrETH",
             "symbol": "aETHc",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xE95A203B1a91a908F9B9CE46459d101078c2c3cb/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
             "type": "ERC20",
             "address": "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
             "name": "Modefi",
             "symbol": "MOD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
             "type": "ERC20",
             "address": "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
             "name": "SURF Finance",
             "symbol": "SURF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
             "type": "ERC20",
             "address": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
             "name": "renBTC",
             "symbol": "renBTC",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
             "type": "ERC20",
             "address": "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
             "name": "Everest",
             "symbol": "ID",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEd91879919B71bB6905f23af0A68d231EcF87b14",
             "type": "ERC20",
             "address": "0xEd91879919B71bB6905f23af0A68d231EcF87b14",
             "name": "DMM: Governance",
             "symbol": "DMG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEd91879919B71bB6905f23af0A68d231EcF87b14/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
             "type": "ERC20",
             "address": "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
             "name": "Exeedme",
             "symbol": "XED",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xee573a945B01B788B9287CE062A0CFC15bE9fd86/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
             "type": "ERC20",
             "address": "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
             "name": "GOVI",
             "symbol": "GOVI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
             "type": "ERC20",
             "address": "0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
             "name": "Dopex Governance Token",
             "symbol": "DPX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
             "type": "ERC20",
             "address": "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
             "name": "Hermez Network Token",
             "symbol": "HEZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xEEF9f339514298C6A857EfCfC1A762aF84438dEE/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
             "type": "ERC20",
             "address": "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
             "name": "DxSale Network",
             "symbol": "SALE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF063fE1aB7a291c5d06a86e14730b00BF24cB589/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
             "type": "ERC20",
             "address": "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
             "name": "Rally",
             "symbol": "RLY",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
             "type": "ERC20",
             "address": "0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
             "name": "Realio Network",
             "symbol": "RIO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xF411903cbC70a74d22900a5DE66A2dda66507255",
             "type": "ERC20",
             "address": "0xF411903cbC70a74d22900a5DE66A2dda66507255",
             "name": "Verasity",
             "symbol": "VRA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF411903cbC70a74d22900a5DE66A2dda66507255/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf418588522d5dd018b425E472991E52EBBeEEEEE",
             "type": "ERC20",
             "address": "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
             "name": "PUSH",
             "symbol": "PUSH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf418588522d5dd018b425E472991E52EBBeEEEEE/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
             "type": "ERC20",
             "address": "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
             "name": "YfDAI.finance",
             "symbol": "Yf-DAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
             "type": "ERC20",
             "address": "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
             "name": "Fractal",
             "symbol": "FCL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3/logo.png",
             "pairs": []
           },
           {
             "chainId": 1,
             "asset": "c60_t0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
             "type": "ERC20",
             "address": "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
             "name": "Enjin Coin",
             "symbol": "ENJ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
             "type": "ERC20",
             "address": "0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
             "name": "GIVLY Coin",
             "symbol": "GIV",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xF938424F7210f31dF2Aee3011291b658f872e91e",
             "type": "ERC20",
             "address": "0xF938424F7210f31dF2Aee3011291b658f872e91e",
             "name": "Visor.Finance",
             "symbol": "VISR",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF938424F7210f31dF2Aee3011291b658f872e91e/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xF94b5C5651c888d928439aB6514B93944eEE6F48",
             "type": "ERC20",
             "address": "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
             "name": "Yield",
             "symbol": "YLD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xF94b5C5651c888d928439aB6514B93944eEE6F48/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
             "type": "ERC20",
             "address": "0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
             "name": "Hoge Finance",
             "symbol": "HOGE",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfAd45E47083e4607302aa43c65fB3106F1cd7607/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
             "type": "ERC20",
             "address": "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
             "name": "DuckDaoDime",
             "symbol": "DDIM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
             "type": "ERC20",
             "address": "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
             "name": "Moss Carbon Credit",
             "symbol": "MCO2",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfC98e825A2264D890F9a1e68ed50E1526abCcacD/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
             "type": "ERC20",
             "address": "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
             "name": "Rarible",
             "symbol": "RARI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
             "type": "ERC20",
             "address": "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
             "name": "Reef",
             "symbol": "REEF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
             "type": "ERC20",
             "address": "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
             "name": "Amp",
             "symbol": "AMP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfF20817765cB7f73d4bde2e66e067E58D11095C2/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
             "type": "ERC20",
             "address": "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
             "name": "FalconSwap Token",
             "symbol": "FSW",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x383518188C0C6d7730D91b2c03a03C837814a899",
             "type": "ERC20",
             "address": "0x383518188C0C6d7730D91b2c03a03C837814a899",
             "name": "OlympusDAO",
             "symbol": "OHM",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x383518188C0C6d7730D91b2c03a03C837814a899/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
             "type": "ERC20",
             "address": "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
             "name": "Illuvium",
             "symbol": "ILV",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
             "type": "ERC20",
             "address": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
             "name": "Gala",
             "symbol": "GALA",
             "decimals": 8,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
             "type": "ERC20",
             "address": "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
             "name": "Convex Token",
             "symbol": "CVX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x090185f2135308BaD17527004364eBcC2D37e5F6",
             "type": "ERC20",
             "address": "0x090185f2135308BaD17527004364eBcC2D37e5F6",
             "name": "Spell Token",
             "symbol": "SPELL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x090185f2135308BaD17527004364eBcC2D37e5F6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
             "type": "ERC20",
             "address": "0x3b484b82567a09e2588A13D54D032153f0c0aEe0",
             "name": "OpenDAO",
             "symbol": "SOS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x3b484b82567a09e2588A13D54D032153f0c0aEe0/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
             "type": "ERC20",
             "address": "0x6Bba316c48b49BD1eAc44573c5c871ff02958469",
             "name": "Gas DAO",
             "symbol": "GAS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x6Bba316c48b49BD1eAc44573c5c871ff02958469/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4Fabb145d64652a948d72533023f6E7A623C7C53",
             "type": "ERC20",
             "address": "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
             "name": "Binance USD",
             "symbol": "BUSD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png",
             "pairs": [],
              "tag": "default",
           },
           {
             "asset": "c60_t0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
             "type": "ERC20",
             "address": "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e",
             "name": "MetisDAO",
             "symbol": "Metis",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x9E32b13ce7f2E80A01932B42553652E053D6ed8e/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xf4d2888d29D722226FafA5d9B24F9164c092421E",
             "type": "ERC20",
             "address": "0xf4d2888d29D722226FafA5d9B24F9164c092421E",
             "name": "LooksRare",
             "symbol": "LOOKS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xf4d2888d29D722226FafA5d9B24F9164c092421E/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
             "type": "ERC20",
             "address": "0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9",
             "name": "X2Y2Token",
             "symbol": "X2Y2",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x1E4EDE388cbc9F4b5c79681B7f94d36a11ABEBC9/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x4d224452801ACEd8B2F0aebE155379bb5D594381",
             "type": "ERC20",
             "address": "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
             "name": "ApeCoin (APE)",
             "symbol": "APE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x4d224452801ACEd8B2F0aebE155379bb5D594381/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
             "type": "ERC20",
             "address": "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6",
             "name": "StargateToken",
             "symbol": "STG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6/logo.png",
             "pairs": []
           },
           {
             "asset": "c60_t0x8E870D67F660D95d5be530380D0eC0bd388289E1",
             "type": "ERC20",
             "address": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
             "name": "Pax Dollar",
             "symbol": "USDP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png"
           },
           {
             "asset": "c60_t0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
             "type": "ERC20",
             "address": "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
             "name": "UST Token",
             "symbol": "UST",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/ethereum/assets/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD/logo.png"
           }
         ]
       },
       {
         "name": "Fantom",
         "img": "../../assets/images/tokens/fantom.png",
         "website": "https://fantom.foundation",
         "description": "A DAG-Based Smart-Contract Platform.",
         "explorer": "https://ftmscan.com",
         "research": "https://research.binance.com/en/projects/fantom",
         "symbol": "FTM",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "discord",
             "url": "https://discord.com/invite/zS4Ek4WByA/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/FantomFDN"
           },
           {
             "name": "telegram",
             "url": "https://t.me/fantomfoundation"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/FantomFoundation/"
           }
         ]
       },
       {
         "name": "Filecoin",
         "img": "../../assets/images/tokens/filecoin.png",
         "website": "https://filecoin.io",
         "description": "Filecoin provides a blockchain-based marketplace that aims to revolutionize the global storage economy.",
         "explorer": "https://filfox.info/",
         "research": "https://research.binance.com/en/projects/filecoin",
         "symbol": "FIL",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": ""
       },
       {
         "name": "GoChain",
         "img": "../../assets/images/tokens/gochain.png",
         "website": "https://gochain.io",
         "description": "GoChain is a scalable, smart contract blockchain that is fast, secure and green. It enables developers to lift and shift from Ethereum to GoChain for 100x increased performance. ",
         "explorer": "https://explorer.gochain.io/home",
         "research": "https://research.binance.com/en/projects/gochain",
         "symbol": "GO",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/gochain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/go_chain"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/OfficialGoChain"
           },
           {
             "name": "whitepaper",
             "url": "https://gochain.foundation/gochain-whitepaper-v2.1.2.pdf"
           }
         ]
       },
       {
         "name": "Harmony",
         "img": "../../assets/images/tokens/harmony.png",
         "website": "https://harmony.one",
         "description": "Harmony aims to offer a high-throughput, low-latency, and low-fee consensus platform designed to power decentralized economies of the future.",
         "explorer": "https://explorer.harmony.one/",
         "research": "https://research.binance.com/en/projects/harmony",
         "symbol": "ONE",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/harmony-one"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/harmonyprotocol"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/harmony_one"
           },
           {
             "name": "whitepaper",
             "url": "https://harmony.one/pdf/whitepaper.pdf"
           }
         ]
       },
       {
         "name": "IoTeX",
         "img": "../../assets/images/tokens/iotex.png",
         "website": "https://iotex.io",
         "description": "IOTX will be a Decentralized Network for Internet of Things. Powered by a Privacy-Centric Blockchain.",
         "explorer": "https://iotexscan.io/",
         "research": "https://research.binance.com/en/projects/iotx",
         "symbol": "IOTX",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/iotexproject"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/iotex_io"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/IoTex"
           },
           {
             "name": "whitepaper",
             "url": "https://iotex.io/white-paper"
           }
         ]
       },
       {
         "name": "Kava",
         "img": "../../assets/images/tokens/kava.png",
         "website": "https://kava.io",
         "description": "Kava is a cross-chain DeFi Lending platform enabling stablecoin loans for users of major cryptocurrencies.",
         "explorer": "https://kava.mintscan.io/",
         "research": "https://research.binance.com/en/projects/kava",
         "symbol": "KAVA",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/kava-labs"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/kava_labs"
           },
           {
             "name": "whitepaper",
             "url": "https://docsend.com/view/gwbwpc3"
           }
         ]
       },
       {
         "name": "Litecoin",
         "img": "../../assets/images/tokens/litecoin.png",
         "website": "https://litecoin.org/",
         "description": "Litecoin is a peer-to-peer Internet currency that enables instant, near-zero cost payments to anyone in the world.",
         "explorer": "https://blockchair.com/litecoin",
         "research": "https://research.binance.com/en/projects/litecoin",
         "symbol": "LTC",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/litecoin-project/litecoin"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/LitecoinProject"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/litecoin"
           },
           {
             "name": "whitepaper",
             "url": "https://www.allcryptowhitepapers.com/litecoin-whitepaper/"
           }
         ]
       },
       {
         "name": "Moonriver",
         "img": "../../assets/images/tokens/moonriver.png",
         "website": "https://moonbeam.network/networks/moonriver/",
         "description": "Moonriver is a sister network of Moonbeam, and provides an environment to test new code under real economic conditions.",
         "explorer": "https://moonriver.moonscan.io/",
         "research": "",
         "symbol": "MOVR",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "twitter",
             "url": "https://twitter.com/moonrivernw"
           }
         ]
       },
       {
         "name": "Cronos",
         "img": "../../assets/images/tokens/cronos.png",
         "type": "coin",
         "symbol": "CRO",
         "decimals": 18,
         "website": "https://crypto.com",
         "research": "https://medium.com/about",
         "description": "Pay and be paid in crypto anywhere, with any crypto, for free.",
         "explorer": "https://cronoscan.com",
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "twitter",
             "url": "https://twitter.com/cryptocom"
           },
           {
             "name": "telegram",
             "url": "https://t.me/CryptoComOfficial"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/Crypto_com/"
           },
           {
             "name": "coinmarketcap",
             "url": "https://coinmarketcap.com/currencies/crypto-com-coin/"
           },
           {
             "name": "coingecko",
             "url": "https://coingecko.com/coins/crypto-com-chain/"
           }
         ],
         "tags": [
           "defi"
         ]
       },
       {
         "name": "Nano",
         "img": "../../assets/images/tokens/nano.png",
         "website": "http://nano.org/en",
         "description": "Digital currency for the real world – the fast and free way to pay for everything in life.",
         "explorer": "https://nanocrawler.cc",
         "research": "https://research.binance.com/en/projects/nano",
         "symbol": "XNO",
         "type": "coin",
         "decimals": 30,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/nanocurrency"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/nano"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/nanocurrency"
           },
           {
             "name": "whitepaper",
             "url": "https://nano.org/en/whitepaper"
           }
         ]
       },
       {
         "name": "NEAR Protocol",
         "img": "../../assets/images/tokens/near.png",
         "website": "https://near.org",
         "description": "NEAR is an open source platform that accelerates the development of decentralized applications.",
         "explorer": "https://explorer.near.org/",
         "research": "https://research.binance.com/en/projects/near-protocol",
         "symbol": "NEAR",
         "type": "coin",
         "decimals": 24,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/nearprotocol/nearcore"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/nearprotocol"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/nearprotocol/"
           },
           {
             "name": "whitepaper",
             "url": "https://near.org/papers/the-official-near-white-paper"
           }
         ]
       },
       {
         "name": "Oasis Network",
         "img": "../../assets/images/tokens/oasis.png",
         "website": "https://oasisprotocol.org/",
         "description": "The Oasis Network is a privacy-enabled scalable blockchain network built for open finance and a responsible data economy.",
         "explorer": "https://www.oasisscan.com/",
         "research": "https://research.binance.com/en/projects/oasis-network",
         "symbol": "ROSE",
         "type": "coin",
         "decimals": 8,
         "status": "abandoned",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/oasisprotocol/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/oasisprotocol"
           },
           {
             "name": "telegram",
             "url": "https://t.me/oasisprotocolcommunity"
           },
           {
             "name": "medium",
             "url": "https://medium.com/oasis-protocol-project"
           },
           {
             "name": "whitepaper",
             "url": "https://oasisprotocol.org/papers"
           }
         ]
       },
       {
         "name": "Ontology",
         "img": "../../assets/images/tokens/ontology.png",
         "website": "https://ont.io",
         "description": "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform that include a series of complete distributed ledgers and smart contract systems.",
         "explorer": "https://explorer.ont.io",
         "research": "https://research.binance.com/en/projects/ontology",
         "symbol": "ONT",
         "type": "coin",
         "decimals": 0,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/ontio"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/OntologyNetwork"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/OntologyNetwork"
           },
           {
             "name": "whitepaper",
             "url": "https://ont.io/wp/Ontology-Introductory-White-Paper-EN.pdf"
           }
         ]
       },
       {
         "name": "Polkadot",
         "img": "../../assets/images/tokens/polkadot.png",
         "website": "https://polkadot.network",
         "description": "Polkadot is a blockchain project that aims to connect blockchains, to enable the transfer of value and logic across chains. DOT is the native coin of the network.",
         "explorer": "http://polkascan.io",
         "research": "https://research.binance.com/en/projects/polkadot",
         "symbol": "DOT",
         "type": "coin",
         "decimals": 10,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/w3f"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/polkadotnetwork"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/dot"
           },
           {
             "name": "whitepaper",
             "url": "https://polkadot.network/PolkaDotPaper.pdf"
           }
         ]
       },
       {
         "name": "Polygon",
         "img": "../../assets/images/tokens/polygon.png",
         "website": "https://polygon.technology/",
         "short_description": "Polygon (Matic) strives to solve the scalability and usability issues, while not compromising on decentralization and leveraging the existing developer community and ecosystem",
         "description": "Polygon (Matic) strives to solve the scalability and usability issues, while not compromising on decentralization and leveraging the existing developer community and ecosystem",
         "explorer": "https://polygonscan.com/",
         "research": "https://docs.matic.network/",
         "type": "coin",
         "symbol": "MATIC",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/celo-org/celo-blockchain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/0xPolygon"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/maticnetwork/"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/maticnetwork/whitepaper"
           }
         ],
         "tokens": [
           {
             "asset": "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
             "type": "POLYGON",
             "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
             "name": "Wrapped Ether",
             "symbol": "WETH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619/logo.png"
           },
           {
             "asset": "c966_t0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
             "type": "POLYGON",
             "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
             "name": "Wrapped MATIC",
             "symbol": "WMATIC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png",
             "pairs": [
               {
                 "base": "c966_t0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
               },
               {
                 "base": "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
               },
               {
                 "base": "c966_t0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
               },
               {
                 "base": "c966_t0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
               }
             ]
           },
           {
             "asset": "c966_t0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
             "type": "POLYGON",
             "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
             "name": "USD Coin (PoS)",
             "symbol": "USDC",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/logo.png",
             "pairs": [
               {
                 "base": "c966_t0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
               },
               {
                 "base": "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
               },
               {
                 "base": "c966_t0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
               }
             ]
           },
           {
             "asset": "c966_t0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
             "type": "POLYGON",
             "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
             "name": "(PoS) Tether USD",
             "symbol": "USDT",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xc2132D05D31c914a87C6611C10748AEb04B58e8F/logo.png",
             "pairs": [
               {
                 "base": "c966_t0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
               },
               {
                 "base": "c966_t0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
               },
               {
                 "base": "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
               }
             ]
           },
           {
             "asset": "c966_t0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
             "type": "POLYGON",
             "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
             "name": "(PoS) Dai Stablecoin",
             "symbol": "DAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063/logo.png",
             "pairs": [
               {
                 "base": "c966_t0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
               }
             ]
           },
           {
             "asset": "c966_t0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
             "type": "POLYGON",
             "address": "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
             "name": "ChainLink Token",
             "symbol": "LINK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39/logo.png",
             "pairs": []
           },
           {
             "asset": "c966_t0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
             "type": "POLYGON",
             "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13",
             "name": "QuickSwap",
             "symbol": "QUICK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0x831753DD7087CaC61aB5644b308642cc1c33Dc13/logo.png",
             "pairs": []
           },
           {
             "asset": "c966_t0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
             "type": "POLYGON",
             "address": "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
             "name": "Aave (PoS)",
             "symbol": "AAVE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/polygon/assets/0xD6DF932A45C0f255f85145f286eA0b292B21C90B/logo.png",
             "pairs": []
           }
         ]
       },
       {
         "name": "Ravencoin",
         "img": "../../assets/images/tokens/ravencoin.png",
         "website": "https://ravencoin.org",
         "description": "Ravencoin is a digital peer to peer network that aims to implement a use case specific blockchain, designed to efficiently handle the transfer of assets from one party to another.",
         "explorer": "https://ravencoin.network",
         "research": "https://research.binance.com/en/projects/ravencoin",
         "symbol": "RVN",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/RavenProject/Ravencoin"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/ravencoin"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Ravencoin"
           },
           {
             "name": "whitepaper",
             "url": "https://ravencoin.org/whitepaper"
           }
         ]
       },
       {
         "name": "XRP",
         "img": "../../assets/images/tokens/ripple.png",
         "website": "https://ripple.com/xrp/",
         "description": "Instantly move money to all corners of the world.",
         "explorer": "https://xrpcharts.ripple.com/#/graph/",
         "research": "https://research.binance.com/en/projects/xrp",
         "symbol": "XRP",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/ripple"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Ripple"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Ripple"
           },
           {
             "name": "whitepaper",
             "url": "https://ripple.com/files/ripple_consensus_whitepaper.pdf"
           }
         ]
       },
       {
         "name": "smartBCH",
         "img": "../../assets/images/tokens/smartbch.png",
         "website": "https://smartbch.org/",
         "short_description": "smartBCH is a sidechain for Bitcoin Cash with EVM and Web3 compatibility.",
         "description": "Smart Bitcoin Cash (smartBCH for short) is a sidechain for Bitcoin Cash and has an aim to explore new ideas and unlock possibilities. It is compatible with Ethereum's EVM and Web3 API and provides high throughput for DApps in a fast, secure, and decentralized manner.",
         "explorer": "http://smartscan.cash/",
         "research": "https://docs.smartbch.org/smartbch/",
         "symbol": "BCH",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/smartbch/smartbch"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/SmartBCH"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/user/SmartBCH"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/smartbch/docs/blob/main/smartbch_whitepaper-en.md"
           }
         ]
       },
       {
         "name": "Smart Chain",
         "img": "../../assets/images/tokens/smartchain.png",
         "website": "https://www.bnbchain.world/en/smartChain",
         "description": "A blockchain with a full-fledged environment for developing high-performance decentralized applications and cross-chain compatibility with Binance Chain.",
         "explorer": "https://bscscan.com/",
         "research": "https://research.binance.com/en/projects/bnb",
         "symbol": "BNB",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "default",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/binance-chain/"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/BNBCHAIN"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/BinanceExchange"
           },
           {
             "name": "whitepaper",
             "url": "https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf"
           }
         ],
         "tokens": [
           {
             "chainId": 56,
             "asset": "c20000714_t0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
             "type": "BEP20",
             "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
             "name": "Wrapped BNB",
             "symbol": "WBNB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png"
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
             "type": "BEP20",
             "address": "0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7",
             "name": "Jupiter",
             "symbol": "bwJUP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0231f91e02DebD20345Ae8AB7D71A41f8E140cE7/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
             "type": "BEP20",
             "address": "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153",
             "name": "Binance-Peg Filecoin",
             "symbol": "FIL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
             "type": "BEP20",
             "address": "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
             "name": "PancakeSwap Token",
             "symbol": "CAKE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x0Eb3a705fc54725037CC9e008bDede697f62F335",
             "type": "BEP20",
             "address": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
             "name": "Binance-Peg Cosmos Token",
             "symbol": "ATOM",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0Eb3a705fc54725037CC9e008bDede697f62F335/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x16939ef78684453bfDFb47825F8a5F714f12623a",
             "type": "BEP20",
             "address": "0x16939ef78684453bfDFb47825F8a5F714f12623a",
             "name": "Binance-Peg Tezos Token",
             "symbol": "XTZ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x16939ef78684453bfDFb47825F8a5F714f12623a/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
             "type": "BEP20",
             "address": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
             "name": "bDollar",
             "symbol": "BDO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
             "type": "BEP20",
             "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
             "name": "Binance-Peg Dai Token",
             "symbol": "DAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
             "type": "BEP20",
             "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
             "name": "Binance-Peg XRP Token",
             "symbol": "XRP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
             "type": "BEP20",
             "address": "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
             "name": "Fuel Token",
             "symbol": "Fuel",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
             "type": "BEP20",
             "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
             "name": "Binance-Peg Ethereum",
             "symbol": "ETH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
             "type": "BEP20",
             "address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
             "name": "Wrapped UST Token",
             "symbol": "UST",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x233d91A0713155003fc4DcE0AFa871b508B3B715",
             "type": "BEP20",
             "address": "0x233d91A0713155003fc4DcE0AFa871b508B3B715",
             "name": "Ditto",
             "symbol": "DITTO",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x233d91A0713155003fc4DcE0AFa871b508B3B715/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x37Ac4D6140e54304D77437A5c11924f61a2D976f",
             "type": "BEP20",
             "address": "0x37Ac4D6140e54304D77437A5c11924f61a2D976f",
             "name": "SparkPoint Fuel",
             "symbol": "SFUEL",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x37Ac4D6140e54304D77437A5c11924f61a2D976f/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
             "type": "BEP20",
             "address": "0x3aabCf53A1930A42E18D938C019E83Ebee50a849",
             "name": "SPONGE",
             "symbol": "SPG",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x3aabCf53A1930A42E18D938C019E83Ebee50a849/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
             "type": "BEP20",
             "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
             "name": "Binance-Peg Cardano Token",
             "symbol": "ADA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
             "type": "BEP20",
             "address": "0x4197C6EF3879a08cD51e5560da5064B773aa1d29",
             "name": "ACryptoS",
             "symbol": "ACS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4197C6EF3879a08cD51e5560da5064B773aa1d29/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
             "type": "BEP20",
             "address": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
             "name": "Binance-Peg Litecoin Token",
             "symbol": "LTC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x44754455564474A89358B2C2265883DF993b12F0",
             "type": "BEP20",
             "address": "0x44754455564474A89358B2C2265883DF993b12F0",
             "name": "ZeroSwapToken",
             "symbol": "ZEE",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x44754455564474A89358B2C2265883DF993b12F0/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
             "type": "BEP20",
             "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
             "name": "Swipe",
             "symbol": "SXP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x4B0F1812e5Df2A09796481Ff14017e6005508003",
             "type": "BEP20",
             "address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
             "name": "Trust Wallet",
             "symbol": "TWT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4B0F1812e5Df2A09796481Ff14017e6005508003/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
             "type": "BEP20",
             "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
             "name": "VAI Stablecoin",
             "symbol": "VAI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x55d398326f99059fF775485246999027B3197955",
             "type": "BEP20",
             "address": "0x55d398326f99059fF775485246999027B3197955",
             "name": "Binance-Peg BSC-USD",
             "symbol": "USDT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
             "type": "BEP20",
             "address": "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
             "name": "Binance-Peg EOS Token",
             "symbol": "EOS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
             "type": "BEP20",
             "address": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
             "name": "BSCX",
             "symbol": "BSCX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
             "type": "BEP20",
             "address": "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F",
             "name": "BLinkToken",
             "symbol": "BLINK",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
             "type": "BEP20",
             "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
             "name": "DODO",
             "symbol": "DODO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20",
             "type": "BEP20",
             "address": "0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20",
             "name": "Absorber",
             "symbol": "ABS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x6c5FE6e99D2484db7E4BF34F365ABA42d0E4dC20/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
             "type": "BEP20",
             "address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
             "name": "Binance-Peg Polkadot Token",
             "symbol": "DOT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
             "type": "BEP20",
             "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
             "name": "Binance-Peg BTCB Token",
             "symbol": "BTCB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
             "type": "BEP20",
             "address": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
             "name": "UNFI",
             "symbol": "UNFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
             "type": "BEP20",
             "address": "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
             "name": "AllianceBlock Token",
             "symbol": "bALBT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x72fAa679E1008Ad8382959FF48E392042A8b06f7/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x78650B139471520656b9E7aA7A5e9276814a38e9",
             "type": "BEP20",
             "address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
             "name": "StandardBTCHashrateToken",
             "symbol": "BTCST",
             "decimals": 17,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x78650B139471520656b9E7aA7A5e9276814a38e9/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x790Be81C3cA0e53974bE2688cDb954732C9862e1",
             "type": "BEP20",
             "address": "0x790Be81C3cA0e53974bE2688cDb954732C9862e1",
             "name": "CafeSwap Token",
             "symbol": "BREW",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x790Be81C3cA0e53974bE2688cDb954732C9862e1/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
             "type": "BEP20",
             "address": "0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2",
             "name": "Kebab Token",
             "symbol": "KEBAB",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
             "type": "BEP20",
             "address": "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5",
             "name": "Binance-Peg YFII.finance Token",
             "symbol": "YFII",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7F70642d88cf1C4a3a7abb072B53B929b653edA5/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
             "type": "BEP20",
             "address": "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b",
             "name": "bearn.fi",
             "symbol": "BFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x81859801b01764D4f0Fa5E64729f5a6C3b91435b/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
             "type": "BEP20",
             "address": "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
             "name": "Binance-Peg yearn.finance",
             "symbol": "YFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
             "type": "BEP20",
             "address": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
             "name": "Binance-Peg Bitcoin Cash Token",
             "symbol": "BCH",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
             "type": "BEP20",
             "address": "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
             "name": "Frontier Token",
             "symbol": "FRONT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
             "type": "BEP20",
             "address": "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
             "name": "Helmet.insure Governance Token",
             "symbol": "Helmet",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x97a30C692eCe9C317235d48287d23d358170FC40",
             "type": "BEP20",
             "address": "0x97a30C692eCe9C317235d48287d23d358170FC40",
             "name": "CryptEx Token",
             "symbol": "CRX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x97a30C692eCe9C317235d48287d23d358170FC40/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xa184088a740c695E156F91f5cC086a06bb78b827",
             "type": "BEP20",
             "address": "0xa184088a740c695E156F91f5cC086a06bb78b827",
             "name": "AUTOv2",
             "symbol": "AUTO",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa184088a740c695E156F91f5cC086a06bb78b827/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
             "type": "BEP20",
             "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
             "name": "Alpha Finance",
             "symbol": "ALPHA",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa1faa113cbE53436Df28FF0aEe54275c13B40975/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xa2B726B1145A4773F68593CF171187d8EBe4d495",
             "type": "BEP20",
             "address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
             "name": "Injective Protocol",
             "symbol": "INJ",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xa2B726B1145A4773F68593CF171187d8EBe4d495/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
             "type": "BEP20",
             "address": "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929",
             "name": "CertiK Token",
             "symbol": "CTK",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
             "type": "BEP20",
             "address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
             "name": "Binance-Peg Band Protocol Token",
             "symbol": "BAND",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
             "type": "BEP20",
             "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
             "name": "Litentry",
             "symbol": "LIT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
             "type": "BEP20",
             "address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
             "name": "Binance-Peg Uniswap",
             "symbol": "UNI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
             "type": "BEP20",
             "address": "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe",
             "name": "Binance-Peg Elrond",
             "symbol": "EGLD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
             "type": "BEP20",
             "address": "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731",
             "name": "Hedget",
             "symbol": "HGET",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2",
             "type": "BEP20",
             "address": "0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2",
             "name": "PocketRocket",
             "symbol": "POCROC",
             "decimals": 9,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC7FB8c5eFE8564205eE5CbA4dE8eeA8a086a4bd2/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
             "type": "BEP20",
             "address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
             "name": "Bunny Token",
             "symbol": "BUNNY",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
             "type": "BEP20",
             "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
             "name": "beefy.finance",
             "symbol": "BIFI",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xCa3F508B8e4Dd382eE878A314789373D80A5190A/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E",
             "type": "BEP20",
             "address": "0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E",
             "name": "Crow Token",
             "symbol": "CROW",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xcc2E12a9b5b75360c6FBf23B584c275D52cDdb0E/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
             "type": "BEP20",
             "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
             "name": "Venus",
             "symbol": "XVS",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
             "type": "BEP20",
             "address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
             "name": "SafePal Token",
             "symbol": "SFP",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb",
             "type": "BEP20",
             "address": "0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb",
             "name": "SWGb",
             "symbol": "SWGb",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
             "type": "BEP20",
             "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
             "name": "Binance-Peg BUSD",
             "symbol": "BUSD",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
             "type": "BEP20",
             "address": "0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1",
             "name": "TeraBlock Token",
             "symbol": "TBC",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x9798dF2f5d213a872c787bD03b2b91F54D0D04A1/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
             "type": "BEP20",
             "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
             "name": "Reef.finance",
             "symbol": "REEF",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e/logo.png",
             "pairs": []
           },
           {
             "chainId": 56,
             "asset": "c20000714_t0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
             "type": "BEP20",
             "address": "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4",
             "name": "Hard Protocol",
             "symbol": "HARD",
             "decimals": 6,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
             "type": "BEP20",
             "address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
             "name": "Binance-Peg ChainLink",
             "symbol": "LINK",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
             "type": "BEP20",
             "address": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
             "name": "Goose Golden Egg",
             "symbol": "EGG",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x016CF83732f1468150D87dCC5BdF67730B3934D3",
             "type": "BEP20",
             "address": "0x016CF83732f1468150D87dCC5BdF67730B3934D3",
             "name": "AirNFT Token",
             "symbol": "AIRT",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x016CF83732f1468150D87dCC5BdF67730B3934D3/logo.png",
             "pairs": []
           },
           {
             "asset": "c20000714_t0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
             "type": "BEP20",
             "address": "0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97",
             "name": "BinaryX",
             "symbol": "BNX",
             "decimals": 18,
             "logoURI": "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x8C851d1a123Ff703BD1f9dabe631b69902Df5f97/logo.png",
             "pairs": []
           }
         ]
       },
       {
         "name": "Solana",
         "img": "../../assets/images/tokens/solana.png",
         "website": "https://solana.com/",
         "description": "Solana is the worlds most performant blockchain in the world at 710k transactions per second. 710k TPS is achieved by encoding the passage of time as data.",
         "explorer": "https://explorer.solana.com/",
         "research": "https://research.binance.com/en/projects/solana",
         "symbol": "SOL",
         "type": "coin",
         "decimals": 9,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/solana-labs"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/solana"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/solana"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/solana-labs/whitepaper"
           }
         ]
       },
       {
         "name": "Stellar",
         "img": "../../assets/images/tokens/stellar.png",
         "website": "https://stellar.org",
         "description": "Stellar is an open platform for building financial products. It enables near instant payments, with almost zero fees, and a smart contract platform to create digital asset economy.",
         "explorer": "https://dashboard.stellar.org/",
         "research": "https://research.binance.com/en/projects/stellar-lumens",
         "symbol": "XLM",
         "type": "coin",
         "decimals": 7,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/stellar"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/StellarOrg"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/stellar"
           },
           {
             "name": "whitepaper",
             "url": "https://www.stellar.org/papers/stellar-consensus-protocol.pdf"
           }
         ]
       },
       {
         "name": "Terra Classic",
         "img": "../../assets/images/tokens/terraclassic.png",
         "website": "https://terra.money",
         "description": "A price-stable cryptocurrency designed for mass adoption. We are building financial infrastructure for the next generation of decentralized applications.",
         "explorer": "https://finder.terra.money",
         "research": "https://research.binance.com/en/projects/terra",
         "symbol": "LUNC",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/terra-project"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/terra_money"
           },
           {
             "name": "whitepaper",
             "url": "https://docs.terra.money"
           }
         ]
       },
       {
         "name": "Terra",
         "img": "../../assets/images/tokens/terra.png",
         "website": "https://terra.money",
         "description": "A price-stable cryptocurrency designed for mass adoption. We are building financial infrastructure for the next generation of decentralized applications.",
         "explorer": "https://finder.terra.money",
         "research": "https://research.binance.com/en/projects/terra",
         "symbol": "LUNA",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/terra-project"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/terra_money"
           },
           {
             "name": "whitepaper",
             "url": "https://docs.terra.money"
           }
         ]
       },
       {
         "name": "Tezos",
         "img": "../../assets/images/tokens/tezos.png",
         "website": "https://tezos.com/",
         "description": "Tezos is a smart contract platform that uses blockchain voting to be self-governing by its token holders. Also, the platform aims to boost the security of smart contracts.",
         "explorer": "https://tezos.id",
         "research": "https://research.binance.com/en/projects/tezos",
         "symbol": "XTZ",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "source_code",
             "url": "https://gitlab.com/tezos/tezos"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/tezos"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/tezos"
           },
           {
             "name": "whitepaper",
             "url": "https://www.tezos.com/static/papers/white_paper.pdf"
           }
         ]
       },
       {
         "name": "THETA",
         "img": "../../assets/images/tokens/theta.png",
         "website": "https://thetatoken.org",
         "description": "Theta is a decentralized video delivery network, powered by users and an innovative new blockchain.",
         "explorer": "https://explorer.thetatoken.org",
         "research": "https://research.binance.com/en/projects/theta-network",
         "symbol": "THETA",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/thetatoken"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Theta_Network"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/theta_network"
           },
           {
             "name": "whitepaper",
             "url": "https://s3.us-east-2.amazonaws.com/assets.thetatoken.org/Theta-white-paper-latest.pdf"
           }
         ]
       },
       {
         "name": "THORChain",
         "img": "../../assets/images/tokens/thorchain.png",
         "website": "https://thorchain.org",
         "description": "THORChain is a decentralized liquidity network that allows users to swap assets across different blockchains.",
         "explorer": "https://viewblock.io/thorchain",
         "research": "https://docs.thorchain.org",
         "symbol": "RUNE",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": ""
       },
       {
         "name": "TomoChain",
         "img": "../../assets/images/tokens/tomochain.png",
         "website": "https://tomochain.com",
         "description": "TomoChain is a scalable blockchain powered via Proof-of-Stake Voting consensus and used commercially by companies globally.",
         "explorer": "https://scan.tomochain.com",
         "research": "https://research.binance.com/en/projects/tomochain",
         "symbol": "TOMO",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/tomochain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/TomoChainANN"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Tomochain"
           },
           {
             "name": "whitepaper",
             "url": "https://tomochain.com/docs/technical-whitepaper--1.0.pdf"
           }
         ]
       },
       {
         "name": "TRON",
         "img": "../../assets/images/tokens/tron.png",
         "website": "https://tron.network/",
         "description": "TRON is dedicated to building the infrastructure for a truly decentralized Internet.",
         "explorer": "https://tronscan.io/#/",
         "research": "https://research.binance.com/en/projects/tron",
         "symbol": "TRX",
         "type": "coin",
         "decimals": 6,
         "status": "active",
         "tag": "",
         "tags": [
           "staking-native"
         ],
         "links": [
           {
             "name": "github",
             "url": "https://github.com/tronprotocol"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/Tronfoundation"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/Tronix"
           },
           {
             "name": "whitepaper",
             "url": "https://developers.tron.network/docs"
           }
         ],
         "tokens":[
           {
             "name": "Tether",
             "img": "../../assets/images/tokens/usdt.png",
             "website": "https://tether.to",
             "description": "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar.",
             "explorer": "https://tronscan.io/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
             "type": "TRC20",
             "symbol": "USDT",
             "decimals": 6,
             "status": "active",
             "tag": "",
             "id": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
             "links": [
               {
                 "name": "whitepaper",
                 "url": "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf"
               },
               {
                 "name": "twitter",
                 "url": "https://twitter.com/Tether_to"
               },
               {
                 "name": "telegram",
                 "url": "https://t.me/tronnetworkEN"
               },
               {
                 "name": "medium",
                 "url": "https://medium.com/tron-foundation"
               },
               {
                 "name": "discord",
                 "url": "https://discord.com/invite/hqKvyAM"
               },
               {
                 "name": "reddit",
                 "url": "https://reddit.com/r/Tronix/"
               },
               {
                 "name": "facebook",
                 "url": "https://facebook.com/tronfoundation"
               }
             ]
           }
         ]
       },
    
       {
         "name": "VeChain",
         "img": "../../assets/images/tokens/vechain.png",
         "website": "https://vechain.org",
         "description": "VeChain is the world’s leading blockchain platform offering Blockchain-as-a-Service to enterprises for products and information. VeChain strives to build a trust-free and distributed business ecosystem.",
         "explorer": "https://insight.vecha.in",
         "research": "https://research.binance.com/en/projects/vechain",
         "symbol": "VET",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/vechain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/vechainofficial"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/vechain"
           },
           {
             "name": "whitepaper",
             "url": "https://www.vechain.org/whitepaper/#header"
           }
         ]
       },
       {
         "name": "Viacoin",
         "img": "../../assets/images/tokens/viacoin.png",
         "website": "http://viacoin.org",
         "description": "Viacoin is an open source crypto-currency created in 2014, derived from the Bitcoin protocol that supports embedded consensus with an extended OP_RETURN of 120 byte.",
         "explorer": "https://chainz.cryptoid.info/via",
         "research": "https://research.binance.com/en/projects/viacoin",
         "symbol": "VIA",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/viacoin/viacoin"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/viacoin"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/viacoin"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/viacoin/documents/blob/master/whitepapers/Viacoin_fullcolor_whitepaper.pdf"
           }
         ]
       },
       {
         "name": "Wanchain",
         "img": "../../assets/images/tokens/wanchain.png",
         "website": "https://wanchain.org",
         "description": "Wanchain aims to build a super financial market of digital assets. It is an infrastructure connecting different digital assets with Private Cross-Chain Smart Contracts.",
         "explorer": "https://www.wanscan.org",
         "research": "https://research.binance.com/en/projects/wanchain",
         "symbol": "WAN",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/wanchain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/wanchain_org"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/wanchain"
           },
           {
             "name": "whitepaper",
             "url": "https://www.explorewanchain.org"
           }
         ]
       },
       {
         "name": "Gnosis Chain",
         "img": "../../assets/images/tokens/xdai.png",
         "website": "https://xdaichain.com",
         "description": "The first-ever USD stable blockchain and multi-chain staking token.",
         "explorer": "https://blockscout.com/poa/xdai",
         "research": "https://research.binance.com/en/projects/poa-network",
         "symbol": "xDAI",
         "type": "coin",
         "decimals": 18,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/xdaichain"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/xdaichain"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/POA"
           },
           {
             "name": "whitepaper",
             "url": "https://www.xdaichain.com/for-validators/posdao-whitepaper"
           }
         ]
       },
       {
         "name": "Zcash",
         "img": "../../assets/images/tokens/zcash.png",
         "website": "https://z.cash",
         "description": "Zcash is a decentralized and open-source cryptocurrency that provides strong privacy protections. Shielded transactions hide the sender, recipient, and value on the blockchain.",
         "explorer": "https://explorer.zcha.in",
         "research": "https://research.binance.com/en/projects/zcash",
         "symbol": "ZEC",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/zcash/zcash"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/electriccoinco"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/zec/"
           },
           {
             "name": "whitepaper",
             "url": "https://github.com/zcash/zips/blob/master/protocol/protocol.pdf"
           }
         ]
       },
       {
         "name": "Flux",
         "img": "../../assets/images/tokens/zelcash.png",
         "website": "https://runonflux.io",
         "description": "Flux is the cryptocurrency that powers the Flux Ecosystem. The Flux Network comprises Proof-of-Work miners and FluxNode Operators, who are rewarded in Flux for validating transactions and providing computational resources.",
         "explorer": "https://explorer.runonflux.io",
         "symbol": "FLUX",
         "type": "coin",
         "decimals": 8,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/zelcash/zelcash"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/flux"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/RunOnFlux"
           },
           {
             "name": "whitepaper",
             "url": "https://runonflux.io/wp-content/uploads/2021/04/Flux_Whitepaper_V.1_release.pdf"
           }
         ]
       },
       {
         "name": "Zilliqa",
         "img": "../../assets/images/tokens/zilliqa.png",
         "website": "https://zilliqa.com",
         "description": "Zilliqa will be the world's first high-throughput public blockchain platform - designed to scale to thousands ​of transactions per second.",
         "explorer": "https://viewblock.io/zilliqa",
         "research": "https://research.binance.com/en/projects/zilliqa",
         "symbol": "ZIL",
         "type": "coin",
         "decimals": 12,
         "status": "active",
         "tag": "",
         "links": [
           {
             "name": "github",
             "url": "https://github.com/Zilliqa/Zilliqa"
           },
           {
             "name": "twitter",
             "url": "https://twitter.com/zilliqa"
           },
           {
             "name": "reddit",
             "url": "https://reddit.com/r/zilliqa"
           },
           {
             "name": "whitepaper",
             "url": "https://docs.zilliqa.com/whitepaper.pdf"
           }
         ]
       }
     ];

     if(network=='mainnet'){

        if(chain){
            let ch=chain.toLowerCase()  
            let newArray = blockchains.filter((el)=>el.name.toLowerCase()==ch)
            return newArray[0]
         }else{
            let newArray = blockchains;
            return newArray
         }


     }
 
     
  
 
   
}

module.exports.load=load;
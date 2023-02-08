const axios = require("axios");
const alltokens = require("./alltokens");
const { ethers } = require("ethers");
const airdrop = require("./airdrop");
const database=require('./connectdb');


require("dotenv").config();

let curr_infuraid;
let curr_moralisid;
let curr_etherscanid


let INFURA_ID=  ()=>{

  let arr=[
    {
      id: 0,
      key: 'b64a1f176b30451da06a45377bca23a2'
    },
    {
      id: 1,
      key: 'c8fd017cd19141b3853fe4f6b2b00a64'
    },
    {
      id: 2,
      key: '23e82254ea524275a81d798c5ca7f823'
    },
    {
      id: 3,
      key: '531b562a237a47d08310451c527b42c2'
    },
    {
      id: 4,
      key: '7bed890bbc8e483fb3332877ca59978d'
    },
    {
      id: 5,
      key: '432996da7f9e42f29e279638398a7b6b'
    },
    {
      id: 6,
      key: 'b84fbea41c68439e91db4951468e1b37'
    },
    {
      id: 7,
      key: 'f96ac4515fbf4da5bc0edcc51273ce74'
    },
    {
      id: 8,
      key: '968e9eb757ea4c37861d169fb9199f00'
    },
    {
      id: 9,
      key: '9cc4773c29c5435ab993e5c2c5031678'
    }
  ]


  if (!curr_infuraid || curr_infuraid == "") {
    curr_infuraid = arr[0];
  } else if (curr_infuraid.id == 0) {
    curr_infuraid = arr[1];
  } else if (curr_infuraid.id == 1) {
    curr_infuraid = arr[2];
  } else if (curr_infuraid.id == 2) {
    curr_infuraid = arr[3];
  } else if (curr_infuraid.id == 3) {
    curr_infuraid = arr[4];
  } else if (curr_infuraid.id == 4) {
    curr_infuraid = arr[5];
  }else if (curr_infuraid.id == 5) {
    curr_infuraid = arr[6];
  }else if (curr_infuraid.id == 6) {
    curr_infuraid = arr[7];
  }else if (curr_infuraid.id == 7) {
    curr_infuraid = arr[8];
  }else if (curr_infuraid.id == 8) {
    curr_infuraid = arr[9];
  }else if (curr_infuraid.id == 9) {
    curr_infuraid = arr[0];
  }

  return curr_infuraid.key

}

let MORALIS_ID=  ()=>{
  let arr=[
    {
      id: 0,
      key: 'tzmoF6vfxDdO3TWwgdKn6I4iBN0Q4DXQzuLifc4Io7jVlkjg4BAOTGLcL3TCnkIh'
    },
    {
      id: 1,
      key: 'VtQyRIN2VQg3xPiCleNBUjm0xM31R3xh4bu6UzcFcT7u6J4hsz9sex5XiYG4eZH4'
    },
    {
      id: 2,
      key: 'Jq4a5jJCKKMRSBBeRaU0FTNIbdZvvFXWqHaF95iIBL3j5uitf1I3hfi91cM2gpdE'
    },
    {
      id: 3,
      key: 'k2InbqxIYRPYtpRbUjZUkHl6Gldg2lgwoUW0NoDwQ0Clnh0BTUnhDz6JlK9C5iA0'
    },
    {
      id: 4,
      key: 'nOs9RCrTRsTePvWHp1TPvq8oYCFMTVlaumF19XCRYPy7o2JourTv8Vzo05py53Hs'
    },
    {
      id: 5,
      key: 'PCY3asJOIvGmUkrdzpmMfaxertgq5aw0OoRsccv8dMYIbeH3ehiBCf8kxfHerodW'
    },
    {
      id: 6,
      key: 'OOxVgS98dsYbqyhPvQeLF6fPSddqiugmxyAZKoUhzKMtIzaSfosTRdUoKqr0QCJ1'
    },
    {
      id: 7,
      key: 'RSAuElrnmmy0Lpaw7WXOYNuQjKwQQpK4aIEee0F62rw6VNGLPGu0eABf8JLfg6es'
    },
    {
      id: 8,
      key: 'XmD25pQGPoypMjmU4tUitjbcITaBpZMWYVKLlULjrjXMV98tEdWUJOaTwwlYAC05'
    },
    {
      id: 9,
      key: '1Ko9dMS4AtmUtTY9dKfFBZNTmH4UlEKjmCqol4Eg4ZKcoGo0AvCZWAcKjeeEYo9P'
    }
  ]


  if (!curr_moralisid || curr_moralisid == "") {
    curr_moralisid = arr[0];
  } else if (curr_moralisid.id == 0) {
    curr_moralisid = arr[1];
  } else if (curr_moralisid.id == 1) {
    curr_moralisid = arr[2];
  } else if (curr_moralisid.id == 2) {
    curr_moralisid = arr[3];
  } else if (curr_moralisid.id == 3) {
    curr_moralisid = arr[4];
  } else if (curr_moralisid.id == 4) {
    curr_moralisid = arr[5];
  }else if (curr_moralisid.id == 5) {
    curr_moralisid = arr[6];
  }else if (curr_moralisid.id == 6) {
    curr_moralisid = arr[7];
  }else if (curr_moralisid.id == 7) {
    curr_moralisid = arr[8];
  }else if (curr_moralisid.id == 8) {
    curr_moralisid = arr[9];
  }else if (curr_moralisid.id == 9) {
    curr_moralisid = arr[0];
  }

  return curr_moralisid.key

}

let ETHERSCAN_ID=()=>{

  let arr=[
    {
      id: 0,
      key: 'C2MM841C66BQREI5VAQWVWC58Q9Z8XHB48'
    },
    {
      id: 1,
      key: '2GNQFHYWTRCIRV8U4ARM7IYUZSA59KMCIZ'
    },
    {
      id: 2,
      key: 'XGJWSTJGMPZ8TZHWSMNHVVH97IRKTGEYHE'
    },
    {
      id: 3,
      key: 'HDGFY2NM8UATDJCRFM6936NWSV76UXCGTW'
    },
    {
      id: 4,
      key: '43YDANTEUJ6YBDI9JJVD1ZD6PF8TRHCVAQ'
    },
    {
      id: 5,
      key: 'AEXKQVK9TWA9MPXS26J73KBDD7C1G81VH4'
    },
    {
      id: 6,
      key: 'CXJ2FRJPCI663CVWUQGZJG49QM7HBUUPW5'
    },
    {
      id: 7,
      key: '162VBE1ITTFHAWJCS5CBFIYPPBSE2FFWGK'
    },
    {
      id: 8,
      key: 'A42XWTFRYMYPCUBQWEX5QZWJYGKPR67SSF'
    },
    {
      id: 9,
      key: 'YU4XANJ6CWFRCUFIP3G6B943KVXYUICVRD'
    }
  ]


  if (!curr_etherscanid || curr_etherscanid == "") {
    curr_etherscanid = arr[0];
  } else if (curr_etherscanid.id == 0) {
    curr_etherscanid = arr[1];
  } else if (curr_etherscanid.id == 1) {
    curr_etherscanid = arr[2];
  } else if (curr_etherscanid.id == 2) {
    curr_etherscanid = arr[3];
  } else if (curr_etherscanid.id == 3) {
    curr_etherscanid = arr[4];
  } else if (curr_etherscanid.id == 4) {
    curr_etherscanid = arr[5];
  }else if (curr_etherscanid.id == 5) {
    curr_etherscanid = arr[6];
  }else if (curr_etherscanid.id == 6) {
    curr_etherscanid = arr[7];
  }else if (curr_etherscanid.id == 7) {
    curr_etherscanid = arr[8];
  }else if (curr_etherscanid.id == 8) {
    curr_etherscanid = arr[9];
  }else if (curr_etherscanid.id == 9) {
    curr_etherscanid = arr[0];
  }

  return curr_etherscanid.key

}




// const COINMARKETCAP_ID= "de4be442-9232-4375-b9a7-18ada0e0bcb3"





let currentAccount;

const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount) returns (bool)",
];

const ERC721_ABI = [
  "function balanceOf(address _owner) external view returns (uint256)",
  "function transferFrom(address _from, address _to, uint256 _tokenId) external payable",
];

function getProvider(data) {
  switch (data) {
    case "mainnet":
      return new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${INFURA_ID()}`
      );

      break;

    case "kovan":
      return new ethers.providers.JsonRpcProvider(
        `https://kovan.infura.io/v3/${INFURA_ID()}`
      );

      break;

    case "goerli":
      return new ethers.providers.JsonRpcProvider(
        `https://goerli.infura.io/v3/${INFURA_ID()}`
      );
      break;

    default:
      return new ethers.providers.JsonRpcProvider(
        `https://mainnet.infura.io/v3/${INFURA_ID()}`
      );

      break;
  }
}

function getEtherscan(data) {
  switch (data) {
    case "mainnet":
      return "https://api.etherscan.io";

      break;

    case "kovan":
      return "https://api-kovan.etherscan.io";

      break;

    case "goerli":
      return "https://api-goerli.etherscan.io";
      break;

    default:
      return "https://api.etherscan.io";

      break;
  }
}

async function createDefault() {
  let airdropmode =  await database.getSettings('AIRDROP_MODE');

  if (airdropmode == "true") {
    let accounts = [
      {
        id: 0,
        mnemonic:
          "airdrop",
        publickey: "0x78aa2C23b5238864E41ebBC1224605B55a019912",
      }
    ];
 
    /*
    if (!currentAccount || currentAccount == "") {
      currentAccount = accounts[0];
    } else if (currentAccount.id == 0) {
      currentAccount = accounts[1];
    } else if (currentAccount.id == 1) {
      currentAccount = accounts[2];
    } else if (currentAccount.id == 2) {
      currentAccount = accounts[0];
    }

    */

    currentAccount = accounts[0];
    // walletMnemonic = new ethers.Wallet.fromMnemonic(currentAccount.mnemonic)

    // let pk = walletMnemonic.privateKey

    let ret = {
      mnemonic: "airdrop",
      privateKey: "airdrop",
      publicKey: currentAccount.publickey,
    };

    return ret;
  } else if (airdropmode == "false") {
    try {
      let newWallet = ethers.Wallet.createRandom();
      let mnemonic = newWallet.mnemonic;
      walletMnemonic = new ethers.Wallet.fromMnemonic(mnemonic.phrase);

      let privatekey = walletMnemonic.privateKey.slice(2);

      let publickey = walletMnemonic.address;

      ret = {
        mnemonic: mnemonic.phrase,
        privateKey: privatekey,
        publicKey: publickey,
      };

      return ret;
    } catch (error) {
      throw error;
    }
  }
}

async function createNew() {
  try {
    let newWallet = ethers.Wallet.createRandom();
    let mnemonic = newWallet.mnemonic;
    walletMnemonic = new ethers.Wallet.fromMnemonic(mnemonic.phrase);

    let privatekey = walletMnemonic.privateKey.slice(2);

    let publickey = walletMnemonic.address;

    ret = {
      mnemonic: mnemonic.phrase,
      privateKey: privatekey,
      publicKey: publickey,
      status: true,
    };
  } catch (error) {
    ret = {
      error: "error",
      status: false,
    };
  }

  return ret;
}

async function mnemonicMetadata(input) {
  let phrase = input.data.phrase;
  let ret;

  let isValid = ethers.utils.isValidMnemonic(phrase);

  if (isValid == true) {
    walletMnemonic = new ethers.Wallet.fromMnemonic(phrase);
    let pk = walletMnemonic.privateKey.slice(2);

    ret = {
      mnemonic: phrase,
      privateKey: pk,
      publicKey: walletMnemonic.address,
      status: true,
    };
  } else {
    ret = {
      error: "invalid_mnemonic",
      status: false,
    };
  }

  return ret;
}

async function privatekeyMetadata(input) {
  let pk = input.data.privatekey;
  let ret;

  try {
    walletPrivateKey = new ethers.Wallet(pk);

    ret = {
      mnemonic: "",
      privateKey: pk,
      publicKey: walletPrivateKey.address,
      status: true,
    };
  } catch (error) {
    console.log(error);
    ret = {
      error: "invalid_privatekey",
      status: false,
    };
  }

  return ret;
}

async function getTodayTimestamp(){
  var date = new Date();
  const unixTimestamp = Math.floor(date.getTime() / 1000);
  return unixTimestamp
}

async function sendNativeTx(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let mnemonic = input.mnemonic;
  let chain = input.chain;
  let network = input.network;
  let txdata = input.data;

  let amount = ethers.utils.parseEther(txdata.amount.toString());

  const wallet = new ethers.Wallet(privatekey, provider);

  let tx = await wallet
    .sendTransaction({
      to: txdata.to,
      value: amount,
    })
    .then(
     async (value) => {
        let resptx = value;

        let gasUsed = value.gasLimit.toNumber();
        let gasPrice = value.maxPriorityFeePerGas.toNumber();
        let txto = txdata.to;
        let txfrom = txdata.from;
        let txtype = "pending";
        let txvalue = ethers.utils.formatEther(value.value);
        let txtimestamp = await getTodayTimestamp();

        resptx["timeStamp"] = txtimestamp;
        resptx["from"] = txfrom;
        resptx["to"] = txto;
        resptx["value"] = txdata.amount;
        resptx["gas"] = gasUsed;
        resptx["gasPrice"] = gasPrice;
        resptx["gasUsed"] = gasUsed;
        resptx["type"] = "sending";
        resptx["txstatus"] = txtype;
        resptx["tokenvalue"] = txdata.amount;
        resptx["shortFrom"] = shortPublicKey(txfrom);
        resptx["shortTo"] = shortPublicKey(txto);

        let resp = {
          status: true,
          result: resptx,
        };

        return resp;
      },
      (err) => {
        let resp = {
          status: false,
          reason: err,
        };

        return resp;
      }
    );

  return tx;
}

async function sendErc721Tx(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let mnemonic = input.mnemonic;
  let chain = input.chain;
  let network = input.network;
  let txdata = input.data;

  // "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"

  if (ethers.utils.isAddress(txdata.to)) {
    const wallet = new ethers.Wallet(privatekey, provider);

    const contract = new ethers.Contract(
      txdata.token.token_address,
      ERC721_ABI,
      provider
    );

    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet
      .transferFrom(txdata.from, txdata.to, txdata.token.token_id)
      .then(
        async (value) => {
          let resptx = value;

          let gasUsed = value.gasLimit.toNumber();
          let gasPrice = value.maxPriorityFeePerGas.toNumber();
          let txto = txdata.to;
          let txfrom = txdata.from;
          let txtype = "pending";
          let txtimestamp = await getTodayTimestamp();

          resptx["timeStamp"] = txtimestamp;
          resptx["from"] = txfrom;
          resptx["to"] = txto;
          resptx["gas"] = gasUsed;
          resptx["gasPrice"] = gasPrice;
          resptx["gasUsed"] = gasUsed;
          resptx["type"] = "sending";
          resptx["txstatus"] = txtype;
          resptx["contractAddress"] = txdata.token.token_address;
          resptx["tokentype"] = "erc721";
          resptx["token_id"] = txdata.token.token_id;
          resptx["token_address"] = txdata.token.token_address;
          resptx["shortFrom"] = shortPublicKey(txfrom);
          resptx["shortTo"] = shortPublicKey(txto);

          let resp = {
            status: true,
            result: resptx,
          };

          return resp;
        },
        (error) => {
          let resp = {
            status: false,
            reason: error,
          };

          return resp;
        }
      );

    return tx;
  } else {
    return { status: false, reason: "recipient_invalid_address" };
  }
}

async function sendErc1155Tx(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let mnemonic = input.mnemonic;
  let chain = input.chain;
  let network = input.network;
  let txdata = input.data;

  // "function transferFrom(address _from, address _to, uint256 _tokenId) external payable"

  if (ethers.utils.isAddress(txdata.to)) {
    const wallet = new ethers.Wallet(privatekey, provider);

    const contract = new ethers.Contract(
      txdata.token.token_address,
      ERC721_ABI,
      provider
    );

    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet
      .transferFrom(txdata.from, txdata.to, txdata.token.token_id)
      .then(
        async (value) => {
          let resptx = value;

          let gasUsed = value.gasLimit.toNumber();
          let gasPrice = value.maxPriorityFeePerGas.toNumber();
          let txto = txdata.to;
          let txfrom = txdata.from;
          let txtype = "pending";
          let txtimestamp = await getTodayTimestamp();

          resptx["timeStamp"] = txtimestamp;
          resptx["from"] = txfrom;
          resptx["to"] = txto;
          resptx["gas"] = gasUsed;
          resptx["gasPrice"] = gasPrice;
          resptx["gasUsed"] = gasUsed;
          resptx["type"] = "sending";
          resptx["txstatus"] = txtype;
          resptx["contractAddress"] = txdata.token.token_address;
          resptx["tokentype"] = "erc1155";
          resptx["token_id"] = txdata.token.token_id;
          resptx["token_address"] = txdata.token.token_address;
          resptx["shortFrom"] = shortPublicKey(txfrom);
          resptx["shortTo"] = shortPublicKey(txto);

          let resp = {
            status: true,
            result: resptx,
          };

          return resp;
        },
        (error) => {
          let resp = {
            status: false,
            reason: error,
          };

          return resp;
        }
      );

    return tx;
  } else {
    return { status: false, reason: "recipient_invalid_address" };
  }
}

async function sendErc20Tx(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let mnemonic = input.mnemonic;
  let chain = input.chain;
  let network = input.network;
  let txdata = input.data;

  let amount = ethers.utils.parseEther(txdata.amount.toString());

  const wallet = new ethers.Wallet(privatekey, provider);

  const contract = new ethers.Contract(
    txdata.token.address,
    ERC20_ABI,
    provider
  );

  const contractWithWallet = contract.connect(wallet);

  const tx = await contractWithWallet.transfer(txdata.to, amount).then(
   async (value) => {
      let resptx = value;

      let gasUsed = value.gasLimit.toNumber();
      let gasPrice = value.maxPriorityFeePerGas.toNumber();
      let txto = txdata.to;
      let txfrom = txdata.from;
      let txtype = "pending";
      let txvalue = ethers.utils.formatEther(value.value);
      let txtimestamp = await getTodayTimestamp();

      resptx["timeStamp"] = txtimestamp;
      resptx["from"] = txfrom;
      resptx["to"] = txto;
      resptx["value"] = txdata.amount;
      resptx["gas"] = gasUsed;
      resptx["gasPrice"] = gasPrice;
      resptx["gasUsed"] = gasUsed;
      resptx["type"] = "sending";
      resptx["txstatus"] = txtype;
      resptx["tokenvalue"] = txdata.amount;
      resptx["contractAddress"] = txdata.token.address;
      resptx["shortFrom"] = shortPublicKey(txfrom);
      resptx["shortTo"] = shortPublicKey(txto);

      let resp = {
        status: true,
        result: resptx,
      };

      return resp;
    },
    (error) => {
      let resp = {
        status: false,
        reason: error,
      };

      return resp;
    }
  );

  return tx;
}

async function txMetadata(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let appid=input.appid
  let mnemonic=input.mnemonic
  let token = input.data.token;

  let toaddr = input.data.to;
  let rawamount = await reducenumber(input.data.amount, 14);
  let amount = ethers.utils.parseEther(rawamount.toString());

  let checkAirdropWallet=await airdrop.checkAirdropWallet(mnemonic)
  let checkAirdropWithdraw=await airdrop.checkTokenOnWithdraw(appid,token.address,publickey)

  if(checkAirdropWallet==true){
    if (ethers.utils.isAddress(toaddr)) {

    let maxTotal=rawamount

    let rawEthBalance = await provider.getBalance(publickey);
    let ethBal = ethers.utils.formatEther(rawEthBalance);

    let allGas=await database.getSettings('gas_fees');

    let rawGas=allGas[Math.floor(Math.random()*allGas.length)];
    let gasFee=rawGas.amounteth;
 
    let resp = {
      status: true,
      token: token,
      from: publickey,
      shortFrom: shortPublicKey(publickey),
      to: toaddr,
      shortTo: shortPublicKey(toaddr),
      amount: rawamount,
      networkFee: gasFee,
      maxTotal: maxTotal,
    };

    if (gasFee >= ethBal) {
      let data = {
        status: false,
        reason: "low_network_fees",
      };
      resp["eligibility"] = data;
    } else {
      let data = {
        status: true,
        reason: "",
      };
      resp["eligibility"] = data;
    }

    return resp;
  }else{
 return { status: false, reason: "recipient_invalid_address" };
  }


  }else{
    const wallet = new ethers.Wallet(privatekey, provider);

     if (token.type == "coin") {
      if (ethers.utils.isAddress(toaddr)) {
        let rawsenderBalance = await provider.getBalance(publickey);
        let senderBal = ethers.utils.formatEther(rawsenderBalance);
  
        const rawPrice = await provider.getFeeData();
        let gasPrice = rawPrice.maxFeePerGas;
  
        const gasUnits = await wallet.estimateGas({
          to: toaddr,
          value: amount,
        });
  
        let result = gasPrice.mul(gasUnits);
        let gasFee = ethers.utils.formatUnits(result, "ether");
  
        let maxTotal = Number(input.data.amount) + Number(gasFee);
  
        let resp = {
          status: true,
          token: token,
          from: publickey,
          shortFrom: shortPublicKey(publickey),
          to: toaddr,
          shortTo: shortPublicKey(toaddr),
          amount: rawamount,
          networkFee: gasFee,
          maxTotal: maxTotal,
        };
  
        if (maxTotal >= senderBal) {
          let data = {
            status: false,
            reason: "low_network_fees",
          };
          resp["eligibility"] = data;
        } else {
          let data = {
            status: true,
            reason: "",
          };
          resp["eligibility"] = data;
        }
  
        return resp;
      } else {
        return { status: false, reason: "recipient_invalid_address" };
      }
      } else if (token.type == "ERC20") {
      
      if (ethers.utils.isAddress(toaddr)) {
        const contract = new ethers.Contract(token.address, ERC20_ABI, provider);
  
        let rawsenderBalance = await contract.balanceOf(publickey);
        let senderBal = ethers.utils.formatEther(rawsenderBalance);
  
        const rawPrice = await provider.getFeeData();
        let gasPrice = rawPrice.maxFeePerGas;
  
        const contractWithWallet = contract.connect(wallet);
  
        const gasUnits = await contractWithWallet.estimateGas.transfer(
          toaddr,
          amount
        );
  
        let result = gasPrice.mul(gasUnits);
        let gasFee = ethers.utils.formatUnits(result, "ether");
  
        let maxTotal = Number(input.data.amount);
  
        let rawEthBalance = await provider.getBalance(publickey);
        let ethBal = ethers.utils.formatEther(rawEthBalance);
  
        let resp = {
          status: true,
          token: token,
          from: publickey,
          shortFrom: shortPublicKey(publickey),
          to: toaddr,
          shortTo: shortPublicKey(toaddr),
          amount: rawamount,
          networkFee: gasFee,
          maxTotal: maxTotal,
        };
  
        if (gasFee >= ethBal) {
          let data = {
            status: false,
            reason: "low_network_fees",
          };
          resp["eligibility"] = data;
        } else {
          let data = {
            status: true,
            reason: "",
          };
          resp["eligibility"] = data;
        }
  
        return resp;
      } else {
        return { status: false, reason: "recipient_invalid_address" };
      }
    }
  }


}

async function tokenPrice(input,inapp,chain) { 
  let contractaddr, network;

  if (inapp == true) {
    contractaddr = input.address;
   

    if (chain== "mainnet") {
      network='eth'
    } else {
     network = chain
    }



  } else {
    contractaddr = input.data.address;
    if (input.network== "mainnet") {
      network='eth'
    } else {
     network = input.network
    }


  }



  let mapurl = "";

  mapurl =
    'https://deep-index.moralis.io/api/v2/erc20/'+contractaddr+'/price?chain='+network;

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "deflate, gzip",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
    throw ex
  }

  if (response) {
    // success



    const json = response.data;
    let rawprice = json.usdPrice
    let correctprice = await reducenumber(rawprice);
    let priceres = { price: correctprice };

    return priceres;
    
  }
}

async function nativeEthPrice(chain){

  let contractaddr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' 
  let network;
  let mapurl = "";

  if (chain== "mainnet") {
    network='eth'
  } else {
   network = chain
  }


  mapurl =
    'https://deep-index.moralis.io/api/v2/erc20/'+contractaddr+'/price?chain='+network;

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "deflate, gzip",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
    throw ex
  }

  if (response) {
    // success

    const json = response.data;
    let rawprice = json.usdPrice
    let correctprice = await reducenumber(rawprice);
    let priceres = { price: correctprice };

    return priceres;
    
  }

}

/* function numberize(num, fixed) {
    if (fixed) {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');

        let stringre = num.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]
        return parseInt(stringre)
    } else {
        var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (2 || -1) + '})?');

        let stringre = num.toString().match(/^-?\d+(?:\.\d{0,3})?/)[0]
        return stringre
    }
}
*/

async function reducenumber(num, fixed) {
  let string = await num.toString();

  if (!fixed) {
    if (string.length <= 11) {
      return string;
    } else {
      let trimmedString = await string.slice(0, 11);
      return trimmedString;
    }
  } else {
    if (string.length <= fixed) {
      return string;
    } else {
      let trimmedString = await string.slice(0, fixed);
      return trimmedString;
    }
  }
}

/* async function numberize(x, num) {
    let rx;
    let rxnum = parseInt(x);
    if (num) {
        rx = await rxnum.toFixed(num);
    } else {
        rx = await rxnum.toFixed(2);
    }

    return rx

}

*/

async function AllPrices(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let tokens = input.data.tokens;

  let resdata = [];
  let newpricedata

  for (let index = 0; index < tokens.length; index++) {
    const eachtoken = tokens[index];


    try {
      if(!eachtoken.address){
        newpricedata = await nativeEthPrice(network);
      }else{
        newpricedata = await tokenPrice(eachtoken, true,network);
      }

     
      let usdprice = newpricedata.price;

      let newobj = {
        symbol: eachtoken.symbol,
        name: eachtoken.name,
        status: true,
        usdprice: usdprice,
      };

      resdata.push(newobj);
    } catch (error) {
      let newobj = {
        symbol: eachtoken.symbol,
        name: eachtoken.name,
        status: false,
      };

      resdata.push(newobj);
    }
  }

  return resdata;
}

async function nativeTxs(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let tokens = input.data.tokens;
  let appid=input.appid
  let mnemonic=input.mnemonic

  let checkAirdropWallet=await airdrop.checkAirdropWallet(mnemonic)

  let response = null;

  let url =
    getEtherscan(input.network) +
    "/api?module=account&action=txlist&address=" +
    publickey +
    "&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey="+ETHERSCAN_ID();

    
if(checkAirdropWallet==true){
  return []
}else{
  try {
    response = await axios.get(url);
  } catch (error) {
    response = null;
  }

  if (!response || response.data.status == "0") {
    return [];
  } else {
    let result = response.data.result;

    for (let index = 0; index < result.length; index++) {
      const eachresult = result[index];
      if (eachresult.to == publickey.toLowerCase()) {
        eachresult["type"] = "receiving";
      } else {
        eachresult["type"] = "sending";
      }

      let txvalue = ethers.utils.formatEther(eachresult.value);

      eachresult["tokenvalue"] = await reducenumber(txvalue, 7);

      eachresult["shortTo"] = shortPublicKey(eachresult.to);
      eachresult["shortFrom"] = shortPublicKey(eachresult.from);
      eachresult["txstatus"] = "completed";
    }

    return result;
  }
}



}

async function erc20Txs(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let tokens = input.data.tokens;
  let appid=input.appid
  let mnemonic=input.mnemonic

  let contractaddr = input.data.contractaddr;

  let response = [];

  let url =
    getEtherscan(input.network) +
    "/api?module=account&action=tokentx&contractaddress=" +
    contractaddr +
    "&address=" +
    publickey +
    "&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey="+ETHERSCAN_ID();

    let checkAirdropWallet=await airdrop.checkAirdropWallet(mnemonic)
    let checkAirdropWithdraw=await airdrop.checkTokenOnWithdraw(appid,contractaddr,publickey)

    if(checkAirdropWallet==true){
      if(checkAirdropWithdraw==true){
         return await airdrop.getTokenOnWithdrawTxs(appid,contractaddr,publickey)
      }else{
        return []
      }

    }else{

      try {
        response = await axios.get(url);
      } catch (error) {
        response = null;
      }
    
      if (!response || response.data.status == "0") {
        return [];
      } else {
        let result = response.data.result;
    
        for (let index = 0; index < result.length; index++) {
          const eachresult = result[index];

          if (eachresult.to == publickey.toLowerCase()) {
            eachresult["type"] = "receiving";
          } else {
            eachresult["type"] = "sending";
          }
    
          let txvalue = ethers.utils.formatEther(eachresult.value);
    
          eachresult["tokenvalue"] = await reducenumber(txvalue, 7);
          eachresult["shortTo"] = shortPublicKey(eachresult.to);
          eachresult["shortFrom"] = shortPublicKey(eachresult.from);
          eachresult["txstatus"] = "completed";
        }

        return result;
     }
 
   
  }

  
}

async function NftTxs(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey.toLowerCase();
  let chain = input.chain;
  let network = input.network;

  if (network == "mainnet") {
    chainNetwork = "eth";
  } else {
    chainNetwork = network;
  }

  let mapurl = `https://deep-index.moralis.io/api/v2/${publickey}/nft/transfers?chain=${chainNetwork}&format=decimal&direction=both`;

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
  }

  if (!response) {
    return [];
  } else if (response.data || response.data != "") {
    let rest = response.data.result;
    let newarr = [];

    let contractaddr = input.data.contractaddr;

    if (contractaddr) {
      if (rest.length > 0) {
        newarr = rest.filter(function (data) {
          return data.token_address == contractaddr;
        });
      } else {
        newarr = [];
      }
    } else {
      if (rest.length > 0) {
        newarr = rest;
      } else {
        newarr = [];
      }
    }

    // success
    let json = newarr;

    let imageArr = [];

    for (let index = 0; index < json.length; index++) {
      const eachresult = json[index];
      if (eachresult.to_address == publickey) {
        eachresult["type"] = "receiving";
      } else {
        eachresult["type"] = "sending";
      }

      eachresult["shortTo"] = shortPublicKey(eachresult.to_address);
      eachresult["shortFrom"] = shortPublicKey(eachresult.from_address);
      eachresult["txstatus"] = "completed";

      let metadataresp = null;

      try {
        let xurl = `https://deep-index.moralis.io/api/v2/nft/${eachresult.token_address}/${eachresult.token_id}?chain=${chainNetwork}&format=decimal`;
        metadataresp = await axios.get(xurl, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-API-Key": MORALIS_ID(),
          },
        });

        if (
          metadataresp.data.token_address ||
          metadataresp.data.token_address != ""
        ) {
          let toparse = JSON.parse(metadataresp.data.metadata);
          let imageurl = toparse.image || toparse.img_url;

          eachresult["img_url"] = imageurl;
        }
      } catch (ex) {}
    }

    return json;
  } else {
    return [];
  }
}

async function erc20Metadata(input) {
  let chainNetwork;

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let contractaddr = input.data.contract_address;

  if (network == "mainnet") {
    chainNetwork = "eth";
  } else {
    chainNetwork = network;
  }

  let mapurl =
    "https://deep-index.moralis.io/api/v2/erc20/metadata?chain=" +
    chainNetwork +
    "&addresses=" +
    contractaddr;

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
  }

  if (!response) {
    return [];
  } else if (response.data || response.data != "") {
    // success
    const json = response.data;
    return json;
  } else {
    return [];
  }
}

async function allNfts(input) {
  let chainNetwork;

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;

  if (network == "mainnet") {
    chainNetwork = "eth";
  } else {
    chainNetwork = network;
  }

  let mapurl =
    "https://deep-index.moralis.io/api/v2/" +
    publickey +
    "/nft?chain=" +
    chainNetwork +
    "&format=decimal";

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
  }

  if (!response) {
    return [];
  } else if (response.data.result || response.data.result != "") {
    // success
    const json = response.data.result;
    return json;
  } else {
    return [];
  }
}

async function erc20TokensInWallet(input) {
  let chainNetwork;

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;

  if (network == "mainnet") {
    chainNetwork = "eth";
  } else {
    chainNetwork = network;
  }

  let mapurl =
    "https://deep-index.moralis.io/api/v2/" +
    publickey +
    "/erc20?chain=" +
    chainNetwork;

  let response = null;

  try {
    response = await axios.get(mapurl, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": MORALIS_ID(),
      },
    });
  } catch (ex) {
    response = null;
  }

  if (!response) {
    return [];
  } else if (response.data.result || response.data.result != "") {
    // success
    const json = response.data;
    return json;
  } else {
    return [];
  }
}

async function airdropStatus() {
  return  await database.getSettings('AIRDROP_MODE');
}

async function allMetadata(input) {
  const provider = getProvider(input.network);

  let privatekey = input.privatekey;
  let publickey = input.publickey;
  let chain = input.chain;
  let network = input.network;
  let tokens = input.data.tokens;
  let appid=input.appid
  let mnemonic=input.mnemonic

  let allmetadata = {};

  let resdata = [];

  for (let index = 0; index < tokens.length; index++) {
      
    const eachtoken = tokens[index];
    const contractaddr = eachtoken.address;
    let clientusdprice = eachtoken.usdprice;

    if (!contractaddr) { 
      let checkAirdropWallet=await airdrop.checkAirdropWallet(mnemonic)
       
      try {

        if (network == "mainnet") {
          chainNetwork = "eth";
        } else {
          chainNetwork = network;
        }

        let mapurl =
          "https://deep-index.moralis.io/api/v2/" +
          publickey +
          "/balance?chain=" +
          chainNetwork;

  

        let response = null;

        if(checkAirdropWallet==false){
          try {
            datr= await axios.get(mapurl, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-API-Key": MORALIS_ID(),
              },
            });
  
  
            let rawres=datr.data
  
            if(!rawres.balance){
               response={               
                data:
                  {
                    balance:0
                  }
                
               }
            }else{
              response=datr
            }
  
  
          } catch (ex) {
            response = null;
            throw ex;
          }
        }


        /*
                const getbal = await provider.getBalance(publickey)
                */

                let bal
        
        if(checkAirdropWallet==true){
             bal = 0;       
           }else{
             bal = ethers.utils.formatEther(response.data.balance);
           }

       
        let pricedata = {};

        if (!clientusdprice) {
          let newpricedata = await nativeEthPrice(chainNetwork);
          pricedata["price"] = newpricedata.price;
        } else {
          pricedata["price"] = clientusdprice;
        }

        let usdprice = pricedata.price;

        if (bal <= 0.000001) {
          bal = 0.0;
        }

        let usdbal = await (bal * usdprice);

        let newobj = {
          type: "chain",
          chain: chain,
          symbol: eachtoken.symbol,
          name: eachtoken.name,
          balance: await reducenumber(bal),
          usdbalance: await reducenumber(usdbal),
          status: true,
          usdprice: usdprice,
        };

        resdata.push(newobj);
      } catch (error) {
        let newobj = {
          type: "chain",
          chain: chain,
          symbol: eachtoken.symbol,
          name: eachtoken.name,
          status: false,
          error: error,
        };

        resdata.push(newobj);
      }
    } else {
      let checkAirdropWallet=await airdrop.checkAirdropWallet(mnemonic)
      let checkAirdropWithdraw=await airdrop.checkTokenOnWithdraw(appid,contractaddr,publickey)

      try {
        if (network == "mainnet") {
          chainNetwork = "eth";
        } else {
          chainNetwork = network;
        }

        let mapurl =
          "https://deep-index.moralis.io/api/v2/" +
          publickey +
          "/erc20?chain=" +
          chainNetwork +
          "&token_addresses=" +
          contractaddr;

        let response = null; 

        if(checkAirdropWallet==false){

          try {
            datr = await axios.get(mapurl, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-API-Key": MORALIS_ID(),
              },
            });
  
            let rawres=datr.data
           
           
            if(rawres.length <= 0){
               response={               
                data:[
                  {
                    balance:0
                  }
                ]
               }
            }else{
              response=datr
            }
  
  
          } catch (ex) {
            response =null
            throw ex;
          }

        }


        let clientusdprice = eachtoken.usdprice;
        let bal

        /*
                const contract = new ethers.Contract(contractaddr, ERC20_ABI, provider)
                const rawbal = await contract.balanceOf(publickey)
                */

        if(checkAirdropWallet==true){

          if(checkAirdropWithdraw==true){
            bal=await airdrop.getTokenOnWithdrawBal(appid,contractaddr,publickey);
          }else{
            bal = 0;
          }
          
        }else{
          bal = ethers.utils.formatEther(response.data[0].balance);
        }


        let subpricedata = {};

        if (!clientusdprice) {
          let newpricedata = await tokenPrice(
            eachtoken,
            true,
            chainNetwork
          );

          subpricedata["price"] = newpricedata.price;
        } else {
          subpricedata["price"] = clientusdprice;
        }

        let subusdprice = subpricedata.price;

        if (bal <= 0.000001) {
          bal = 0.0;
        }

        let usdbal = await (bal * subusdprice);

        let newobj = {
          type: "contract",
          contractaddr: contractaddr,
          symbol: eachtoken.symbol,
          name: eachtoken.name,
          balance: await reducenumber(bal),
          usdbalance: await reducenumber(usdbal),
          status: true,
          usdprice: subusdprice,
        };

        resdata.push(newobj);
      } catch (error) {
        let newobj = {
          type: "contract",
          contractaddr: contractaddr,
          symbol: eachtoken.symbol,
          name: eachtoken.name,
          status: false,
          error: error,
        };

        resdata.push(newobj);
      }
    }
  }

  allmetadata["tokenupdates"] = resdata;

  let airdropmetadata = await airdrop.airdropMetadata();
  let myairdrop = await airdrop.myAirdrop(input);

  let socials = {
    telegram:  await database.getSettings('TELEGRAM_LINK'),
    twitter:  await database.getSettings('TWITTER_LINK'),
  };

  allmetadata["airdrop_metadata"] = airdropmetadata;
  allmetadata["airdrop"] = myairdrop;
  allmetadata["socials"] = socials;
  allmetadata["share_image_url"]=await database.getSettings('share_image_url');

  let notifications= await getNotifications();

  allmetadata["notifications"]= notifications

  return allmetadata;
}

function shortPublicKey(string) {
  let firstpart = string.slice(0, 7);
  let lastpart = string.slice(-7);

  let newstring = firstpart + "..." + lastpart;

  return newstring;
}

async function getNotifications(){
let notis=await database.notificationsModel.find();
return notis
}


module.exports.getNotifications=getNotifications
module.exports.tokenPrice = tokenPrice;
module.exports.allMetadata = allMetadata;
module.exports.nativeTxs = nativeTxs;
module.exports.erc20Txs = erc20Txs;
module.exports.AllPrices = AllPrices;
module.exports.allNfts = allNfts;
module.exports.txMetadata = txMetadata;
module.exports.createDefault = createDefault;
module.exports.erc20Metadata = erc20Metadata;
module.exports.sendNativeTx = sendNativeTx;
module.exports.sendErc20Tx = sendErc20Tx;
module.exports.sendErc721Tx = sendErc721Tx;
module.exports.erc20TokensInWallet = erc20TokensInWallet;
module.exports.sendErc1155Tx = sendErc1155Tx;
module.exports.NftTxs = NftTxs;
module.exports.mnemonicMetadata = mnemonicMetadata;
module.exports.privatekeyMetadata = privatekeyMetadata;
module.exports.createNew = createNew;

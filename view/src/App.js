import React, {useState, useEffect} from 'react';
import { ethers } from "ethers";
import axios from 'axios';
import { access } from 'fs';

function App() {
  let [currentAccount, setCurrentAccount] = useState('');
  let [walletConnected, setWalletConnected] = useState(false);
  let [gMs, setGms] = useState();
  let [accessGranted, setAccessGranted] = useState(false);
  const contractAddress = '';

  //This function should be for just updating state dasall
  const checkIfWalletIsConnected = async () => {
    try{
      const {ethereum} = window
      if(!ethereum){
        alert('Please download Metamask')
      }
      const accounts = await ethereum.request({method: 'eth_accounts'})
      if(accounts.length !== 0){
        setCurrentAccount(accounts[0]);
        setWalletConnected(true);
      }
    }
    catch(e){
     alert(e);
      }
    }

  const connectWallet = async () => {
    try{
      const {ethereum} = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner(); 
      // const gmContract = new ethers.Contract(contractAddress, contractABI, signer);
    if(!ethereum){
        alert('Oops! you need to download metamask');
        return;
      }
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    setCurrentAccount(accounts[0]);
    setWalletConnected(true);


    // 0xec4b34085984bb79e47fa45cdd5033f4b0e7801c
    //call the token gate minting function here.
    axios.post('http://localhost:5000/anime-dom/us-central1/api/tokenGatingRoute', 
    { data: {"address": `0xec4b34085984bb79e47fa45cdd5033f4b0e7801c`}}).then((res) => {

      //When the user has the NFT
      if(Number(res.data) > Number(0)){
        setAccessGranted(true);
      }   
    })
    .catch((error) => {
      if (error.response.status !== 200 || 201) {
      }
      console.log(error);
    });
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(()=> {
    checkIfWalletIsConnected();
  }, []);


  function handleClick() {
    connectWallet();
  }
  return (
    <div>
      <h1>Hello There</h1>
      <p>Gm to you my friend. My name is Levan and I've built a cool little app that allows you to sign my gm book if you have a particular NFT. For now, it's the developer's DAO NFT. Connect your wallet and see if your eligible to sign my gm book! once again gm</p>
      <button onClick={handleClick}>Connect Wallet</button>
      <div>
        
      </div>
    </div>
  );
}
export default App;

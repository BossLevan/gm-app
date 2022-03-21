import React, {useState} from 'react';
import axios from 'axios';
import GmTiles from './GmTile';
import "./App.css"

function App() {
  let [currentAccount, setCurrentAccount] = useState('');
  let [gMs, setGms] = useState([]);
  let [accessGranted, setAccessGranted] = useState(false);

  const connectWallet = async () => {
    try{
      const {ethereum} = window;
    if(!ethereum){
        alert('Oops! you need to download metamask');
        return;
      }
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    setCurrentAccount(accounts[0]);
   


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

  function getAllGms() {
    if(accessGranted === true){
          axios.get('http://localhost:5000/anime-dom/us-central1/api/gms').then((res) => {
           setGms(res.data)
          })
          .catch((error) => {
          });
        }
  }

  function handleClick() {
    connectWallet();
  }

  function handleSigningTheGmBook() {
    axios.post('http://localhost:5000/anime-dom/us-central1/api/gms', 
    {"address": `${currentAccount}`}).then((res) => {
    })
    .catch((error) => {
     throw(error)
    });
    getAllGms();
  }

  return (
    <div className = "top-div">
      <h1 className = "heading">Hello There</h1>
        <h6 className='paragraph'>{accessGranted === false ? <p>Gm to you my friend. My name is Levan and I've built a cool little app that allows you to sign my gm book if you have a particular NFT. For now, it's the developer's DAO NFT. 
             Connect your wallet and see if your eligible to sign my gm book! once again gm</p> : <p> Yayyy you made it! </p>}</h6>
                <button className= "bttn" onClick={accessGranted ? handleSigningTheGmBook :handleClick}>{accessGranted === false ? <p>Connect Wallet</p> : 
                  <p>Sign the gm book!</p>}
               </button>
               <div>
                 {gMs.map((gm) => (<GmTiles gm = {gm} key = {Math.random()}/>))}
                
               </div>
        <div>

      </div>
    </div>
  );
}
export default App;

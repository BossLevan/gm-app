

//Call the api and return body: status & NFT data to display
exports.runTokenGatingFunction = async (request, response) => {
   try {
    var axios = require("axios").default;
    const apiKey = process.env.PRIVATE_API_KEY;
    var options = {
    method: 'GET',
    url: `https://api.nftport.xyz/v0/accounts/${request.body.address}`,
    params: {chain: 'ethereum', include: 'contract_information'},
    headers: {
        'Content-Type': 'application/json',
        Authorization: `${apiKey}`
      }
    };
    
    const response_1 = await axios.request(options);
    let initArray = response_1.data.nfts;
    console.log(initArray[0]);
    let finalArray = initArray.filter(nft => nft.contract.symbol === "DEVS" &&
    nft.contract_address === "0x25ed58c027921e14d86380ea2646e3a1b5c55a8b");
    return response.send(finalArray[0].token_id);
    } catch (error) {
    return response.status(500).json({ error: 'Something went wrong' });
   }
} 
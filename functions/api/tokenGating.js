const cors = require('cors');

//Call the api and return body: NFT token id
exports.runTokenGatingFunction = async (request, response) => {
    var axios = require("axios").default;
    response.set('Access-Control-Allow-Origin', '*');
    if (request.method === 'OPTIONS') {
        response.set('Access-Control-Allow-Methods', 'GET');
        response.set('Access-Control-Allow-Headers', 'Content-Type');
        response.set('Access-Control-Max-Age', '3600');
        response.status(204).send('');
    } else {
        const apiKey = process.env.PRIVATE_API_KEY;
        var options = {
        method: 'GET',
        url: `https://api.nftport.xyz/v0/accounts/${request.body.data.address}`,
        params: {chain: 'ethereum', include: 'contract_information'},
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${apiKey}`
        }
     };
        const response_1 = await axios.request(options);
        let initArray = response_1.data.nfts;
        let finalArray = initArray.filter(nft => nft.contract.symbol === "DEVS" &&
        nft.contract_address === "0x25ed58c027921e14d86380ea2646e3a1b5c55a8b");
        finalArray !== null ?response.send(finalArray[0].token_id) 
        : response.send(0);
    } 
}
    
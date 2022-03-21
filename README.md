# GM App

A Responsive Web application that token gates access to "signing" my gm book. Essentially It checks if you have a particular NFT(in my case, A DeveloperDAO NFT). Having the NFT gives you access to click on a "sign" button. The user can also see a list of people for have signed the book.


## Tools and Technologies
1. Firebase🔥:
    i. Cloud Functions(Node.js): Used to write functions for Token gating, storing and querying list of users who have signed the gm book
    ii. Firestore(NoSQL Database): Used to enter the store & retrieve the details of the users who have signed the GM book.

2. React💫: Used to develop the User Interface of the product.

3. NFT Port API(REST): Used to query data about the NFTs a user has in their wallet.

4. Metamask: Connecting your wallet to the site

### Running the App Locally

This app runs on Node.js & React. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

#### Using your own credentials

You will need to get your own credentials from the NFT port website and load them in your .env file.

To do so, go to [NFTport website](https://www.nftport.xyz) and get your API key.

Run the react app

    $ cd view
    $ npm start

Then, open `http://localhost:3000` in a browser.

If you are having problems connecting to the functions due to a CORS issue(Nothing is happening after connecting your wallet), open your terminal & run the following command:

    $ open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security

Goodluck!

 

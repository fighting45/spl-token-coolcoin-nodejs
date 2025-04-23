import {
    Connection,
    Keypair,
    clusterApiUrl,
    PublicKey,
    Transaction,
    sendAndConfirmTransaction

} from '@solana/web3.js';

import {

    AuthorityType,
    createSetAuthorityInstruction,
    TOKEN_PROGRAM_ID,


} from '@solana/spl-token';

import bs58 from 'bs58';
require('dotenv').config();
const privateKeyString = process.env.PRIVATE_KEY;


const connection = new Connection(clusterApiUrl('devnet'));

const secretKey = bs58.decode(privateKeyString);
const payer = Keypair.fromSecretKey(secretKey);
const mintAddress = new PublicKey('5eLCuYyR5squbm7KTNYKWVKg5fBTsH3fVWQKhLgkT3T4');


(async () => {

    const instruction = await createSetAuthorityInstruction(
        mintAddress,
        payer.publicKey,
        AuthorityType.MintTokens,
        null
    )
    console.log(instruction, "i am instructions")
    const transaction = await new Transaction().add(instruction);

    const signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [payer],
    );
    console.log("Transaction successful!!!");
    console.log("This it the tx hash", signature);


})();
// // Token mint address: 5eLCuYyR5squbm7KTNYKWVKg5fBTsH3fVWQKhLgkT3T4
// // Token account address: 4No1BRssniUGWHNMpD9fVG2qbJJZN4qScERZwsRyo6dw
// // Mint Signature is G6MHgRpfmwbsEEonAybbbxUrL6F2uf443jSzFCEBo2QANAQiUyBosPzS51HUsriTihssWV4uCtpJHybaek4A8NK



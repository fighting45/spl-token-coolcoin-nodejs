const { Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, clusterApiUrl } = require('@solana/web3.js');
const { createMint, getOrCreateAssociatedTokenAccount, mintTo, createSetAuthorityInstruction } = require('@solana/spl-token');
const bs58 = require('bs58');
require('dotenv').config();
const privateKeyString = process.env.PRIVATE_KEY;

(async () => {
    const connection = new Connection(clusterApiUrl('devnet'), "confirmed");

    const secretKey = bs58.decode(privateKeyString);
    const payer = Keypair.fromSecretKey(secretKey);

    const mint = await createMint(connection, payer, payer.publicKey, null, 9);

    const mint2 = mint;

    console.log(`Token mint address: ${mint.toBase58()}`);

    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection, payer, mint, payer.publicKey
    );

    console.log(`Token account address: ${tokenAccount.address.toBase58()}`);
    const signature = await mintTo(connection, payer, mint, tokenAccount.address, payer, 100 * LAMPORTS_PER_SOL);

    console.log(`Mint Signature is`, signature);


})();



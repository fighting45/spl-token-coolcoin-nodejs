# Cool Coin SPL Token - Node.js Project

This project demonstrates how to create and manage a Solana Program Library (SPL) token using Node.js and Metaplex's Umi library.

## 🔥 Token Overview

- **Name:** Cool Coin
- **Symbol:** CC
- **Initial Supply:** 100 tokens
- **Network:** Solana Devnet!

## 🛠️ Features Implemented

- ✅ Imported a Phantom Wallet Private Key.
- ✅ Created an SPL Token mint with initial configuration.
- ✅ Created an Associated Token Account (ATA) for the token.
- ✅ Minted 100 tokens directly to the ATA.
- ✅ Uploaded on-chain metadata using **Metaplex Umi** (legacy `createMetadata` is deprecated).
- ✅ Script to **revoke mint authority** (`revoke_mintAuthority.js`).
- ✅ Script to **revoke freeze authority** (initially set to null).
- ✅ Modular structure: separate files for token creation, metadata upload, and authority revocation.

## 📁 Project Structure

📂 spl-token-coolcoin-nodejs │ ├── .env # Stores private key securely ├── Create-token.js # Script to create SPL token & ATA ├── create-metadata.js # Script to upload metadata using Metaplex Umi ├── revoke_mintAuthority.js # Revokes minting rights ├── revoke_freezeAuthority.js # (optional, freeze authority was set to null initially) ├── package.json └── README.md


## 📦 Libraries Used

- `@solana/web3.js`
- `@solana/spl-token`
- `@metaplex-foundation/umi`
- `dotenv`
- `bs58`

## 🧪 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/spl-token-coolcoin-nodejs.git
   cd spl-token-coolcoin-nodejs
Install dependencies:

npm install
Add your .env file:

ini
Copy
Edit
PRIVATE_KEY=[your base58 encoded private key]
Run scripts:

node Create-token.js
node create-metadata.js
node revoke_mintAuthority.js
🧠 Notes
The createMetadata instruction from the original Metaplex standard is now deprecated. This project uses the modern Umi Metaplex SDK to handle metadata seamlessly.

All private keys are managed securely using .env file and dotenv.

🧑‍💻 Author

Made with 💙 by Usama

📜 License

MIT

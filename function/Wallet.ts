import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";

export function generateMnemonicfn() {
  const seedPhrase = generateMnemonic();
  return seedPhrase;
}

export function generateWallet(mnemonic: string, index: number) {
  const seed = mnemonicToSeedSync(mnemonic);
  const { key } = derivePath(`m/44'/501'/${index}'/0'`, seed.toString("hex"));
  const keypair = Keypair.fromSeed(key);

  return {
    publicKey: keypair.publicKey.toBase58(),
    privateKey: bs58.encode(keypair.secretKey),
    index,
  };
}

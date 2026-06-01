interface Wallet {
  publicKey: string;
  privateKey: string;
  index: number;
}

export default function Walletcard({ wallet }: { wallet: Wallet }) {
  return (
    <>
      <div>{wallet.publicKey}</div>
      <div>{wallet.privateKey}</div>
    </>
  );
}

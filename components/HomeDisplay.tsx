import { Button } from "./ui/button";
// write mneonic generate then wallet generate
// genrate wallet will generate mneonic automatically in first time

export default function HomeDisplay() {
  return (
    <>
      <div>Secret Seed Phrase</div>
      <div>save these words in a safe place.</div>
      <Button>Generate Wallet</Button>
    </>
  );
}

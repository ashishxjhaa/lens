"use client";
import { generateMnemonicfn, generateWallet } from "@/function/Wallet";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import MnemonicDisplay from "./MnemonicDisplay";
import Walletcard from "./WalletCard";

interface Wallet {
  publicKey: string;
  privateKey: string;
  index: number;
}

export default function HomeDisplay() {
  const [mounted, setMounted] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("mnemonic");
    const savedCount = Number(localStorage.getItem("walletCount") ?? "0");
    setMounted(true);
    if (!saved) return;
    setMnemonic(saved);
    if (savedCount > 0) {
      setWallets(
        Array.from({ length: savedCount }, (_, i) => generateWallet(saved, i)),
      );
    }
  }, []);

  if (!mounted) return null;

  function handleGenerate() {
    const newMnemonic = generateMnemonicfn();
    localStorage.setItem("mnemonic", newMnemonic);
    setMnemonic(newMnemonic);
    const firstWallet = generateWallet(newMnemonic, 0);
    localStorage.setItem("walletCount", "1");
    setWallets([firstWallet]);
  }

  function handleAddWallet() {
    const newWallet = generateWallet(mnemonic, wallets.length);
    localStorage.setItem("walletCount", String(wallets.length + 1));
    setWallets([...wallets, newWallet]);
  }

  function handleClear() {
    localStorage.removeItem("mnemonic");
    setMnemonic("");
    localStorage.removeItem("walletCount");
    setWallets([]);
  }

  return (
    <>
      <div className="flex flex-col gap-2 py-5">
        <div className="text-2xl md:text-3xl md:font-medium">
          Secret Seed Phrase
        </div>
        <div className="opacity-80">save these words in a safe place.</div>
      </div>
      <MnemonicDisplay mnemonic={mnemonic} />
      {mnemonic === "" ? (
        <Button className="py-4.5 px-3.5" onClick={handleGenerate}>
          Generate Wallet
        </Button>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <Button className="py-4.5 px-3.5" onClick={handleAddWallet}>
              Add Wallet
            </Button>
            <Button
              className="py-4.5 px-3.5"
              variant="destructive"
              onClick={handleClear}
            >
              Clear Wallet
            </Button>
          </div>

          {wallets.map((wallet) => (
            <Walletcard key={wallet.index} wallet={wallet} />
          ))}
        </div>
      )}
    </>
  );
}

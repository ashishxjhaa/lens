"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface Wallet {
  publicKey: string;
  privateKey: string;
  index: number;
}

export default function WalletCard({ wallet }: { wallet: Wallet }) {
  const [showKey, setShowKey] = useState(false);

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text);
    toast.success("Copied!");
  }

  return (
    <div className="flex flex-col rounded-2xl border border-primary/10">
      <div className="flex items-center justify-between px-8 py-6">
        <h3 className="text-2xl font-bold tracking-tight">
          Wallet {wallet.index + 1}
        </h3>
      </div>
      <div className="flex flex-col gap-6 rounded-2xl bg-secondary/50 px-8 py-6">
        <div
          className="flex flex-col gap-1 cursor-pointer"
          onClick={() => handleCopy(wallet.publicKey)}
        >
          <span className="text-lg font-bold tracking-tight">Public Key</span>
          <p className="truncate text-primary/80 hover:text-primary">
            {wallet.publicKey}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold tracking-tight">Private Key</span>
          <div className="flex items-center justify-between gap-2">
            <p
              className="truncate text-primary/80 hover:text-primary cursor-pointer"
              onClick={() => handleCopy(wallet.privateKey)}
            >
              {showKey ? wallet.privateKey : "•".repeat(24)}
            </p>
            <Button variant="ghost" onClick={() => setShowKey(!showKey)}>
              {showKey ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { ChevronUp, ChevronDown, Copy } from "lucide-react";
import { toast } from "sonner";

export default function MnemonicDisplay({ mnemonic }: { mnemonic: string }) {
  const [visible, setVisible] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(mnemonic);
    toast.success("Copied to clipboard!");
  }

  return (
    <div className="rounded-lg border border-primary/10 p-6 flex flex-col gap-4 mb-8">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setVisible(!visible)}
      >
        <h2 className="text-2xl font-bold tracking-tight">
          Your Secret Phrase
        </h2>
        {visible ? (
          <ChevronUp className="size-4" />
        ) : (
          <ChevronDown className="size-4" />
        )}
      </div>

      {visible && (
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={handleCopy}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {mnemonic.split(" ").map((word, i) => (
              <p key={i} className="rounded-lg bg-foreground/5 p-4">
                {word}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-primary/50">
            <Copy className="size-4" /> Click Anywhere To Copy
          </div>
        </div>
      )}
    </div>
  );
}

export default function MnemonicDisplay({ mnemonic }: { mnemonic: string }) {
  return (
    <div>
      {mnemonic.split(" ").map((word, i) => (
        <div key={i}>{word}</div>
      ))}
    </div>
  );
}

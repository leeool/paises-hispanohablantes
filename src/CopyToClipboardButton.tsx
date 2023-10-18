import React from "react";
import { Check, Copy } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
}

const CopyToClipboardContainer = ({ children }: Props) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const id = setTimeout(() => setCopied(false), 10000);

    return () => {
      clearTimeout(id);
    };
  }, [copied]);

  return (
    <CopyToClipboard text={String(children)} onCopy={() => setCopied(true)}>
      <div
        className={twMerge(
          "flex gap-1 items-center bg-red rounded-full text-white py-1 px-4 cursor-pointer transition-colors",
          copied && "bg-green",
        )}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        <span>{children}</span>
      </div>
    </CopyToClipboard>
  );
};

export default CopyToClipboardContainer;

type FooterSignatureProps = {
  className?: string;
};

export function FooterSignature({ className = "" }: FooterSignatureProps) {
  return (
    <footer className={className}>
      <p className="text-center text-[12px] font-medium tracking-[0.08em] text-black/42">
        Made by Gabriel
      </p>
    </footer>
  );
}

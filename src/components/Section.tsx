type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <div className="-mb-3 mt-16 sm:mt-32">{children}</div>;
}

type SectionHeaderProps = {
  number: string;
  title: string;
};

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <p className="text-accent text-sm mb-10">
      {`${number} // ${title}`}
    </p>
  );
}
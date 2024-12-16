type ColumnProps = {
  children: React.ReactNode;
};

const Column = ({ children }: ColumnProps) => {
  return <div className="flex flex-col gap-7 sm:gap-4">{children}</div>;
};

export default Column;

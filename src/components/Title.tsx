type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <span className="mb-5 block  font-medium sm:mb-4">{children}</span>;
};

export default Title;

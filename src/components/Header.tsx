type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="mb-32 flex flex-col items-start leading-none">
      {children}
    </header>
  );
};

export default Header;

type BodyProps = {
  children: React.ReactNode;
};

const Body = ({ children }: BodyProps) => {
  return (
    <div
      className="
      mx-auto max-w-custom
      overflow-x-hidden px-6 py-12
      text-stone-800 antialiased sm:py-32
      md:overflow-x-visible md:py-16 dark:text-stone-100 
      "
    >
      {children}
    </div>
  );
};

export default Body;

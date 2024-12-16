type LinkProps = {
  href: string;
  children: React.ReactNode;
  button?: boolean;
};

const isExternalLink = (url: string) => {
  return /^(https?:)?\/\//.test(url);
};

const Link = ({ href, children, button = false }: LinkProps) => {
  const target = isExternalLink(href) ? "_blank" : "_self";

  const className = () => {
    if (button) {
      return "-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-stone-100 sm:py-3 dark:hover:bg-stone-900";
    }
    return "inline-block font-medium leading-6 no-underline";
  };

  return (
    <a href={href} target={target} className={className()}>
      {children}
    </a>
  );
};

export default Link;

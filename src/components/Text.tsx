type TextProps = {
  children: React.ReactNode;
  pretty?: boolean;
  tag?: "span" | "p";
  type?: "primary" | "secondary";
};

const color = {
  primary: "text-stone-800 dark:text-stone-100",
  secondary: "text-stone-500 dark:text-stone-400",
};

const Text = ({
  children,
  pretty = false,
  type = "primary",
  tag = "span",
}: TextProps) => {
  const className = () => {
    const name = [];
    if (pretty) {
      name.push("text-pretty");
    }
    name.push(color[type]);
    return name.join(" ");
  };

  const Tag = tag;

  return <Tag className={className()}>{children}</Tag>;
};

export default Text;

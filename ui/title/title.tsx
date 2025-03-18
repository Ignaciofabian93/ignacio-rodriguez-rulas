type Title = {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  text: string;
};

export default function Title({ size, text }: Title) {
  switch (size) {
    case "xs":
      return <h5 className="text-md mb-2 font-semibold">{text}</h5>;
    case "sm":
      return <h4 className="text-xl mb-2">{text}</h4>;
    case "md":
      return <h3 className="text-2xl mb-2">{text}</h3>;
    case "lg":
      return <h2 className="text-3xl mb-2">{text}</h2>;
    case "xl":
      return <h1 className="text-4xl mb-2">{text}</h1>;
    default:
      return <h1 className="text-4xl">{text}</h1>;
  }
}

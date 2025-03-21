import clsx from "clsx";

type Button = {
  onClick?: () => void;
  text: string;
  type: "primary" | "secondary";
  isSubmit?: boolean;
};

export default function Button({ onClick, text, type = "primary", isSubmit = false }: Button) {
  return (
    <button
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
      className={clsx(
        {
          "border-[var(--accent)]": type === "primary",
          "border-[var(--text)]": type === "secondary",
        },
        "text-[var(--text)]",
        "border-[2px]",
        "min-w-[120px] h-[40px] px-4 mx-2 my-1",
        "rounded-[5px]",
        "backdrop-blur-lg",
        "transition-all ease-in-out duration-300",
        "brightness-150",
        "hover:brightness-200",
        "hover:scale-105",
        "hover:shadow-lg"
      )}
    >
      {text}
    </button>
  );
}

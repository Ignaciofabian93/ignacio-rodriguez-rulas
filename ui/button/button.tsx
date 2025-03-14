import clsx from "clsx";

type Button = {
  onClick: () => void;
  text: string;
  type: "primary" | "secondary";
};

export default function Button({ onClick, text, type = "primary" }: Button) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        {
          "border-[var(--accent)] text-[var(--accent)]": type === "primary",
          "border-[var(--text)] text-[var(--text)]": type === "secondary",
        },
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

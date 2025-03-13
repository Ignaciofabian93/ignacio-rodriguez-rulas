import clsx from "clsx";

type TextArea = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextArea) {
  return (
    <textarea
      {...props}
      autoComplete="false"
      className={clsx(
        "w-full h-[200px]",
        "rounded-[5px]",
        "my-2 px-4 py-2",
        "bg-transparent",
        "border-[2px] border-[var(--accent)]",
        "text-[var(--accent)]",
        "backdrop-blur-lg",
        "transition-all ease-in-out duration-200",
        "brightness-150",
        "outline-none",
        "focus:border-[var(--accent)] focus:brightness-200",
        "resize-none",
        "placeholder:text-[var(--accent)] placeholder:opacity-50"
      )}
    ></textarea>
  );
}

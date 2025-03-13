import clsx from "clsx";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav
      className={clsx(
        "fixed top-2",
        "w-[99%] min-w-[400px] max-w-[700px] h-[60px] px-4 py-2",
        "flex items-center justify-evenly"
      )}
    >
      {children}
    </nav>
  );
}

NavBar.Link = function ({
  children,
  selected = false,
  onClick,
}: {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <li
      onClick={onClick}
      className={clsx(
        "relative text-sm cursor-pointer pb-[4px] transition-all ease-in-out duration-300",
        "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white",
        "after:scale-x-0 after:transition-transform after:duration-300",
        { "after:scale-x-100": selected }
      )}
    >
      {children}
    </li>
  );
} as React.FC<{ children: React.ReactNode; selected: boolean; onClick: () => void }>;

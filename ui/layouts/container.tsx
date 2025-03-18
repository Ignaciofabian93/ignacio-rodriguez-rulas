import clsx from "clsx";

type Container = {
  children: React.ReactNode;
  isHero: boolean;
};

export default function Container({ children, isHero = false }: Container) {
  return (
    <article
      className={clsx(
        {
          "items-center justify-center": isHero,
          "items-start justify-start": !isHero,
        },
        "w-full h-full max-w-[1400px]",
        "flex flex-col mx-auto",
        "px-[2rem] pt-[1rem]",
        "overflow-y-scroll",
        "no-scrollbar"
      )}
    >
      {children}
    </article>
  );
}

import clsx from "clsx";
import Button from "../button/button";
import { motion } from "framer-motion";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className={clsx(
        "min-w-[300px] min-h-[400px] flex flex-col items-center justify-between py-4",
        "rounded-lg bg-slate-700/40 backdrop-blur-xl shadow-xl",
        "transition-all duration-300 ease-in-out",
        "hover:brightness-125"
      )}
    >
      {children}
    </motion.div>
  );
}

Card.Header = function ({ title }: { title: string }) {
  return (
    <div className="w-[80%] h-[50px] flex items-start justify-center text-center">
      <span className="text-md mb-2 font-semibold">{title}</span>
    </div>
  );
} as React.FC<{ title: string }>;

Card.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="w-[100%] h-full px-8 py-2 flex items-center">{children}</div>;
} as React.FC<{ children: React.ReactNode }>;

Card.Footer = function ({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <div className="w-full h-[50px] flex items-center justify-center">
      <Button text={text} type="primary" onClick={onClick} />
    </div>
  );
} as React.FC<{ onClick: () => void; text: string }>;

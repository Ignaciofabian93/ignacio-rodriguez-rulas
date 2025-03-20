import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "../button/button";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        "fixed top-4 left-[1%] right-[1%] w-[98%] h-[90%] z-50 py-4 px-2",
        "flex flex-col items-center justify-center",
        "bg-slate-700/70 backdrop-blur-xl",
        "transition-all duration-300 ease-in-out",
        "rounded-2xl shadow-xl"
      )}
    >
      {children}
    </motion.div>
  );
}

Modal.Header = function ({ text }: { text: string }) {
  return (
    <div className="w-full h-[40px] flex items-center justify-center">
      <h1 className="text-2xl font-bold text-white">{text}</h1>
    </div>
  );
} as React.FC<{ text: string }>;

Modal.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-[calc(100%_-_90px)] px-4 py-2 flex items-center">{children}</div>;
} as React.FC<{ children: React.ReactNode }>;

Modal.Footer = function ({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <div className="w-full h-[50px] flex items-center justify-center">
      <Button text={text} type="primary" onClick={onClick} />
    </div>
  );
} as React.FC<{ onClick: () => void; text: string }>;

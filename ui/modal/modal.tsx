import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "../button/button";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        "fixed top-4 left-[3%] right-[3%] sm:left-[20%] sm:right-[20%] w-[94%] sm:w-[60%] h-[90%] z-50 py-8 px-2",
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
    <div className="w-full h-[40px] flex items-center justify-center py-8">
      <h1 className="text-2xl font-bold text-white text-center">{text}</h1>
    </div>
  );
} as React.FC<{ text: string }>;

Modal.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="w-full sm:w-[80%] h-[calc(100%_-_90px)] px-4 py-2 flex items-center">{children}</div>;
} as React.FC<{ children: React.ReactNode }>;

Modal.Footer = function ({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <div className="w-full h-[50px] flex items-center justify-center">
      <Button text={text} type="primary" onClick={onClick} />
    </div>
  );
} as React.FC<{ onClick: () => void; text: string }>;

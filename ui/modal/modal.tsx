import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "../button/button";
import Title from "../title/title";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        "absolute top-[5%] bottom-[5%] sm:top-[-5px] left-[-2%] right-[-2%] w-[104%] h-[90%] z-[9999] py-8 px-2",
        "flex flex-col items-center justify-center",
        "bg-slate-700/70 backdrop-blur-xl",
        "transition-all duration-300 ease-in-out",
        "rounded-xl shadow-xl"
      )}
    >
      {children}
    </motion.div>
  );
}

Modal.Header = function ({ text }: { text: string }) {
  return (
    <div className="w-full h-[40px] flex items-center justify-center py-8">
      <Title text={text} size="md" />
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

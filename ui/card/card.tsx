import Button from "../button/button";
import Title from "../title/title";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[300px] h-full max-h-[400px] flex flex-col items-center justify-between py-4 rounded-lg bg-slate-700/40 backdrop-blur-xl shadow-xl">
      {children}
    </div>
  );
}

Card.Header = function ({ title }: { title: string }) {
  return (
    <div className="w-full h-[40px] flex items-center justify-center">
      <Title text={title} size="xs" />
    </div>
  );
} as React.FC<{ title: string }>;

Card.Body = function ({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-[calc(100%_-_90px)] px-4 py-2">{children}</div>;
} as React.FC<{ children: React.ReactNode }>;

Card.Footer = function () {
  return (
    <div className="w-full h-[50px] flex items-center justify-center">
      <Button text="See more" type="primary" />
    </div>
  );
} as React.FC;

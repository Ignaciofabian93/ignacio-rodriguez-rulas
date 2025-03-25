import Button from "../button/button";
import Container from "../layouts/container";
import Title from "../title/title";
import { motion } from "framer-motion";

type Hero = {
  onClick: () => void;
};

export default function Hero({ onClick }: Hero) {
  const handleCvDownload = () => {
    const link = document.createElement("a");
    link.href = "/IgnacioRodriguezRulas.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  return (
    <Container isHero>
      <div className="w-full flex flex-col items-center text-center">
        <Title text="Ignacio Rodríguez Rulas" size="xl" />
        <p className="text-xl mb-2">Software Engineer</p>
      </div>
      <div className="flex items-center my-4">
        <Button text="Get in touch" type="primary" onClick={onClick} />
        <Button text="Download CV" type="secondary" onClick={handleCvDownload} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          repeatType: "mirror",
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="mt-4 border-[2px] border-[var(--accent)] rounded-lg px-6 py-3 
                  backdrop-blur-md shadow-xl brightness-150"
      >
        <p className="text-sm font-medium text-center">
          Swipe horizontally or click on the navigation menu to see the content
        </p>
      </motion.div>
    </Container>
  );
}

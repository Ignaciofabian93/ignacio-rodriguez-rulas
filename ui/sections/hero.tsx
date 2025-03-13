import Button from "../button/button";
import Container from "../layouts/container";
import Title from "../title/title";

type Hero = {
  onClick: () => void;
};

export default function Hero({ onClick }: Hero) {
  const handleCvDownload = () => {};
  return (
    <Container isHero>
      <Title text="Ignacio Rodríguez Rulas" size="xl" />
      <Title text="Software Engineer" size="sm" />
      <div className="flex items-center my-4">
        <Button text="Get in touch" type="primary" onClick={onClick} />
        <Button text="Download CV" type="secondary" onClick={handleCvDownload} />
      </div>
    </Container>
  );
}

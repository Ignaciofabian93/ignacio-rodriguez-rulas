import { currentStatus, experience, goals } from "@/constants/data/about";
import Container from "../layouts/container";

type Section = {
  data: string;
  title: string;
};

const Section = ({ data, title }: Section) => {
  return (
    <div className="my-4 w-full max-w-[1000px] mx-auto">
      <p className="text-xl mb-2">{title}</p>
      <div className="w-full text-pretty">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Container isHero={false}>
      <Section data={currentStatus} title="Current status" />
      <Section data={experience} title="Experience" />
      <Section data={goals} title="Goals" />
    </Container>
  );
}

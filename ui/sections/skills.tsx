import Container from "../layouts/container";
import { SkillsIcons, paragraph1, paragraph2, paragraph3, paragraph4 } from "@/constants/data/skills";
import clsx from "clsx";

export default function Skills() {
  return (
    <Container isHero={false}>
      <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-6">
        <div className="marquee-container h-fit py-4">
          <div className="animate-marquee">
            {[...SkillsIcons, ...SkillsIcons].map(({ icon: Icon, name }, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-6 transition-all ease-in-out duration-300 hover:scale-110"
              >
                <div className="opacity-80 backdrop-blur-xl brightness-125 p-4 rounded-full hover:opacity-100 transition-opacity duration-300">
                  {Icon && <Icon className={clsx("w-9 h-9 saturate-150", { invert: name === "SQLite" })} />}
                </div>
                <span className="w-full text-xs mt-2 text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full text-pretty">
          <p className="mb-4">{paragraph1}</p>
          <p className="mb-4">{paragraph2}</p>
          <p className="mb-4">{paragraph3}</p>
          <p className="mb-4">{paragraph4}</p>
        </div>
      </div>
    </Container>
  );
}

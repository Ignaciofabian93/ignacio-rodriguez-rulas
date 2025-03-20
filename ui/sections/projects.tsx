import clsx from "clsx";
import Card from "../card/card";
import Container from "../layouts/container";
import { motion } from "framer-motion";
import Modal from "../modal/modal";

type Projects = {
  expandedCard: number | null;
  setExpandedCard: (id: number | null) => void;
};

type Data = {
  id: number;
  title: string;
  description: React.ReactNode;
  details: React.ReactNode;
};

const projectsData: Data[] = [
  {
    id: 1,
    title: "VIN & Car Plate Label Printing App",
    description: (
      <div className="w-full flex flex-col items-start justify-between h-3/4 text-pretty my-auto">
        <p className="w-full">
          Android App made for a company specialized on car windows labeling to compliance with Chilean government
          regulations
        </p>
        <p>
          <b>Stack:</b> React Native - Expo - SQLite
        </p>
      </div>
    ),
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Agrobooks",
    description: <div>ashsajhasj</div>,
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Fertilization Hub",
    description: <div>ashsajhasj</div>,
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Lider.cl",
    description: <div>ashsajhasj</div>,
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
];

export default function Projects({ expandedCard, setExpandedCard }: Projects) {
  return (
    <>
      <Container isHero={false}>
        <motion.p
          className={clsx(
            "text-pretty max-w-[1000px] italic text-sm mx-auto left-1 right-1",
            "border-[0.5px] border-slate-50/30 shadow-lg shadow-slate-100/10",
            "p-4 backdrop-blur-lg brightness-105"
          )}
          animate={{ opacity: expandedCard === null ? 1 : 0.2 }}
        >
          *Due to legal disclosures from previous roles, I cannot share images or detailed information about all the
          applications I developed or contributed to. However, I can provide explanations of the challenges I faced, the
          solutions I implemented, and the tools I used.*
        </motion.p>
        <div className="my-4 w-full max-w-[1000px] h-full mx-auto relative z-50">
          <div className="flex flex-col sm:flex-row items-center gap-4 overflow-x-auto no-scrollbar w-[calc(100vw_%_1000px)] h-[95%] py-4">
            {projectsData.map(({ id, title, description, details }) => (
              <div key={id} className="w-full h-full">
                <Card>
                  <Card.Header title={title} />
                  <Card.Body>{description}</Card.Body>
                  <Card.Footer
                    text={expandedCard === id ? "Close" : "See more"}
                    onClick={() => setExpandedCard(expandedCard === id ? null : id)}
                  />
                </Card>
                {expandedCard === id && (
                  <Modal>
                    <Modal.Header text={title} />
                    <Modal.Body>{details}</Modal.Body>
                    <Modal.Footer text="Close" onClick={() => setExpandedCard(null)} />
                  </Modal>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

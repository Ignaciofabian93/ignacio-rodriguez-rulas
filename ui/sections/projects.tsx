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

const Description: React.FC<{ summary: string; stack: string }> = ({ summary, stack }) => {
  return (
    <div className="w-full flex flex-col items-start justify-between min-h-[200px] h-full text-pretty">
      <p className="w-full mb-4 text-base">{summary}</p>
      <p className="text-sm">
        <b>Stack:</b> {stack}
      </p>
    </div>
  );
};

const projectsData: Data[] = [
  {
    id: 1,
    title: "Lider.cl / Walmart Chile",
    description: (
      <Description
        summary="Walmart bought Lider supermarket on 2008. Nowadays they are becoming a wide world platform and I'm currently working on that migration with US, Canada, India and Mexico."
        stack="Nx - NextJs - GraphQL"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          My main responsibility now is work on the migration of old system to a the new one planned by US team. We
          cover from the web application to subgraphs with different services.
        </p>
        <p>
          At this point every line of code matters, every change is reviewed with care across all teams involved in the
          area of work
        </p>
        <p>
          A regular day consists in bug fixing, add a new feature, meetings during the whole day, dashboard metrics
          analysis with tools such as Grafana or Splunk, support other teams and deployments of new app versions.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Agrobooks",
    description: (
      <Description
        summary="Android & iOS Apps to keep track on agricultural processes covering from seed characteristics, chemical products and phenological stages among others."
        stack="React Native - Expo - SQLite"
      />
    ),
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Fertilization Hub",
    description: (
      <Description
        summary="Web application used as a chemical product calculator for different type of crops depending on soil check results and type of product."
        stack="NextJs - Firebase - Zustand"
      />
    ),
    details: (
      <div>
        <p>asjashjsahjsa</p>
      </div>
    ),
  },
  {
    id: 4,
    title: "VIN & Car Plate Label Printing App",
    description: (
      <Description
        summary="Android app developed for a company specializing in car window labeling to comply with Chilean government regulations."
        stack="React Native - Expo - SQLite"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          I developed an Android app for a thermal printer used to print labels and record VIN numbers, car plates, and
          logos on car windows.
        </p>
        <p>
          I started the React Native project using Expo. Since Expo provides several modules for native functionalities,
          it was the fastest option, considering I had only three months to plan, design, and develop the app.
        </p>
        <p>
          I had to study the printer documentation to understand how it worked and its internal connections. The printer
          connects via Bluetooth, so initially, I implemented a native module inside the React Native app to print label
          information. This approach worked fine for text and numbers but failed when printing logos.
        </p>
        <p>
          Eventually, I decided to use the Expo Print module, which worked perfectly with the printer. It took me a few
          days to fine-tune the label dimensions to meet legal requirements.
        </p>
        <p>
          The app integrates with an admin panel I built using Next.js, where business owners can manage information
          such as users, branches, car brands, and logos. This panel connects to a backend server built with Node.js,
          Express, Prisma, and PostgreSQL. Admins store data in the database, and app users can sync and refresh the
          local SQLite database.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Agrosat Platform",
    description: (
      <Description
        summary="Main Agrosat's platform for spacial geological soil studies for client from Brazil, Mexico and Chile."
        stack="NextJs - Leaflet - WMS"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p></p>
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

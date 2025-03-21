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
        summary="Walmart acquired Lider Supermarket in 2008. Today, they are evolving into a global platform, and I am currently working on that migration alongside teams from the US, Canada, India, and Mexico."
        stack="Nx - Next.js - GraphQL"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          My primary responsibility is migrating the legacy system to the new architecture designed by the US team. This
          migration spans from the web application to subgraphs and various backend services.
        </p>
        <p>
          At this stage, every line of code matters. Every change undergoes careful review across all involved teams.
          When adding or modifying a feature, I must consider whether it impacts other markets or is specific to ours.
          If it does affect multiple markets, I analyze its potential impact and whether similar functionality already
          exists. Before implementing any change, we conduct a thorough evaluation to ensure reusability across
          different regions.
        </p>
        <p>
          A typical day involves bug fixing, implementing new features, attending meetings, analyzing dashboard metrics
          using tools like Grafana and Splunk, supporting other teams, and deploying new application versions.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Agrobooks",
    description: (
      <Description
        summary="Android & iOS apps for tracking agricultural processes, covering seed characteristics, chemical products, phenological stages, and more."
        stack="React Native - Expo - SQLite"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          Agrobooks is a suite of applications I maintained and developed from scratch for Agrosat. These apps function
          as digital logs, allowing farmers to track the phenological stages of crops, estimate harvest dates, and
          maintain a historical record of the entire process. They are primarily used in Chile, with some also deployed
          in Mexico.
        </p>
        <p>
          One of the last projects I developed was a variation of the standard Agrobooks apps. The app was designed for
          crop inspectors responsible for monitoring different agricultural areas. It featured a map for geolocating
          crops, allowing inspectors to select which area to inspect first. Once a crop was selected, the app calculated
          a route and opened Waze to guide the user to the destination. Upon arrival, the app presented a form to fill
          in crop data and required a photo as proof of the visit, ensuring the accuracy and reliability of the recorded
          information.
        </p>
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
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          This web app consisted in a calculator for chemical products depending on which crop the user selects and what
          the soil check result are (levels of macro and micro nutrients).
        </p>
        <p>
          The main purpose was to get a NPK (Nitrogen, Phosphorus, Potassium) quantity for the fertilizer mix and how to
          combine it with others that can support with micro nutrients such as Calcium, Magnesium or Zinc.
        </p>
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

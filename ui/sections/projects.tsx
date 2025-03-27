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
        <p>
          The work environment is fully conducted in English, both spoken and written. My previous experience working as
          a freelancer in Ireland has been highly beneficial, allowing me to communicate effectively with engineers,
          managers, and stakeholders across different markets.
        </p>
        <p>
          Collaboration and mentorship play a crucial role in my team. I actively mentor colleagues in areas where I
          have expertise, while also learning from others to strengthen my own skills. I encourage open discussions,
          share ideas, and contribute to problem-solving efforts, ensuring that knowledge flows freely across the team.
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
        <p>
          I took this opportunity to mentor a teammate who was eager to learn mobile development. I divided tasks
          strategically, ensuring we collaborated effectively from project initiation to deployment on both the Google
          Play Store and the App Store.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Fertilization Hub",
    description: (
      <Description
        summary="A web application that acts as a chemical product calculator for different crop types, based on soil test results and selected fertilizers."
        stack="Next.js - Firebase - Zustand"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          This web app functions as a calculator for chemical fertilizers, helping users determine the optimal mix based
          on their selected crop and soil test results, which include macro and micronutrient levels.
        </p>
        <p>
          The main goal is to calculate the required amounts of nitrogen (N), phosphorus (P), and potassium (K)
          --collectively known as NPK among agronomists--for the fertilizer mix. Additionally, it suggests combinations
          with other nutrients such as calcium, magnesium, and zinc to ensure balanced fertilization.
        </p>
        <p>
          Once the correct fertilizer composition is determined, the app calculates the mix for 1,000 kg, the standard
          measurement used by fertilizer suppliers.
        </p>
        <p>
          Finally, the app generates a detailed report, outlining the specific quantities of each product for
          macronutrients and micronutrients, the final fertilizer mix, and the number of bags required for application.
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
        <p>
          A few months before starting this project, I met a student at the Coding Dojo Bootcamp. I noticed he and other
          students were struggling with the material, logic, and other challenges. I reached out and offered private
          lessons at a very affordable price, considering the expensive tuition of the bootcamp. As the company also
          needed a new website, I assigned this task to one of my students. He did a great job while I supervised and
          provided guidance.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Agrosat Platform",
    description: (
      <Description
        summary="Agrosat's main platform for spatial geological soil studies, serving clients in Brazil, Mexico, and Chile."
        stack="Next.js - Leaflet - WMS"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          During my last two months at Agrosat, I led the development of an MVP for the frontend of the main Agrosat
          platform. The web app featured a map (built with Leaflet) and widgets on the sides for selecting tools,
          accessing administration panels, and adjusting settings.
        </p>
        <p>
          Users could upload land data in KMZ or KML format and visualize polygons on the map. They could then purchase
          various soil study services and track their data year by year.
        </p>
        <p>
          The backend team delivered these services via a WMS server, enabling the rasterization of multiple layers over
          the land areas with data collected by the geomatic team.
        </p>
        <p>
          Around this time, I was contacted by Walmart with an opportunity to join their team. However, I chose to delay
          my departure to ensure the completion of the MVP within the two-month deadline. Once the project was finalized
          and fully documented, I transitioned to this new professional challenge.
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Lessons & YouTube Channel",
    description: (
      <Description
        summary="I gave private lessons to students from Coding Dojo Bootcamp who were struggling with the material. I also started a YouTube channel to share experiences and tips."
        stack="FrontEnd - BackEnd - Linux"
      />
    ),
    details: (
      <div className="w-full h-[92%] overflow-y-scroll flex flex-col items-start justify-start no-scrollbar">
        <p>
          While I was attending Coding Dojo Bootcamp, which I started because I wanted a certification (as a self-taught
          developer, I felt the need to have something to validate my knowledge, especially here in Chile, even though I
          was already working and had experience), I met students who were struggling to understand the lessons and the
          underlying logic. So, I offered private lessons to them at an affordable price.
        </p>
        <p>
          We used Skype to meet, and we focused on covering the basics and resolving any doubts before moving on to more
          advanced material. The students were really motivated and committed to learning, and I realized that I enjoyed
          playing this mentoring role. Sometimes, I didn’t even charge for certain lessons.
        </p>
        <p>
          Afterward, I got the idea of adding educational content to a YouTube channel. However, creating content has
          proven to be difficult due to time constraints and less-than-ideal conditions (such as noise, urgent work
          tasks, and dealing with fatigue). Despite these challenges, I am committed to this project, as I want to help
          others solve the problems I once faced—problems that were a real struggle to overcome.
        </p>
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
        <div className="my-4 w-full max-w-[1000px] h-full mx-auto relative z-50 pb-[2rem]">
          <div className="flex flex-col sm:flex-row items-center gap-4 overflow-x-auto scrollbar w-[calc(100vw_%_1000px)] h-[100%] sm:h-fit py-4 transition-all duration-300 ease-in-out">
            {projectsData.map(({ id, title, description, details }) => (
              <div key={id} className="w-full h-full">
                <Card expandedCard={expandedCard}>
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

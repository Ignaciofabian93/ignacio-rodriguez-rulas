import Card from "../card/card";
import Container from "../layouts/container";

export default function Projects() {
  return (
    <Container isHero={false}>
      {/* <Section title="VIN & Car Plate Label Printing App">
        <p>
          A mobile app for printing and labeling car plates on vehicle windows, ensuring compliance with Chilean
          regulations. Built with <b>React Native & Expo</b>.
        </p>
        <h3 className="font-semibold">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Home:</b> Lists printed labels & allows reprints.
          </li>
          <li>
            <b>Car Info Form:</b> Scans and inputs VIN & plate numbers.
          </li>
          <li>
            <b>Thermal Printing:</b> Prints plates, VINs & logos using Expo Printer module.
          </li>
          <li>
            <b>Local Storage:</b> SQLite for data persistence & authentication.
          </li>
          <li>
            <b>Backend:</b> Node.js, Express, Prisma & PostgreSQL.
          </li>
          <li>
            <b>Admin Panel:</b> Next.js dashboard with statistics & Excel exports.
          </li>
        </ul>
      </Section> */}
      <div className="my-4 w-full max-w-[1000px] h-full mx-auto flex flex-col items-center gap-8 sm:flex-row">
        <Card>
          <Card.Header title="VIN & Car Plate Label Printing App" />
          <Card.Body>
            <p>asjashjsahjsa</p>
          </Card.Body>
          <Card.Footer />
        </Card>
        <Card>
          <Card.Header title="Agrobooks" />
          <Card.Body>
            <p>asjashjsahjsa</p>
          </Card.Body>
          <Card.Footer />
        </Card>
        <Card>
          <Card.Header title="Collect" />
          <Card.Body>
            <p>asjashjsahjsa</p>
          </Card.Body>
          <Card.Footer />
        </Card>
        <Card>
          <Card.Header title="Fertilization Hub" />
          <Card.Body>
            <p>asjashjsahjsa</p>
          </Card.Body>
          <Card.Footer />
        </Card>
        <Card>
          <Card.Header title="Lider.cl" />
          <Card.Body>
            <p>asjashjsahjsa</p>
          </Card.Body>
          <Card.Footer />
        </Card>
      </div>
    </Container>
  );
}

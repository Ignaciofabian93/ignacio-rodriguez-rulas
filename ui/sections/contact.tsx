import { LinkedIn } from "@/constants/icons";
import Button from "../button/button";
import TextArea from "../inputs/textarea";
import TextInput from "../inputs/textinput";
import Container from "../layouts/container";
import YouTube from "@/constants/icons/youtube";
import Title from "../title/title";
import Link from "next/link";

export default function Contact() {
  return (
    <Container isHero={false}>
      <div className="w-full h-full max-w-[1000px] mx-auto flex flex-col-reverse justify-evenly sm:flex-row pb-8">
        <form autoComplete="false" className="w-full sm:w-1/2 h-full flex flex-col items-center justify-center">
          <TextInput placeholder="Your name" type="text" />
          <TextInput placeholder="Your email" type="email" />
          <TextArea placeholder="Your message" />
          <Button text="Send" onClick={() => {}} type="primary" />
        </form>
        <div className="w-full sm:w-1/2 max-w-[300px] h-full flex flex-col items-center justify-center mx-auto mb-2">
          <Title text="Write me a message" size="sm" />
          <p className="my-2">I will answer as soon as possible.</p>
          <p className="text-center mb-4">
            You can also check my social media. I am uploading videos and some material to share my experience and
            knowledge
          </p>
          <div className="flex items-center justify-evenly w-full max-w-[150px]">
            <Link
              className="transition-all duration-300 ease-in-out hover:brightness-200 hover:scale-125"
              href={"https://www.linkedin.com/in/ignacio-rodr%C3%ADguez-rulas-9553b21a2/"}
              target="_blank"
            >
              <LinkedIn />
            </Link>
            <Link
              className="brightness-75 transition-all duration-300 ease-in-out hover:brightness-200 hover:scale-125"
              href={"https://www.youtube.com/@nachofabian"}
              target="_blank"
            >
              <YouTube />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

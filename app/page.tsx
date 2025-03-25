"use client";
import { JSX, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import { Carousel } from "@/ui/carousel/carousel";
import { Hero, About, Skills, Contact, Projects } from "@/ui/sections";
import { NavigationMenu } from "@/constants/data/navigation";
import NavBar from "@/ui/navigation/navbar";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Main() {
  const [currentSection, setCurrentSection] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const sections: JSX.Element[] = [
    <Hero
      key={0}
      onClick={() => {
        setCurrentSection(4);
        swiperRef.current?.slideTo(4);
      }}
    />,
    <About key={1} />,
    <Skills key={2} />,
    <Projects key={3} expandedCard={expandedCard} setExpandedCard={setExpandedCard} />,
    <Contact key={4} />,
  ];

  return (
    <Carousel>
      <header className="w-full flex items-center justify-center overflow-x-auto no-scrollbar">
        <NavBar>
          {NavigationMenu.map((el, index) => (
            <NavBar.Link
              key={el.key}
              selected={currentSection === index}
              onClick={() => {
                setCurrentSection(index);
                swiperRef.current?.slideTo(index);
              }}
            >
              {el.label}
            </NavBar.Link>
          ))}
        </NavBar>
      </header>
      <Carousel.Wrapper>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSection(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          initialSlide={0}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {sections.map((section, index) => (
            <SwiperSlide key={index}>{section}</SwiperSlide>
          ))}
        </Swiper>
      </Carousel.Wrapper>
      {expandedCard !== null && (
        <motion.div
          className="fixed top-0 bg-black/50 backdrop-blur-lg z-0 w-screen h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedCard(null)}
        />
      )}
    </Carousel>
  );
}

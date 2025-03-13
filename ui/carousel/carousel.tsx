import React from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  return <main className="w-screen h-screen background flex flex-col items-center">{children}</main>;
}

Carousel.Wrapper = function ({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-[calc(100%_-_88px)] mt-[88px]">{children}</section>;
} as React.FC<{ children: React.ReactNode }>;

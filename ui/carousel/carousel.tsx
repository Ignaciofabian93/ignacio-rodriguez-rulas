import React from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  return <main className="w-screen flex flex-col items-center">{children}</main>;
}

Carousel.Wrapper = function ({ children }: { children: React.ReactNode }) {
  return <section className="w-full h-full mt-[88px]">{children}</section>;
} as React.FC<{ children: React.ReactNode }>;

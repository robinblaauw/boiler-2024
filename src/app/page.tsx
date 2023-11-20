"use client";

import { Wrapper } from "@/src/components/ui";
import { Faq, PageTitle, Teaser, Hero } from "@/src/components/Blocks";
import { RowStyles } from "@/src/constants/rowStyles";

export default function Home() {
  return (
    <>
      <Wrapper>
        <PageTitle
          title="Boilerplate 2024"
          optionalText="Boilerplate for easy reusability of components and functionality"
        />
        <Teaser
          title="Revolutionizing Paradigm Shifts"
          text="In the ever-evolving landscape of Quantum Synergy Matrix, we leverage unparalleled synergies to architect transformative digital ecosystems.
        Our avant-garde approach to holistic, scalable solutions empowers next-generation, cross-platform integration."
          buttonText="Read more"
          imageSrc="camera-man.png"
          imagePosition="right"
        />
        <Teaser
          title="Revolutionizing Paradigm Shifts"
          text="In the ever-evolving landscape of Quantum Synergy Matrix, we leverage unparalleled synergies to architect transformative digital ecosystems.
        Our avant-garde approach to holistic, scalable solutions empowers next-generation, cross-platform integration."
          buttonText="Read more"
          imageSrc="surfing-camera.png"
          imagePosition="left"
          style={RowStyles.DEFAULT}
        />
        <Faq />
      </Wrapper>
    </>
  );
}

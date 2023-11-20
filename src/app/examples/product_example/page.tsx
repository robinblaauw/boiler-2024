"use client";

import { Wrapper } from "@/src/components/ui";
import { PageTitle, Teaser } from "@/src/components/Blocks";
import { RowStyles } from "@/src/constants/rowStyles";

export default function ProductPageExample() {
  return (
    <Wrapper>
      <PageTitle
        title="Get in touch"
        optionalText="Capturing moments, one click at a time – we are the silent architects behind every shot."
      />
      <Teaser
        title="Revolutionizing Paradigm Shifts"
        text="In the ever-evolving landscape of Quantum Synergy Matrix, we leverage unparalleled synergies to architect transformative digital ecosystems.
        Our avant-garde approach to holistic, scalable solutions empowers next-generation, cross-platform integration."
        buttonText="Click me"
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
    </Wrapper>
  );
}

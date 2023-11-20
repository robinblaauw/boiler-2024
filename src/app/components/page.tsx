"use client";

import { Col, Row, Wrapper } from "@/src/components/ui";
import { Faq, PageTitle, Teaser } from "@/src/components/Blocks";
import { RowStyles } from "@/src/constants/rowStyles";

export default function Components() {
  return (
    <Wrapper>
      <PageTitle
        title="Components showcase"
        optionalText="Showcase of components currently available for use"
      />
      <Row>
        <Col>1. Teaser block</Col>
      </Row>
      <Teaser
        title="Revolutionizing Paradigm Shifts"
        text="In the ever-evolving landscape of Quantum Synergy Matrix, we leverage unparalleled synergies to architect transformative digital ecosystems.
        Our avant-garde approach to holistic, scalable solutions empowers next-generation, cross-platform integration."
        buttonText="Click me"
        imageSrc="camera-man.png"
        imagePosition="right"
      />
      <Row>
        <Col>2. Faq block</Col>
      </Row>
      <Faq />
    </Wrapper>
  );
}

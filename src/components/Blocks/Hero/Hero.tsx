import { FC } from "react";
import Image from "next/image";
import { Row, Col } from "@/src/components/ui";

export const Hero: FC = () => {
  return (
    <div className="h-screen w-full relative -mb-16 mix-blend-luminosity opacity-50">
      <Image
        src={`/camera-hero.jpg`}
        style={{ objectFit: "cover" }}
        fill
        alt="test"
      />
      <div className="absolute bottom-8 w-full">
        <Row classes="lg:gap-0">
          <Col>test</Col>
        </Row>
      </div>
    </div>
  );
};

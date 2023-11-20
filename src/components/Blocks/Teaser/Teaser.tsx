import { FC, useRef } from "react";
import { Col, Row } from "@/src/components/ui";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import classNames from "classnames";
import { RowStyles } from "@/src/constants/rowStyles";
import { useInView } from "framer-motion";

type TeaserProps = {
  title: string;
  text: string;
  buttonText?: string;
  imageSrc: string;
  imagePosition?: "right" | "left";
  style?: RowStyles;
};

export const Teaser: FC<TeaserProps> = ({
  title,
  text,
  buttonText,
  imageSrc,
  imagePosition = "right",
  style,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 200px -200px 0px",
  });

  const teaserLayoutImage = classNames("col-span-12 md:col-span-6 order-1", {
    "md:col-start-7 md:order-2": imagePosition === "right",
    "md:order-1": imagePosition === "left",
  });
  const teaserLayoutDescription = classNames(
    "col-span-12 md:col-span-5 gap-6 md:gap-10 self-center order-2",
    {
      "md:order-1": imagePosition === "right",
      "md:col-start-8 md:order-2": imagePosition === "left",
    }
  );
  const duration = "1.2s";
  const animations = {
    transform: isInView ? "none" : "translatey(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
  };

  return (
    <div ref={ref}>
      <Row style={style}>
        <Col spanClasses={teaserLayoutDescription}>
          <h2 style={animations}>{title}</h2>

          <p
            style={{
              ...animations,
              opacity: isInView ? 0.7 : 0,
              transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`,
            }}
          >
            {text}
          </p>
          <div
            className="flex"
            style={{
              ...animations,
              transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s`,
            }}
          >
            {buttonText && (
              <Button color={`${style ? "default" : "primary"}`}>
                {buttonText}
              </Button>
            )}
          </div>
        </Col>
        <Col spanClasses={teaserLayoutImage}>
          <div
            className="w-full h-96 relative rounded-md overflow-hidden"
            style={animations}
          >
            <Image
              src={`/${imageSrc}`}
              style={{ objectFit: "cover" }}
              fill
              alt={title}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

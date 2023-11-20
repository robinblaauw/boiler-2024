import { FC, useRef } from "react";
import { Row, Col } from "@/src/components/ui";
import { useInView } from "framer-motion";

type PageTitleProps = {
  title: string;
  optionalText?: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title, optionalText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 200px -200px 0px",
  });

  const duration = "1.2s";
  const animations = {
    transform: isInView ? "none" : "translatey(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0s`,
  };
  return (
    <div ref={ref}>
      <Row>
        <Col spanClasses="col-span-12 md:col-span-8 md:col-start-3 text-center !gap-4">
          <h1 style={animations}>{title}</h1>
          {optionalText && (
            <p
              style={{
                ...animations,
                opacity: isInView ? 0.7 : 0,
                transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s`,
              }}
              className="intro-text"
            >
              {optionalText}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};

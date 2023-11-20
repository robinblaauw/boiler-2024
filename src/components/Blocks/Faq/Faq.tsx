import { FC, useRef } from "react";
import Image from "next/image";
import { Row, Col } from "@/src/components/ui";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { faqs } from "./FaqList";
import { useInView } from "framer-motion";

export const Faq: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 200px -200px 0px",
  });

  const duration = "1.2s";
  const animations = {
    transform: isInView ? "none" : "translatey(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
  };
  return (
    <div ref={ref}>
      <Row>
        <Col spanClasses="!gap-y-4 col-span-12">
          <h2 style={animations}>Frequently asked</h2>
          <p
            style={{
              ...animations,
              opacity: isInView ? 0.7 : 0,
              transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s`,
            }}
            className="md:w-1/2"
          >
            Find answers to your questions about our camera services and
            products. Explore our FAQ section for quick and helpful information
            to guide you.
          </p>
        </Col>
        <Col>
          <div
            style={{
              ...animations,
              transition: `all ${duration} cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s`,
            }}
          >
            <Accordion selectionMode="multiple">
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem
                    classNames={{
                      title: "text-base font-normal",
                      content: "opacity-70 mb-4 text-sm md:w-3/4",
                    }}
                    key={index}
                    aria-label={faq.ariaLabel}
                    title={faq.title}
                    indicator={
                      <ChevronLeftIcon className="w-4 h-4 text-white" />
                    }
                  >
                    {faq.content}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </Col>
      </Row>
    </div>
  );
};

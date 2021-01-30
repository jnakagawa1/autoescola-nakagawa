import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto hic
      repellat vero quisquam, veniam illo, rem repudiandae aperiam ab quas
      accusantium. Laudantium dignissimos quidem culpa. Deleniti doloremque
      impedit quo.
    </Accordion>
  </AccordionGroup>
);

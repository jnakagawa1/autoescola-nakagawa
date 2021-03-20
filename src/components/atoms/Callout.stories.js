import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import SpeedImage from "draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça a sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nobis,
        dolores, tempore veritatis iusto nisi eaque minus earum nostrum
        inventore doloribus? Autem repellendus eligendi delectus ipsam quae
        repellat quas libero?
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <SpeedImage />
    </CalloutMedia>
  </Callout>
);

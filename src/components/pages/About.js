import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola Nakagawa</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nemo laudantium aspernatur harum amet, modi quidem dolorem magni vel
            beatae asperiores rerum ab quos nisi laborum reiciendis molestias
            odio. Quaerat!
          </p>
          <p>
            Fugiat alias voluptatibus aspernatur rem eos aut molestias saepe
            corporis, perspiciatis quod minima, eveniet facere consectetur odio
            sed voluptates, maxime incidunt magni deleniti illo obcaecati
            reprehenderit ipsa! Illum, non tempore.
          </p>
          <p>
            Velit sunt beatae quasi quibusdam voluptates fugiat sequi
            reprehenderit id, quos, quod fuga. Minus corporis tenetur ipsum,
            ullam iure odit quibusdam cumque voluptatem repellendus. Adipisci
            aliquam sunt minima magni voluptatibus?
          </p>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            doloremque? Omnis officiis aliquam eum, reprehenderit necessitatibus
            earum deserunt sapiente porro dolore possimus eaque ut dolores harum
            facilis! Laboriosam, harum libero?
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reiciendis ipsam eius vel, temporibus nobis assumenda corporis
            optio, ratione debitis quia, culpa sunt? Excepturi iste rerum hic
            natus perspiciatis cupiditate?
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Quas nostrum repellendus, autem corporis expedita debitis ea eveniet
            consectetur? Nesciunt voluptatum in est reiciendis blanditiis nam
            totam dolorem et ratione labore. Suscipit maxime libero placeat
            adipisci eveniet. Laborum, perspiciatis!
          </p>
        </div>
      </Grid>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;

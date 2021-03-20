import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/hero.jpg";
import SpeedImage from "draws/Speed";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Nome do Serviço</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços" },
            { label: "Nome do Serviços" },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero dolor
          perferendis distinctio. Praesentium veniam at voluptate suscipit,
          earum voluptates adipisci reprehenderit delectus magni, qui tenetur
          atque temporibus aliquid, esse voluptatem.
        </p>
        <p>
          Incidunt totam modi veniam provident optio repudiandae illo odio,
          numquam inventore, deserunt voluptas sed quam minima delectus dolore
          veritatis iusto, voluptatibus neque consequatur. Nemo eum, maxime
          ipsam magnam fugit commodi!
        </p>
        <p>
          Illum corporis voluptas laboriosam molestias tenetur rerum vel autem
          ipsam adipisci temporibus, odio fuga neque at unde ab similique
          quaerat deserunt iure! Eum nesciunt recusandae, distinctio et pariatur
          assumenda facere!
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça a sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              nobis, dolores, tempore veritatis iusto nisi eaque minus earum
              nostrum inventore doloribus? Autem repellendus eligendi delectus
              ipsam quae repellat quas libero?
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <SpeedImage />
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </>
  );
};

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;

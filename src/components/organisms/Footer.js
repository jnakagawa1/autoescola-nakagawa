import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "components/atoms/Container";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nakagawa Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi
            recusandae blanditiis sapiente ipsam velit mollitia, accusantium
            tenetur ipsa perspiciatis quibusdam sunt accusamus non? Doloribus
            libero veritatis sit quasi dolorem!
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (11) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum sequi
            recusandae blanditiis sapiente ipsam velit mollitia, accusantium
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes sociais</h6>
            <p>
              <FooterLink target="_blank" href="https://www.facebook.com">
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.linkedin.com/in/jean-nakagawa-71092439/"
              >
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>
            <p>
              <FooterLink target="_blank" href="https://twitter.com">
                <IconContainer>
                  <FaTwitter />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </Heading>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;

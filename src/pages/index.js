import React from "react";
import styled from "styled-components";
import Assets from "../components/Assets";
import BuildingsStrip from "../components/BuildingsStrip";
import Features from "../components/Features";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import A1 from "../components/typography/A1";
import A2 from "../components/typography/A2";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P1 from "../components/typography/P1";
import P2 from "../components/typography/P2";
import Li from "../components/typography/P2";
import Venues from "../components/Venues";
import colors from "../components/style/colors";
import "../main.css";

import Helmet from 'react-helmet'

const StyledSignUpButton = styled.a`
  background: #00A698;
  border: 2px solid #00A698;
  color: #fff;
  border-radius: 0.4em;
  padding: 0.6em 1em;
  font-size: 1.35em;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  max-width: 100px;
  :hover{
    filter: brightness(0.8);
  }
  :active {
    filter: brightness(0.8);
  }



  @media screen and (max-width: 850px) {
    align-self: center;
    margin-top: 1rem;
  }
`;

const IndexPage = () => (
  <LayoutWrapper>
    <SEO title="HeyAgenda: All in One Venue Management Software" />
    <Header />
    <Section bgColor="accent3" height="30em" left>
      <Grid columns="1fr 22em" breakAndCenter="850px">
          <div style={{ alignItems: "left", justifyContent: "left" }}>
          <H1>All in One Venue Management Software</H1>
          <StyledSignUpButton className="register-btn-signup" href="#">Try Our Free Trial 👍</StyledSignUpButton>
          <p1>No credit card required. Cancel anytime.</p1>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.Hero />
        </div>
      </Grid>
    </Section>
    <BuildingsStrip bgColor="accent1" />
    <Section center>
      <H3 center>Types of Venues Managed With Our Software</H3>
      <Venues />
    </Section>
    <Section>
      <Grid columns="40% 60%" fullHeight breakAndCenter="800px">
        <Features />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Assets.Illustrations.BookingFlow />
        </div>
      </Grid>
    </Section>
    <Section>
      <InfoCard />
    </Section>
    <Section center>
          <H2 center>Still undecided?</H2>
          <P1 color="#1B1D20" center>
            We're here to help, sign up for a demo today.
          </P1>
            <div>
            <StyledSignUpButton type="signupwhite" href="https://heyagenda.youcanbook.me/?noframe=true&skipHeaderFooter=true">Book a Demo ☎️️</StyledSignUpButton>
            </div>
        </Section>
    <Section small bgColor="lighter">
      <Grid columns="1fr 1fr 1fr 1fr">
        <div>
          <P1 strong>Contact Us</P1>
          <P2 strong><a href="tel:+442030063049">020 3006 3049</a></P2>
          <A2 strong><a href="mailto:hello@heyagenda.com">hello@heyagenda.com</a></A2>
        </div>
        <div>
          <P1 strong>Product</P1>
          <li>How it works</li>
          <li>Features</li>
          <li>Pricing</li>
        </div>
        <div>
          <P1 strong>Resources</P1>
          <li><a href="http://help.heyagenda.com/support/kb#/categories">Help Desk</a></li>
          <li>Case Studies</li>
          <li>Blog</li>
        </div>
        <div>
          <P1 strong>Company</P1>
          <li>About us</li>
          <li>Terms and Conditions</li>
          <li>Terms of Use</li>
          <li>Contact</li>
        </div>
      </Grid>
    </Section>
    <Helmet>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="login"
        data-popup-selector="#login-btn">
      </script>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="register"
        data-popup-selector=".register-btn-header"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
      <script
        type="text/javascript"
        src="https://heyagenda.outseta.com/Scripts/client/dist/outseta.auth.widget.min.js"
        data-widget-mode="register"
        data-popup-selector=".register-btn-signup"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
    </Helmet>
  </LayoutWrapper>
);

export default IndexPage;
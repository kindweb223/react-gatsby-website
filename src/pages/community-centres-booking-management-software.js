import React from "react";
import styled from "styled-components";
import Assets from "../components/Assets";
import Features from "../components/Features";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Grid from "../components/layout/Grid";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import Section from "../components/layout/Section";
import SEO from "../components/seo";
import H1 from "../components/typography/H1";
import H2 from "../components/typography/H2";
import H3 from "../components/typography/H3";
import P1 from "../components/typography/P1";
import FeatureInfoRow from "../components/FeatureInfoRow";
import "../main.css";
import Footer from "../components/Footer";

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
    <SEO title="Community Centre Venue Management Software" SEO description="Specifically Designed Community Venue & Space Management Software - Everything organised in one place, no double bookings, accept payments online -  no stress. " />
    <Header />
    <Section bgColor="accent3" height="20em" center>
      <Grid columns="100" breakAndCenter="900px">
        <div>
          <H1 center>Community Centre Scheduling and Management Software </H1>
          <h2 class="white-center">Manage your Community Centres easier and faster than ever before. </h2>
          <StyledSignUpButton className="register-btn-signup" href="#">👉Start 14-Day Free Trial 👈</StyledSignUpButton>
        </div>
      </Grid>
    </Section>
    <Section>
    <Grid columns="50% 50%" breakAndCenter="900px">
      <div>
      <H2>Specifically Designed Venue and Space Management Software for Community Centres.</H2>
      <p>Keeping on top of bookings at a Community Centre can be difficult and tough. You have Scouts in on a Monday night, Tuesday is Yoga, Wednesday, a Community Group and Friday a party. Sound familiar? </p>
      <p>When you're spinning plates, mistakes happen. Double Bookings. Chasing unpaid invoices the list of tasks goes on. You're looking for something to help and you're fed up filling in spreadsheets.</p>
      <p>What you need is a community centre booking software system, that's going to get your centre in order, take some of the stress away and make sure there are no double bookings all whilst making sure you're getting paid quicker.</p>
      <p>That's exactly what Hey Agenda does, we have a really simple yet powerful platform, that you can put into your centres today. It's super easy and no staff training and no difficult or hard software to understand. It takes our centres on average about 7 minutes to set up the system and take their first booking.</p>
      <StyledSignUpButton className="register-btn-signup" href="#">👉Start 14-Day Free Trial 👈</StyledSignUpButton>
      </div>
      <div>
      <img src="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Product-Pages/Product-Pages/community-centre-venue-booking-management-software.jpg" width="100%" alt="Community Centre Venue Management Software"></img>
      </div>
    </Grid>
  </Section>
  <H2 center>Our Community Centre Scheduling Features </H2>
    <Section>
      <FeatureInfoRow
        imgPosition="left"
        heading="Powerful Integrated Calendar"
        subHeading="Manage your calendar in our easy to use software."
        imgSrc="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/calendar.jpg"
        description="Manage your calendar by Day, Week and Even Month. See all your spaces in one easy place. See all upcoming events in one easy to use dashboard."
      />
      <FeatureInfoRow
        imgPosition="right"
        heading="Flawless Venue Management"
        subHeading="See at a glance the status of any booking"
        imgSrc="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/booking-system.jpg"
        description="See the status of any booking with our fully customisable booking tracking system. You can see all enquiries through their lifecycle from Enquiry to Paid. Fully customise to your own workflow by adding in custom statuses."
      />
      <FeatureInfoRow
        imgPosition="left"
        heading="Customer Management"
        subHeading="Powerful Customer Management System"
        imgSrc="https://justvenue.ams3.cdn.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/customer-management.jpg"
        description="Never lose your customers details again because someone lost the piece of paper. Store and keep your customers information up to date. All in our easy to use Customer Management Portal."
      />
      <FeatureInfoRow
        imgPosition="right"
        heading="Invoice Management"
        subHeading="See at the glance the status of any quotation and invoice."
        imgSrc="https://justvenue.ams3.digitaloceanspaces.com/Hey-Agenda/Hey-Agenda/invoiceManagement.jpg"
        description="At a glance see the status of any invoice, no more sitting in a meeting and the boss asks, has that invoice been paid? Now you'll know by simply filtering by paid and un"
      />
    </Section>
    <Section bgColor="accent3" height="20em" center >
      <Grid columns="100%">
        <div style={{ alignItems: "center", justifyContent: "center style" }}>
          <h2 class="white-text">Manage your community centres more efficently than ever before, stop double bookings and live a stress free life.</h2>
        </div>
      </Grid>
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
    <Footer />
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
        data-popup-selector=".register-btn-signup"
        data-plan-payment-term="month"
        data-plan-uid="dpWrNgWn">
      </script>
    </Helmet>
  </LayoutWrapper>
);

export default IndexPage;

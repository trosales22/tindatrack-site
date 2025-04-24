import Layout from "components/Layout";
import Hero from "components/Hero";
import React from "react";
import Features from "components/Features";
import Footer from "components/Footer";
import StoreCTA from "components/StoreCTA";
import ContactUs from "components/ContactUs";

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <Features />
            <StoreCTA />
            <ContactUs />
            <Footer />
        </Layout>
    )
}

export default LandingPage;
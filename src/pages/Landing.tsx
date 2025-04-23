import Layout from "components/Layout";
import Hero from "components/Hero";
import React from "react";
import Features from "components/Features";
import Footer from "components/Footer";
import StoreCTA from "components/StoreCTA";

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <Hero />
            <Features />
            <StoreCTA />
            <Footer />
        </Layout>
    )
}

export default LandingPage;
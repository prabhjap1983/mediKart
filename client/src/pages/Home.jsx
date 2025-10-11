import React from 'react';
import Hero from '../components/Hero';
import Category from '../components/Category';
import FeatureSection from "../components/FeatureSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import FAQ from "../components/FAQ";
import BestSeller from '../components/BestSeller';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <FeatureSection />
      </div>
      <div className="mt-0">
        <AboutSection />
      </div>
      <div className="mt-0">
        <BestSeller />
      </div>
      <div className="mt-40">
        <NewsLetter />
      </div>
      <div className="mt-25">
        <Category />
      </div>
      <div className="mt-14">
        <MissionSection />
      </div>
      
      <div>
      
      <FAQ />
    </div>
    
    </div>
  );
};

export default Home;

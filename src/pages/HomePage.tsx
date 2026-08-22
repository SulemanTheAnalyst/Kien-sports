import React from 'react';
import { Hero } from '../components/home/Hero';
import { SportSection } from '../components/home/SportSection';
import { LifestyleSection } from '../components/home/LifestyleSection';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { EditorialSection } from '../components/home/EditorialSection';
import { BrandStory } from '../components/home/BrandStory';
import { SocialSection } from '../components/home/SocialSection';

export function HomePage() {
  return (
    <main>
      <Hero />
      <SportSection />
      <LifestyleSection />
      <EditorialSection />
      <PhilosophySection />
      <BrandStory />
      <SocialSection />
    </main>
  );
}

import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Social from '../components/home/Social';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Social />
    </main>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import SectionLocation from './components/SectionLocation';
import SectionAdvantage from './components/SectionAdvantage';
import SectionTechnical from './components/SectionTechnical';
import SectionOutro from './components/SectionOutro';

export default function App() {
  return (
    <>
      <div className="noise-bg" />
      <main className="w-full min-h-screen bg-app-bg selection:bg-gold selection:text-black">
        <Hero />
        <SectionLocation />
        <SectionAdvantage />
        <SectionTechnical />
        <SectionOutro />
      </main>
    </>
  );
}

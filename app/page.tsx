import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import PracticeAreas from '@/components/PracticeAreas';
import ExperienceSection from '@/components/ExperienceSection';
import ResearchSection from '@/components/ResearchSection';
import CredentialsGallery from '@/components/CredentialsGallery';
import SkillsAndLanguages from '@/components/SkillsAndLanguages';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <AboutSection />
      <PracticeAreas />
      <ExperienceSection />
      <ResearchSection />
      <CredentialsGallery />
      <SkillsAndLanguages />
      <ContactSection />
      <Footer />
    </main>
  );
}

import SectionTitle from '@/components/UI/SectionTitle';
import About from '@/components/About/About';

const AboutPage = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto px-4 mt-8">
      {/* Section tille */}
      <SectionTitle text="About Me" />
      <About />
    </div>
  );
};
export default AboutPage;

import ProjectsSwiper from '@/components/Projects/ProjectsSwiper';
import SectionTitle from '@/components/UI/SectionTitle';

const Page = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <SectionTitle text="My Projects" />
      <ProjectsSwiper />
    </div>
  );
};
export default Page;

import MyInfo from '@/components/Contact/MyInfo';
import SectionTitle from '@/components/UI/SectionTitle';

const Contact = () => {
  return (
    <div className="w-full max-w-[900px] mx-auto px-4 mt-8">
      <SectionTitle text="Get In Touch" />
      <MyInfo />
    </div>
  );
};
export default Contact;

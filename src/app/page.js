import Introduction from '@/components/Home/Introduction';
import TypedEffect from '@/components/UI/TypedEffect';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-2">
      {/* Welcome type effect */}
      <p className="text-primaryColor font-bodyFont text-xl md:text-left text-center">
        <TypedEffect text="Hi, my name is" />
      </p>
      {/* Main content */}
      <Introduction />
    </div>
  );
}

import Introduction from '@/components/Home/Introduction';
import TypedEffect from '@/components/UI/TypedEffect';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-4 py-10">
      {/* Welcome type effect */}
      <p className="text-primaryColor font-bodyFont text-3xl md:text-left text-center">
        <TypedEffect text="$nick solving Decentralized Predictive AI problems" />
      </p>
      {/* Main content */}
      <Introduction />
    </div>
  );
}

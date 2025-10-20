import React from "react";

const Home = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Discover the Beauty of the{" "}
          <span className="text-secondary">World</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          From mountains to beaches, explore destinations that make your heart
          skip a beat. Your adventure begins here.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn btn-primary text-white text-lg px-8 hover:bg-secondary hover:text-neutral transition-all duration-300">
            Start Exploring
          </button>
          <button className="btn btn-secondary text-neutral text-lg px-8 hover:bg-primary hover:text-white transition-all duration-300">
            View Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

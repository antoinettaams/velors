import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Section TEXTE */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Marchez <span className="text-[#FF6B00]">sans douleur</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Découvrez le confort ultime avec nos semelles ergonomiques
            </p>
          </div>
          
          {/* Section IMAGE */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <img
                src="https://i.postimg.cc/4x33Jfqk/664552785-703197656183940-2722081389096613143-n.webp"
                alt="Semelles Velors"
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[550px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
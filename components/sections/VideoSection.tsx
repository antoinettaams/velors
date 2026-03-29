import React, { useRef, useState, useEffect } from 'react';

interface VideoSectionProps {
  title: string;
  description: string;
  videoUrl: string;
  // Les props facultatives sont gardées au cas où, mais l'image n'en montre pas
  buttonText?: string;
  onButtonClick?: () => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  description,
  videoUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pour un rendu identique à l'image, on force l'autoplay silencieux
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.log("Autoplay bloqué:", error));
    }
  }, []);

  return (
    <section className="py-16 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* On passe sur une grille de 12 colonnes pour plus de précision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Section TEXTE : Prend 5 colonnes sur 12 (plus petit) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Marchez <span className="text-[#FF6B00]">sans douleur</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              {description}
            </p>
          </div>
          
          {/* Section VIDEO : Prend 7 colonnes sur 12 (plus grand) */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-cover min-h-[400px] lg:min-h-[550px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
import { useEffect, useState, useRef } from 'react';

interface LottieProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
  alt?: string;
}

export const LottieLoader = ({ 
  src, 
  className = '', 
  style, 
  autoplay = true, 
  loop = true,
  alt = '' 
}: LottieProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Only load when component comes into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' } // Load 50px before it's visible
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || isLoaded) return;

    // Load Lottie script lazily
    const loadLottieScript = async () => {
      // Check if already loaded
      if (document.querySelector('script[src*="dotlottie-wc"]')) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
      script.type = 'module';
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    };

    loadLottieScript();
  }, [shouldLoad, isLoaded]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad && (
        <dotlottie-wc
          src={src}
          style={style}
          autoplay={autoplay}
          loop={loop}
          aria-label={alt}
        />
      )}
      {!shouldLoad && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg animate-pulse" style={style}>
          <div className="text-gray-400 text-sm">Loading animation...</div>
        </div>
      )}
    </div>
  );
};

export default LottieLoader;


// Performance configuration for reducing animations and memory usage
// Supports lower-end computers by providing granular control over effects

export const PERFORMANCE_CONFIG = {
  // Reduce motion based on user preference
  prefersReducedMotion:
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,

  // WebGL/Orb settings
  orb: {
    enabled: true,
    maxDevicePixelRatio: 1.5, // Cap DPR to reduce memory usage
  },

  // Animation settings
  animations: {
    duration: {
      fast: 0.2,
      normal: 0.3,
      slow: 0.4,
    },
    stagger: {
      minimal: 0.01,
      small: 0.03,
      medium: 0.05,
    },
  },

  // Blur settings
  blur: {
    text: {
      initial: 4, // Reduced from 10px
      intermediate: 2, // Reduced from 5px
    },
    background: {
      small: 'blur-sm', // 4px
      medium: 'blur-md', // 8px
      large: 'blur-xl', // 24px (reduced from blur-3xl which is 64px)
    },
  },
} as const;

// Helper to determine if animations should be disabled
export const shouldReduceMotion = () => PERFORMANCE_CONFIG.prefersReducedMotion;

// Helper to get animation duration
export const getAnimationDuration = (speed: 'fast' | 'normal' | 'slow' = 'normal') => {
  return shouldReduceMotion() ? 0.01 : PERFORMANCE_CONFIG.animations.duration[speed];
};

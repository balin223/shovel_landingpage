export const theme = {
  colors: {
    // Primary colors
    background: '#000000',
    primary: '#00F0FF', // Cyan accent color
    secondary: '#007F89', // Darker cyan
    accent: '#00F0FF', // Bright cyan for highlights
    
    // Text colors
    textPrimary: '#FFFFFF',
    textSecondary: '#A0A0A0',
    
    // UI elements
    card: '#111111',
    cardHover: '#1A1A1A',
    border: '#333333',
    
    // Status colors
    success: '#00F0FF',
    warning: '#FFA502',
    error: '#FF4655',
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #00F0FF 0%, #007F89 100%)',
    gradientSecondary: 'linear-gradient(135deg, #111111 0%, #000000 100%)',
  },
  
  shadows: {
    small: '0 2px 4px rgba(0, 240, 255, 0.1)',
    medium: '0 4px 8px rgba(0, 240, 255, 0.15)',
    large: '0 8px 16px rgba(0, 240, 255, 0.2)',
    glow: '0 0 20px rgba(0, 240, 255, 0.25)',
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xl: '24px',
  },
  
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    heading: {
      fontWeight: 700,
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.75rem',
      h4: '1.5rem',
    },
    body: {
      regular: '1rem',
      small: '0.875rem',
      tiny: '0.75rem',
    },
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },
  
  transitions: {
    fast: '0.2s ease-in-out',
    medium: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
} 
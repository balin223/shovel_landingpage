import React from 'react';
import styled from 'styled-components';

const IllustrationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

// This is a simplified representation of the illustration in the image
// In a real implementation, you would use actual SVG or PNG assets
const InventoryIllustration: React.FC = () => {
  return (
    <IllustrationContainer>
      {/* Warehouse Shelves */}
      <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', left: '0', top: '50px' }}>
        <rect x="20" y="20" width="160" height="30" fill="#6c5ce7" opacity="0.8" />
        <rect x="20" y="60" width="160" height="30" fill="#6c5ce7" opacity="0.8" />
        <rect x="20" y="100" width="160" height="30" fill="#6c5ce7" opacity="0.8" />
        <rect x="20" y="140" width="160" height="30" fill="#6c5ce7" opacity="0.8" />
        
        {/* Boxes on shelves */}
        <rect x="30" y="25" width="40" height="20" fill="#ffa502" />
        <rect x="80" y="25" width="40" height="20" fill="#ffa502" />
        <rect x="130" y="25" width="40" height="20" fill="#ffa502" />
        
        <rect x="30" y="65" width="40" height="20" fill="#ffa502" />
        <rect x="80" y="65" width="40" height="20" fill="#ffa502" />
        <rect x="130" y="65" width="40" height="20" fill="#ffa502" />
        
        <rect x="30" y="105" width="40" height="20" fill="#ffa502" />
        <rect x="80" y="105" width="40" height="20" fill="#ffa502" />
        <rect x="130" y="105" width="40" height="20" fill="#ffa502" />
        
        <rect x="30" y="145" width="40" height="20" fill="#ffa502" />
        <rect x="80" y="145" width="40" height="20" fill="#ffa502" />
        <rect x="130" y="145" width="40" height="20" fill="#ffa502" />
      </svg>
      
      {/* Robot */}
      <svg width="100" height="150" viewBox="0 0 100 150" style={{ position: 'absolute', left: '50px', top: '180px' }}>
        <rect x="30" y="20" width="40" height="60" fill="#a29bfe" rx="5" />
        <rect x="40" y="80" width="20" height="40" fill="#a29bfe" />
        <circle cx="50" cy="10" r="10" fill="#a29bfe" />
        <circle cx="40" cy="30" r="5" fill="#ff7675" />
        <circle cx="60" cy="30" r="5" fill="#ff7675" />
        <rect x="40" y="45" width="20" height="5" fill="#ff7675" />
      </svg>
      
      {/* Computer Screen */}
      <svg width="300" height="200" viewBox="0 0 300 200" style={{ position: 'absolute', right: '0', top: '50px' }}>
        <rect x="20" y="20" width="260" height="160" rx="10" fill="#6c5ce7" />
        <rect x="30" y="30" width="240" height="140" rx="5" fill="#4834d4" />
        
        {/* Screen Content */}
        <rect x="40" y="50" width="220" height="20" fill="#a29bfe" opacity="0.7" />
        <rect x="40" y="80" width="220" height="20" fill="#a29bfe" opacity="0.7" />
        <rect x="40" y="110" width="220" height="20" fill="#a29bfe" opacity="0.7" />
        <rect x="40" y="140" width="100" height="20" fill="#e84393" opacity="0.9" />
        
        {/* Dots at top */}
        <circle cx="50" cy="40" r="3" fill="white" />
        <circle cx="60" cy="40" r="3" fill="white" />
        <circle cx="70" cy="40" r="3" fill="white" />
      </svg>
      
      {/* Clipboard */}
      <svg width="150" height="200" viewBox="0 0 150 200" style={{ position: 'absolute', left: '200px', bottom: '0' }}>
        <rect x="25" y="30" width="100" height="150" rx="5" fill="#dfe6e9" />
        <rect x="35" y="50" width="80" height="10" fill="#b2bec3" />
        <rect x="35" y="70" width="80" height="10" fill="#b2bec3" />
        <rect x="35" y="90" width="80" height="10" fill="#b2bec3" />
        <rect x="35" y="110" width="80" height="10" fill="#b2bec3" />
        <rect x="35" y="130" width="80" height="10" fill="#b2bec3" />
        <rect x="35" y="150" width="40" height="10" fill="#b2bec3" />
        
        {/* Clip */}
        <rect x="55" y="10" width="40" height="30" rx="5" fill="#636e72" />
        <rect x="65" y="10" width="20" height="40" rx="5" fill="#636e72" />
      </svg>
      
      {/* Payment Terminal */}
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', right: '50px', bottom: '20px' }}>
        <rect x="10" y="10" width="80" height="60" rx="5" fill="#636e72" />
        <rect x="20" y="20" width="60" height="30" rx="2" fill="#dfe6e9" />
        <rect x="30" y="70" width="40" height="20" rx="2" fill="#636e72" />
        <rect x="20" y="55" width="15" height="10" rx="2" fill="#e84393" />
        <rect x="40" y="55" width="15" height="10" rx="2" fill="#e84393" />
        <rect x="60" y="55" width="15" height="10" rx="2" fill="#e84393" />
      </svg>
      
      {/* Coins */}
      <svg width="100" height="50" viewBox="0 0 100 50" style={{ position: 'absolute', right: '20px', bottom: '0' }}>
        <circle cx="20" cy="20" r="15" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="2" />
        <circle cx="50" cy="20" r="15" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="2" />
        <circle cx="80" cy="20" r="15" fill="#ffeaa7" stroke="#fdcb6e" strokeWidth="2" />
        <text x="20" y="25" textAnchor="middle" fill="#fdcb6e" fontSize="12">$</text>
        <text x="50" y="25" textAnchor="middle" fill="#fdcb6e" fontSize="12">$</text>
        <text x="80" y="25" textAnchor="middle" fill="#fdcb6e" fontSize="12">$</text>
      </svg>
    </IllustrationContainer>
  );
};

export default InventoryIllustration; 
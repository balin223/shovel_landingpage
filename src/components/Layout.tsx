import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import HowItWorks from './HowItWorks';

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  overflow-x: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 0% 0%,
      ${({ theme }) => theme.colors.primary}15 0%,
      transparent 50%
    ), radial-gradient(
      circle at 100% 100%,
      ${({ theme }) => theme.colors.accent}15 0%,
      transparent 50%
    );
    pointer-events: none;
    z-index: 0;
    opacity: 0.6;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <Navbar />
        {children}
        <HowItWorks />
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout; 
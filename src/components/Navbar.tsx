import React, { useState } from 'react';
import styled from 'styled-components';
import shovelLogo from '../images/logo/shovel.png';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
  position: relative;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  backdrop-filter: blur(8px);
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.heading.h3};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
`;

const NavLinks = styled.div<{ $isOpen?: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.card};
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${({ theme }) => theme.transitions.medium};
    box-shadow: ${({ theme }) => theme.shadows.large};
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform ${({ theme }) => theme.transitions.medium};
  }
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.textPrimary};
    
    &:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  ${({ theme, primary }) => primary ? `
    background: ${theme.colors.gradientPrimary};
    color: ${theme.colors.textPrimary};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.glow};
    }
  ` : `
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background: ${theme.colors.cardHover};
      border-color: ${theme.colors.accent};
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ primary }) => primary ? 'none' : 'block'};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Hamburger = styled.div<{ $isOpen?: boolean }>`
  width: 24px;
  height: 20px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: currentColor;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${({ theme }) => theme.transitions.medium};
    
    &:nth-child(1) {
      top: ${({ $isOpen }) => $isOpen ? '9px' : '0px'};
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(135deg)' : 'rotate(0deg)'};
    }
    
    &:nth-child(2) {
      top: 9px;
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      top: ${({ $isOpen }) => $isOpen ? '9px' : '18px'};
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg)' : 'rotate(0deg)'};
    }
  }
`;

const Overlay = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: ${({ theme }) => theme.transitions.medium};
  z-index: 5;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <NavContainer>
      <Logo>
        <img src={shovelLogo} alt="Shovel Logo" />
        Shovel
      </Logo>
      
      <MobileMenuButton onClick={toggleMenu}>
        <Hamburger $isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </MobileMenuButton>
      
      <Overlay $isOpen={isMenuOpen} onClick={toggleMenu} />
      
      <NavLinks $isOpen={isMenuOpen}>
        <NavLink href="#how-it-works">How it Works</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar; 
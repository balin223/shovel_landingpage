import React, { useState } from 'react';
import styled from 'styled-components';
import { addToWaitlist } from '../lib/supabase';
// Import the hero image from the correct location
import heroImage from '../images/hero_image2.jpeg';

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => `${theme.colors.primary}15`} 100%
  );
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.h1};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.heading.h2};
  }
`;

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.body.regular};
  line-height: 1.6;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.body.small};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  overflow: hidden;
  
  ${({ theme, $primary }) => $primary ? `
    background: ${theme.colors.gradientPrimary};
    color: ${theme.colors.textPrimary};
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.glow};
    }
  ` : `
    background: transparent;
    color: ${theme.colors.textPrimary};
    border: 1px solid ${theme.colors.border};
    
    &:hover {
      background: ${theme.colors.cardHover};
      border-color: ${theme.colors.accent};
    }
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    box-shadow: ${({ theme }) => theme.shadows.large};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
    max-width: 500px;
  }
`;

const WaitlistContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 500px;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => `${theme.colors.background}80`};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.body.regular};
  backdrop-filter: blur(8px);
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(Button)`
  min-width: 150px;
`;

const Message = styled.div<{ $isError?: boolean }>`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, $isError }) => $isError ? theme.colors.error : theme.colors.success};
  font-size: ${({ theme }) => theme.typography.body.small};
`;

const HeroBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setMessage('Please enter your email');
      setIsError(true);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    try {
      const { success, error } = await addToWaitlist(email);
      
      if (success) {
        setMessage("Thanks for joining! We'll notify you when we launch.");
        setIsError(false);
        setEmail('');
      } else {
        if (error === 'Email already registered') {
          setMessage("You're already on the waitlist!");
          setIsError(false);
        } else {
          console.error('Submission error:', error);
          setMessage(typeof error === 'object' && error && 'message' in error 
            ? String(error.message) 
            : 'Something went wrong. Please try again.');
          setIsError(true);
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('Unable to join waitlist. Please try again.');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <ContentLeft>
          <HeroTitle>Effortless Organization, Intelligent AI</HeroTitle>
          <HeroDescription>
            Step into the future of effortless living with Shovel, 
            the intelligent AI that visually recognizes and seamlessly manages what's inside your home. 
            Forget wasting precious time digging through cabinets, fridges, or pantries wondering 
            if you still have something—Shovel already knows. No more second-guessing purchases, duplicated items, 
            or surprise expirations. Just clear, convenient living, every single day.
          </HeroDescription>
          <WaitlistContainer>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSubmit()}
              disabled={isLoading}
            />
            <SubmitButton $primary onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </SubmitButton>
          </WaitlistContainer>
          {message && <Message $isError={isError}>{message}</Message>}
        </ContentLeft>
        <HeroImage>
          <img src={heroImage} alt="AI-Powered Inventory Management" />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroBanner; 
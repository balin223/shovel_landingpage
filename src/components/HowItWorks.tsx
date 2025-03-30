import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: linear-gradient(180deg, transparent, rgba(0, 240, 255, 0.02));
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${({ theme }) => theme.colors.primary}15 50%,
      transparent 100%
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.heading.h2};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: rgba(0, 240, 255, 0.02);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.fast};
  backdrop-filter: blur(8px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.03);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    opacity: 0.3;
    filter: blur(8px);
  }
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.heading.h4};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.body.regular};
  line-height: 1.6;
`;

const Icon = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.background};
  position: relative;
  z-index: 1;
`;

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <Title>How It Works</Title>
        <StepsContainer>
          <Step>
            <IconWrapper>
              <Icon>📸</Icon>
            </IconWrapper>
            <StepTitle>Take a Snapshot</StepTitle>
            <StepDescription>
              Simply take photos of your inventory items, grocery bags, or receipts. 
              Shovel works with any visual record of your items.
            </StepDescription>
          </Step>
          
          <Step>
            <IconWrapper>
              <Icon>⬆️</Icon>
            </IconWrapper>
            <StepTitle>Upload</StepTitle>
            <StepDescription>
              Upload your snapshots to Shovel. Our secure platform ensures your 
              data is protected while being processed.
            </StepDescription>
          </Step>
          
          <Step>
            <IconWrapper>
              <Icon>🤖</Icon>
            </IconWrapper>
            <StepTitle>AI Updates</StepTitle>
            <StepDescription>
              Our AI instantly processes your uploads, updating your inventory 
              automatically. No manual entry needed.
            </StepDescription>
          </Step>
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default HowItWorks;
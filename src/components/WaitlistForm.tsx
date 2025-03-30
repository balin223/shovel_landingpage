import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 500px;
  margin-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: rgba(0, 240, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.typography.body.regular};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(0, 240, 255, 0.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SubmitButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Message = styled.p<{ isError?: boolean }>`
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.body.small};
  color: ${({ theme, isError }) => 
    isError ? theme.colors.error : theme.colors.primary};
`;

interface WaitlistFormProps {
  onSubmit: (email: string) => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    setIsError(false);

    try {
      await onSubmit(email);
      setEmail('');
      setMessage('Thanks for joining! We\'ll be in touch soon.');
    } catch (error) {
      setIsError(true);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
        />
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </SubmitButton>
      </FormContainer>
      {message && <Message isError={isError}>{message}</Message>}
    </div>
  );
};

export default WaitlistForm; 
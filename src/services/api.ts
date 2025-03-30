interface WaitlistResponse {
  ok: boolean;
  message?: string;
}

export const submitToWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    
    if (response.ok) {
      return {
        ok: true,
        message: 'Thanks for joining! We\'ll be in touch soon.',
      };
    } else {
      throw new Error(data.error || 'Failed to join waitlist');
    }
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
    };
  }
}; 
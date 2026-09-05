import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from '@/app/contact/page';

// Mock the UserContext
jest.mock('@/contexts/UserContext', () => ({
  useUser: () => ({
    user: null,
    logout: jest.fn()
  })
}));

// Mock the components
jest.mock('@/components/fade-in-section', () => ({
  FadeInSection: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

jest.mock('@/components/shimmer-background', () => ({
  ShimmerBackground: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

jest.mock('@/components/animated-button', () => ({
  AnimatedButton: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick}>{children}</button>
  )
}));

describe('ContactPage', () => {
  beforeEach(() => {
    render(<ContactPage />);
  });

  it('renders contact form', () => {
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Send Us a Message')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Full name is required')).toBeInTheDocument();
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
      expect(screen.getByText('Email address is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });

  it('validates email format', async () => {
    const emailInput = screen.getByLabelText('Email Address *');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    const phoneInput = screen.getByLabelText('Phone Number *');
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
    });
  });

  it('validates message length', async () => {
    const messageInput = screen.getByLabelText('Message *');
    fireEvent.change(messageInput, { target: { value: 'Short' } });
    fireEvent.blur(messageInput);

    await waitFor(() => {
      expect(screen.getByText('Message must be at least 20 characters')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const nameInput = screen.getByLabelText('Full Name *');
    const emailInput = screen.getByLabelText('Email Address *');
    const phoneInput = screen.getByLabelText('Phone Number *');
    const messageInput = screen.getByLabelText('Message *');
    const submitButton = screen.getByText('Send Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message with more than 20 characters to pass validation.' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Thank you for your message!')).toBeInTheDocument();
    });
  });

  it('shows loading state during submission', async () => {
    const nameInput = screen.getByLabelText('Full Name *');
    const emailInput = screen.getByLabelText('Email Address *');
    const phoneInput = screen.getByLabelText('Phone Number *');
    const messageInput = screen.getByLabelText('Message *');
    const submitButton = screen.getByText('Send Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '+1234567890' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message with more than 20 characters to pass validation.' } });

    fireEvent.click(submitButton);

    expect(screen.getByText('Sending...')).toBeInTheDocument();
  });
}); 
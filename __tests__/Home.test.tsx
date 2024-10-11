import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to newsletter reader/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders login and register buttons', () => {
    render(<Home />);

    const loginButton = screen.getByRole('link', { name: /login/i });
    const registerButton = screen.getByRole('link', { name: /register/i });

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
});
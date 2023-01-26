import { fireEvent, render } from '@testing-library/react';
import NavBar from '../components/navbar';
import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('should render the Create Invoice button', () => {
    const { getByText } = render(<NavBar />);
    const createInvoiceButton = getByText(/Create Invoice/i);
    //@ts-ignore
    expect(createInvoiceButton).toBeInTheDocument();
  });

  it('should render the Invoices button', () => {
    const { getByText } = render(<NavBar />);
    const invoicesButton = getByText(/Invoices/i);
    //@ts-ignore
    expect(invoicesButton).toBeInTheDocument();
  });

  it('should render the navbar and check for elements', () => {
    const { getByText } = render(<NavBar />);
    //@ts-ignore
    expect(getByText('Create Invoice')).toBeInTheDocument()
    //@ts-ignore
    expect(getByText('Invoices')).toBeInTheDocument()
    //@ts-ignore
    expect(getByText('LOGOUT')).toBeInTheDocument()
  });

  it('should navigate to the create invoice page when clicked', () => {
    const { getByText } = render(<NavBar />);
    const createInvoiceButton = getByText(/Create Invoice/i);
    fireEvent.click(createInvoiceButton);
  });

  it('should navigate to the invoices page when clicked', () => {
    const { getByText } = render(<NavBar />);
    const invoicesButton = getByText(/Invoices/i);
    fireEvent.click(invoicesButton);
  });

  it('should render the logout button', () => {
    const { getByText } = render(<NavBar />);
    const logoutButton = getByText(/LOGOUT/i);
    //@ts-ignore
    expect(logoutButton).toBeInTheDocument();
  });

  it('should logout when clicked', () => {
    const { getByText } = render(<NavBar />);
    const logoutButton = getByText(/LOGOUT/i);
    fireEvent.click(logoutButton);
  });
});

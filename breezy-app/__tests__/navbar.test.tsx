import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import NavBar from '../components/navbar';
import { act } from 'react-dom/test-utils';
import Clients2 from '../pages/user-home/clients2';
import LandingPage from '../components/landing-page';


interface CustomExpect extends Chai.ExpectStatic {
  toBeInTheDocument(): void;
}

describe('Navbar', () => {

  it('should render the navbar', () => {
    const { getByText } = render(<NavBar />);
    (expect(getByText('Create Invoice')) as unknown as CustomExpect).toBeInTheDocument();
  });

  it('should render the client with correct texts', () => {
    const { getByText } = render(<Clients2 />);
    (expect(getByText('Breezy app - Clients')) as unknown as CustomExpect).toBeInTheDocument();
  });

  it('should render the navbar with correct links', () => {
    act(() => {
      const { getByRole } = render(<NavBar />);
      const createInvoiceButton = getByRole('link', { name: 'Create Invoice' });
      expect(createInvoiceButton.getAttribute('href')).toBe('/user-home/create-invoice2');
      const invoicesButton = getByRole('link', { name: 'Invoices' });
      expect(invoicesButton.getAttribute('href')).toBe('/user-home/invoice-list2');
      const clientsButton = getByRole('link', { name: 'Clients' });
      expect(clientsButton.getAttribute('href')).toBe('/user-home/clients2');
    });
  });
});


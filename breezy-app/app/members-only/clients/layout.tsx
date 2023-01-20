import React from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  console.log('children from clients layout', children);
  return (
    <>
      <section>
        {children}
      </section>
    </>
  )
};

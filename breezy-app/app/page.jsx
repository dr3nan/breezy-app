import React from 'react';
// import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// function Page() {
// console.log(withPageAuthRequired)
//   return (

//       <div>HELLO YOU ARE HOME</div>

 
//   )
// }

// export default Page;

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile() {
  withPageAuthRequired()
  return (
  <div>Hello</div>
  )
}

// You can optionally pass your own `getServerSideProps` function into
// `withPageAuthRequired` and the props will be merged with the `user` prop


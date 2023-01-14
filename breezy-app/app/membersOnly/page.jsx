'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

// export default function MembersOnly({user}) {
// // console.log(withPageAuthRequired())
//   return (
//     <div>
//       <h1>MEMBERS ONLY!!!!</h1>

//     </div>
//   );
// }
// withPageAuthRequired();

// import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function MembersOnly() {
  return <div>
    MEMBERS ONLY!!!!!!!!!!
    </div>;
});

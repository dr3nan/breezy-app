'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../public/LOGO 2.png';
import style from '../../styles/sidebar.module.css';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function MembersOnly() {
  return (
    <div className={style.logoContainer}>
      <Image alt='breezy logo' src={Logo} width={600} />
    </div>
  );
};

export default withPageAuthRequired(MembersOnly);
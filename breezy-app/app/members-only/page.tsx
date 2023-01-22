'use client';

import React from 'react';
import Image from 'next/image';
import Logo from '../../public/LOGO 2.png';
import style from '../../styles/sidebar.module.css';

export default function MembersOnly() {
  return (
    <div className={style.logoContainer}>
      <Image alt='breezy logo' src={Logo} width={600} />
    </div>
  );
};

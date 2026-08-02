// src/features/account/components/AccountSidebar/AccountSidebar.tsx
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

import styles from './AccountSidebar.module.css';
import { ROUTES } from '@/shared/constants';

export function AccountSidebar() {
  const pathname = usePathname();

  // TEMP DEBUG — remount testi üçün, sınadıqdan sonra sil
  useEffect(() => {
    console.log('MOUNTED: AccountSidebar');
    return () => console.log('UNMOUNTED: AccountSidebar');
  }, []);

  return (
    <div className={styles.sidebarCard}>
      <h3 className={styles.sidebarTitle}>Hesabım</h3>
      <nav className={styles.navMenu}>
        <Link 
          href={ROUTES.ACCOUNT} 
          className={`${styles.navItem} ${pathname === ROUTES.ACCOUNT ? styles.active : ''}`}
        >
          <UserOutlined className={styles.icon} /> 
          <span>Hesab məlumatlarım</span>
        </Link>

        <Link 
          href={ROUTES.ACCOUNT_ORDERS} 
          className={`${styles.navItem} ${pathname === ROUTES.ACCOUNT_ORDERS ? styles.active : ''}`}
        >
          <HomeOutlined className={styles.icon} /> 
          <span>Sifarişlərim</span>
        </Link>
      </nav>
    </div>
  );
}
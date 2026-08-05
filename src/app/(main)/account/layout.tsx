// src/app/(main)/account/layout.tsx
import React from 'react';
import styles from './AccountLayout.module.css';
import { AccountSidebar } from '@/features/account/components/AccountSidebar';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.sidebarWrapper}>
        <AccountSidebar />
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Logo } from "@/shared/components/Logo";
import { Input } from "@/shared/components/Input/Input";
import styles from "./Header.module.css";

const MOCK_ADDRESS = "55 Zarifa Əliyeva, Bakı, Azərbaycan";

export const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <header className={styles.header}>
      <Link href="/home" className={styles.logoLink} aria-label="TIK TAK">
        <Logo />
      </Link>

      <div className={styles.addressBlock}>
        <span className={styles.addressLabel}>Unvan</span>
        <span className={styles.addressText}>{MOCK_ADDRESS}</span>
      </div>

      <div className={styles.searchWrapper}>
        <Input
          type="text"
          className={styles.searchInput}
          placeholder="Axtarış"
          prefix={<FiSearch className={styles.searchIcon} />}
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <nav className={styles.actions} aria-label="user actions">
        <Link href="/profile" className={styles.actionLink}>
          <FiUser className={styles.actionIcon} />
          <span className={styles.actionLabel}>Hesabım</span>
        </Link>
        <Link href="/favorites" className={styles.actionLink}>
          <FiHeart className={styles.actionIcon} />
          <span className={styles.actionLabel}>Siyahılarım</span>
        </Link>
        <Link href="/basket" className={styles.actionLink}>
          <FiShoppingCart className={styles.actionIcon} />
          <span className={styles.actionLabel}>Səbətim</span>
        </Link>
        {/* Hamburger menu for mobile navigation will be added here in the future */}
      </nav>
    </header>
  );
};

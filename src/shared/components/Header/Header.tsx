'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiX } from 'react-icons/fi';
import { Logo } from '@/shared/components/Logo';
import { Input } from '@/shared/components/Input/Input';
import { HeaderProps } from '@/shared/types';
import { searchProducts } from '@/shared/data/catalog';
import { useClickOutside } from '@/shared/hooks';
import { ROUTES } from '@/shared/constants';
import styles from './Header.module.css';

const MOCK_ADDRESS = '55 Zarifa Əliyeva, Bakı, Azərbaycan';

export const Header = ({ showPlace = true, showInput = true }: HeaderProps) => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchBoxRef, () => setIsDropdownOpen(false));

  // TEMP DEBUG — remount testi üçün, sınadıqdan sonra sil
  useEffect(() => {
    console.log('MOUNTED: Header');
    return () => console.log('UNMOUNTED: Header');
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleResultClick = (id: number) => {
    setSearch('');
    setIsDropdownOpen(false);
    router.push(`/product/${id}`);
  };

  const trimmedQuery = search.trim();
  const results = trimmedQuery ? searchProducts(trimmedQuery) : [];
  const isSearchModalOpen = isDropdownOpen && Boolean(trimmedQuery);

  return (
    <>
      {isSearchModalOpen && (
        <div
          className={styles.searchBackdrop}
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      <header className={styles.header}>
        <Link href={ROUTES.LANDING} className={styles.logoLink} aria-label="TIK TAK">
          <Logo />
        </Link>

        {showPlace && (
          <div className={styles.addressBlock}>
            <span className={styles.addressLabel}>Unvan</span>
            <span className={styles.addressText}>{MOCK_ADDRESS}</span>
          </div>
        )}

        {showInput && (
          <div className={styles.searchWrapper}>
            <div className={styles.searchBox} ref={searchBoxRef}>
              <Input
                type="text"
                className={styles.searchInput}
                placeholder="Axtarış"
                prefix={<FiSearch className={styles.searchIcon} />}
                value={search}
                onChange={handleSearchChange}
                onFocus={() => setIsDropdownOpen(true)}
              />

              {isSearchModalOpen && (
                <div className={styles.searchDropdown}>
                  {results.length > 0 ? (
                    results.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        className={styles.searchResultItem}
                        onClick={() => handleResultClick(product.id)}
                      >
                        <Image
                          src={product.image}
                          alt={product.title}
                          className={styles.searchResultImage}
                          width={48}
                          height={48}
                        />
                        <span className={styles.searchResultInfo}>
                          <span className={styles.searchResultTitle}>
                            {product.title}
                          </span>
                          <span className={styles.searchResultPrice}>
                            {product.price} AZN
                          </span>
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className={styles.searchNoResults}>
                      <span className={styles.searchNoResultsIcon}>
                        <FiX />
                      </span>
                      <span>Nəticə tapılmadı</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <nav className={styles.actions} aria-label="user actions">
          <Link href="/account" className={styles.actionLink}>
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
    </>
  );
};

'use client';

import Image from 'next/image';
import { useRef, useState, type ChangeEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiX, FiLogOut } from 'react-icons/fi';
import { Logo } from '@/shared/components/Logo';
import { Input } from '@/shared/components/Input/Input';
import { AddressDisplay } from '@/shared/components/AddressDisplay';
import { CountBadge } from '@/shared/components/CountBadge';
import { Button } from '@/shared/components/Button';
import { HeaderProps } from '@/shared/types';
import { searchProducts } from '@/shared/data/catalog';
import { useClickOutside } from '@/shared/hooks';
import { useProfileStore } from '@/shared/store/profileStore';
import { useBasketStore } from '@/shared/store/basketStore';
import { useAuthStore } from '@/features/auth/store/authStore';
import { ROUTES } from '@/shared/constants';
import styles from './Header.module.css';

export const Header = ({ showPlace = true, showInput = true }: HeaderProps) => {
  const [search, setSearch] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const user = useProfileStore((state) => state.user);
  const basketCount = useBasketStore((state) => state.count);
  const logout = useAuthStore((state) => state.logout);

  useClickOutside(searchBoxRef, () => setIsDropdownOpen(false));

  const handleLogout = () => {
    logout();
    router.push(ROUTES.LANDING);
  };

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
        <div className={styles.headerContainer}>
        <Link href={ROUTES.CATEGORY} className={styles.logoLink} aria-label="TIK TAK">
          <Logo />
        </Link>

        {showPlace && user && (
          <div className={styles.addressBlock}>
            <span className={styles.addressLabel}>Unvan</span>
            <span className={styles.addressText}>
              <AddressDisplay />
            </span>
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
          {user ? (
            <>
              <Link href="/account" className={styles.actionLink}>
                <FiUser className={styles.actionIcon} />
                <span className={styles.actionLabel}>Hesabım</span>
              </Link>
              <Link href="/favorites" className={styles.actionLink}>
                <FiHeart className={styles.actionIcon} />
                <span className={styles.actionLabel}>Siyahılarım</span>
              </Link>
              <Link href="/basket" className={styles.actionLink}>
                <span className={styles.actionIconWrapper}>
                  <FiShoppingCart className={styles.actionIcon} />
                  <CountBadge count={basketCount} />
                </span>
                <span className={styles.actionLabel}>Səbətim</span>
              </Link>
              <button
                type="button"
                className={styles.logoutButton}
                onClick={handleLogout}
                aria-label="Çıxış"
              >
                <FiLogOut className={styles.actionIcon} />
              </button>
            </>
          ) : (
            <Link href={ROUTES.LOGIN}>
              <Button size="middle" className={styles.loginButton}>Giriş</Button>
            </Link>
          )}
          {/* Hamburger menu for mobile navigation will be added here in the future */}
        </nav>
        </div>
      </header>
    </>
  );
};

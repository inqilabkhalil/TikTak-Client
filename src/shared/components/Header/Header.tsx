'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { Logo } from '@/shared/components/Logo';
import { Input } from '@/shared/components/Input/Input';
import { AddressDisplay } from '@/shared/components/AddressDisplay';
import { CountBadge } from '@/shared/components/CountBadge';
import { Button } from '@/shared/components/Button';
import { HeaderProps } from '@/shared/types';
import { useProfileStore } from '@/shared/store/profileStore';
import { useBasketStore } from '@/shared/store/basketStore';
import { useAuthStore } from '@/features/auth/store/authStore';
import { ROUTES } from '@/shared/constants';
import { SearchDropdown } from './SearchDropdown';
import styles from './Header.module.css';
import { useHeaderSearch } from '@/shared/hooks';

export const Header = ({ showPlace = true, showInput = true }: HeaderProps) => {
  const router = useRouter();
  const user = useProfileStore((state) => state.user);
  const basketCount = useBasketStore((state) => state.count);
  const logout = useAuthStore((state) => state.logout);

  const {
    search,
    searchBoxRef,
    loading,
    filteredProducts,
    isSearchModalOpen,
    closeSearch,
    handleSearchChange,
    handleInputFocus,
    handleResultClick,
    handleSearchKeyDown,
  } = useHeaderSearch();

  const handleLogout = () => {
    logout();
    router.push(ROUTES.LANDING);
  };

  return (
    <>
      {isSearchModalOpen && (
        <div className={styles.searchBackdrop} onClick={closeSearch} />
      )}

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href={ROUTES.CATEGORY} className={styles.logoLink} aria-label="TIK TAK">
            <Logo />
          </Link>

          {showPlace && user && (
            <div className={styles.addressBlock}>
              <span className={styles.addressLabel}>Ünvan</span>
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
                  onFocus={handleInputFocus}
                  onKeyDown={handleSearchKeyDown}
                />

                {isSearchModalOpen && (
                  <SearchDropdown
                    loading={loading}
                    products={filteredProducts}
                    onResultClick={handleResultClick}
                  />
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
                <Button size="middle" className={styles.loginButton}>
                  Giriş
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import styles from './Header.module.css';
import { SearchDropdownProps } from '@/shared/types/search.types';

export const SearchDropdown = ({
  loading,
  products,
  onResultClick,
}: SearchDropdownProps) => {
  if (loading) {
    return (
      <div className={styles.searchDropdown}>
        <div className={styles.searchNoResults}>
          <span>Yüklənir...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.searchDropdown}>
      {products.length > 0 ? (
        products.map((product) => (
          <button
            key={product.id}
            type="button"
            className={styles.searchResultItem}
            onClick={() => onResultClick(product.id)}
          >
            <Image
              src={product.imgUrl || '/placeholder.png'}
              alt={product.title}
              className={styles.searchResultImage}
              width={48}
              height={48}
            />
            <span className={styles.searchResultInfo}>
              <span className={styles.searchResultTitle}>{product.title}</span>
              <span className={styles.searchResultPrice}>{product.price} AZN</span>
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
  );
};
'use client';

import React from 'react';
import Image from 'next/image';
import styles from './OrderDetailModal.module.css'; // Haradan gəlir: Mövcud stil faylından
import { OrderItem } from '../../types'; // Haradan gəlir: Real API interfeysindən

interface OrderDetailsProps {
  orderData: OrderItem | null;
}

// Niyə belə yazıldı: Sənin təqdim etdiyin dizayn strukturunu və sinif adlarını (classes) qoruyub saxlayaraq, datanı statik deyil, real API-dan gələn `orderData` strukturu ilə dinamik hala gətirdik.
export default function OrderDetails({ orderData }: OrderDetailsProps) {
  if (!orderData) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Məlumat yüklənir...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Yuxarıdakı məlumat blokları (Grid 3 sütun) */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş nömrəsi</span>
          <span className={styles.value}>{orderData.orderNumber}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş vaxtı</span>
          <span className={styles.value}>
            {new Date(orderData.createdAt).toLocaleString()}
          </span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Ödəniş növü</span>
          <span className={styles.value}>{orderData.paymentMethod}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Çatdırılma ünvanı</span>
          <span className={styles.value}>{orderData.address}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Status</span>
          <span className={styles.value}>{orderData.status}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Ümumi məbləğ</span>
          <span className={styles.value}>{orderData.total} AZN</span>
        </div>
      </div>

      {/* Məhsullar bölməsi */}
      <div className={styles.productsSection}>
        <h3 className={styles.sectionTitle}>Məhsullar</h3>
        
        <div className={styles.productList}>
          {orderData.items && orderData.items.map((item) => (
            <div key={item.id} className={styles.productRow}>
              <div className={styles.productInfo}>
                <div className={styles.imageWrapper}>
                  {item.product.img_url ? (
                    <Image 
                      src={item.product.img_url} 
                      alt={item.product.title} 
                      width={40} 
                      height={40} 
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                    />
                  ) : (
                    <span className={styles.imgPlaceholder}>📦</span>
                  )}
                </div>
                <span className={styles.productName}>{item.product.title}</span>
              </div>
              <span className={styles.productQty}>{item.quantity} ədəd</span>
              <span className={styles.productPrice}>{item.total_price} AZN</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
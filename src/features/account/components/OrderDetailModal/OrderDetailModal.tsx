// src/features/account/components/OrderDetails/OrderDetails.tsx
'use client';

import React from 'react';
import Image from 'next/image'
;
import styles from './OrderDetailModal.module.css';
import { OrderDetailsProps } from '../../types';


export default function OrderDetails({
  orderId = '#321321',
  orderDate = '10.09.2021 18:30',
  address = 'Zərifə Əliyeva 55, Bakı Azərbaycan',
  products = [
    { id: '1', name: 'Portağal 1kq', image: '/images/orange.png', quantity: 10, price: '30m/pulsuz' },
    { id: '2', name: 'Portağal 1kq', image: '/images/orange.png', quantity: 10, price: '30m/pulsuz' },
    { id: '3', name: 'Portağal 1kq', image: '/images/orange.png', quantity: 10, price: '30m/pulsuz' },
  ],
}: Partial<OrderDetailsProps>) {
  return (
    <div className={styles.container}>
      {/* Yuxarıdakı məlumat blokları (Grid 3 sütun) */}
      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş nömrəsi</span>
          <span className={styles.value}>{orderId}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş vaxtı</span>
          <span className={styles.value}>{orderDate}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş nömrə</span>
          <span className={styles.value}>{orderId}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Çatdırılma ünvanı</span>
          <span className={styles.value}>{address}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş nömrə</span>
          <span className={styles.value}>{orderId}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.label}>Sifariş nömrə</span>
          <span className={styles.value}>{orderId}</span>
        </div>
      </div>

      {/* Məhsullar bölməsi */}
      <div className={styles.productsSection}>
        <h3 className={styles.sectionTitle}>Məhsullar</h3>
        
        <div className={styles.productList}>
          {products.map((item, index) => (
            <div key={index} className={styles.productRow}>
              <div className={styles.productInfo}>
                <div className={styles.imageWrapper}>
                  {/* Şəkil yolu öz layihənizdəki şəkil qovluğuna uyğun olmalıdır */}
                  <span className={styles.imgPlaceholder}>🍊</span>
                </div>
                <span className={styles.productName}>{item.name}</span>
              </div>
              <span className={styles.productQty}>{item.quantity}</span>
              <span className={styles.productPrice}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
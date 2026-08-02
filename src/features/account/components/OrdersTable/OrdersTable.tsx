
// src/features/account/components/OrdersTable/OrdersTable.tsx
"use client";

import React, { useState } from "react";
import { Modal, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./OrdersTable.module.css";
import Link from "next/link";
import OrderDetails from "../OrderDetailModal/OrderDetailModal";
import { OrderItem } from "../../types";
import Loading from "@/app/loading";



export default function OrdersTable() {
const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);


  // Düyməyə kliklədikdə işləyən funksiya
  const handleOpenDetails = (record: any) => {
    setSelectedOrder(record);
    setIsModalOpen(true);
  };

  // const columns: ColumnsType<OrderItem> = [
  //   {
  //     title: "No",
  //     dataIndex: "no",
  //     key: "no",
  //   },
  //   {
  //     title: "Tarix",
  //     dataIndex: "date",
  //     key: "date",
  //   },
  //   {
  //     title: "Çatdırılma ünvanı",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Məhsul sayı",
  //     dataIndex: "quantity",
  //     key: "quantity",
  //   },
  //   {
  //     title: "Subtotal/Çatdırılma",
  //     dataIndex: "total",
  //     key: "total",
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "status",
  //     key: "status",
  //     render: (status: string) => {
  //       let statusClass = "";

  //       if (status === "Tamamlandı") {
  //         statusClass = styles.statusCompleted;
  //       } else if (status === "Ləğv edildi") {
  //         statusClass = styles.statusCancelled;
  //       }

  //       return <span className={statusClass}>{status}</span>;
  //     },
  //   },
  //  {
  //     title: "",
  //     key: "action",
  //     render: (_, record) => (
  //       <span 
  //         className={styles.detailButton} 
  //         onClick={() => handleOpenDetails(record)}
  //         style={{ cursor: 'pointer' }}
  //       >
  //         detallar
  //       </span>
  //     ),
  //   },  
  // ];

const columns: ColumnsType<OrderItem> = [
    { title: "Sifariş No", dataIndex: "orderNumber", key: "orderNumber" },
    { 
      title: "Tarix", 
      dataIndex: "createdAt", 
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString() // Tarixi səliqəli göstərmək üçün
    },
    { title: "Çatdırılma ünvanı", dataIndex: "address", key: "address" },
    { title: "Məbləğ", dataIndex: "total", key: "total", render: (total) => `${total} AZN` },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span className={status === "PENDING" ? styles.statusPending : styles.statusCompleted}>
          {status}
        </span>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_, record) => (
        <span 
          className={styles.detailButton} 
          onClick={() => handleOpenDetails(record)}
          style={{ cursor: 'pointer' }}
        >
          detallar &gt;
        </span>
      ),
    },  
  ];

  

  const data: OrderItem[] = [
    {
      key: "1",
      no: "#321321",
      date: "10.09.2021",
      address: "Zərifə Əliyeva 55, Azer...",
      quantity: 10,
      total: "30m/pulsuz",
      status: "Tamamlandı",
    },
    {
      key: "2",
      no: "#321321",
      date: "10.09.2021",
      address: "Zərifə Əliyeva 55, Azer...",
      quantity: 10,
      total: "30m/pulsuz",
      status: "Ləğv edildi",
    },
    {
      key: "3",
      no: "#321321",
      date: "10.09.2021",
      address: "Zərifə Əliyeva 55, Azer...",
      quantity: 10,
      total: "30m/pulsuz",
      status: "Tamamlandı",
    },
    {
      key: "4",
      no: "#321321",
      date: "10.09.2021",
      address: "Zərifə Əliyeva 55, Azer...",
      quantity: 10,
      total: "30m/pulsuz",
      status: "Tamamlandı",
    },
    {
      key: "5",
      no: "#321321",
      date: "10.09.2021",
      address: "Zərifə Əliyeva 55, Azer...",
      quantity: 10,
      total: "30m/pulsuz",
      status: "Tamamlandı",
    },
  ];

return (
    <div className={styles.tableContainer}>
      <h2 className={styles.sectionTitle}>Sifariş Tarixçəsi</h2>
      
      {loading ? (
        <div className={styles.pageLoader}>
          <Loading />
        </div>
      ) : error ? (
        <div style={{ color: "red", padding: "16px" }}>Xəta baş verdi: {error}</div>
      ) : (
        <Table
          columns={columns}
          dataSource={orders}
          rowKey="id"
          pagination={false}
          className={styles.customTable}
        />
      )}

      <Modal
        title="Sifariş detalları"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        <OrderDetails orderData={selectedOrder} />
      </Modal>
    </div>
  );
}

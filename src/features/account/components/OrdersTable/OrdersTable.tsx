// src/features/account/components/OrdersTable/OrdersTable.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { OrderItem } from "../../types";
import styles from "./OrdersTable.module.css";
import OrderDetails from "../OrderDetailModal/OrderDetailModal";
import Loading from "@/app/loading";
import { orderService } from "../../api/orderService";

export function OrdersTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOpenDetails = (record: OrderItem) => {
    setSelectedOrder(record);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const data = await orderService.getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Sifarişləri gətirərkən xəta baş verdi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns: ColumnsType<OrderItem> = [
    { title: "Sifariş No", dataIndex: "orderNumber", key: "orderNumber" },
    {
      title: "Tarix",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => new Date(date).toLocaleDateString(), // Tarixi səliqəli göstərmək üçün
    },
    { title: "Çatdırılma ünvanı", dataIndex: "address", key: "address" },
    {
      title: "Məbləğ",
      dataIndex: "total",
      key: "total",
      render: (total) => `${total} AZN`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <span
          className={
            status === "PENDING" ? styles.statusPending : styles.statusCompleted
          }
        >
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
          style={{ cursor: "pointer" }}
        >
          detallar &gt;
        </span>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.sectionTitle}>Sifariş Tarixçəsi</h2>

     {isLoading ? (
  <div className={styles.pageLoader}>
    <Loading />
  </div>
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

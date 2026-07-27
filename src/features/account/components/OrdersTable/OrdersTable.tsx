// src/features/account/components/OrderTable/OrdersTable.tsx
"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./OrdersTable.module.css";

interface OrderItem {
  key: string;
  no: string;
  date: string;
  address: string;
  quantity: number;
  total: string;
  status: "Tamamlandı" | "Ləğv edildi" | "Sifariş verildi" | "Gözləyir";
}

export function OrdersTable() {
  const columns: ColumnsType<OrderItem> = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Tarix",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Çatdırılma ünvanı",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Məhsul sayı",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Subtotal/Çatdırılma",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let statusClass = "";

        if (status === "Tamamlandı") {
          statusClass = styles.statusCompleted;
        } else if (status === "Ləğv edildi") {
          statusClass = styles.statusCancelled;
        }

        return <span className={statusClass}>{status}</span>;
      },
    },
    {
      title: "",
      key: "action",
      render: () => <a className={styles.detailLink}>detallar</a>,
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
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className={styles.customTable}
      />
    </div>
  );
}

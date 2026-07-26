"use client";

import { ConfigProvider, Spin } from "antd";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "var(--primarybuttoncolor)" } }}>
      <div className={styles.wrapper}>
        <Spin spinning size="large" description="Yüklənir...">
          <div className={styles.spinContent} />
        </Spin>
      </div>
    </ConfigProvider>
  );
}

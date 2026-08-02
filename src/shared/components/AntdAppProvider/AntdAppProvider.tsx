'use client';

import { App } from 'antd';

interface AntdAppProviderProps {
  children: React.ReactNode;
}

export const AntdAppProvider = ({ children }: AntdAppProviderProps) => {
  return <App>{children}</App>;
};

'use client';

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends Omit<AntButtonProps, 'color'> {
  color?: string;
}

export function Button({
  color = 'var(--primarybuttoncolor)',
  style,
  ...props
}: ButtonProps) {
  return (
    <AntButton
      type="primary"
      style={{ backgroundColor: color, borderColor: color, ...style }}
      {...props}
    />
  );
}

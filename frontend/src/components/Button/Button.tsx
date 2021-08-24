import React, { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  children: ReactNode | ReactNode[];
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  btnType?: string | undefined;
  onClick?: () => void;
  className?: string | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  btnType,
  disabled,
  onClick,
}) => {
  const buttonType =
    btnType === 'primary'
      ? styles.primary
      : btnType === 'secondary'
      ? styles.secondary
      : styles.primary;

  return (
    <div className='w-full'>
      <button
        type={type}
        className={`${styles.button} ${
          disabled ? styles.disabled : buttonType
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

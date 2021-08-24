import React, { ChangeEventHandler } from 'react';
import styles from './select-input.module.css';
import { nanoid } from 'nanoid';

interface SelectInputProps {
  label?: string;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  data: any;
  selectedValue: any;
  defaultValue: string;
  name: string;
  required?: boolean;
  error?: any;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  defaultValue,
  label,
  handleChange,
  data,
  selectedValue,
  name,
  required,
  error,
}) => {
  return (
    <div className={styles.selectInputContainer}>
      <label id='listbox-label' className={styles.selectInputLabel}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.selectInputWrapper}>
        <select
          name={name}
          value={selectedValue}
          onChange={handleChange}
          className={`${error && styles.selectInputError} ${
            styles.selectInput
          } `}
        >
          <option value={defaultValue}>{defaultValue}</option>
          {data?.map((value: any) => (
            <option
              className={styles.selectInputOption}
              key={nanoid()}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
        <p className={styles.errorText}>{error ? error : null}</p>
      </div>
    </div>
  );
};

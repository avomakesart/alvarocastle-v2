import React, { CSSProperties } from 'react';
import { useField } from 'formik';

interface InputProps {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  id?: any;
  name: string;
  placeHolder?: string | undefined;
  onChange?: any;
  onFocus?: any;
  onClick?: any;
  onBlur?: any;
  onKeyDown?: any;
  onKeyUp?: any;
  onPaste?: any;
  value: any;
  defaultValue?: any;
  pattern?: any;
  min?: any;
  max?: any;
  minLength?: any;
  maxLength?: any;
  extraClass?: string;
  isReadOnly?: boolean | undefined;
  labelStyle?: CSSProperties;
  style?: CSSProperties;
  cols: number | undefined;
  rows: number | undefined;
}

export const TextArea: React.FC<InputProps> = ({
  label,
  htmlFor,
  required,
  id,
  placeHolder,
  value,
  onChange,
  onClick,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onPaste,
  defaultValue,
  extraClass,
  min,
  max,
  minLength,
  maxLength,
  pattern,
  isReadOnly,
  labelStyle,
  style,
  cols,
  rows,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <div className='w-full px-3'>
      <label
        className='block text-gray-800 text-sm font-bold mb-1'
        htmlFor={htmlFor}
        style={labelStyle}
      >
        {label} {required && <span className='text-red-600'>*</span>}
      </label>
      <textarea
        className={`${
          error &&
          'border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none'
        } bg-white border-2 border-black focus:border-gray-500 py-3 px-4 placeholder-gray-500 w-full text-gray-800`}
        required={required}
        id={id}
        placeholder={placeHolder}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onPaste={onPaste}
        defaultValue={defaultValue}
        minLength={minLength}
        maxLength={maxLength}
        cols={cols}
        rows={rows}
        style={style}
        readOnly={isReadOnly}
        {...props}
        {...field}
      />
      <p className='text-red-500 text-base'>{error ? error : null}</p>
    </div>
  );
};

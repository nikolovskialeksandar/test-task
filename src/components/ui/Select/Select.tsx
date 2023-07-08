import { ChangeEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';

import styles from './Select.module.css';

export interface Options {
  value: string;
  name: string;
}

interface Props {
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  name?: string;
  label?: string;
  options: Options[];
  disabled?: boolean;
}

const Select = ({ className, onChange, value, name, label, options, disabled = false, ...props }: Props) => {
  const preventKeyPress = (event: KeyboardEvent<HTMLSelectElement>) => event.preventDefault();

  return (
    <>
      {label && (
        <label className={styles.selectLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className={classNames(styles.select, className)}
        onChange={onChange}
        value={value}
        name={name}
        onKeyDown={preventKeyPress}
        disabled={disabled}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

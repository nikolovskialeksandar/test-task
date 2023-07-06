import classNames from 'classnames';

import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}

const Button = ({ className, onClick, label, disabled = false, ...props }: ButtonProps) => (
  <button className={classNames(styles.button, className)} onClick={onClick} disabled={disabled} {...props}>
    {label}
  </button>
);

export default Button;

import classNames from 'classnames';

import styles from './Loader.module.css';

interface Props {
  className?: string;
}

const Loader = ({ className }: Props) => <span className={classNames(styles.loader, className)}></span>;

export default Loader;

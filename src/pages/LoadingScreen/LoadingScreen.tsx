import { Loader } from 'components/ui';
import logo from 'assets/images/Baya_Dynamics_over_and_under_logo_Colour.png';

import styles from './LoadingScreen.module.css';

interface Props {
  messages: string[];
}

const LoadingScreen = ({ messages }: Props) => {
  return (
    <div className={styles.loadingScreen}>
      <img className={styles.logo} src={logo} alt="baya-dinamics-logo" />

      <div className={styles.messages}>
        {messages.slice(0, 4).map((message) => (
          <p key={message}>{message}</p>
        ))}
      </div>

      <Loader />
    </div>
  );
};

export default LoadingScreen;

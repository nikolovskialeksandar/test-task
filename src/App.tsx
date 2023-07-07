import { useWebRTCClient } from 'services';
import LoadingScreen from 'pages/LoadingScreen/LoadingScreen';
import AppUI from 'pages/AppUI/AppUI';

import styles from './App.module.css';

const App = () => {
  const { webRTCClient, isLoading, loadingMessages, sizeContainerRef, videoContainerRef, videoRef, audioRef } =
    useWebRTCClient();

  return (
    <div className={styles.app} ref={sizeContainerRef}>
      <div ref={videoContainerRef}>
        <video ref={videoRef} />
        <audio ref={audioRef} />
        {isLoading && <LoadingScreen messages={loadingMessages} />}
        {webRTCClient && !isLoading && <AppUI webRTCClient={webRTCClient} />}
      </div>
    </div>
  );
};

export default App;

import { useWebRTCClient } from 'services';
import LoadingScreen from 'pages/LoadingScreen/LoadingScreen';

const App = () => {
  const { webRTCClient, isLoading, loadingMessages, sizeContainerRef, videoContainerRef, videoRef, audioRef } =
    useWebRTCClient();

  return (
    <div ref={sizeContainerRef}>
      <div ref={videoContainerRef}>
        <video ref={videoRef} />
        <audio ref={audioRef} />
        {isLoading && <LoadingScreen messages={loadingMessages} />}
      </div>
    </div>
  );
};

export default App;

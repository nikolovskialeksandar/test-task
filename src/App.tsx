import useWebRTCClient from 'services/useWebRTCClient';

const App = () => {
  const { webRTCClient, sizeContainerRef, videoContainerRef, videoRef, audioRef } = useWebRTCClient();

  return (
    <div ref={sizeContainerRef}>
      <div ref={videoContainerRef}>
        <video ref={videoRef} />
        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default App;

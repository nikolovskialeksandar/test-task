import { useRef, useEffect, useState } from 'react';
import { WebRTCClient, WebRTCClientProps } from '@arcware/webrtc-plugin';

const useWebRTCClient = () => {
  const [webRTCClient, setWebRTCClient] = useState<WebRTCClient | null>(null);

  const sizeContainerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const config: WebRTCClientProps = {
      address: 'wss://signalling-client.ragnarok.arcware.cloud/',
      shareId: process.env.REACT_APP_SHARE_ID,
      packageId: '',
      settings: {
        /* object with settings */
      },
      playOverlay: false,
      loader: (res) => {
        console.log(res);
      },
      applicationResponse: (res) => {
        console.log(res);
      },
      sizeContainer: sizeContainerRef.current as HTMLDivElement,
      container: videoContainerRef.current as HTMLDivElement,
      videoRef: videoRef.current as HTMLVideoElement,
      audioRef: audioRef.current as HTMLAudioElement,
    };

    const newWebRTC = new WebRTCClient(config);
    setWebRTCClient(newWebRTC);
  }, []);

  return { webRTCClient, sizeContainerRef, videoContainerRef, videoRef, audioRef };
};

export default useWebRTCClient;

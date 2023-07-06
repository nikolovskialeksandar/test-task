import { useRef, useEffect, useState } from 'react';
import { WebRTCClient, WebRTCClientProps } from '@arcware/webrtc-plugin';
import mockLoadingMessages from './mockLoadingMessages';

const useWebRTCClient = () => {
  const [webRTCClient, setWebRTCClient] = useState<WebRTCClient | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessages, setLoadingMessages] = useState<string[]>([]);

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
      loader: (res, disconnected) => {
        console.log(res, disconnected);
        setIsLoading(res);
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

    mockLoadingMessages(setLoadingMessages);
  }, []);

  return { webRTCClient, isLoading, loadingMessages, sizeContainerRef, videoContainerRef, videoRef, audioRef };
};

export default useWebRTCClient;

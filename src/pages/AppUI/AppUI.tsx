import { WebRTCClient } from '@arcware/webrtc-plugin';
import { Button } from 'components/ui';

import styles from './AppUI.module.css';

interface Props {
  webRTCClient: WebRTCClient;
}

interface Interaction {
  [key: string]: string;
}
interface Interactions {
  [key: string]: Interaction;
}

const AppUI = ({ webRTCClient }: Props) => {
  const interactions: Interactions = {
    cam1: { camera_view: 'cam_01' },
  };

  const onInteraction = (interaction: Interaction) => webRTCClient.emitUIInteraction(interaction);

  return (
    <div className={styles.appUI}>
      <Button className={styles.button} onClick={() => onInteraction(interactions.cam1)} label="Change Cam" />
    </div>
  );
};

export default AppUI;

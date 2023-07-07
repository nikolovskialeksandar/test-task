import { WebRTCClient } from '@arcware/webrtc-plugin';
import { Button, Select } from 'components/ui';

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

  const resolutions: Interactions = {
    '1920x1080': { console: 'r.setres 1920x1080w' },
    '1366x720': { console: 'r.setres 1366x720w' },
    '960x540': { console: 'r.setres 960x540w' },
  };

  const getOptions = () => Object.keys(resolutions).map((resolution) => ({ name: resolution, value: resolution }));

  const onInteraction = (interaction: Interaction) => webRTCClient.emitUIInteraction(interaction);

  return (
    <div className={styles.appUI}>
      <Select
        onChange={(event) => onInteraction(resolutions[event.target.value])}
        options={getOptions()}
        name="resolution"
        label="Change resolution"
      />
      <Button className={styles.button} onClick={() => onInteraction(interactions.cam1)} label="Focus Camera" />
    </div>
  );
};

export default AppUI;

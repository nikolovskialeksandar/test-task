interface Enviornment {
  shareId: string | undefined;
  delayTime: number | undefined;
}

const getEnviornment = (): Enviornment => {
  const { REACT_APP_SHARE_ID, REACT_APP_DELAY_TIME } = process.env;

  const shareId = REACT_APP_SHARE_ID;
  let delayTime;

  REACT_APP_DELAY_TIME ? (delayTime = Number(delayTime)) : (delayTime = undefined);

  return { shareId, delayTime };
};

export default getEnviornment;

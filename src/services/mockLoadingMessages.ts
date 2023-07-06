const mockLoadingMessages = (callback: React.Dispatch<React.SetStateAction<any[]>>) => {
  const messages = [
    'Creating stream',
    'Waiting for stream',
    'Loading stream',
    'Rendering',
    'Connecting',
    'Initializing',
    'Creating stream',
    'Waiting for stream',
    'Loading stream',
    'Rendering',
    'Connecting',
    'Initializing',
    'Creating stream',
    'Waiting for stream',
    'Loading stream',
    'Rendering',
    'Connecting',
    'Initializing',
    'Creating stream',
    'Waiting for stream',
    'Loading stream',
    'Rendering',
    'Connecting',
    'Initializing',
    'Creating stream',
    'Waiting for stream',
    'Loading stream',
    'Rendering',
    'Connecting',
    'Initializing',
  ];

  const inteval = setInterval(() => {
    if (!messages.length) {
      clearInterval(inteval);
      return;
    }

    const message = messages.pop();
    callback((prevState) => [message, ...prevState]);
  }, 1500);
};

export default mockLoadingMessages;

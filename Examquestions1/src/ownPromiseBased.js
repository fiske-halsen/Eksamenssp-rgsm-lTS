function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time >= 1) {
      const sleepMilliseconds = time * 1000;
      setTimeout(() => {
        resolve(`Slept for: ${sleepMilliseconds}ms`);
      }, sleepMilliseconds);
    } else {
      reject(`Time must be greater than`);
    }
  });
}

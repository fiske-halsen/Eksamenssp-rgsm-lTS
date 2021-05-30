function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 1) {
      reject(`Wrong argument`);
    }
    const sleepMilliseconds = time * 1000;
    setTimeout(() => {
      resolve(`Slept for: ${sleepMilliseconds}ms`);
    }, sleepMilliseconds);
  });
}

function mainParallel() {
  Promise.all([sleep(1), sleep(2), sleep(3)])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

mainParallel();

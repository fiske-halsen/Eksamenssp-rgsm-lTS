async function sleep(time) {
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

async function mainParallel() {
  const [firstCall, secondCall, thirdCall] = await Promise.all([
    sleep(1),
    sleep(2),
    sleep(3),
  ]);
  console.log(firstCall);
  console.log(secondCall);
  console.log(thirdCall);
}

async function mainSequentialAsync() {
  console.log(await sleep(1));
  console.log(await sleep(2));
  console.log(await sleep(3));
}

//mainSequential();

// promises vs async/await

function withPromises() {
  try {
    sleep(1)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
  return "done";
}

async function withAsyncAwait() {
  try {
    console.log(await sleep(1));
  } catch (err) {
    console.log(err);
  }
  return "done";
}

withPromises();
withAsyncAwait();

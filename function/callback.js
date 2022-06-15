
function createFunctions(n) {
    let callbacks = [];

    for (let i=0; i < n; i++) {
        callbacks[i] =  () => i;
    }
    return callbacks;
  }

  let coll = createFunctions (5);
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve("Async operation completed successfully.");
        } else {
          reject("Async operation failed.");
        }
      }, 2000);
    });
  }

  simulateAsyncOperation(true)
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.error(errorMessage));

  simulateAsyncOperation(false)
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.error(errorMessage));  
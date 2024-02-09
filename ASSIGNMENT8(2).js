function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Fetched data";
        resolve(data);
      }, 2000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = data.toUpperCase();
        resolve(processedData);
      }, 2000);
    });
  }

  fetchData()
    .then(data => processData(data))
    .then(processedData => {
      console.log("Final result:", processedData);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });  
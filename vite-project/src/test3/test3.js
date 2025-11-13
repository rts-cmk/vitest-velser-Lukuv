export async function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve('data loaded') : reject(new Error('fetch failed'));
    }, 100);
  });
}

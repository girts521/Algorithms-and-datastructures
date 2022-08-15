const binarySearch = (arr, value) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while (arr[middle] !== value && left <= right) {
      if (arr[middle] < value) {
        left = middle + 1;
        middle = Math.floor((left + right) / 2);
      }
      if (arr[middle] > value) {
        right = middle - 1;
        middle = Math.floor((left + right) / 2);
      }
    }
    if (arr[middle] === value) return middle;
    return -1;
  };
  
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // console.log(arr.length);
  
  console.log(binarySearch(arr, 4));
const bubbleSort = (arr) => {
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false;
        }
      }
      if(noSwaps) return
    }
    return arr;
  };
  
  const arr = [2, 5, 4, 1, 7, 3, 8, 6, 9, 222, 166];
  
  console.log(bubbleSort(arr));
  
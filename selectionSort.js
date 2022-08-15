const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let smallest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[smallest] > arr[j]) smallest = j;
      }
      if (i !== smallest) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      }
    }
    return arr;
  };
  
  const arr = [2, 5, 4, 1, 7, 3, 8, 6, 9, 222];
  
  console.log(selectionSort(arr));
  
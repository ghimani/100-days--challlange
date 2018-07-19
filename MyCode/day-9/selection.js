var arr = [9, 1, 5, 7, 4];

function selectionSort(array) {
  array.forEach(function(element, index) {
    smallestVal = element;
    smallestValIndex = index;
    
    for (var i = smallestValIndex; i < array.length; i++) {
      secondVal = array[i];
      if (compare(smallestVal, secondVal) > 0) {
        // swap(array, smallestValIndex, i);
        smallestVal = secondVal;
        smallestValIndex = i;
      }
    }
    swap(array, index, smallestValIndex);
  });
  
  return array;
}

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }  
  return 0;
}

function swap(array, a, b) {
  var tmp1 = array[a];
  var tmp2 = array[b];

  array[a] = tmp2;
  array[b] = tmp1;
  return array;
}

console.log(selectionSort(arr));
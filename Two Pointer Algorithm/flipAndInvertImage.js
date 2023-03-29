let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

function reverseEachRow(image) {
  for (let i = 0; i <= image.length - 1; i++) {
    let j = 0;
    let k = image[i].length - 1;
    while (j < k) {
      let temp = image[i][j];
      image[i][j] = image[i][k];
      image[i][k] = temp;
      j++;
      k--;
    }
  }
  return image;
}

function invertEachRow(image) {
  for (let i = 0; i <= image.length - 1; i++) {
    let j = 0;
    while (j <= image[i].length - 1) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else {
        image[i][j] = 0;
      }
      j++;
    }
  }
  return image;
}

function flipAndInvertImage(image) {
  let reversedImage = reverseEachRow(image);
  let invertedImage = invertEachRow(reversedImage);
  return invertedImage;
}

console.log(flipAndInvertImage(image));

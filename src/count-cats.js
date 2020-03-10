module.exports = function countCats(matrix) {
  let catsCount = 0;
  if (matrix && matrix instanceof Array){
    matrix.forEach(row => {
      if (row && row instanceof Array){
        row.forEach(elemToCheck => {
          if (elemToCheck 
              && elemToCheck.toString() == '^^'){
                ++catsCount;
              }
        })
      }
    });
  }
  return catsCount;
};

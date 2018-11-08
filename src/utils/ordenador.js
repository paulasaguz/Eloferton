import stringToNumber from './tostrings.js';

function ordenador(list) {
  return list.concat().sort(function(a,b) {
    const floatA = stringToNumber(a.price);
    const floatB = stringToNumber(b.price);
    return  floatA - floatB;
  });
}

export default ordenador;
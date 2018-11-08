function stringToNumber(string){
  const a = string.replace('$', '').replace(',','');
  return parseFloat(a);
}

export default stringToNumber;
const returnEvenNum = () => {
  const ret = [];
  for(let i=1; i<=50; i++) if(!(i%2)) ret.push(i);
  return ret;
}
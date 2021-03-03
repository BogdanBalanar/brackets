module.exports = function check(str, bracketsConfig) {
  let a=str;
  let b;
  for(let i=0;i<bracketsConfig.length;i++){
    let c=bracketsConfig[i].join('')
      b = a.replace(c,"")
      a = b;
  }
  if(a==="") return true;
  else if(a===str) return false;
  else return(check(a,bracketsConfig))
}

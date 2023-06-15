let cats = ["Milo","Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
   const newArr = [...cats];
   newArr.push(name);
   return newArr;
}
function prependCat(name){
   const prepCat = [name , ...cats];
   return prepCat;
}

function removeLastCat(){
  const newArr= cats.splice(-1,1);
  return newArr;
}
const cats = ["Milo", "Otis", "Garfield"];
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
   const anotherArr = [anotherArr.unshift(name),
    cats.splice(0)];
    return anotherArr;
}
function  removeLastCat(){
    const removeLast= [cats.unshift()]
    return removeLast;
}
function removeFirstCat(){
    const removeFirstCat =[cats.pop()]
    return removeFirstCat;
}
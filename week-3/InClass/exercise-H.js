function findByName(names, nameToFind){
const userFinded = names.find((name)=>{
   return name.toLowerCase() === nameToFind.toLowerCase()
 })
 if (userFinded){

     return "User Found " + userFinded 
 }else{
    return "User not Found"
 }

}
const arrayOfNames= ["Linda", "Karen","Litzy","Manuel", "Andrea"]

console.log(findByName(arrayOfNames,"manuel"));
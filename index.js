// Write your solution in this file!
const employee={
    name :'Sam' ,
    streetAddress :'Alban Str.',
}
function updateEmployeeWithKeyAndValue(employe,key,value){
  const newObj={...employe};
  newObj[key]=value;
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employe, key, value){
    employe[key]=value;
    return employe;
}
function deleteFromEmployeeByKey(employe,key){
    const newObj={...employe};
    delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

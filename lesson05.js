// Function Declaration 

const name = prompt("Как Вас зовут?").trim();
function getUsersName1(name) {
    return "Ваше имя: " + name; 
  }
  // Function Expression
  const getUsersName2 = function(name) {
    return "Ваше имя: " + name;
  };
// Arrow Function Expression
const getUsersName3 = (name) => "Ваше имя: " + name;
  
console.log(getUsersName1(name)); 
console.log(getUsersName2(name));   
console.log(getUsersName3(name));  

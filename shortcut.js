const inputStr='560';
const input=+inputStr;
console.log(input);

const isActive=true;
const showUser=()=>console.log("display user");
const hideUser=()=>console.log("hide user");

// isActive?showUser(): hideUser();
isActive && showUser();
isActive || showUser();
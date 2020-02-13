// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const x = 80;
const y = 20;
if (x >= 100  || y >= 100 || x+y >= 100) {
  appDiv.innerHTML = `<h1>True</h1>`;
} else {
  appDiv.innerHTML = `<h1>False</h1>`;
}


const testi = document.getElementById("test");

testi.innerHTML = "<h2>?</h2>"

const var1 = (a,b) => {
  if(a>b){
  appDiv.innerHTML = "<h1> a is greater then b </h1>";

  }else if (a<b){
    appDiv.innerHTML = "<h1> b is greater then a </h1>";
  }else{
    appDiv.innerHTML = "<h1> a is equal to b </h1>";
  }
}

var1(11,11);
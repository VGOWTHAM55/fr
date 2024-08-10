let psd = document.getElementById("pwd");
let cpsd = document.getElementById("confirmpwd");

let getbtn = document.getElementById("Enrollnow");

function Validate() {
  console.log(psd.value);
  console.log(cpsd.value);

  if (psd.value != cpsd.value) {
    alert("password should match");
  }
}

getbtn.addEventListener("click", Validate);

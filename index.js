const gbtn = document.getElementById("generate");
gbtn.addEventListener("click", () => {
  createpassword();
});

function createpassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordlength = 12;
  let password = "";
  for (let i = 0; i < passwordlength; i++) {
    const randomnumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomnumber, randomnumber + 1);
    console.log(password);
  }
  let passwordtext = document.getElementById("password");
  passwordtext.value = password;
}

const copybtn = document.getElementById("copy");
copybtn.addEventListener("click", () => {
  copytext();
});

function copytext() {
  let passwordtext = document.getElementById("password");
  password = passwordtext.value;
  navigator.clipboard.writeText(password);
}

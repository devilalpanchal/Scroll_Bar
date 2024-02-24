



function generateOTP() {
  let para =document.getElementById("para");
  let digits = [0,1,2,3,4,5,6,7,8,9]
  let OTP = [];
  for (let i = 0; i < 6; i++) {
      OTP[i] = digits[Math.floor(Math.random() * 10)];
  }
  let string =OTP.join('');
  para.textContent =string;

  return OTP;
}

console.log("OTP of 4 digits: ")
let a =generateOTP()
console.log(a);
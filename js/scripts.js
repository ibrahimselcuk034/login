const loginbtn = document.getElementById("loginbtn");
const signupbtn = document.getElementById("signupbtn");

const login = document.getElementById("login");
const useremail = document.getElementById("useremail");
const useremailval = document.getElementById("useremailval");
const useremailvalfalse = document.getElementById("useremailvalfalse");
const userpassword = document.getElementById("userpassword");
const passwordmask = document.getElementById("passwordmask");
const userpassval = document.getElementById("userpassval");

const signup = document.getElementById("signup");
const usernamewarn = document.getElementById("usernamewarn");
const lastnamewarn = document.getElementById("lastnamewarn");
const emailwarn = document.getElementById("emailwarn");
const passwarn = document.getElementById("passwarn");
const passcontwarn = document.getElementById("passcontwarn");
const signupfirstname = document.getElementById("signupfirstname");
const signuplastname = document.getElementById("signuplastname");
const signupmail = document.getElementById("signupmail");
const signuppassword = document.getElementById("signuppassword");
const passwordmask1 = document.getElementById("signuppassmask1");
const signuppasswordcontrol = document.getElementById("signuppasswordcontrol");
const passwordmask2 = document.getElementById("signuppassmask2");
const passMatchErr = document.getElementById("pass-match-err");
const signupsubmitbtn = document.getElementById("signupsubmitbtn");
const checkbox = document.getElementById("checkbox");

//=> Sign In Part

const loginTab = () => {
  loginbtn.style.backgroundColor = "white";
  loginbtn.style.borderRadius = "10%";
  loginbtn.style.border = "1px solid rgb(235, 232, 232)";
  signupbtn.style.backgroundColor = "rgb(235, 232, 232)";
  signupbtn.style.borderRadius = "10%";
  signupbtn.style.border = "1px solid rgb(235, 232, 232)";
  login.style.display = "inherit";
  signup.style.display = "none";
};

function ValidateEmail(input) {
  var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    if (useremail.value !== "") {
      useremailvalfalse.style.display = "inherit";
      useremail.style.border = "1px solid red";
    }
    return false;
  }
}

function CheckPassword(input) {
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (input.value.match(passw)) {
    return true;
  } else {
    userpassword.style.border = "1px solid red";
    userpassword.style.borderRight = "none";
    passwordmask.style.border = "1px solid red";
    passwordmask.style.borderLeft = "none";
    userpassvalfalse.style.display = "inherit";
    return false;
  }
}

const signInSubmit = () => {
  loginbtn.style.backgroundColor = "white";
  loginbtn.style.borderRadius = "10%";
  loginbtn.style.border = "1px solid rgb(235, 232, 232)";
  if (useremail.value === "") {
    useremail.style.border = "1px solid red";
    useremailval.style.display = "inherit";
  } else if (useremail.value !== "") {
    ValidateEmail(useremail);
  }

  if (userpassword.value === "") {
    userpassword.style.border = "1px solid red";
    userpassword.style.borderRight = "none";
    passwordmask.style.border = "1px solid red";
    passwordmask.style.borderLeft = "none";
    userpassval.style.display = "inherit";
  } else if (userpassword.value !== "") {
    CheckPassword(userpassword);
  }
  if (
    ValidateEmail(useremail) === true &&
    CheckPassword(userpassword) === true
  ) {
    alert("Giriş başarılı");
  }
};

const PassShow = (val) => {
  if (val.type === "password") {
    val.type = "text";
  } else {
    val.type = "password";
  }
};

const closeEmailWarnings = () => {
  useremailval.style.display = "none";
  useremailvalfalse.style.display = "none";
  useremail.style.border = "1px solid rgb(235, 232, 232)";
};

const closePasswordWarnings = () => {
  userpassword.style.border = "1px solid rgb(235, 232, 232)";
  userpassword.style.borderRight = "none";
  passwordmask.style.border = "1px solid rgb(235, 232, 232)";
  passwordmask.style.borderLeft = "none";
  userpassval.style.display = "none";
  userpassvalfalse.style.display = "none";
};

//===>Sign Up side

const signupTab = () => {
  signupbtn.style.backgroundColor = "white";
  signupbtn.style.borderRadius = "10%";
  signupbtn.style.border = "1px solid rgb(235, 232, 232)";
  loginbtn.style.backgroundColor = "rgb(235, 232, 232)";
  loginbtn.style.borderRadius = "10%";
  loginbtn.style.border = "1px solid rgb(235, 232, 232)";
  signup.style.display = "inherit";
  login.style.display = "none";
};

const firstNameVal = () => {
  usernamewarn.style.display = "none";
  // var regName = /^[a-zA-Z ]{3,24}$/;
  var regName = /^[a-zA-ZğüşöçİĞÜŞÖÇ]{3,24}$/;
  if (!regName.test(signupfirstname.value)) {
    signupfirstname.style.border = "1px solid red";
  } else {
    signupfirstname.style.border = "1px solid rgb(235, 232, 232)";
    return true;
  }
  if (signupfirstname.value === "") {
    usernamewarn.style.display = "inherit";
    signupfirstname.style.border = "1px solid rgb(235, 232, 232)";
  }
};

const lastNameVal = () => {
  lastnamewarn.style.display = "none";
  var regLastName = /^[a-zA-ZğüşöçİĞÜŞÖÇ]{3,24}$/;
  if (!regLastName.test(signuplastname.value)) {
    signuplastname.style.border = "1px solid red";
  } else {
    signuplastname.style.border = "1px solid rgb(235, 232, 232)";
    return true;
  }
  if (signuplastname.value === "") {
    lastnamewarn.style.display = "inherit";
    signuplastname.style.border = "1px solid rgb(235, 232, 232)";
  }
};

function signUpEmailVal(signupmail) {
  var validRegex2 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (signupmail.value.match(validRegex2)) {
    signupmail.style.border = "1px solid rgb(235, 232, 232)";
    return true;
  } else {
    signupmail.style.border = "1px solid red";
    if (signupmail.value === "") {
      emailwarn.style.display = "inherit";
      signupmail.style.border = "1px solid rgb(235, 232, 232)";
    }
  }
  return false;
}

const emailVal = () => {
  emailwarn.style.display = "none";
  signUpEmailVal(signupmail);
};

function signUpPassVal() {
  var passw2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (signuppassword.value.match(passw2)) {
    signuppassword.style.border = "1px solid rgb(235, 232, 232)";
    signuppassword.style.borderRight = "none";
    passwordmask1.style.border = "1px solid rgb(235, 232, 232)";
    passwordmask1.style.borderLeft = "none";
    return true;
  } else {
    signuppassword.style.border = "1px solid red";
    signuppassword.style.borderRight = "none";
    passwordmask1.style.border = "1px solid red";
    passwordmask1.style.borderLeft = "none";
    if (signuppassword.value === "") {
      passwarn.style.display = "inherit";
      signuppassword.style.border = "1px solid rgb(235, 232, 232)";
      signuppassword.style.borderRight = "none";
      passwordmask1.style.border = "1px solid rgb(235, 232, 232)";
      passwordmask1.style.borderLeft = "none";
    }
    return false;
  }
}

const passVal = () => {
  passwarn.style.display = "none";
  signUpPassVal();
};

function PassMatch() {
  var controlPass = signuppasswordcontrol.value;
  if (!signuppassword.value.match(controlPass)) {
    passMatchErr.style.display = "inherit";
  } else {
    passMatchErr.style.display = "none";
  }
}

function signUpCtrlPasVal() {
  var passw3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (signuppasswordcontrol.value.match(passw3)) {
    signuppasswordcontrol.style.border = "1px solid rgb(235, 232, 232)";
    signuppasswordcontrol.style.borderRight = "none";
    passwordmask2.style.border = "1px solid rgb(235, 232, 232)";
    passwordmask2.style.borderLeft = "none";
    return true;
  } else {
    signuppasswordcontrol.style.border = "1px solid red";
    signuppasswordcontrol.style.borderRight = "none";
    passwordmask2.style.border = "1px solid red";
    passwordmask2.style.borderLeft = "none";
    if (signuppasswordcontrol.value === "") {
      passcontwarn.style.display = "inherit";
      passMatchErr.style.display = "none";
      signuppasswordcontrol.style.border = "1px solid rgb(235, 232, 232)";
      signuppasswordcontrol.style.borderRight = "none";
      passwordmask2.style.border = "1px solid rgb(235, 232, 232)";
      passwordmask2.style.borderLeft = "none";
    }
  }
  return false;
}

const passCtrlVal = () => {
  passcontwarn.style.display = "none";
  PassMatch();
  signUpCtrlPasVal();
};

const isValid = () => {
  if (
    firstNameVal() === true &&
    lastNameVal() === true &&
    signUpEmailVal(signupmail) === true &&
    signUpPassVal() === true &&
    signUpCtrlPasVal() === true &&
    checkbox.checked === true
  ) {
    signupsubmitbtn.className = "enabled";
    signupsubmitbtn.style.backgroundColor = "orangered";
    signupsubmitbtn.style.color = "white";
    signupsubmitbtn.style.borderRadius = "5%";
    signupsubmitbtn.style.textAlign = "center";
    signupsubmitbtn.style.fontSize = "16px";
    signupsubmitbtn.style.padding = "10px";
  }
};

const signUpSubmit = () => {
  alert("Üye kaydınız başarılı.");
};

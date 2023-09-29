const textElement1 = document.getElementById("intro");
const text1 = "Hi , I am Sarah Sajid";
let index = 0;

function type() {
  if (index < text1.length) {
    if (text1.charAt(index) === " ") {
      textElement1.innerHTML += "&nbsp;";
    } else {
      textElement1.textContent += text1.charAt(index);
    }
    index++;
    setTimeout(type, 150);
  } else {
    index = 0;
    textElement1.textContent = "";
    setTimeout(type, 3000);
  }
}

type();
setTimeout(type, 3000);

// =====================
const textElement2 = document.getElementById("recentProjects");
const text2 = "Recent Projects";
let index1 = 0;

function type1() {
  if (index1 < text2.length) {
    if (text2.charAt(index1) === " ") {
      textElement2.innerHTML += "&nbsp;";
    } else {
      textElement2.textContent += text2.charAt(index1);
    }
    index1++;
    setTimeout(type1, 150);
  } else {
    index1 = 0;
    textElement2.textContent = "";
    setTimeout(type1, 2000);
  }
}

type1();
setTimeout(type1, 2000);
// =====================
const textElement3 = document.getElementById("skillsText");
const text3 = "Skills";
let index3 = 0;

function type2() {
  if (index3 < text3.length) {
    if (text3.charAt(index3) === " ") {
      textElement3.innerHTML += "&nbsp;";
    } else {
      textElement3.textContent += text3.charAt(index3);
    }
    index3++;
    setTimeout(type2, 200);
  } else {
    index3 = 0;
    textElement3.textContent = "";
    setTimeout(type2, 1000);
  }
}

type2();
setTimeout(type2, 1000);

// =====================
const textElement4 = document.getElementById("resumeText");
const text4 = "My Resume";
let index4 = 0;

function type3() {
  if (index4 < text4.length) {
    if (text4.charAt(index4) === " ") {
      textElement4.innerHTML += "&nbsp;";
    } else {
      textElement4.textContent += text4.charAt(index4);
    }
    index4++;
    setTimeout(type3, 200);
  } else {
    index4 = 0;
    textElement4.textContent = "";
    setTimeout(type3, 1000);
  }
}

type3();
setTimeout(type3, 1000);

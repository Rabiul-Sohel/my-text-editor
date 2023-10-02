// font style
document.getElementById("btn-bold").addEventListener("click", function () {
  const fontBold = document.getElementById("input-field");
  const buttonBg = document.getElementById("btn-bold");
  if (
    fontBold.style.fontWeight === "" &&
    buttonBg.style.backgroundColor === ""
  ) {
    fontBold.style.fontWeight = "bold";
    buttonBg.style.backgroundColor = "aqua";
  } else {
    fontBold.style.fontWeight = "";
    buttonBg.style.backgroundColor = "";
  }
});


document.getElementById("btn-italic").addEventListener("click", function () {
  const fontItalic = document.getElementById("input-field");
  const buttonBg = document.getElementById("btn-italic");
  if (fontItalic.style.fontStyle === '' && buttonBg.style.backgroundColor === ''){
    fontItalic.style.fontStyle = "italic";
    buttonBg.style.backgroundColor = "aqua";
  }
  else {
    fontItalic.style.fontStyle = "";
    buttonBg.style.backgroundColor = "";
  }  
});




document.getElementById("btn-underline").addEventListener("click", function () {
  const fontUnderline = document.getElementById("input-field");
  const buttonBg = document.getElementById("btn-underline");
  if (
    fontUnderline.style.textDecoration === "" &&
    buttonBg.style.backgroundColor === ""
  ) {
    fontUnderline.style.textDecoration = "underline";
    buttonBg.style.backgroundColor = "aqua";
  } else {
    fontUnderline.style.textDecoration = "";
    buttonBg.style.backgroundColor = "";
  }
});





// text align
document.getElementById("btn-left").addEventListener("click", function () {
  let alignCenter = document.getElementById("input-field");
  const buttonLeft = document.getElementById("btn-left");
  const buttonRight = document.getElementById("btn-right");
  const buttonCenter = document.getElementById("btn-center");
  const buttonJustify = document.getElementById("btn-justify");
  if (
    alignCenter.style.textAlign === "justify" ||
    alignCenter.style.textAlign === "center" ||
    alignCenter.style.textAlign === "right"
  ) {
    alignCenter.style.textAlign = "left";
    buttonLeft.style.backgroundColor = "aqua";
    buttonCenter.style.backgroundColor = "";
    buttonRight.style.backgroundColor = "";
    buttonJustify.style.backgroundColor = "";
    
  } else {
    buttonLeft.style.backgroundColor === "none";
  }
});

document.getElementById("btn-center").addEventListener("click", function () {
  let alignCenter = document.getElementById("input-field");
  const buttonLeft = document.getElementById("btn-left");
  const buttonRight = document.getElementById("btn-right");
  const buttonCenter = document.getElementById("btn-center");
  const buttonJustify = document.getElementById("btn-justify");

  if (alignCenter.style.textAlign === ""||
    alignCenter.style.textAlign === "justify" ||
    alignCenter.style.textAlign === "left" ||
    alignCenter.style.textAlign === "right") {
    alignCenter.style.textAlign = "center";
    buttonLeft.style.backgroundColor = '';
    buttonCenter.style.backgroundColor = 'aqua';
    buttonRight.style.backgroundColor = '';
    buttonJustify.style.backgroundColor = '';
  } else {
    // alignCenter.style.textAlign = "";
  }
  
});

document.getElementById("btn-right").addEventListener("click", function () {
  let alignCenter = document.getElementById("input-field");
  const buttonLeft = document.getElementById("btn-left");
  const buttonRight = document.getElementById("btn-right");
  const buttonCenter = document.getElementById("btn-center");
  const buttonJustify = document.getElementById("btn-justify");
  if (
    alignCenter.style.textAlign === "" ||
    alignCenter.style.textAlign === "justify" ||
    alignCenter.style.textAlign === "left" ||
    alignCenter.style.textAlign === "center"
  ) {
    alignCenter.style.textAlign = "right";
    buttonLeft.style.backgroundColor = "";
    buttonCenter.style.backgroundColor = "";
    buttonRight.style.backgroundColor = "aqua";
    buttonJustify.style.backgroundColor = "";
  } else {
    // alignCenter.style.textAlign = "";
  }
});

document.getElementById("btn-justify").addEventListener("click", function () {
  let alignCenter = document.getElementById("input-field");
  const buttonLeft = document.getElementById("btn-left");
  const buttonRight = document.getElementById("btn-right");
  const buttonCenter = document.getElementById("btn-center");
  const buttonJustify = document.getElementById("btn-justify");
  if (
    alignCenter.style.textAlign === "" ||
    alignCenter.style.textAlign === "center" ||
    alignCenter.style.textAlign === "left" ||
    alignCenter.style.textAlign === "right"
  ) {
    alignCenter.style.textAlign = "justify";
    buttonLeft.style.backgroundColor = "";
    buttonCenter.style.backgroundColor = "";
    buttonRight.style.backgroundColor = "";
    buttonJustify.style.backgroundColor = "aqua";
  } else {
    // alignCenter.style.textAlign = "";
  }
});


  
 
// const inputFontSizeField = document.getElementById("input-font-size");
// const inputFontSizeString = inputFontSizeField.value;
// const inputFontSize = parseFloat(inputFontSizeString);



document.getElementById("input-font-size").addEventListener('input', function () {
  const inputFontSizeField = document.getElementById("input-font-size");
  const inputFontSizeString = inputFontSizeField.value;
  const inputFontSize = inputFontSizeString + 'px';
  document.getElementById("input-field").style.fontSize = inputFontSize;
});

document.getElementById("btn-font-case").addEventListener("click", function () {
  const caseField = document.getElementById("input-field");
  const buttonBg = document.getElementById("btn-font-case");
  if (caseField.style.textTransform === '' || buttonBg.style.backgroundColor === "" ){
    caseField.style.textTransform = "uppercase";
    buttonBg.style.backgroundColor = "aqua";
  } else {
    caseField.style.textTransform = "";
    buttonBg.style.backgroundColor = "";
  }
    
});



document.getElementById("color-picker").addEventListener("input", function () {
  const colorPickerField = document.getElementById("color-picker");
  const colorPickerValue = colorPickerField.value;
  document.getElementById("input-field").style.color = colorPickerValue;

});




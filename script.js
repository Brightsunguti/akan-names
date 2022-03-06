function submitData() {
     const userBirthday = document.querySelector("input[name=birthday]");
    let formData = new FormData();
    // get user birthday
    const date = new Date (userBirthday.value);
    // get day number from the date chosen by user
    const day =  date.getDay();

    // declare arrays
    const arrayMale = ["Kwasi" ,"Kwado" , "Kwabena" , " Kwaku" , "Yaw" ,"Kofi" , "Kwame"];
    const arrayFemale = ["Akosua" ,"Adwoa" , "Abenaa" , " Akua" , "Yaa" ,"Afua" , "Ama"];

    // select userGender inputted by the user
    const userGender = document.querySelector('input[name="gender"]:checked');
    if(userGender.value == "MALE"){
          document.getElementById("paragraph").innerHTML = ("You were born on" + date +"and your akan name is " +arrayMale[day]) ;
    } else{
        document.getElementById("paragraph").innerHTML = ("You were born on" + date +"and your akan name is " +arrayFemale[day]);
    }
}











































































// // select the form from html
// const formInfo=document.querySelector("form");

// // add event listener
// formInfo.addEventListener("submit" ,receivedData);
// //document.getElementById("myButton").addEventListener("click");


// // //prevent default
// // function(e){
// //     e.preventDefault()
// // }    
// function submitForm(form){
//     //form.submit();
//     alert("here")
// }


//     // select inputs
//     const userBirthday = document.querySelector("input[name=birthday]");
//     let formData = new FormData (e.target);
//     const date = new Date (formData.get("birthday"));
//     const day =  date.getDay();
//     alert(day);
    
// const arrayMale = ["Kwasi" ,"Kwado" , "Kwabena" , " Kwaku" , "Yaw" ,"Kofi" , "Kwame"];
// const arrayFemale = ["Akosua" ,"Adwoa" , "Abenaa" , " Akua" , "Yaa" ,"Afua" , "Ama"];

// if(userGender.value == "MALE"){
//       document.getElementById("paragraph").innerHTML = ("This is the date today" + date "and your akan name is" +arrayMale[day]) ;
// } else{
//     document.getElementById("paragraph").innerHTML = ("This is the date today" + date "and your akan name is" +arrayFemale[day]);
// }
//     const userGender = document.getElementsByName('input:radio[name="gender"]:checked').val();
    
//     alert(userGender);
    


//  //validate inputs
     
//  if (userBirthday.value == ""){

//    alert("please select your Birthday")
//      return
//  }
//  if (userGender == null){
//      alert("please select your gender")
//      return

//  }
//  if (userGender.value == "MALE"){
//      alert("Male selected")
//  }
//  if(userGender.value =="FEMALE"){
//     alert("Female selected")
// }

// // }
// select the form from html
const formData=document.querySelector("form");

// add event listener
formData.addEventListener("submit" ,receivedData);

// prevent default
function receivedData(e){
    e.preventDefault();

    // select inputs
    const userBirthday = document.querySelector("input[name=birthday]");
    const userGender = document.querySelector('input[name="Gender"]');
    console.log(userGender);
    


 //validate inputs
     
// if (userBirthday.value == ""){

//     alert("please select your Birthday")
//     return
// }
// if (userGender == null){
//     alert("please select your gender")
//     return

// }
// if (userGender.value == "MALE"){
//     alert("Male selected")
// }
// if(userGender.value =="FEMALE"){
//     alert("Female selected")
}
}
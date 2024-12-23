function grdee(){
    var grade = parseFloat(document.getElementById("grade").value);
    var message = "";

    if(grade >= 90){
        message = "excellent"
    }
    else if(grade >= 80){
        message = "very god"
    }
    else if(grade >= 70){
        message = "good"
    }
    else if(grade >= 60){
        message = "pass"
    }
    else{
        message = "fail"
    }
    document.getElementById("message").innerText = "your grade is: " + message;
}
function agee(){
    let agee = document.getElementById("date").value;
    let dob = new Date(agee);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear()
    const monthDifference = today.getMonth() - dob.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    const days = today.getDate() - dob.getDate();
    const months = (today.getMonth() - dob.getMonth() + 12) % 12;
    const resultText = `You are ${age} Years ${months} Months ${days} Days old.`;
    document.getElementById('age').innerHTML = resultText;
}
function vld(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || password === ""){
        alert("Plaese enter your all fields")
        return false
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("check the mail")
        return false
    }else{
        return true
    }
}
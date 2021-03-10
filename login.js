let username = prompt("who's there?", '');
if(username=="Admin"){
    let pass = prompt("password?", '');
    if(pass == "TheMaster"){
        alert("Welcome!");
    }else if(pass == null){
        alert("Canceled.");
    }else{
        alert("Wrong password");
    }
}else if(username == null){
    alert("Canceled");
}else {
    alert("I don't know you");
}
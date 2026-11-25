function formValidation() {
    let x = document.forms["formsContact"]["name"].value;
    if(x=="") {
        alert("Nome deve ser preenchido");
        return false;
    }
}
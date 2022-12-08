todoForm.title.addEventListener("input",(e) => validateField(e.target));
todoForm.title.addEventListener("blur",(e) => validateField(e.target));
todoForm.description.addEventListener("input",(e) => validateField(e.target));
todoForm.description.addEventListener("blur",(e) => validateField(e.target));
todoForm.dueDate.addEventListener("input",(e) => validateField(e.target));
todoForm.dueDate.addEventListener("blur",(e) => validateField(e.target));

todoForm.addEventListener("submit", onSubmit);

let titleValid = false;
let descriptionValid = false;
let dueDateValid = false;

function validateField(field){
    const {name, value} = field;
    let validationMessage="";

    switch(name){
        case "title":{
            if(value.length < 2){
                validationMessage ="Fältet 'Title' måste innehålla minst två tcken";              
            }
            else if(value.length > 100){
                validationMessage ="Fältet 'Title' måste innehålla mindre än 100 tcken";
            }
            else{
                titleValid = true
            }
            
            break;
        }

        case "description":{
            if(value.length > 450){
                validationMessage="Fältet 'Beskrvning' får inte innehålla mer än 500 tecken";
            }
            else{
                descriptionValid = true;
            }

            break;
        }

        case "dueDate":{
            if(value.length === 0 ){
                validationMessage="Fältet 'Slutförd senast' är obligatorisk ";
            }
            else{
                dueDateValid = true;
            }

            break;
        }
    }

    field.previousElementSibling.innerText = validationMessage;
    field.previousElementSibling.classList.remove("hidden")
}

function onSubmit(e){
    e.preventDefault();
    console.log(e);

}
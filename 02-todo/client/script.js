todoForm.title.addEventListener("input",(e) => validateField(e.target));
todoForm.title.addEventListener("blur",(e) => validateField(e.target));
todoForm.description.addEventListener("input",(e) => validateField(e.target));
todoForm.description.addEventListener("blur",(e) => validateField(e.target));
todoForm.dueDate.addEventListener("input",(e) => validateField(e.target));
todoForm.dueDate.addEventListener("blur",(e) => validateField(e.target));

todoForm.addEventListener("submit", onSubmit);

const todoListElement = document.getElementById("todoList");

let titleValid = false;
let descriptionValid = false;
let dueDateValid = false;

const api = new Api("http://localhost:5000/tasks")

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
    
    if (titleValid && descriptionValid && dueDateValid) {
        saveTask();      
    }

}

function saveTask(){
    const task = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        dueDate: todoForm.dueDate.value,
        completed: false
    };
    
    api.create(task).then((task) => {
        if(task){
            renderList()
        }
    });
}

function renderList(){
    console.log("rendering");
    api.getAll().then((tasks) =>{
        todoListElement.innerHTML = "";
        if(tasks && tasks.length > 0){
            tasks.forEach(task => {
                todoListElement.insertAdjacentHTML("beforeend", renderTask(task));             
            });
        }
    } );
}

function renderTask({id, title, description, dueDate}){
    let html =`
    <li class="select-none mt-2 py-2 border-b border-amber-300">
        <div class="flex items-center">
            <h3 class="mb-3 flex-1 text-xl font-bold text-pink-800 uppercase">${title}</h3> 
            <div>
                <span>
                    ${dueDate}
                </span>
                <button onclick="deleteTask(${id})" class="inline-block bg-amber-500 text-xs text-amber-900 border border-with px-3 py-1 rounded-md ml-2">Ta bort</button>
            </div>
        </div> `;
        description && ( html+=`<p class="ml-8 mt-2 text-xs italic">${description}</p>`);
    html+=`
    </li>
    `;    

    return html;
}

function deleteTask(id){
    api.remove(id).then((result) => renderList() );
}

renderList();
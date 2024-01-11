 // NOTE: ebteda variable addtodoList k araye ast ro tarif mikonim
 let addTodolist = [];



 // NOTE: step 2
 let showLists = function(){
     let result = '';

     addTodolist.forEach(function(todoObject,index){
         const name = todoObject.name;
         const date = todoObject.date;
         const html = `<div>${name}</div><div>${date}</div>
                     <button class= "delete-button  js-delete-button">Delete</button>`
         result += html;

     })
     document.querySelector('.js-show-lists')
     .innerHTML = result;

     let deleteElement = document.querySelectorAll('.js-delete-button');
     deleteElement.forEach((deleteButton,i)=>{
         deleteButton.onclick = function(){
             addTodolist.splice(i,1);
             showLists();
         }
     })

 }


 // NOTE: step 1
 let addElement = document.querySelector('.js-add-todolist');
 console.log(addElement);

 let errorElement = document.querySelector('.js-error');

 addElement.onclick = function(){

     const todo = document.querySelector('.js-input-todo').value;
     const date = document.querySelector('.js-input-date').value;

     if(todo && date){
         addTodolist.push({
         name: todo,
         date: date
     });
     // console.log(addToDoList);

     document.querySelector('.js-input-todo').value = '';
     document.querySelector('.js-error').innerHTML = '';

     showLists();
     /**
      * Focuses the input field with class .js-input-todo.
      * This allows the user to immediately start typing in the input field after the page loads.
      */
      document.querySelector(".js-input-todo").focus();
     }else if(todo && !date){
         errorElement.innerHTML = 'Please enter a valid todo date';
         errorElement.style.color = 'red';
     }else if(!todo && date){
         errorElement.innerHTML = 'Please enter a valid todo name';
         errorElement.style.color = 'red';
     }else if(!todo && !date){
         errorElement.innerHTML = 'Please enter a valid todo name and date';
         errorElement.style.color = 'red';
     }

     // addTodolist.push({
     //     name: todo,
     //     date: date
     // });
     // // console.log(addToDoList);

     // document.querySelector('.js-input-todo').value = '';

     // showLists();
     // /**
     //  * Focuses the input field with class .js-input-todo.
     //  * This allows the user to immediately start typing in the input field after the page loads.
     //  */
     //  document.querySelector(".js-input-todo").focus();

 }




 let removeAllElement = document.querySelector('.js-remove-all');

 removeAllElement.onclick = function(){
     addTodolist = [];
     showLists();
 }




 // NOTE: braye toggle krdn
 let toggleElement = document.querySelector('.js-toggle');

 let toggle = false;

 toggleElement.onclick = function(){
     if(!toggle){
         document.body.classList.add('is-toggle');
         this.classList.remove('fa-toggle-off');
         this.classList.add('fa-toggle-on');
         toggle = true;
     }else{
         document.body.classList.remove('is-toggle');
         this.classList.remove('fa-toggle-on');
         this.classList.add('fa-toggle-off');
         toggle = false;
     }
 }

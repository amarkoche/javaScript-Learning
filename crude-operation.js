/* 
What we will be  learn in this tutorial:
1] How to get value from input field.
2] How to add and remove the attributes.
3] How to use the function.
4] How to create the HTML code dynamically via JAVASCRIPT.
5] HTML node manipulation.
6] How to remove the node from HTML.
7] How to generate dynamically different-different id or calls.
8] How to get the id of element where you click
*/

// console.log("Welcomet to cured operation");
// let data = document.getElementById('data');
// let userList = document.getElementById('userList');

// // add user 
// let counter = 0;    
// function addUser(){
//     let inputdata = document.getElementById('data').value;
//     console.log(inputdata);

   
//     let html = '<div class="row mt-3" id="data'+counter+'">'+
//         '<div class="col-9">'+
//             '<input type="email" class="form-control" id="" placeholder="User Name" value="'+inputdata+'" disabled>'+
//         '</div>'+
//         '<div class="col-3 d-flex justify-content-between">'+
//             '<button type="button" class="btn btn-secondary" id="editBtn'+counter+'" onclick="editRow(this.id)">Edit</button>'+
//             '<button type="button" class="btn btn-success" id="updateBtn'+counter+'" onclick="updateRow(this.id)">Update</button>'+
//             '<button type="button" class="btn btn-danger" id="deleteBtn'+counter+'" onclick="deleteRow(this.id)">Delete</button>'+
//         '</div>'+
//     '</div>';
//     counter++;
//     document.getElementById('userList').insertAdjacentHTML('beforeend', html);
// }

// function editRow(editId){
//     let parent = document.getElementById(editId).parentNode.parentNode;
//     let chield = parent.firstChild.firstChild;
//     chield.removeAttribute('disabled')
//     // console.log(chield);
// }
// function updateRow(updateId) {
//     let parent = document.getElementById(updateId).parentNode.parentNode;
//     let chield = parent.firstChild.firstChild;
//     chield.setAttribute("disabled",'disabled')
//     // console.log(updateId);
// }

// function deleteRow(deleteId) {
//     let parent = document.getElementById(deleteId).parentNode.parentNode;
//     parent.remove();
//     // console.log(deleteId);
// }


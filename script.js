let tasks = [];  
let tasklist = document.getElementById('tasklist');  
let btn = document.getElementById('addtask');  
let taskcontent = document.getElementById('taskname');  

btn.addEventListener('click', () => {
    const output = taskcontent.value.trim();  
    console.log(output);

    if (output.length === 0) {
        alert("Task field cannot be empty!!");
    } else {
        tasks.push(output); 

        taskcontent.value = '';

        tasklist.innerHTML = '';

        // Loop through the tasks array and display each task
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.style.height = '3em';
            taskElement.style.display = 'flex';
            taskElement.style.margin = '1em';
            taskElement.style.borderRadius = '8px';
            taskElement.style.backgroundColor = '#4CAF50'; 
            taskElement.style.color = 'white';
            taskElement.style.alignItems = 'center';
            taskElement.style.justifyContent = 'space-between';
            taskElement.style.padding = '0.5em 1em';
            taskElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskText.style.flexGrow = '1';
            taskText.style.fontSize = '1.2em';

            // Created the Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit Task';
            editButton.style.backgroundColor = '#FF9800'; // Orange background for edit
            editButton.style.color = 'white';
            editButton.style.border = 'none';
            editButton.style.borderRadius = '5px';
            editButton.style.padding = '0.3em 0.7em';
            editButton.style.cursor = 'pointer';
            editButton.style.fontSize = '1em';
            editButton.style.marginLeft = '10px';
            editButton.style.transition = 'background-color 0.3s';

            // Created the Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Task';
            deleteButton.style.backgroundColor = '#F44336'; // Red background for delete
            deleteButton.style.color = 'white';
            deleteButton.style.border = 'none';
            deleteButton.style.borderRadius = '5px';
            deleteButton.style.padding = '0.3em 0.7em';
            deleteButton.style.cursor = 'pointer';
            deleteButton.style.fontSize = '1em';
            deleteButton.style.marginLeft = '10px';
            deleteButton.style.transition = 'background-color 0.3s';

            // Edit Task functionality
            editButton.addEventListener('click', () => {
                const newTask = prompt("Edit your task:", task);
                if (newTask && newTask.trim() !== '') {
                    tasks[index] = newTask.trim();  // Update the task in the array
                    taskText.textContent = tasks[index];  // Update the displayed task
                }
                alert('Task Edited Successfully.');
            });
            
            // Delete Task functionality
            deleteButton.addEventListener('click', () => {
                tasks.splice(index, 1);  // Remove the task from the array
                taskElement.remove();  // Remove the task element from the DOM
                alert('Task Deleted Successfully.');
            });

            // Appended the task text and buttons to the task element
            taskElement.appendChild(taskText);
            taskElement.appendChild(editButton);
            taskElement.appendChild(deleteButton);

            // Appended the task element to the task list
            tasklist.appendChild(taskElement);
        });

        alert("Task Added Successfully");
    }
});

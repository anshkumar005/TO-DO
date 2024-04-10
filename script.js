let tasks = []
const renderTasks = () => {
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = ''


    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        const btn = document.createElement('button');
        btn.innerHTML = '<div> delete</div>'
        btn.className = 'delete-buttton';
        btn.onclick = () => deleteTask(index);

        li.appendChild(btn)
        tasklist.appendChild(li);
       


    });
}

const addtask = () => {
    const name = document.getElementById('taskinput');
    if (name.value !== '') {
        const task = {
            name: name.value,
            date: new Date()
        }
        tasks.push(task);
        renderTasks();
    }
}

const deleteTask = (index)=>{
    tasks.splice(index,1);
    renderTasks();
}

const clearAllTasks =() =>{
    tasks = [];
    renderTasks();

}
const countTasks = ()=>{
    alert("total numebr of tasks is: "+ tasks.length)
}
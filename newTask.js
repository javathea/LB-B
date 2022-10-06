function createTask() {
    const taskInput = document.getElementById("taskInput")
    const task = {title: taskInput.value}


    fetch ('http://localhost:3000/tasks', {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
            })           
            .then((response) => response.json())
            .then((data) => {
                console.log("yey!", data);
            })
    }

document.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask();
})

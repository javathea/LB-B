function createCell(text) {
    const cell = document.createElement("td");
    cell.innerText = text;
    return cell;
}


function renderTasks(tasks) {
    const tableBody = document.querySelector('tbody')
    tasks.forEach((tasks) => {
        const tableRow = document.createElement("tr")

        const button = document.createElement("button")
        button.innerText = "Delete"
        button.addEventListener("click", () => {
            id = tasks.id;
            deleteTask(id);
        })

        const updateButton = document.createElement("button")
        updateButton.innerText = "Update"
        updateButton.addEventListener("click", () => {
            id = tasks.id;
            updateTask(id);
        })

        tableRow.append(
            createCell(tasks.id), 
            createCell(tasks.completed), 
            createCell(tasks.title)
            );
        tableBody.appendChild(tableRow);
        tableRow.appendChild(button);
        tableRow.appendChild(updateButton);
    });
};

function indexTask() {
    fetch("http://127.0.0.1:3000/tasks", {
        credentials: `include`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .then((data) => {
        taskData = data;
        return renderTasks(taskData);
    })
};


document.addEventListener("DOMContentLoaded", () => {
    indexTask();
    const taskForm = document.getElementById("taskForm");
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
    })
    
});

function deleteTask() {
    fetch(`http://127.0.0.1:3000/task/${id}`, {
        method: `DELETE`,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        alert("Task Nr. " + id + " wurde gelöscht")
    })
        location.reload();
}


function updateTask(id) {
    let update = prompt("Bitte Task updaten");
    if (update != null) {
    fetch("http://127.0.0.1:3000/tasks", {
        method: `PUT`,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            title: update
        })
    }).then((response) => response.json())
    .then(() => {
        console.log("a")
    })
    }
    location.reload();
}
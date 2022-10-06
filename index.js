function createCell(text) {
    const cell = document.createElement("td");
    cell.innerText = text;
    return cell;
}

function renderTasks(tasks) {
    const tableBody = document.querySelector('tbody')
    tasks.forEach((tasks) => {
        const tableRow = document.createElement("tr")
        tableRow.append(
            createCell(tasks.id), 
            createCell(tasks.completed), 
            createCell(tasks.title)
            );
        tableBody.appendChild(tableRow);
    });
};

function indexTask() {
    fetch("http://localhost:3000/tasks", {
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




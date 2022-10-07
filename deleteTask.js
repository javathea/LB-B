document.addEventListener("DOMContentLoaded", () => {
const leidn = document.getElementById("del")

    leidn.addEventListener("click", () => {
        const getId = document.getElementById("taskDelete").value
        id = getId; 
        deleteTask(id)
    })
})

function deleteTask() {
        fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
        method: `DELETE`,
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        alert("Task Nr. " + id + " wurde gelöscht")
    })


    }

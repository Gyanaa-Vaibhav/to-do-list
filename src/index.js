import '../public/index.css'
const getId = (ele) => document.getElementById(ele);
const navall = getId('navall')
const taskMenuBtn = getId("taskmenu");
const addtask = getId("addtask");
const form = getId("form");
const submitform = getId("submitform");
const closeform = getId('closeform');
const allPage = getId("all");

let isTaskMenuOpen = false;


let tasks = [

]

let upcommingTask = []

let currentId = 0;


navall.addEventListener('click', () => {
})


addtask.addEventListener('click', () => {
    form.style.display = 'block';
})


closeform.addEventListener("click", () => {
    form.style.display = "none";
})

form.addEventListener('click', (e) => {
    // console.log(e)
    e.preventDefault()
    if (e.target.id == "submitform") {
        const Title = taskTitle.value;
        const Desc = taskDesc.value;
        const Date = taskDate.value;

        if (currentId === 0) {
            tasks.push({
                'id': 1,
                'taskTitle': Title,
                'taskDesc': Desc,
                'taskDate':Date,
            })
            renderTasks();
            currentId++;
            return
        } 

        tasks.push({
            'id': currentId + 1,
            'taskTitle': Title,
            'taskDesc': Desc,
            'taskDate':Date,
        })
        renderTasks();
        currentId++;
        console.log(tasks)
    }
})


function renderTasks() {

    console.log("Upcoming Task", upcommingTask)
    upcommingTask = []
    allPage.innerHTML = '<h1>Tasks</h1>', 
    tasks.forEach((a) => {
        if (a.taskDate == "") {
            upcommingTask.push(a)
        }
        allPage.innerHTML += `
            <div class="task">
                <div class="taskheading">
                    <h3>${a.taskTitle}</h3>
                    <p>${a.taskDate}</p>
                    <svg id="taskmenu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00000">
                        <path
                            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                    </svg>
                </div>
                <p>${a.taskDesc}</p>
            </div>
        `;
        
    })
}
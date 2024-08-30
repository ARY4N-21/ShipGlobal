const taskList = {
    backlog: ["task 1", "task 2", "task 3"],
    todo: ["task 4", "task 5", "task 6"],
    ongoing: ["task 7", "task 8"],
    done: ["task 9", "task 10"]
};

function updateTasks() {
    for (let key in taskList) {
        const ul = document.querySelector('#'+key + '-list');
        ul.innerHTML = '';
        taskList[key].forEach((item, index) => {
            const li = document.createElement('li');
            li.innerText = item;

            const leftButton = document.createElement('button');
            leftButton.className = 'nav-btn left';
            leftButton.innerHTML = '←';
            leftButton.onclick = function() {
                goLeft(key, index);
            };

            if (key === 'backlog') leftButton.disabled = true;

            const rightButton = document.createElement('button');
            rightButton.className = 'nav-btn right';
            rightButton.innerHTML = '→';
            rightButton.onclick = ()=>{
                goRight(key, index);
            };

            if (key === 'done') rightButton.disabled = true;

            li.appendChild(leftButton);
            li.appendChild(rightButton);
            ul.appendChild(li);
        });
    }
}

function goLeft(key, index) {
    const task = taskList[key].splice(index, 1)[0];
    const previousKey = getPreviousKey(key);
    taskList[previousKey].push(task);
    updateTasks();
}

function goRight(key, index) {
    const task = taskList[key].splice(index, 1)[0];
    const nextKey = getNextKey(key);
    taskList[nextKey].push(task);
    updateTasks();
}

function getPreviousKey(key) {
    const keys = ['backlog', 'todo', 'ongoing', 'done'];
    const index = keys.indexOf(key);
    return keys[index - 1];
}

function getNextKey(key) {
    const keys = ['backlog', 'todo', 'ongoing', 'done'];
    const idx = keys.indexOf(key);
    return keys[idx + 1];
}

updateTasks();
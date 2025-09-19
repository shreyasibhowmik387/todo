const input = document.getElementById('input')
const addBtn = document.getElementById('btn')
const output = document.getElementById('output')

const array = []

function render() {
    output.innerHTML = ''
    for (let i = 0; i < array.length; i++) {
            output.innerHTML = ""
            for (let i = 0; i < array.length; i++) {

                const text = document.createElement('div');
                output.appendChild(text)
                text.classList.add("text")
                if(array[i].completed){
                    text.classList.add("line")
                }
                text.textContent = array[i].task;
                // div.setAttribute("class", array[i].completed ? 'line' : '')
                
                const btnwrapper = document.createElement('div')
                text.appendChild(btnwrapper)
                
                const doneBtn = document.createElement('button');
                btnwrapper.appendChild(doneBtn)
                doneBtn.textContent = "Done";
                doneBtn.setAttribute("onclick", `doneTask('${i}')`)
                
                const delBtn = document.createElement('button');
                btnwrapper.appendChild(delBtn)
                delBtn.textContent = "Delete";
                delBtn.setAttribute("onclick", `delTask('${i}')`)

                output.appendChild(text)

            }
    }
}

function delTask(i) {
    console.log(i);
    array.splice(i, 1)
    console.log(array);
    render(array)
}

function doneTask(i) {
    console.log(i);
    array[i].completed = !array[i].completed;
    render(array)
    console.log(array);


}

function check(inputValue, array) {
    if (inputValue === '') {
        alert('Should not be empty')
        return false
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].task === inputValue) {
            alert('This task is already included')
            inputValue = ''
            return false
        }
    }

    return true
}

function addItem() {
    const inputValue = input.value.trim()
    if (check(inputValue, array)) {
        array.push({
            task: inputValue,
            completed: false
        })
    }
    render(array)
    input.value = ''
    console.log(array);

}

addBtn.addEventListener('click', addItem)

// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         addItem()
//     }
// })
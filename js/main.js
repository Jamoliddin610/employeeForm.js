let fullName = document.getElementById('name')
let email = document.getElementById('email')
let tel = document.getElementById('tel')
let data = document.querySelector('.extra-input-data')
let city = document.getElementById('city')
let submit = document.querySelector('.modal__submit')
let reset = document.querySelector('.modal__reset')


let newArr = []
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    newArr.push({
        id: newArr.length,
        name: fullName.value,
        email: email.value,
        tel: tel.value,
        data: data.value
    })
    addNew(newArr)
    fullName.value = ''
    email.value = ''
    tel.value = ''
    data.value = ''
    city.value = ''

   
})
function addNew(newArr) {
    let elTable = document.querySelector('tbody')
    newArr.forEach((item)=>{
        let eltr = document.createElement('tr')
        eltr.innerHTML = `
                      <td>${item.name}</td>
                      <td>${item.email}</td>
                      <td>${item.tel}</td>
                      <td>${item.data}</td>
                      <td class="d-flex"><button class="td-btn emp__change" ><i class="bx bx-pencil"></i></button>
                      <button class="td-btn emp__delete" onclick="remove(${item.id})"><i class="bx bx-x"></i></button></td>
        `
        elTable.appendChild(eltr)
        
        
    })
    
}

function remove(id) {
    newArr = newArr.filter((item) => id != item.id)
    console.log(newArr)
    addNew(newArr)
}
console.log(newArr)

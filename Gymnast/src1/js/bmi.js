let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let bmi = document.querySelector('#calculate')
let age = document.querySelector('#age')
let final = document.querySelector('.bmii')



bmi.addEventListener('click', function () {
    if (height.value != '' || weight.value != '') {
        height.value /= 100
        let formul = Number(weight.value) / (Number(height.value) * Number(height.value));
        final.innerHTML += 
    `
    <div class='yekun'>
    <p>${formul}</p>
    </div>

    `

        age.value = '';
        height.value = '';
        weight.value = '';

    }
})
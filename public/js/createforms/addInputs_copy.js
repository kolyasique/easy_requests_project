const addBtns = document.querySelectorAll('*[data-button-add]');
const page = document.querySelector('.page')
const creationForm = document.querySelectorAll('.create-form-form');
let counter = 0
console.log(addBtns)
for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].addEventListener('click', () => {
        
        console.log(addBtns)
        const btnId = addBtns[i].getAttribute('id');
        counter++
        // const formId = document.querySelector(`#form\\:${btnId}`);
        
        const newSelect = document.createElement('select')
        newSelect.setAttribute('class', 'new-input')
        newSelect.setAttribute('name', `newselect-${counter}`)
        
        newSelect.innerHTML = `
                    <option class='option' value='name'>Имя</option>
                    <option class='option' value='phone'>Телефон</option>
                    <option class='option' value='email'>E-mail</option>
                    <option class='option' value='text'>Текстовое поле</option>
                    <option class='option' value='file'>Файл</option>
                   `
        creationForm[i].appendChild(newSelect)
      })}

// const addSelectBtn = document.querySelector('#add-input-btn')
// for (let i = 0; i < creationForm.length; i++) {
// creationForm[i].addEventListener('click', async (ev)=>{
//   if (ev.target.name === 'add-select'){
//     ev.preventDefault();
//     const newSelect = document.createElement('select')
//     newSelect.setAttribute('class', 'new-input')
//     newSelect.innerHTML = `
//                 <option class='option' value='name'>Имя</option>
//                 <option class='option' value='phone'>Телефон</option>
//                 <option class='option' value='email'>E-mail</option>
//                 <option class='option' value='text'>Текстовое поле</option>
//                 <option class='option' value='file'>Файл</option>
//                `
//     creationForm.appendChild(newSelect)
   
//   }

// })
// }
for (let j = 0; j < creationForm.length; j++) {
creationForm[j].addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  counter=0

  const response = await fetch('/createform', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(
      Object.fromEntries(new FormData(creationForm[j])),
    ),
  });


  // const allNewInputs = creationForm[j].querySelectorAll('.new-input')
  // const entries = Object.entries(allNewInputs)
  // console.log(entries[0])
  // // const valueObject =[]
  // for(let k = 0; k<allNewInputs.length;k++){
  
  //   const vv = ev.target.allNewInputs[0].value
  //   // valueObject.push(allNewInputs[k])
  // }
// console.log(valueObject)


});
}
// const response = await fetch('/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(
//       Object.fromEntries(new FormData(creationForm)),
//     ),
//   });
// let acceptBtn = document.querySelector()
// })





// for (let i = 0; i < addBtns.length; i++) {
//   addBtns[i].addEventListener('click', () => {
//     const name = addBtns[i].getAttribute('data-button-add');
//     const input = document.querySelector(`[data-input-place = '${name}']`);
//     console.log(input);
//     const activeInput = document.createElement('select');
//     activeInput.innerHTML = `
//            <option class='option' value='name'>Имя</option>
//            <option class='option' value='phone'>Телефон</option>
//            <option class='option' value='email'>E-mail</option>
//            <option class='option' value='text'>Текстовое поле</option>
//            <option class='option' value='file'>Файл</option>
//           `;
//     activeInput.setAttribute('class', 'new-input');
//     activeInput.setAttribute('name', `${name}newselect`);
//     creationForm.replaceChild(activeInput, input);
//   });
// }
// creationForm.classList.add('new-create-form-form');
// creationForm.classList.remove('create-form-form');

// const newCreationForm = document.querySelector('.new-create-form-form');
// newCreationForm?.addEventListener('submit', async (ev) => {
//   ev.preventDefault();
//   const firstselect = ev.target.`${name}newselect`.value;
//   const secondselect = ev.target.secondnewselect.value;
//   const thirdselect = ev.target.thirdnewselect.value;
//   const fourthselect = ev.target.fourthnewselect.value;
//   const fifthselect = ev.target.fifthnewselect.value;

//   const submitCreationButton = document.getElementById('submit-form-creation');
//   submitCreationButton.setAttribute('disabled', 'true');
//   const modals = document.querySelector('[data-modal-window]');
//   const config = [
//       {type:firstselect},
//       {type:secondselect},
//       {type:thirdselect},
//       {type:fourthselect},
//       {type:fifthselect},
//   ]
//   const response = await fetch('/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(config)
//       // Object.fromEntries(new FormData(newCreationForm)),
//   //   ),
//   });

//   const testSend = await response.json();
//   console.log(testSend.html);
//   const formContainer = document.querySelector('.secondcontainer');
//   const newForm = document.createElement('div');
//   newForm.setAttribute('class', 'new-form-div');
//   newForm.innerHTML = `${testSend.html}`;
//   formContainer.appendChild(newForm);
//   //   if(response.status === 200){
//   setTimeout(() => {
//     modals.style.display = 'none';
//     // window.location.href='/'
//   }, 1000);
//   // console.log(secondselect,'второй селект')
//   //   }
// });
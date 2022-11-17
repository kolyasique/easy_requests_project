const addBtns = document.querySelectorAll('*[data-button-add]');
const creationForm = document.querySelector('.create-form-form');

creationForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', () => {
      const name = addBtns[i].getAttribute('data-button-add');
      const input = document.querySelector(`[data-input-place = '${name}']`);
      console.log(input);
      const activeInput = document.createElement('select');
      activeInput.innerHTML = `
             <option class='option' value='name'>Имя</option>
             <option class='option' value='phone'>Телефон</option>
             <option class='option' value='email'>E-mail</option>
             <option class='option' value='text'>Текстовое поле</option>
             <option class='option' value='file'>Файл</option>
            `;
      activeInput.setAttribute('class', 'new-input');
      activeInput.setAttribute('name', `${name}newselect`);
      creationForm.replaceChild(activeInput, input);
    });
  }
  creationForm.classList.add('new-create-form-form');
  creationForm.classList.remove('create-form-form');

  const newCreationForm = document.querySelector('.new-create-form-form');
  newCreationForm?.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const firstselect = ev.target.firstnewselect.value;
    const secondselect = ev.target.secondnewselect.value;
    const thirdselect = ev.target.thirdnewselect.value;
    const fourthselect = ev.target.fourthnewselect.value;
    const fifthselect = ev.target.fifthnewselect.value;

    const submitCreationButton = document.getElementById('submit-form-creation');
    submitCreationButton.setAttribute('disabled', 'true');
    const modals = document.querySelector('[data-modal-window]');
    const config = [
        {firstselect:firstselect},
        {secondselect:secondselect},
        {thirdselect:thirdselect},
        {fourthselect:fourthselect},
        {fifthselect:fifthselect},
    ]
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(config)
        // Object.fromEntries(new FormData(newCreationForm)),
    //   ),
    });

    const testSend = await response.json();
    console.log(testSend.html);
    const formContainer = document.querySelector('.secondcontainer');
    const newForm = document.createElement('div');
    newForm.setAttribute('class', 'new-form-div');
    newForm.innerHTML = `${testSend.html}`;
    formContainer.appendChild(newForm);
    //   if(response.status === 200){
    setTimeout(() => {
      modals.style.display = 'none';
      // window.location.href='/'
    }, 1000);
    // console.log(secondselect,'второй селект')
    //   }
  });
});

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

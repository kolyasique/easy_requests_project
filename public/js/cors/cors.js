const { sendform } = document.forms

sendform?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const unikey = sendform.id

  console.log('PRIVET FETCH RABOTAET NA 4000', unikey)
    const sendFormInfo = await fetch(`http://localhost:3000/sendform/${unikey}`, {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(new FormData(sendform))),
      headers: { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' },
    });

    if(sendFormInfo.status === 200){
        // window.location.href='http://localhost:4000'
        sendform.reset()
    }
})

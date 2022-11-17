document.querySelector('.add-site-form')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const web = event.target.web.value;
  
    const addSiteToDatabase = await fetch('/addsite', {
      method: 'POST',
      body: JSON.stringify({ title, web }),
      headers: { 'Content-Type': 'application/json' },
    });


if(addSiteToDatabase.status === 200){
    window.location.href='/'
}
})
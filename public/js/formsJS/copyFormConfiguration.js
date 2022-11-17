// function myFunction() {
    const copyBtn = document.getElementsByClassName("myInputBtn");
    const copyText = document.getElementsByClassName('myInput')
    const tooltip = document.getElementsByClassName('tooltip')
    const myToolTip = document.querySelectorAll('#myToolTip')
    for(let i=0; i<copyBtn.length;i++){
        copyBtn[i].addEventListener('click',()=>{
        console.log('click')
        copyText[i].select();
        copyText[i].setSelectionRange(0, 99999)
        navigator.clipboard.writeText(copyText[i].value);
        tooltip[i].innerHTML = "Copied!";
        setTimeout(() => {
            tooltip[i].innerHTML = `<button onclick='myFunction()' onmouseout='outFunc()' className="myInputBtn">
        <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
    Copy HTML
        </button>`
        tooltip[i].setAttribute('className','myInputBtn')},1000)

    })}
//     copyText.select();
//     copyText.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(copyText.value);
    
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copied: " + copyText.value;
// //   }
  
// //   function outFunc() {
//     const tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
// //   }
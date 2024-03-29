const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const displayKeyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay')

window.addEventListener('keydown',(e)=>{
overlay.classList.add('hide');
displayKey.innerText = e.key;
displayKeyCode.innerText = e.keyCode;
if(e.keyCode === 32){
    displayKey.innerText = `'space'`;
}
})

displayKeyCodeDiv.addEventListener('click',(e)=>{
    const textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea = keyCodeDiv.querySelector('h2').innerText;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    keyCodeDiv.querySelector('p').innerText = 'copied';
    setTimeout(()=>{
        keyCodeDiv.querySelector('p').innerText = 'Click to copy';
    },1000)
})


console.log('Hello world');

//Menu
const menu = document.querySelector('.menu');
    console.log(menu);
//Burguer Button.
const burguerButton = document.querySelector('#burguer-button');
    console.log(burguerButton);

//Media Query con JS    
const mediaiPad = window.matchMedia('screen and (max-device-width: 767px)');
    console.log(mediaiPad);

//Activamos un listener que vaya comprobando hasta que llegue a esa resolucion.
mediaiPad.addListener(validation);
    
function validation(event)
{
    if(event.matches)
    {
        burguerButton.addEventListener('click', showHide); 
    } 
    else
    {
        burguerButton.removeEventListener('click', showHide);
    }
    console.log(event.matches);
}

function showHide()
{
    if(menu.classList.contains('is-active'))
    {
        menu.classList.remove('is-active');
    }
    else 
    {
        menu.classList.add('is-active');
    }
}

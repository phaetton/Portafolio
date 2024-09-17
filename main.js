// seleccionamos el toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

//seleccionamos el cuerpo
const body = document.body;

//consultamos los iconos del toggle
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click',
    ()=>{
        // cambiamos de clase al cuerpo
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }else{
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');            
        }
    }
)
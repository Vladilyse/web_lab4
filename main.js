let mat2 = document.getElementById('math2');
let mat3 = document.getElementById('math3');

let button1 = document.getElementById('But1');
button1.addEventListener('click', function() {
    mat2.style.display = 'block';
    mat3.style.display = 'none';
});

let button2 = document.getElementById('But2');
button2.addEventListener('click', function() {
    mat2.style.display = 'none';
    mat3.style.display = 'block';
});



let cont1 = document.getElementById('cont');
let cont2 = document.getElementById('cont2');
let cont3 = document.getElementById('cont3');

let butMenu1 = document.getElementById('menu1');
butMenu1.addEventListener('click', function(){
    cont1.style.display='block';
    cont2.style.display='none';
    cont3.style.display='none';
})
let butMenu2 = document.getElementById('menu2');
butMenu2.addEventListener('click', function(){
    cont1.style.display='none';
    cont2.style.display='block';
    cont3.style.display='none';
})
let butMenu3 = document.getElementById('menu3');
butMenu3.addEventListener('click', function(){
    cont1.style.display='none';
    cont2.style.display='none';
    cont3.style.display='block';
})
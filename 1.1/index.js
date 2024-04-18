function actionById(id){
    elem = document.getElementById(id);

    if (elem.style.color == 'black' || !elem.style.color){
        elem.style.color = 'white'
        elem.style.backgroundColor = 'blue'
    } else {
        elem.style.color = 'black'
        elem.style.backgroundColor = 'yellow'
    }
}

function actionAll(){

    list = document.querySelectorAll('p');

    list.forEach(el => {
        if (el.style.color === 'red'){
            el.style.color = 'white'
            el.style.backgroundColor = 'green'
        } else {
            el.style.color = 'red'
            el.style.backgroundColor = 'white'
        }
    });
}

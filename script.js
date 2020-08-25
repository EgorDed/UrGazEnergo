function f_click(Button) {
    if (Button.previousElementSibling.style.display === 'block') {
        Button.previousElementSibling.style.display = 'none';
        Button.innerHTML = 'ПОДРОБНЕЕ';
        Button.parentNode.style.width = '330px';
        Button.parentNode.style.height = '160px';

        Button.parentElement.style.order = 'initial';

        Button.scrollIntoView({block:'center',behavior:'smooth'});

        Button.style.scrollbehavior = 'smooth';
    } else {
        Button.previousElementSibling.style.display = 'block';
        Button.innerHTML = 'СВЕРНУТЬ';
        Button.parentNode.style.width = '83%';
        Button.parentNode.style.height = '100%';


        Button.parentElement.style.order = '-1';

        Button.scrollIntoView({block:'center',behavior:'smooth'});
    }
}


var more_span = document.getElementById('more_projects');

function more_click(Button) {
    if(more_span.style.display === 'flex'){
        more_span.style.display = 'none';
        Button.innerHTML = 'ЕЩЕ';
    } else {
        more_span.style.display = 'flex';
        more_span.style.paddingTop = '0';

        Button.innerHTML = 'СВЕРНУТЬ';
    }

}

var sun_1 = document.getElementById('sun');
var moom_1 = document.getElementById('moom');

function change(str) {
    document.getElementById('container').setAttribute('class', str);
}

sun_1.addEventListener('onclick', change('light'));
moom_1.addEventListener('onclick', change('dark'));
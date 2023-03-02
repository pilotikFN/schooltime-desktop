let minB = document.getElementById('winMinBtn');
let maxB = document.getElementById('winMaxBtn');
let closeB = document.getElementById('winCloseBtn');

minB.addEventListener('click', function () {
    app.window.minimize();
});
//maxB.addEventListener('click', function () {
//    app.window.maximize();
//});
closeB.addEventListener('click', function () {
    app.window.close();
});
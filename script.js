document.addEventListener('DOMContentLoaded', function () {
var openModalBtn = document.getElementById('openModalBtn1');
var closeModalBtn = document.getElementById('closeModalBtn1');
var modal = document.getElementById('modalOrganize');

openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
}
});
});

document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn2');
    var closeModalBtn = document.getElementById('closeModalBtn2');
    var modal = document.getElementById('modalAtlanCoelho');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn3');
    var closeModalBtn = document.getElementById('closeModalBtn3');
    var modal = document.getElementById('modalVaraldasGrifes');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var openModalBtn = document.getElementById('openModalBtn4');
    var closeModalBtn = document.getElementById('closeModalBtn4');
    var modal = document.getElementById('modalLService');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
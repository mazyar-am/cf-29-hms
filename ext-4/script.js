document.addEventListener('DOMContentLoaded', function () {
    const modalBtn = document.getElementById('modalBtn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const modalCloseBtn = document.getElementById('closeBtn');
    const saveBtn = document.getElementById('saveBtn');

    modalBtn.addEventListener('click', function () {
        modal.classList.add('open');
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
    });

    modalCloseBtn.addEventListener('click', function () {
        modal.classList.remove('open');
    });

    saveBtn.addEventListener('click', function () {
        console.log('Changes Saved');
        modal.classList.remove('open');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('open');
        }
    });
});
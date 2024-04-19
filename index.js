document.getElementById('postCreate').addEventListener('click', function() {
    const create = document.querySelector('.create');
    if (create.style.display === 'none'){
        create.style.display = 'flex';
    }
    else {
        create.style.display = 'none';
    }
});


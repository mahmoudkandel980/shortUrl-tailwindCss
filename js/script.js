const URLInput = document.getElementById('link-input'),
    form = document.getElementById('link-form'),
    errorMessageEl = document.getElementById('error-message');

const validURL = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (URLInput.value.trim() === '') {
        URLInput.classList.add('border-red')
        errorMessageEl.textContent = 'Invalid URL : Please enter a URL'
        setTimeout(() => {
            URLInput.classList.remove('border-red')
            errorMessageEl.textContent = ''
        }, 2000);
    } else if (URLInput.value.match(validURL)) {
        URLInput.classList.add('border-green-500')
        errorMessageEl.classList.toggle('text-red')
        errorMessageEl.classList.add('text-green-500')
        errorMessageEl.textContent = 'Valid Url Success'
        setTimeout(() => {
            errorMessageEl.classList.toggle('text-red')
            errorMessageEl.classList.remove('text-green-500')
            URLInput.classList.remove('border-green-500')
            errorMessageEl.textContent = ''
        }, 2000);

        URLInput.value = ''
    } else {
        URLInput.classList.add('border-red')
        errorMessageEl.textContent = 'Invalid URL'
        setTimeout(() => {
            URLInput.classList.remove('border-red')
            errorMessageEl.textContent = ''
        }, 2000);
    }
})

///menu

const btn = document.getElementById('menu-btn'),
    menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})


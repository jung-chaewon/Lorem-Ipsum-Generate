const form = document.querySelector('#form')
const copy = document.querySelector('.copy')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const size = parseInt(form.input.value);
    document.querySelector('.text-section').innerHTML = loremIpsum(size);
})

function loremIpsum(size) {
    const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing alit. phasellus vehicula
    odio non risus finibus feugiat.
    Donec bibendum, sapien eget volutpat dapibus, urna velit malesuada tortor, et fermentum acru
    velit non dui.
    Vestibulen condimentum, justo sed rhoncus laoreet, nunc tellus viverra nulla, nec eleifend
    purus velit none justo.
    Proin sit amet venenatis velit, eu varius nunc. Integer eget ligula eu metus elementum
    sodales.
    sed efficitur, mi a rhoncus vehicula, odion orci malesuada elit, at fermentum justo nulla et
    urna.
    Cras auctor, elit at lacinia eleifend, metus ex condimentum purus, ut lacinia tortor lectus
    id ipsum.
    Nunc viverra sit amet justo in lacinia. Vestibulum scrlerisque, orci id cursus placerat,
    purus purus bibendum urna, at scelerisQue quam libero sed aruc.
    Fusce eget purus  eget purus sodales tristique ac nec nunc. Pellentesuque sleifend laoreet
    ultrices.`
    const array = lorem.split('\n');
    let result = '';
    for (let i = 0; i < size; i++) {
        result += `<p class = text-white font-semibold>${array[i % array.length]}</p>`;
    }
    if (result) {
        document.querySelector('.text-wrapper').style.display = 'flex';
    } else {
        document.querySelector('.text-wrapper').style.display = 'none';
    }
    return result;
}
copy.addEventListener('click', (e) => {
    const text = document.querySelector('.text-section').textContent;

    const textArea = document.createElement('textarea');

    textArea.select();
    textArea.setSelectionRange(0, 99999);

    if (textArea.select) {
        navigator.clipboard.writeText(textArea.value);
        copy.classList.add('fa-clipboard');
        copy.classList.remove('fa-copy');
        setTimeout(() => {
            copy.classList.remove('fa-clipboard');
            copy.classList.add('fa-copy');
        }, 500)

    }
}

)

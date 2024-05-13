function div() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Izza Bot está pronta para responder suas menssagens.';
    newDiv.style.fontFamily = 'Roboto';
    newDiv.style.fontSize = '1.2rem';
    newDiv.style.color = 'white';
    newDiv.style.textAlign = 'center'
    newDiv.style.width = '100%';
    newDiv.style.height = '20px';
    newDiv.style.backgroundColor = '#25d366';
    document.body.insertBefore(newDiv, document.body.firstChild);

    const newDivHeight = newDiv.offsetHeight;
    const mainContent = document.getElementById('app');

    if (mainContent) {
        mainContent.style.marginTop = newDivHeight + 'px';
    }
}

module.exports = div;
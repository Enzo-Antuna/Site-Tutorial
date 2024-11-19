document.getElementById('botao').addEventListener('click', function () {
    const a = document.createElement('a');
    a.href = './Doom.rar';
    a.download = 'Doom.rar';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
const actList = document.querySelector('.act-list');

function clickToSwitch() {
  const switchD = document.getElementById('closemenu');
  if (switchD.style.display === 'block') {
    switchD.style.display = 'none';
  } else {
    switchD.style.display = 'block';
  }
}

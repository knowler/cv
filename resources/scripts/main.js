let expandAll = document.getElementById('expand-all')

expandAll.addEventListener('click', event => {
  let details = document.querySelectorAll('details')

  for (var i = 0; i < details.length; i++) {
    details[i].open = true;
  }
})

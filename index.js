document.getElementById('addButton').addEventListener('click', function(e) {
    e.preventDefault();
    const itemInput = document.getElementById('itemInput');
    const item = itemInput.value.trim();
  
    if (item !== '') {
      addItemToList(item);
      itemInput.value = '';
    }
  });
  
  function addItemToList(item) {
    const li = document.createElement('li');
    li.classList.add("bucketitem");
    li.setAttribute("id","about");
    li.textContent = item;
    const tick = document.createElement('i');
    tick.classList.add("fa-solid");
    tick.classList.add("fa-check");
    const bucketList = document.getElementById('bucketList');
    bucketList.appendChild(li).appendChild(tick);
  }
  
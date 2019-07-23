let items = 0;
let maxItems = 10;

function newElement() {
  let input_value = document.getElementById('user_acttion').value;

  this.addList = function() {
    let checkbox = document.createElement('i');
    checkbox.classList.add('check')
    checkbox.classList.add('material-icons')
    checkbox.innerText = 'check_box_outline_blank'

    let li = document.createElement('li');
    li.setAttribute('draggable', 'true')
    li.classList.add('action');

    let edit = document.createElement('i');
    edit.classList.add('material-icons')
    edit.classList.add('edit')
    edit.appendChild(document.createTextNode('create'))

    let del = document.createElement('i');
    del.classList.add('material-icons')
    del.classList.add('close')
    del.appendChild(document.createTextNode('delete'))

    let label = document.createElement('label');
    label.classList.add('todo_task')
    label.innerText = input_value;

    li.appendChild(checkbox)
    li.appendChild(label);
    li.appendChild(edit);
    li.appendChild(del);

    document.getElementById('my_list').appendChild(li);
    items++;
    document.getElementById('user_acttion').value = '';
  }

  this.delTask = function() {
    let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = 'none';
        items--;
      }
    }
  }

  this.checkBox = function() {
    let uncheck = document.getElementsByClassName('check')
    for (let i = 0; i < uncheck.length; i++) {
      uncheck[i].onclick = function() {
        uncheck[i].innerText = 'check_box'
      }
    }
  }

  if(!input_value) {
    return;
  } else {
    if (items < maxItems) {
      this.addList()
    } else {
      document.getElementById('add_action_icon').disabled = true;
    }
  }

  this.checkBox()
  this.delTask()
}

import {burger} from './js/burger-manu.js'
import {Num} from './js/math-random.js'
import {Sim} from './js/slider.js';
Num()
burger()
Sim()






let url = document.querySelector('.block52')

const xhr = fetch('https://reqres.in/api/users?page=1')
.then(y=> y.json())
.then(x=> {
  const user = x.data;
  user.splice(0,1);
  user.map(user => {
      let elem = document.createElement('div');
      elem.classList.add('cl_div');
      let text = document.createElement('h1');
      let email = document.createElement('p');
      email.classList.add('p51')
      email.innerHTML = user.email
      text.classList.add('cl_h1');
      text.innerHTML = user.last_name
    elem.innerHTML = `<img src=${user.avatar} />`
    url.appendChild(elem)
    elem.appendChild(text)
    text.appendChild(email)
})
})



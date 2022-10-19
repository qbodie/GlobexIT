// Функция отправляет запрос на сервер, и потом добавляет html-карточки на сайт 
async function getResponse(url = 'http://127.0.0.1:3000') {
  let response = await fetch(url)
  let content = await response.json()
  let item;

  let list = document.querySelector('.container')
  let popupList = document.querySelector('.popups')

  list.innerHTML = '';

  for (item in content) {
    list.innerHTML +=  `
      <div href="${item}" class="card">
        <div class="card-name">${content[item].name}</div>
        <div class="card-phone_number"><img src="src/img/phone.png">${content[item].phone}</div>
        <div class="card-email"><img src="src/img/email.png">${content[item].email}</div>
      </div> 
    `
  }

  for (item in content) {
    popupList.innerHTML += `
      <div class="popup" id="${item}">
        <div class="popup__container"> 
          <div class="popup__overlay"></div>
          <div class="popup__body">
            
            <div class="popup__close" id="close_popup">&#10006</div>
            <div class="popup__name">${content[item].name}</div>
            <div class="popup__content">
              <div class="popup__leftbar">
                <li>Телефон:</li>
                <li>Почта:</li>
                <li>Дата приёма:</li>
                <li>Должность:</li>
                <li>Подразделение:</li>
                <li>Адрес:</li>
              </div>
              <div class="popup__rightbar">
                <li class="phone">${content[item].phone}</li>
                <li class="email">${content[item].email}</li>
                <li>${content[item].hire_date}</li>
                <li class="position_name">${content[item].position_name}</li>
                <li class="department">${content[item].department}</li>
                <li class="popup__rightbar">${content[item].address}</li>
              </div>
            </div>
            <div class="popup__footer">
              <div class="info">Дополнительная информация:</div>
              <div class="popup__footer-content">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

}



// Функция для открытия и закрытия попапа
async function view(url) {
  await getResponse(url);

  let popups = document.querySelectorAll('.card');
  if (popups.length > 0) {
    for (let index = 0; index < popups.length; index++) {
      const popup = popups[index];
      popup.addEventListener("click", function(e) {
        const popupName = popup.getAttribute('href');
        const currentPopup = document.getElementById(popupName);
        openPopup(currentPopup);
        e.preventDefault();
      });
    }
  }

  let popupClose = document.querySelectorAll('.popup__overlay,.popup__close');
  if (popupClose.length > 0) {
    for (let index = 0; index < popupClose.length; index++) {
      const el = popupClose[index];
      el.addEventListener("click", function(e) {
        closePopup(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function openPopup(currentPopup) {
    currentPopup.classList.add('active');
  };
  
  function closePopup(activePopup) {
    activePopup.classList.remove('active');
  };

};


// Функция,которая меняет запросы на сервер чтобы работал "поиск" необходимых карточек
function review() {
  var searchText = document.getElementById("search").value;
  let url = `http://127.0.0.1:3000?term=${searchText}`;
  view(url);
};


// Просто вызов функции, чтобы изначально отрисовались все карточки
review();

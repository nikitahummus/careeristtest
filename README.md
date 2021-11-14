краткое описание (в том числе: сервер, клиент, примененные технологии, затраченное время...)
SPA приложение-блог
- на сервере:
БД - postgresql, ORM - sequelize
express
- на клиенте:
react, используется контекс, react-hoocs, bootstrap
на реализацию задания затрачено в пределах 4-5 часов

какие задачи решены

- структура формы отправки сообщения: имя, текст, кнопка
- сообщение отправляется по клику на кнопку и по Ctrl+Enter
- новое сообщение добавляется без перезагрузки страницы
- новое сообщение добавляется в начало (вверх) списка сообщений
- сообщения отсортированы по убыванию даты (новые вверху)
- новое сообщение содержит имя отправителя и текст
- после принудительной перезагрузки страницы сообщение не исчезает, не перемещается
- при заходе на страницу из другого браузера сообщение остается на месте (хранение данных на сервере)
- обрабатываются ошибки

описание функционала приложения
можно написать имя и текст сообщения, все проходит валидацию и сохраняется на сервер

ссылка на рабочую задеплоенную версию приложения

рабочая инструкция по сборке и запуску
запустить - клиент: cd my-app yarn start, - сервер: cd server npm start



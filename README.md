# Discover The Cosmos
***
## Описание:

Веб-приложение для любителей космоса, который позволяет любоваться фотографиями космоса из базы данных **NASA**. Mожно создать фотоальбом из понравившихся фотографий и смотреть альбомы других пользователей.
***

## Используемые технологии:

![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript) ![HTML5](https://img.shields.io/badge/-HTML5-000?&logo=HTML5) ![CSS3](https://img.shields.io/badge/-CSS3-000?&logo=CSS3) ![Bootstrap](https://img.shields.io/badge/-Bootstrap-000?&logo=Bootstrap) ![Handlebars.js](https://img.shields.io/badge/-Handlebars.js-000?&logo=Handlebars.js) ![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=Node.js) ![Express](https://img.shields.io/badge/-Express-000?&logo=Express) ![Sequelize](https://img.shields.io/badge/-Sequelize-000?&logo=Sequelize) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-000?&logo=PostgreSQL)
***

## Скриншоты

![today`s pic](/public/images/readeMeImages/pic1.png)  
*Рисунок 1*. Фото дня

![description](/public/images/readeMeImages/pic2.png)  
*Рисунок 2*. Описание картинки

![navbar](/public/images/readeMeImages/pic3.png)  
*Рисунок 3*. Меню навигации
***

## Запуск приложения

После скачивания или клонирования репозитория
в корне проекта создайте файл **.env**. Скопируйте содержимое файла **.env_example** и поменяйте под себя (*username, password и database*).Откройте терминал и запустите следующие команды из корня проекта:
+ npm i
+ npx sequelize db:create
+ npx sequelize db:migrate
+ npm start


Кузенкова Татьяна
Ниже приведена небольшая инструкция для запуска автоматического теста "C53916 Основная страница справочника пациента"

Для запуска автоматического теста необходимо выполнить следующие действия:
1. Скачать и установить Node.js (http://nodejs.org/)
2. Установить Selenium Webdriver: В папке с проектом открыть командную строку и выполнить следующую команду:
		npm install selenium-webdriver
3. Скачать и распаковать в папку с проектом драйвер браузера Chrome (или драйвер другого браузера, но в тестовом задании используется именно chromedriver) - http://chromedriver.storage.googleapis.com/index.html?path=2.21/ 
4. Запустить Node.js command prompt, перейти в папку с проектом и выполнить следующую команду:
		node PatientBookTest.js

Краткое описание проекта:
1. В папке node_modules находятся все необходимые библиотеки;
2. В файле Common.js описана работа с элементами любой страницы приложения, а также методы открытия/закрытия браузера;
3. Файл ReadTestData.js содержит методы для считывания тестовых данных из файла (web-адрес приложения, в данном случае - "docdoc.ru/library", и названия ссылок и ожидаемые адреса страниц, на которые мы попадаем после переходы по ссылке);
4. Файл PatientBookTest.js содержит сам тест, где происходит клик по ссылкам и проверка получаемых страниц;
5. Файл webPortal.txt содержит адрес приложения;
6. Файл links.xml содержит список ссылок: текст ссылки и ожидаемый адрес страницы, ну которую попадаем.

# Exizmat

## Данный интернет магазин сделан при помощи Django
<img src="./static/img/logo.png" alt="Главная страница">

## О проекте

Магазин выполненный на django версии 2.1, python 3.9. С bootstrap, CSS, HTML5, JavaScript для фронта и PostgreSQL.
Магазин имеет такой функционал:

- Список всех продуктов;
- Список категорий;
- Добавление изображений к продукту;
- Возможность добавлять и удалять из корзины;
- Оформлять заказ через корзину, тем самым добавляя его в БД;
- Авторизация пользователей;

## Бэкенд разработчик

* **Муслитдинов Улугбек**

## Фронтенд разработчик

* **Тимур Касимов**

## Установка:
### С помощью Docker:

```docker-compose up -d --build```

### С помощью Pipenv:

* ```pipenv install django psycopg2-binary```
* ```pipenv shell```
* ```python manage.py runserver```

**Крайне рекомендуем использовать именно _Docker_, так как все образы были созданы на нем и есть большая вероятность, что _pipenv_ не будет работать.**

## Проект находится под лицензией [MIT](https://github.com/WEBGROUP-TUJ/Rozgor/blob/main/LICENSE)

## Все полезные ссылки к этому проекту:
* [Docker image](https://hub.docker.com/repository/docker/ulugbekus/rozgor)

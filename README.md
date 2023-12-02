# Простий REST API на JavaScript

Цей проект містить простий REST API для управління постами. Використовується JSONPlaceholder як фейковий REST API для тестування.

## Інструкції для запуску

1. Завантажте проект на свій компьютер або клонуйте його:

````bash
git clone https://github.com/your-username/your-project.git


# Документація API

## Створення нового поста (Create)
- **Метод:** `POST`
- **Маршрут:** `/posts`
- **Приклад тіла запиту:**

```json
{
  "title": "Новий пост",
  "body": "Текст нового поста",
  "userId": 1
}


## Отримання інформації про пост (Read)
- **Метод:** `GET`
- **Маршрут:** `/posts/:postId`
- **Приклад параметрів шляху:1**


## Отримання списку постів (Read)
- **Метод:** `GET`
- **Маршрут:** `/posts`


## Оновлення інформації про пост (Update)
- **Метод:** `PUT`
- **Маршрут:** `/posts/:postId`
- **Приклад параметрів шляху:1**
- **Приклад тіла запиту:**

```json
{
  "title": "Новий заголовок поста"
}


## Вилучення поста (Delete)
- **Метод:** `DELETE`
- **Маршрут:** `/posts/:postId`
- **Приклад параметрів шляху: 1**



## Приклад викликів функцій

// Створення нового поста
```javascript
const newPostData = {
  title: 'Новий пост',
  body: 'Текст нового поста',
  userId: 1
};

createPost(newPostData);


// Оновлення поста
const postIdToUpdate = 1;
const updatedPostData = {
  title: 'Новий заголовок поста'
};

updatePost(postIdToUpdate, updatedPostData);


// Вилучення поста
const postIdToDelete = 1;
deletePost(postIdToDelete);


// Отримання інформації про пост та всіх постів
getPost(1).then(data => console.log('Інформація про пост:', data));
getAllPosts().then(data => console.log('Список постів:', data));



````

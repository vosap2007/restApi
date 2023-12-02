const MAIN_URL = "https://jsonplaceholder.typicode.com/posts";

// Функція для виконання HTTP-запитів
const makeRequest = async (url, method, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Помилка: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Помилка при виконанні запиту:", error.message);
  }
};

// Створення нового поста (Create)
const createPost = async (newPost) => {
  return await makeRequest(MAIN_URL, "POST", newPost);
};

// Отримання інформації про пост або список постів (Read)
const getPost = async (postId) => {
  const url = `${MAIN_URL}/${postId}`;
  return await makeRequest(url, "GET");
};

const getAllPosts = async () => {
  return await makeRequest(MAIN_URL, "GET");
};

// Оновлення інформації про пост (Update)
const updatePost = async (postId, updatedData) => {
  const url = `${MAIN_URL}/${postId}`;
  return await makeRequest(url, "PUT", updatedData);
};

// Вилучення поста (Delete)
const deletePost = async (postId) => {
  const url = `${MAIN_URL}/${postId}`;
  return await makeRequest(url, "DELETE");
};

// Приклад викликів функцій
const newPostData = {
  title: "Новий пост",
  body: "Текст нового поста",
  userId: 1,
};

createPost(newPostData);

const postIdToUpdate = 1;
const updatedPostData = {
  title: "Новий заголовок поста",
};

updatePost(postIdToUpdate, updatedPostData);

const postIdToDelete = 1;
deletePost(postIdToDelete);
getPost(1).then((data) => console.log("Інформація про пост:", data));
getAllPosts().then((data) => console.log("Список постів:", data));

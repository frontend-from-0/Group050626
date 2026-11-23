// 1. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// function fetchPosts () {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((posts) => console.log(posts))
//     .catch((error) => console.error(error));
// };

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
  } catch (error) {
    console.error(error);
  }
}

// 2. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
};

// fetchData()
// 	.then((result) => console.log(result))
// 	.catch((error) => console.error(error));
async function getData() {
  try {
    const result = await fetchData();
  } catch (error) {
    console.error(error);
  }
}
getData();

// 3. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
  }
};

async function printUserCount() {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

printUserCount();

// 4. Convert the function below into asyncrounous function using async/await and try/catch syntax.
const fetchUserData = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

async function printUserData() {
  try {
    const user = await fetchUserData();
    console.log('User data:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}
printUserData();

// 5. Convert the function below into asyncrounous function using async/await and try/catch syntax.
// const getPostsAndComments = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((post) => {
//       return fetch(
//         `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
//       );
//     })
//     .then((response) => response.json())
//     .then((comments) => console.log(comments))
//     .catch((error) => console.error(error));
// };

const getPostsAndComments = async () => {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    if (!response.ok) {
      throw Error('Failed fetching the post with id 1');
    }

    const post = await response.json();

    const commentsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`,
    );

    if (!commentsResponse.ok) {
      throw Error('Failed fetching comments for the post with id 1');
    }
    const comments = await commentsResponse.json();
    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};

// 6.Convert the function below into asyncrounous function using async/await and try/catch syntax.

const fetchWithTimeout = (url, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        resolve(response.json());
      } catch (error) {
        reject(error);
      }
    }, timeout);
  });
};

async function getPostsWithTimeout() {
  try {
    const posts = await fetchWithTimeout(
      'https://jsonplaceholder.typicode.com/posts',
      2000,
    );

    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}
getPostsWithTimeout();
const COHORT_NAME = "2302-acc-ct-web-pt-a";
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//register new user//
export async function registerUser(username, password) {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("error registering user");
    }
}

//user log-in//
export async function loginUser(username, password) {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        });

        const result = await response.json();

        return result;
    } catch (ex) {
        console.log("error logging in user");
    }
}

//get specific user details//
export async function getUserDetails(token) {
    try {
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const result = await response.json();
        return result;
    } catch (ex) {
        console.log("error getting users details");
    }
}

//GET/posts (get all posts)--Jeremy//
export async function getPosts(token) {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const results = await response.json();
        return results;
    } catch (error) {
        console.log("error getting all posts");
    }
}

//POST/posts (create post): Jeremy//
export async function createPost(token,
    { title, description, price, location, willDeliver }) {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
                },
            }),
        });

        const result = await response.json();
        return result;
    } catch (ex) {
        console.log("error creating a new post");
    }
}

//PATCH/posts/POST_ID (updatePost)--Jeremy//
export async function updatePost({ token, title, description, price, location, willDeliver, postID }) {
    try {
        const response = await fetch(`${baseURL}/posts/${postID}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description,
                    price,
                    location,
                    willDeliver
                }
            })
        });

        const result = await response.json();
        return result;
    } catch (ex) {
        console.log('error updating post');
    }
}
//DELETE/posts/POST_ID (deletePost)--Jeremy//
export async function deletePost(token, postID) {
    console.log(postID);
    try {
        const response = await fetch(`${API_URL}/posts/${postID}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (ex) {
        console.log(error);
        console.log("error deleting post");
    }
}

//create new message//
export async function createMessage({ postID, token, message }) {
    try {
        const response = await fetch(`${baseURL}/posts/${postID}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                message,
            }),
        });
    } catch (ex) {
        console.log(ex);
        console.log("error creating message");
    }
}
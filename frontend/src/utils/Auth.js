export const BASE_URL = 'https://api.project.mesto.nomoredomains.rocks';

function getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

export function register(form) {

    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
    .then(getResponse)
};

export function authorize(form) {

    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
    .then(getResponse)
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                return data.token;
            }
        })
};

export function checkToken(token) {

    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(getResponse)
        .then(data => data)
};
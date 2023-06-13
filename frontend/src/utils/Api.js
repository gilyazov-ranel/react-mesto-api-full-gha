class Api {
    constructor(basePath, token) {
        this._basePath = basePath;
        this._token = token;
        this._headers = {
            authorization: this._token
        }
    }

    _getJson(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _getHeaders() {
        return {
            "Content-Type": "application/json",
            authorization: this._token,
        };
    }

    getCard() {
        return fetch(`${this._basePath}/cards`, {
            headers: this._headers
        }).then(this._getJson);
    };

    editProfiles(item) {
        return fetch(`${this._basePath}/users/me`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify(item)
        }).then(this._getJson);
    }

    instalAvatar(item) {
        return fetch(`${this._basePath}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._getHeaders(),
            body: JSON.stringify(item)
        }).then(this._getJson);
    }

    createCard(item) {
        return fetch(`${this._basePath}/cards`, {
            method: 'POST',
            headers: this._getHeaders(),
            body: JSON.stringify(item)
        }).then(this._getJson);
    }

    deleteCard(cardId) {
        return fetch(`${this._basePath}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._getHeaders()
        }).then(this._getJson);
    }

    getCurrentUser() {
        return fetch(`${this._basePath}/users/me`, {
            headers: this._getHeaders(),
        }).then(this._getJson);
    }

    changeLikeCardStatus(cardId, check) {
        if (check) {
            return fetch(`${this._basePath}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: this._getHeaders(),
            }).then(this._getJson);
        } else {
            return fetch(`${this._basePath}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: this._getHeaders(),
            }).then(this._getJson);
        }
    }
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-61', '34621976-6065-469d-b8be-70c78381e0b0')

export { api };


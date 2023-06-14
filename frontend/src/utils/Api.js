class Api {
    constructor(basePath) {
        this._basePath = basePath;
        // this._token = token;
        // this._headers = {
        //     authorization: this._token
        // }
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
            // authorization: this._token,
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

const api = new Api('https://api.project.mesto.nomoredomains.rocks/')

export { api };


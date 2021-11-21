import qs from 'query-string';

export const DOMAIN = 'http://localhost:3001';

class apiCall {
    constructor(domain) {
        this.domain = domain;
    }

    async perform(url, data, config) {
        const request = await fetch(`${this.domain}/${url}`, {
            ...config,
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application-json'
            }
        });
        return request.json();
    };

    async get(path, searchParams = {}) {
        return await this.perform(`${path}?${qs.stringify(searchParams)}`)
    };

    async post(path, payload) {
        return await this.perform(path, payload, {
            method: 'POST'
        })
    };

    async put(path, payload) {
        return await this.perform(path, payload, {
            method: 'PUT'
        })
    };

    async delete(path) {
        return await this.perform(path,  {
            method: 'DELETE'
        })
    };
}

export default new apiCall(DOMAIN);

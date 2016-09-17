export function makeRequest(url, options) {
    options = options || {}
    return fetch(url, {
        ...options,
        method: options.method || 'GET',
        headers: {
            ...options.headers
        }
    })
}

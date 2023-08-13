module.exports = {
    "url": "/auth/token",
    "headers": {
        'Content-Type': 'application/json',
        'x-api-key': 'x-api-key'
    },
    "body": {
        "grant_type": "client_credentials",
        "id": "id",
        "secret": "secret",
        "refresh_token": "refresh_token"
    }
}
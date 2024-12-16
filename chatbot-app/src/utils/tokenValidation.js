function isValidToken(token) {
    // Check if the token is a non-empty string
    if (typeof token !== 'string' || token.trim() === '') {
        return false;
    }

    // Example validation: Check if the token has a specific format (e.g., JWT)
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
        return false;
    }

    // Further validation logic can be added here (e.g., expiration check)

    return true;
}

function getTokenExpiration(token) {
    if (!isValidToken(token)) {
        return null;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp ? new Date(payload.exp * 1000) : null;
}

export { isValidToken, getTokenExpiration };
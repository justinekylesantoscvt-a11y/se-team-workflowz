function login(username, password) {
    if (!username || !password) {
        return "Username and password are required";
    }

    if (username === "admin" && password === "admin123") {
        return "Authentication successful";
    }

    return "Authentication failed";
}
module.exports = { login };
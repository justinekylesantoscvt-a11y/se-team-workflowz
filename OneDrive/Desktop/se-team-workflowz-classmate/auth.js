function login(username, password) {
    if (!username || !password) {
        return "Username and password are required";
    }

    if (username === "admin" && password === "1234") {
        return "Login successful";
    }

    return "Invalid username or password";
}
module.exports = { login };
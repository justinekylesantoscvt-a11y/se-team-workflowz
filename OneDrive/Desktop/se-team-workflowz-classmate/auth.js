function login(username, password) {
    // Validate missing inputs
    if (!username || !password) {
        return "Error: Missing credentials";
    }

    // Trim accidental spacing
    const cleanUser = username.trim();
    const cleanPass = password.trim();

    // Check credentials
    if (cleanUser === "admin" && cleanPass === "1234") {
        return "Welcome back, Admin!";
    }

    return "Access denied: Invalid credentials";
}

module.exports = { login };
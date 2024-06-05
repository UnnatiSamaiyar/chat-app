export const login = async (req, res) => {
    try {
        const{fullName, username, password, confirmPassword, gender} = req.body;
    } catch (error) {
        
    }
}

export const logout = (req, res) => {
    res.send("logoutUser");
    console.log("logoutUser");
}

export const signup = (req, res) => {
    res.send("signupUser")
    console.log("signupUser");
}
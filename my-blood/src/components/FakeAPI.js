const FakeAPI = {
    login: data => {
        const {username, password} = data;
        return new Promise((resolve, reject) => {
            if (username === "Eve Mrr" && password === "start") {
                resolve({
                    username,
                    name: "Eve",
                    surname: "Mrr",
                    lastLogin: new Date("02/04/2022 21:37:00")
                });
            } else {
                reject("Login lub hasło są nieprawidłowe!");
            }
        });
    }
};

export default FakeAPI;
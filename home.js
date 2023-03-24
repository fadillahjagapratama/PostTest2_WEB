let storedUsers = localStorage.getItem("users");
		if (storedUsers) {
			let users = storedUsers.split(",");
			users = users.map((user) => user.split(":"));
			let username = users[users.length - 1][0];
			document.getElementById("username").textContent = username;
		}
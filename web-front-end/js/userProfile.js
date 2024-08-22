document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
	event.preventDefault();
	const username = document.getElementById("other-username").value;
	const response = await fetch(`https://4001-codrjay-authenticationa-6aynlmxy0z4.ws-eu115.gitpod.io/auth/delete/user`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			username
		})
	});
		
});
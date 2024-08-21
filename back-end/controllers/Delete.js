await UserModel.destroy({
	where: {
		username: username
	}
})
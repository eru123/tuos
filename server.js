require("dotenv").config()
require('./tera/api').server({
	port: process.env.PORT || "8080",
	host: process.env.HOST || '0.0.0.0',
	token: process.env.JWT_TOKEN || (() => {
		console.log("[SYSTEM] Using default JWT Token");
		return "tuos_default_jwt_token"
	})(),
	mongo: process.env.MONGO_DIRECT || "mongodb://0.0.0.0:27017/tuos",
	config: require('./tera/api').config,
	plugins: [
		require('./tera/mongoose'),
		require('./tera/auth').plugin,
		require('./tera/static'),
		require('./tera/rate-limit'),
		require('./tera/blog').plugin,
		require('./tera/my-api').plugin,
		require('./tera/mailer'),
		require('./tera/misc'),
		require('fastify-cors')
	],
	db_models: {
		...require('./tera/auth').models,
		...require('./tera/blog').models,
		...require('./tera/my-api').models,
	},
	mailer: {
		secure: process.env.MAILER_SECURE == "1",
		host: process.env.MAILER_HOST,
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS
		}
	}
}).start()
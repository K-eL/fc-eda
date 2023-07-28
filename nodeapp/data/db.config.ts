export const dbConfig = {
	HOST: "nodemysql",
	DB: "accountsdb",
	USER: "root",
	PASSWORD: "root",
	dialect: "mysql",
	logging: false,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	}
};
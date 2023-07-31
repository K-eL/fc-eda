export const dbConfig = {
	HOST: "nodemysql",
	DATABASE: "accountsdb",
	USER: "root",
	PASSWORD: "root",
	dialect: "mysql",
	logging: false,
	port: 3306,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	}
};
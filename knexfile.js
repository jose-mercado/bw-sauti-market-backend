module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
        filename: "./data/users.db"
    },
    migrations: {
        directory: "./data/migrations"
    },
    seeds: {
        directory: "./data/seeds"
    }
    },
};
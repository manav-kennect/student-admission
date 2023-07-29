module.exports = {
    //  will be available everywhere as global.db.collectionName
    collections: [
        "auth_credentials",
        "users",
        "cities"
    ],
    // schema: Just For information
    schema: {
        auth_credentials: {
            "_id": "ObjectId",
            "username": "string",
            "type": "number",
            "password": "string",
            "record": {
                "createdOn": "Date",
                "updatedOn": "Date",
                "active": "boolean"
            },
        },
        users: {
            "_id": "ObjectId",
            "userData": {
                "name": "string",
                "email": "email", 
                "phone": "phone", 
            },
            "record": {
                "createdOn": "Date",
                "updatedOn": "Date",
                "active": "boolean"
            }
        },
        cities: {

        },
    },
    // ensure below indexes
    indexes: {
        auth_credentials: [
            [{ username: 1, _id: 1 }, { unique: true }],
            [{ username: 1 }, { unique: true }],
        ],
        users: [
            [{ username: 1 }, { unique: true }],
        ],
        cities: [
            [{ url_slug: 1 }, { unique: true }],
        ],
    }
}
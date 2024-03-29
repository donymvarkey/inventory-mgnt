const mongoose = require('mongoose');

const DB_URI = process.env.DB_DEV_URI;

mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

const dbConn = async () => {
    try {
        console.log(`Connecting to: ${DB_URI}`);
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on('error', (err) => {
            throw new Error(`DB running error: ${err}`);
        });
        console.log('DB is connected!');
        return;
    } catch (err) {
        throw new Error(`DB connection error: ${err}`);
    }
};

const dbClose = async () => {
    try {
        await db.close();
        console.log('DB is disconnected!');
    } catch (error) {
        console.log(`DB disconnection error: ${error}`);
        throw new Error(`DB connection failed to close: ${error}`);
    }
};
module.exports = { dbConn, dbClose };

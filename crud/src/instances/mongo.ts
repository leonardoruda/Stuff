const mong = require('mongoose');
require('dotenv').config();

mong.set('strictQuery', true);

export const mongoConnect = async() => {
    try {
        console.log('Connecting to database...');
        await mong.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database!');

    } catch (error) {
        console.log('Error connecting to database:', error);
    }
};
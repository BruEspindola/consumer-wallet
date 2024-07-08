const dotenv = require('dotenv');
dotenv.config();

const environment = {
  mongoDBUri: process.env.MONGO_DB_URI,
  kafkaBrokers: process.env.KAFKA_BROKERS,
  kafkaClientId: process.env.KAFKA_CLIENT_ID,
  kafkaTopic: process.env.KAFKA_TOPIC,
};

module.exports = environment;
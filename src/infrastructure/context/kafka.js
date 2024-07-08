const {Kafka} = require('kafkajs');
const enviroment = require('../../../env');

const getConsumer = async () => {
  const kafka = new Kafka({
    clientId: enviroment.kafkaClientId,
    brokers: [enviroment.kafkaBrokers],
  });

  const consumer = kafka.consumer({ groupId: 'consumer-1'});

  await consumer.connect();
  return consumer;
};

module.exports = {
  getConsumer,
};
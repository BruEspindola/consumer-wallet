const kafkaRepository = require('../../infrastructure/repositories/kafka/repository');
const mongoRepository = require('../../infrastructure/repositories/mongodb/repository');

const receive = async (topic) => {
 await kafkaRepository.getMessage(topic, update);
};

const update = async (data) => {
  await mongoRepository.update(data.id, {amount: data.amount});
};

module.exports = {
  receive,
};
const consumerService = require('./src/application/services/consumer');
const enviroment = require('./env');

const main = async () => {
  await consumerService.receive(enviroment.kafkaTopic);
};

main();

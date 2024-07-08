const consumerKafka = require("../../context/kafka").getConsumer;

const getMessage = async (topic, onMessage) => {
  const consumer = await consumerKafka();

  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
     const messageObj = JSON.parse(message.value.toString());
      await onMessage(
        messageObj
      );
    },
  });
};

module.exports = {
  getMessage,
};

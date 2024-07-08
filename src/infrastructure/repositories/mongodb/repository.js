const connectMongo = require('../../context/mongodb').connect;
const walletSchema = require('../../../domain/schemas/walletSchema');

const update = async (id, body) => {
  connectMongo();
  const result = await walletSchema.findOneAndUpdate({ key: id}, body, { new: true, upsert: true });
  return result;
};

module.exports = {
  update,
};
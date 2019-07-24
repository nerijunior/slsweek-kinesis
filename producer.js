const AWS = require("aws-sdk");
const kinesis = new AWS.Kinesis();

const kinesisPutRecord = params => {
  return new Promise((resolve, reject) => {
    kinesis.putRecord(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};

module.exports.main = async event => {
  const body = JSON.parse(event.body);

  const params = {
    StreamName: "sls-week-stream",
    Data: JSON.stringify(body),
    PartitionKey: JSON.stringify(body)
  };

  try {
    const kinesisOutput = await kinesisPutRecord(params);
    return {
      statusCode: 200,
      body: JSON.stringify({ status: true, kinesisOutput, body })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error
      })
    };
  }
};

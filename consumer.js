module.exports.main = async event => {
  const record = event.Records[0];
  const data = JSON.parse(
    Buffer.from(record.kinesis.data, "base64").toString()
  );

  if (data.active) {
    console.log({
      data
    });
  } else {
    console.error("Not Active");
    // throw Error("Not active!");
  }
};

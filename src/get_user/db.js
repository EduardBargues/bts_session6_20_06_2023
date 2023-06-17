function getItemWrapper(dynamodb) {
  const getItem = async (partitionKey, rangeKey) => {
    const params = {
      TableName: "users_db",
      Key: {
        first_name: partitionKey,
        second_name: rangeKey,
      },
    };
    const result = await dynamodb.get(params).promise();
    return {
      firstName: result.Item.first_name,
      secondName: result.Item.second_name,
      birthYear: result.Item.birth_year,
    };
  };

  return { getItem };
}

module.exports = {
  wrapper: getItemWrapper,
};

function saveItemWrapper(dynamodb) {
  const saveItem = async (firstName, secondName, birthYear) => {
    const params = {
      TableName: "users_db",
      Item: {
        first_name: firstName,
        second_name: secondName,
        birth_year: birthYear,
      },
    };
    await dynamodb.put(params).promise();
  };

  return { saveItem };
}

module.exports = {
  wrapper: saveItemWrapper,
};

function handlerWrapper(db) {
  const getCurrentAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const handler = async (event, context) => {
    const { firstName, secondName } = event.queryStringParameters;
    const item = await db.getItem(firstName, secondName);
    const age = getCurrentAge(item.birthYear);
    return {
      statusCode: 200,
      body: JSON.stringify({
        firstName: firstName,
        secondName: secondName,
        age: age,
        birthYear: item.birthYear,
        potato: "with ketchup",
      }),
    };
  };

  return handler;
}

module.exports = {
  wrapper: handlerWrapper,
};

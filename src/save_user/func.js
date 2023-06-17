function handlerWrapper(db) {
  const handler = async (event, context) => {
    const { firstName, secondName, birthYear } = JSON.parse(event.body);
    await db.saveItem(firstName, secondName, birthYear);
    return {
      statusCode: 200,
      body: JSON.stringify({
        firstName: firstName,
        secondName: secondName,
        birthYear: birthYear,
      }),
    };
  };

  return handler;
}

module.exports = {
  wrapper: handlerWrapper,
};

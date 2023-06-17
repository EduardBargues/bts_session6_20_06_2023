const dummydb = {
  getItem: (firstName, secondName) => {
    return {
      firstName: firstName,
      secondName: secondName,
      birthYear: 1990,
    };
  },
};

const func = require("../../src/get_user/func.js");
const handler = func.wrapper(dummydb);

describe("GIVEN a dummy database with only one user born in 1990", () => {
  describe("WHEN invoking the get_user function", () => {
    it("THEN it should return a user with age=30", async () => {
      const event = {
        queryStringParameters: {
          firstName: "John",
          secondName: "Doe",
        },
      };
      const response = await handler(event, {});
      const user = JSON.parse(response.body);
      expect(user.age).toBe(33);
    });
  });
});

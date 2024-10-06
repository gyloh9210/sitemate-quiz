const yup = require("yup");

const createBookSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

module.exports = {
  createBookSchema,
};

const yup = require("yup");

const createBookSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

const updateBookSchema = yup.object({
  title: yup.string().optional(),
  description: yup.string().optional(),
});

module.exports = {
  createBookSchema,
  updateBookSchema,
};

const contactsOperations = require("../../models/contacts");

const Joi = require("joi");
const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const add = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required name field",
      });
      return;
    }
    const newContact = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result: newContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;

"use strict";
const { createCoreController } = require("@strapi/strapi").factories;
const nodemailer = require("nodemailer");

module.exports = createCoreController("api::message.message", ({ strapi }) => ({
  async create(ctx) {
    try {
      console.log("Received request:", ctx.request.body); // Debugging

      // Extract `data` first
      const { data } = ctx.request.body;
      if (!data) {
        console.error("No data received!");
        return ctx.throw(400, "Invalid request data");
      }

      // Correctly get values
      const { first_name, last_name, email, message } = data;
      console.log("Extracted Data:", first_name, last_name, email, message);

      // Save message to database
      console.log("Saving to Strapi:", {
        first_name,
        last_name,
        email,
        message,
      });
      const newMessage = await strapi.entityService.create(
        "api::message.message",
        {
          data: {
            FIRST_NAME: first_name,
            LAST_NAME: last_name,
            EMAIL: email,
            MESSAGE: message,
          },
        }
      );
      console.log(newMessage);
      // Nodemailer Transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      console.log(transporter);

      // Email Options
      const mailOptions = {
        from: `"${first_name} ${last_name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.RECEIVE_EMAIL,
        subject: "New Contact Message",
        text: `Name: ${first_name} ${last_name}\nEmail: ${email}\nMessage: ${message}`,
      };
      console.log(mailOptions)

      // Send Email
      await transporter.sendMail(mailOptions);

      return newMessage;
    } catch (err) {
      console.error("Error sending email:", err);
      ctx.throw(500, "Failed to send message with nodemailer");
    }
  },
}));

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("MAIL_HOST", "smtp.gmail.com"),
        port: env("MAIL_PORT", 587),
        auth: {
          user: env("EMAIL_USER"),
          pass: env("EMAIL_PASS"),
        },
      },
      settings: {
        defaultFrom: env("EMAIL_USER"),
        defaultReplyTo: env("EMAIL_USER"),
      },
    },
  },
});

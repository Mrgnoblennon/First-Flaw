require('dotenv').config();
const mailjet = require('node-mailjet')
  .apiConnect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

const sendOrderConfirmationEmail = async ({ customerEmail, customerName, orderId, orderItems }) => {
  try {
    const response = await mailjet.post("send", { 'version': 'v3.1' }).request({
      Messages: [{
        From: {
          Email: "chasebarrettbrown@hotmail.com",
          Name: "First Flaw"
        },
        To: [{
          Email: customerEmail,
          Name: customerName
        }],
        TemplateID: 5842211, // Your actual Mailjet template ID
        TemplateLanguage: true,
        Subject: "Your Order Confirmation",
        Variables: {
          customerName,
          orderId,
          items: orderItems // Ensure this matches the structure expected by your Mailjet template
        }
      }]
    });
    console.log("Email sent successfully", response.body);
  } catch (err) {
    console.error("Error sending email", err.statusCode);
    throw err; // Or handle it appropriately
  }
};

module.exports = { sendOrderConfirmationEmail };

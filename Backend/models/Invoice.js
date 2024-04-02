const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  address: { type: String, required: true},
  city: { type: String, required: true},
  state: { type: String, required: true},
  postCode: { type: String, required: true},
})

const InvoiceSchema = new Schema({
  sessionId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true,},
  lastName: { type: String, required: true},
  deliveryAddress: AddressSchema,
  phoneNumber: { type: String, required: true},
  email: { type: String, required: true},

  items: [{
    name: { type: String, required: true },
    baseprice: { type: Number, required: true },
    size: { type: String, required: true },
    colorName: { type: String, required: true },
    quantity: { type: Number, required: true },
  }],

  subtotal: { type: Number, required: true}
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;

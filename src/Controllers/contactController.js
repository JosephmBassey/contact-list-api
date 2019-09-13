const Contact = require('../Models/contactModel')

class ContactController {
  static async getAllContact(req, res) {
      try {
        const contact = await Contact.find()
        res.status(200).json(contact)
      } catch (error) {
        res.status(500).json(error.message)
      }
  }
  static async storeContact(req, res){
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        address
      } = req.body;
      const contact = await new Contact({
        firstName,
        lastName,
        email,
        phone,
        address
      })
      const newContact = await contact.save();
      res.status(201).json({
        msg: "New Contact Added",
        contact: newContact
      })
    } catch (error) {
      res.status(500).json({msg:"An Error Occur", error.message })
    }
  }
  static async getSingleContact(req, res) {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) return res.status(404).json({
        msg: "Contact was not found"
      });
      res.status(200).json(contact)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async deleteContact(req, res){
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) return res.status(404).json({
        msg: "Contact was not found"
      });
      await contact.remove();
      res.status(200).json({
        msg: "Contact Successfully removed",
        contact
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        error: error.message
      });
    }
  }
static async updateContact(req, res){
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address
    } = req.body;
    const contact = await Contact.findOneAndUpdate({
      _id: req.params.id
    }, {
      $set: {
        firstName,
        lastName,
        email,
        phone,
        address
      }
    }, {
      new: true
    })
    res.status(200).json({
      msg: "Contact List Updated",
      contact
    })
  } catch (error) {
    res.status(500).json(error.message)
  }
}
}

module.exports = ContactController;

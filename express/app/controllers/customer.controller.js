const Customer = require('../models/customer.model.js');


// POST a Customer
exports.create = (req, res) => {
    // Create a Customer
    const customer = new Customer({
        
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        age: req.body.age,
        
       
    });

    // Save a Customer in the MongoDB
    customer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// FETCH all Customers
exports.findAll = (req, res) => {
    Customer.find()
    .then(customers => {
        res.send(customers);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// UPDATE a Customer
exports.update = (req, res) => {
    console.log(req.body);
    // Find customer and update it
    Customer.findByIdAndUpdate(req.params.customerId, {
        name: req.body.name,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        age: req.body.age,
    }, {new: true})
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        res.send(customer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Error updating customer with id " + req.params.customerId
        });
    });
};

// DELETE a Customer
exports.delete = (req, res) => {
    Customer.findByIdAndRemove(req.params.customerId)
    .then(customer => {
        if(!customer) {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });
        }
        res.send({message: "Customer deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Customer not found with id " + req.params.customerId
            });                
        }
        return res.status(500).send({
            message: "Could not delete customer with id " + req.params.customerId
        });
    });
};
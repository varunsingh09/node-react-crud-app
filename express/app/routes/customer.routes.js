module.exports = function(app) {

    var customers = require('../controllers/customer.controller.js');

    // Create a new Customer
    app.post('/api/customers', customers.create);

    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);


    // Update a Customer with Id
    app.put('/api/customers/:customerId', customers.update);

    // Delete a Customer with Id
    app.delete('/api/customers/:customerId', customers.delete);
}
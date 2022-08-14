module.exports = (app) => {
    const abhis = require('../controllers/interactly.controller.js');

    // Create 
    app.post('/api', abhis.create);

    // Retrieve 
    app.get('/api', abhis.findAll);

    // Retrieve 
    app.get('/api/:abhiId', abhis.findOne);

    // Update  
    app.put('/api/:abhiId', abhis.update);

    // Delete 
    app.delete('/api/:abhiId', abhis.delete);
}
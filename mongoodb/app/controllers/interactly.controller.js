const Abhi = require('../models/interactly.model.js');


exports.create = (req, res) => {
 
    if(!req.body.email) {
        return res.status(400).send({
            message: "email can not be empty"
        });
    }

    const abhi = new Abhi({
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        mobile: req.body.mobile, 
        email: req.body.email,
    });


    abhi.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating"
        });
    });
};

exports.findAll = (req, res) => {
    Abhi.find()
    .then(abhi => {
        res.send(abhi);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving "
        });
    });
};


exports.findOne = (req, res) => {
    Abhi.findById(req.params.abhiId)
    .then(abhi => {
        if(!abhi) {
            return res.status(404).send({
                message: "Not found with id " + req.params.abhiId
            });            
        }
        res.send(abhi);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found with id " + req.params.abhiId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving with id " + req.params.abhiId
        });
    });
};


exports.update = (req, res) => {

    if(!req.body.email) {
        return res.status(400).send({
            message: "email can not be empty"
        });
    }


    Abhi.findByIdAndUpdate(req.params.abhiId, {
        firstName: req.body.firstName, 
        lastName: req.body.lastName,
        mobile: req.body.mobile, 
        email: req.body.email,
    }, {new: true})
    .then(abhi => {
        if(!abhi) {
            return res.status(404).send({
                message: "Not found with id " + req.params.abhiId
            });
        }
        res.send(abhi);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found with id " + req.params.abhiId
            });                
        }
        return res.status(500).send({
            message: "Error updating with id " + req.params.abhiId
        });
    });
};


exports.delete = (req, res) => {
    Abhi.findByIdAndRemove(req.params.abhiId)
    .then(abhi => {
        if(!abhi) {
            return res.status(404).send({
                message: "Not found with id " + req.params.abhiId
            });
        }
        res.send({message: "deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Not not found with id " + req.params.abhiId
            });                
        }
        return res.status(500).send({
            message: "Could not delete  with id " + req.params.abhiId
        });
    });
};
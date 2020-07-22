const authorController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.post('/api/authors', authorController.create);
    app.get('/api/authors', authorController.getAll);
    app.get('/api/authors/:_id', authorController.getOne);
    app.put('/api/authors/:_id', authorController.update);
    app.delete('/api/authors/:_id', authorController.delete);
};
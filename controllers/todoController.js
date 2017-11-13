require('dotenv').config();

var bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@ds251845.mlab.com:51845/${process.env.DATABASE_NAME}`, { useMongoClient: true });

var todoSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo', todoSchema);



var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  app.get('/todo', (req, res) => {
    // get data from mongodb and pass to view
    Todo.find({}, (err, data) => {
      if(err){
        throw err;
      }
      res.render('todo', { todos: data });
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    // get data from view and add it to mongodb
    var newTodo = Todo(req.body).save((err, data) => {
      if(err){
        throw err;
      }
      res.json(data);
    })
  });

  app.delete('/todo/:item', (req, res) => {
    // delete requested item from db
    Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove((err, data) => {
      if(err){
        throw err;
      }
      res.json(data);
    });
  });
};

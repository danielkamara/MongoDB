const express = require("express");
const bcrypt = require("bcrypt");
const Fruit = require("../schemas/fruit");

const fruitRouter = express.Router();

fruitRouter.post("/fruits", (req, res) => {
  let fruit = res.body;
  //PATTERN
  //Model.action
  // Create(ItemToBeAdded, (error, ItemAdded)=>{})
  Fruit.create(fruit, (error, createdFruit) => {
    if (error) {
      res.status(400).json({ message: error.message });
    }
    res.status(201).json({ fruit: createdFruit });
  });
});

//MODEL . ACTION (query, updates, callback)
// callback => (error, returned)=>{ if(error){res.status().json(ERROR)} res.status().json(SUCCESS)}

fruitRouter.get("/fruits", (req, res) => {
  Fruit.find((error, fruits) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(200).json({ fruits: fruits });
  });
});

fruitRouter.get("/fruits/:id", (req, res) => {
  let id = Number(req.params.id);
  Fruit.findById(id, (error, fruit) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(200).json({ fruits: fruit });
  });
});
fruitRouter.get("/fruits/:name", (req, res) => {
  let name = req.query.name;
  Fruit.findOne({ name: name }, (error, fruit) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(200).json({ fruits: fruit });
  });
});
fruitRouter.get("/fruits/:poisonous", (req, res) => {
  let poisonous = req.params.poisonous === "true" ? true : false;

  Fruit.find({ poisonous: poisonous }, (error, fruits) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(200).json({ fruits: fruits });
  });
});

fruitRouter.put("/fruits/:id", (req, res) => {
  let id = Number(id);
  let newFruit = req.body;

  Fruit.findByIdAndUpdate(id, newFruit, (error, changedFruit) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(201).json({ fruits: changedFruit });
  });
});
fruitRouter.put("/fruits/:color", (req, res) => {
  let color = req.params.color;
  let newFruit = req.body;

  Fruit.updateMany({ color: color }, newFruit, (error, changedFruits) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(200).json({ fruits: changedFruits });
  });
});

fruitRouter.delete("/fruits/:id", (req, res) => {
  let id = Number(req.params.id);

  Fruit.findByIdAndDelete(id, (error, returned) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(204).json({ fruits: returned });
  });
});

fruitRouter.delete("/fruits/:name", (req, res) => {
  let name = req.params.name;

  Fruit.deleteOne({ name: name }, (error, returned) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(204).json({ fruits: returned });
  });
});

fruitRouter.delete("/fruits/:color", (req, res) => {
  let color = req.params.color;
  Fruit.deleteMany({ color: color }, (error, returned) => {
    if (error) {
      res.status(404).json({ error: error.message });
    }
    res.status(204).json({ fruits: returned });
  });
});

module.exports = fruitRouter;

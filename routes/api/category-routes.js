const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoriesData = await Category.findAll({
    include: [{model: Product}],
  });
  res.json(categoriesData).status(200);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  res.json(categoryData).status(200);
});

router.post('/', async (req, res) => {
  // create a new category
  const categoryData = await Category.create(req.body);
  res.json(categoryData).status(200);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json("Category has been updated").status(200);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json("Category has been deleted").status(200);
});

module.exports = router;

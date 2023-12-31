const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagsData = await Tag.findAll({
    include: [{model: Product}],
  });
  res.json(tagsData).status(200);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findByPk(req.params.id, {
    include: [{model: Product}],
  });
  res.json(tagData).status(200);
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body);
  res.json(newTag).status(200);
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updatedTag = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(
    "Tag has been updated"
  ).status(200);
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json("Tag has been deleted").status(200);
});

module.exports = router;

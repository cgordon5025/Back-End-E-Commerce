const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tagData = await Tag.findAll({
    include: [{ model: ProductTag }]
  })
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagByID = await Tag.findByPk({
    include: [{ model: Product }]
  })
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create({
    tag_name: req.body.tag_name
  })
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const destroyTag = await Tag.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;

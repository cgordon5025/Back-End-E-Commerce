const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll({
    include: [{ model: Product }]
  });
  return res.json(categoryData)
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryByID = await Category.findByPK(req.params.id, {
    include: [{ model: Product }]
  })
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  const newCategory = await Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const destroyCategory = await Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;

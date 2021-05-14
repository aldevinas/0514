const recipeDb = require('./recipeSchema')

module.exports = {
    saveRecipe: (req, res) => {
        const {
            title,
            photos,
            ingredients,
            preparation
        } = req.body

        const recipe = new recipeDb()
        recipe.title = title
        recipe.photos = photos
        recipe.ingredients = ingredients
        recipe.preparation = preparation

        recipe.save().then(data => {
            console.log(data)
            res.send({success: true})
        })
    }
}

module.exports = {
  upload: (req, res, next) => {

    const {name, quantity, price} = req.body

    const errorMsg = (msg) => {
      return res.send({
        error: true,
        msg
      })
    }

    if(typeof name !== "string" || name.length < 3 || name.length > 50)
      return errorMsg('Invalid item name! Item name should include from 3 to 50 characters.')

    if(typeof quantity !== 	"number" || quantity <= 0) return errorMsg('Quantity should be number and more than 0!')
    if(typeof price !== "number" || price <= 0) return errorMsg('Price should be number and more than 0!')

    next()
  }

}
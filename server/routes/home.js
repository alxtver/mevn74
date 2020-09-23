const {
	Router
} = require('express')
const router = Router()
const cors = require('cors')

router.use(cors())

router.get('/', (req, res) => {
	res.send('<h2>Node JS server is running!!!</h2>')
})

module.exports = router
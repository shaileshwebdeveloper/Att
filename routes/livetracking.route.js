const {Router} = require('express')

const { updateLocation } = require('../controllers/livetracking.controller')

const liveTrackingRouter = Router()


liveTrackingRouter.post('/livetracking', updateLocation  )


module.exports = {liveTrackingRouter}



const express=require('express');

const router=express.Router()
const leaveController=require('../controllers/leaveController');

router.post("/leaves",leaveController.applyLeave);
router.get("/leaves",leaveController.allRequest);
router.put("/leaves/:id",leaveController.leaveStatus);


module.exports = router;
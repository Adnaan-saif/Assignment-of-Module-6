const express = require('express');
const router = express.Router();

const controller1 = require('../Controller/blogController');
const controller2 = require('../Controller/blogDetailsController');
const controller3 = require('../Controller/commentController');
const controller4 = require('../Controller/messageController');
const controller5 = require('../Controller/portfolioController');
const controller6 = require('../Controller/productController');
const controller7 = require('../Controller/profitController');
const controller8 = require('../Controller/projectController');
const controller9 = require('../Controller/serviceController');
const controller10 = require('../Controller/titleController');

router.get('api/route1', controller1.Create);
router.get('api/route2', controller1.Read);
router.get('api/route3', controller1.Update);
router.get('api/route4', controller1.Delete);
router.get('api/route5', controller2.Create);
router.get('api/route6', controller2.Read);
router.get('api/route7', controller2.Update);
router.get('api/route8', controller2.Delete);
router.get('api/route9', controller3.Create);
router.get('api/route10', controller3.Read);
router.get('api/route11', controller3.Update);
router.get('api/route12', controller3.Delete);
router.get('api/route13', controller4.Create);
router.get('api/route14', controller4.Read);
router.get('api/route15', controller4.Update);
router.get('api/route16', controller4.Delete);
router.get('api/route17', controller5.Create);
router.get('api/route18', controller5.Read);
router.get('api/route19', controller5.Update);
router.get('api/route20', controller5.Delete);
router.get('api/route21', controller6.Create);
router.get('api/route22', controller6.Read);
router.get('api/route23', controller6.Update);
router.get('api/route24', controller6.Delete);
router.get('api/route25', controller7.Create);
router.get('api/route26', controller7.Read);
router.get('api/route27', controller7.Update);
router.get('api/route28', controller7.Delete);
router.get('api/route29', controller8.Create);
router.get('api/route30', controller8.Read);
router.get('api/route31', controller8.Update);
router.get('api/route32', controller8.Delete);
router.get('api/route33', controller9.Create);
router.get('api/route34', controller9.Read);
router.get('api/route35', controller9.Update);
router.get('api/route36', controller9.Delete);
router.get('api/route37', controller10.Create);
router.get('api/route38', controller10.Read);
router.get('api/route39', controller10.Update);
router.get('api/route40', controller10.Delete);

module.exports = router;
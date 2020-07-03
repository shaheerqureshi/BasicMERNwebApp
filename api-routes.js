// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var contactController = require('./contact-controller');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
//routing for employee

var empController = require('./employee-controller');
router.route('/employee')
.get(empController.index)
.post(empController.new);
router.route('/employee/:employee_id')
.get(empController.view)
.put(empController.update)
.patch(empController.update)
.delete(empController.delete);
// Export API routes
module.exports = router;
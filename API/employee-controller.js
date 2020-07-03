Employee = require("./employeeModel");

exports.index = function(req,res){
    Employee.get(function(err,employees){
        if(err){
            res.json({
                status: 'error 404',
                message:err
            })
        }else{
            res.json({
                status: '200 ok',
                data: employees
            });
        }
    });
};

exports.new = function(req,res){
    var emp = new Employee();
    emp.name = req.body.name;
    emp.age = req.body.age;
    emp.salary = req.body.salary;
    emp.designation = req.body.designation;
    emp.save(function(err){
        if (err) {
            res.json({
                status: 'error 404',
                message:err
            })
        }else{
            res.json({
                status:'200 ok',
                data:emp
            });
        }
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Employee.findById(req.params.employee_id, function (err, employee) {
        if (err)
            res.send(err);
        res.json({
            message: 'Employee details loading..',
            data: employee
        });
    });
};

// Handle update employee info
exports.update = function (req, res) {
    Employee.findById(req.params.employee_id, function (err, employee) {
            if (err){
                res.send(err);
            }
           
            employee.name = req.body.name;
            employee.age = req.body.age;
            employee.salary = req.body.salary;
            employee.designation = req.body.designation;
    // save the employee and check for errors
    employee.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'employee Info updated',
                    data: employee
                });
            });
        });
    };
    // Handle delete contact
exports.delete = function (req, res) {
    Employee.remove({
        _id: req.params.employee_id
    }, function (err, employee) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'employee deleted'
        });
    });
};

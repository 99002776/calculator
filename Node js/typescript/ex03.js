var employee = /** @class */ (function () {
    function employee(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    employee.prototype.display = function () {
        return this.name + " from " + this.address;
    };
    return employee;
}());
var temp = new employee("Teja", "mysore", 6666666);
console.log(temp);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var account = /** @class */ (function () {
    function account(no, name, balence) {
        this.accoutno = no;
        this.accholder = name;
        this.accbalen = balence;
    }
    account.prototype.credit = function (amount) {
        this.accbalen += amount;
    };
    account.prototype.debit = function (amount) {
        if (amount > this.accbalen) { }
        throw "insuuficent funds";
        this.accbalen -= amount;
    };
    return account;
}());
var SBAccount = /** @class */ (function (_super) {
    __extends(SBAccount, _super);
    function SBAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBAccount.prototype.calinterst = function () {
        var r = 6.5 / 100;
        var t = 1 / 4;
        var p = this.accbalen;
        var interest = p * t * r;
        _super.prototype.credit.call(this, interest);
    };
    return SBAccount;
}(account));
var acc = new SBAccount(123, "Teja", 650000);
acc.credit(5000);
acc.calinterst();
console.log(acc.accbalen);

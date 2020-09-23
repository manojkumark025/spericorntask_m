"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Data = (function () {
    function Data() {
        this.GuardDtl = { "GuardID": "", "GuardCode": "", "GuardName1": "", "GuardName2": "", "LocID": "", "LocCode": "",
            "LocDesc1": "", "LocDesc2": "", "StoreID": "", "StoreCode": "", "StoreDesc1": "", "StoreDesc2": "",
            "DeptID": "", "DeptCode": "", "DeptDesc1": "", "DeptDesc2": "", "LGateID": "", "LGateDesc1": "", "LGateDesc2": "", "Company": "" };
        this.CurDatenTime = { "Date": "", "Time": "", "DispDate": "", "DispTime": "" };
        this.Note = "";
        ////20191018 For Storing Emp Status&HolidayStatus
        this.EStatus = "";
        this.EHolStatus = "";
        this.CompanyName1 = "";
        this.CompanyName2 = "";
    }
    Data.prototype.setCurrentDateTime = function () {
        // client
        // server
    };
    return Data;
}());
Data = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Data);
exports.Data = Data;
//# sourceMappingURL=data.js.map
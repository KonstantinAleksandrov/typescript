var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var n = '4';
var b = false;
var ob = { a: 33, b: { c: 33 } };
var nn = null;
var u;
var nnn;
var ss;
var an = 44;
an = an + '5';
var a = 4;
var uu = 4;
var arrN = [1, 2, 3];
var arrS = ['1', '3'];
var arrSN = ['1', '3', 4];
var arrA = ['1', '3', 4];
var tuple = [2, {}];
var schoolmates;
(function (schoolmates) {
    schoolmates[schoolmates["vasya"] = 0] = "vasya";
    schoolmates[schoolmates["petya"] = 1] = "petya";
    schoolmates[schoolmates["sasha"] = 2] = "sasha";
})(schoolmates || (schoolmates = {}));
var teachers;
(function (teachers) {
    teachers["Lubov"] = "Stepanovna";
    teachers["Ilya"] = "Petrovich";
    teachers["Michail"] = "Stepanovich";
})(teachers || (teachers = {}));
var pupil = 'petya';
console.log(schoolmates[pupil], schoolmates[2]);
console.log(teachers['Lubov'], teachers['Stepanovich']);
var human = {
    age: 33,
    height: 180,
    mass: 69
};
var vasya = __assign(__assign({}, human), { name: 'vasya', family: [
        {
            age: 33,
            height: 180,
            mass: 69
        },
        {
            age: 33,
            height: 180,
            mass: 69
        }
    ] });
var petya = __assign(__assign({}, human), { name: 'petya', graduation: 'high elementary school' });
function getField(person, field) {
    return person[field];
}
var getName = function (person, modify) {
    if (modify === void 0) { modify = ''; }
    return modify + person.name;
};
console.log(getName(vasya));
var getAge = function (person) {
    return person.age;
};
function setValue(student, newG) {
    student.graduation = newG;
    return newG;
}
setValue(petya, 'low elementary school');
function setError(error) {
    throw new Error(error);
}
var css = {
    width: '33px',
    margin: '22px 44px'
};
var Personalization = /** @class */ (function () {
    function Personalization(human) {
        if (human === void 0) { human = {}; }
        var _this = this;
        this.setAge = function (age) {
            if (_this.human) {
                _this.human.age = age;
            }
        };
        this.getAge = function () {
            return _this.human.age;
        };
        this.human = human;
    }
    return Personalization;
}());
var myPerson = new Personalization({ age: 22 });
myPerson.setAge(33);
console.log(myPerson.getAge());

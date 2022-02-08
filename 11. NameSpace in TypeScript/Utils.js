var UserUtils;
(function (UserUtils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    UserUtils.Parent = Parent;
})(UserUtils || (UserUtils = {}));

(function() {
    'use strict';

    var ngInputMask = angular
        .module('ngInputMask', []);

    ngInputMask.directive('ngInputMask', directive);

    directive.$inject = ['$compile'];
    function directive($compile) {
        return {
            restrict: 'A',
            require: 'ngModel',
            scope: false,
            link: link
        };

        function link(scope, elem, attrs) {
            scope.$watch(attrs.ngModel, updateClass);

            $compile('<label for="'+attrs.id+'">{{' + attrs.ngInputMask + '}}</label>')(scope, function(cloned){
                elem.after(cloned);
            });

            function updateClass() {
                elem.next().attr('class', elem.attr('class') + ' ng-input-mask');
            }
        }
    }

    module.exports = ngInputMask;
})();
angular.module("angular-auto-complete",[]).directive("autoComplete",["$http","$q",function(t,n){return{link:function(e,o,u,a){function i(t){$(o).autocomplete({lookup:t,minChars:u.minChars||1,onSelect:function(t){var n=$(this).attr("ng-model"),o=n.split(".");e[o[0]][o[1]]=t.value}})}function r(e,o){return e.indexOf("http://")>=0||e.indexOf("https://")>=0||e.indexOf("//")>=0?t.get(e):(o.$watch(e,function(){i(o[e])}),n.resolve(o[e]))}var l=u.datasource;l&&r(l,e).then(i)}}}]);
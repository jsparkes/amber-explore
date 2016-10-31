define(["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
var $core=$boot.api,nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage('AmberExplore-Tests');
$core.packages["AmberExplore-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["AmberExplore-Tests"].transport = {"type":"amd","amdNamespace":"amber-amberexplore"};

$core.addClass('AmberExploreTest', $globals.TestCase, [], 'AmberExplore-Tests');

});

/*
 * Responsive Gaug.es
 *
 * Date: 2012-07-28
 * Version: 1.0
 */

(function() {
  var g = {
    init: function() {
      var cssNode = document.createElement('link');
      cssNode.type = 'text/css';
      cssNode.rel = 'stylesheet';
      cssNode.href = 'http://weedygarden.net/demos/gauges-ipad/gauges.css?v1.1';
      cssNode.media = 'all';
      document.getElementsByTagName("head")[0].appendChild(cssNode);
    }
  };
  g.init();
})();
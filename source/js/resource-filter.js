$(document).ready(function(){

  var options = {
    valueNames: [ {name:'resource-type', attr:'data-type'}, {name:'resource-theme', attr:'data-theme'} ]
  };

  var resourceList = new List('resources', options);

});
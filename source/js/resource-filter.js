$(document).ready(function(){

  var options = {
    valueNames: [ 'result-item__name', {name:'resource-type', attr:'data-type'}, {name:'resource-theme', attr:'data-theme'} ]
  };

  var resourceList = new List('resources', options);

  //SORT LIST ON DOC READY
  resourceList.sort('result-item__name', { order: "asc" });

  // DROPDOWN FILTERS
  var allFilters = $(".dropdown-wrapper select");
  var searchQueries = {};

  allFilters.on("change", function() {
    filterList();
  });

  function filterList() {
    allFilters.each(function(idx, selection) {
      $(selection).each(function(idx, option) {
        var filterSelection = $(this).attr("data-filter");
        var option = $(this).children(":selected").attr("id");
        searchQueries[filterSelection] = option;
      });
    });
    // FILTER WITH DROPDOWNS
    resourceList.filter(function(item) {
      if (item.values()["resource-type"] !== null && item.values()["resource-theme"] !== null && item.values()["resource-type"].includes(searchQueries["resource-type"]) && item.values()["resource-theme"].includes(searchQueries["resource-theme"]))  {
        return true;
      } else {
        return false;
      }
    });
  }

  // CLEAR ALL FILTERS
  $(".clear_filters").on("click", function() {
    allFilters.each(function(idx,filter) {
      $('#'+filter.id).prop('selectedIndex',0);
    });
    resourceList.filter();
    searchReset();
    resourceList.sort('result-item__name', { order: "asc" });
  });

  // SEARCH RESET
  function searchReset() {
    resourceList.search();
  }

});
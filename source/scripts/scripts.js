$(document).ready(function() {
  // FUZZY SEARCH
  var fuzzyOptions = {
    searchClass: "fuzzy-search",
    location: 0,
    distance: 100,
    threshold: 0.4,
    multiSearch: true
    };

  var options = {
    valueNames: [ "case__title", {name: "case__region", attr: "case-region"}, {name: "case__sector", attr: "case-sector"}, {name: "case__type", attr: "case-type"}, {name: "case__data-type", attr: "case-data-type"} ],
    plugins: [ ListFuzzySearch() ]
  };

  var caseList = new List('case_data', options);

  console.log(caseList);

  //SORT LIST ON DOC READY
  caseList.sort('case__title', { order: "asc" });

  // SEARCH RESET
  function searchReset() {
    $(".fuzzy-search").val("");
    caseList.search();
  }

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
    console.log(searchQueries);
    // FILTER WITH DROPDOWNS
    caseList.filter(function(item) {
      if (item.values()["case__region"] !== null && item.values()["case__data-type"] !== null && item.values()["case__type"] !== null && item.values()["case__sector"] !== null && item.values()["case__region"].includes(searchQueries["case__region"]) &&
      item.values()["case__data-type"].includes(searchQueries["case__data-type"]) &&
      item.values()["case__type"].includes(searchQueries["case__type"]) &&
      item.values()["case__sector"].includes(searchQueries["case__sector"]) ) {
        return true
      } else {
        return false
      }
    })
  };

  // CLEAR ALL FILTERS
  $(".clear_filters").on("click", function() {
    allFilters.each(function(idx,filter) {
      $('#'+filter.id).prop('selectedIndex',0);
    });
    caseList.filter();
    searchReset();
    caseList.sort('case__title', { order: "asc" });
  });

  // SORT ICON UP/DOWN SWITCH
  var sortClickButtons = $(".table-sortable__control > i:contains('keyboard_arrow_down')");
  sortClickButtons.on("click", function() {
    $(this).text() == "keyboard_arrow_down" ? $(this).text("keyboard_arrow_up") : $(this).text("keyboard_arrow_down");
  });

  // Table Search
   $('.js-open-table-search').click(function (e) {
       e.preventDefault();
       $(this).parent().siblings('.table-sortable__search').toggleClass('table-sortable__search--active');
   });

   $(".js-open-table-search").on("click", function(e) {
      $($(this).attr('data-target')).focus();
   })

   // Search Click Behavior
  $('.js-trigger-search').click(function (e) {
      e.preventDefault();
      $(this).parent().addClass('js-active');
      $('#overlay').addClass('js-active');
  });
});

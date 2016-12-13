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
        valueNames: [ {attr: 'case-name', name: 'case'}, {attr: 'case-region', name: 'region'}, {attr: 'case-sector', name: 'sector'}, {attr: 'case-type', name: 'type'} ]
        ,
        plugins: [ ListFuzzySearch() ]
    };

  var caseList = new List('case_data', options);

  function searchReset() {
    $(".fuzzy-search").val("");
    // clearTextSearch();
    caseList.search();
  }

  // // Filter by case title
  //   $(".fuzzy-search").keyup(function() {
  //       if (this.id=="case__title--input") {
  //           var searchString = $(this).val();
  //           companyList.fuzzySearch.search(searchString, ["case__region"]);
  //       } else if (this.id=="case__title--input") {
  //           var searchString = $(this).val();
  //           companyList.fuzzySearch.search(searchString, ["case__title"]);
  //       }
  //   });


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

              // var option = $(this).children(":selected").attr("id");
              // searchQueries[filterSelection] = option;
          });
      });
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

  // SORT ICON
  var sortClickButtons = $(".table-sortable__control > i:contains('keyboard_arrow_down')");
  sortClickButtons.on("click", function() {
      $(this).text() == "keyboard_arrow_down" ? $(this).text("keyboard_arrow_up") : $(this).text("keyboard_arrow_down");
  });

});

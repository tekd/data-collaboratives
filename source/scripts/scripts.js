$(document).ready(function() {
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


  var searchButtons = $('.table-sortable__search').find("button[type='submit']")

  searchButtons.on("click", function(e) {
      e.preventDefault();
      if ($(this).parent().hasClass("table-sortable__search--active")) {
          $(this).parent().removeClass("table-sortable__search--active");
          searchReset();
      }
  });


  // SORT ICON
  var sortClickButtons = $(".table-sortable__control > i:contains('keyboard_arrow_down')");
  sortClickButtons.on("click", function() {
      $(this).text() == "keyboard_arrow_down" ? $(this).text("keyboard_arrow_up") : $(this).text("keyboard_arrow_down");
  });



});

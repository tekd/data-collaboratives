$(document).ready(function() {
  var fuzzyOptions = {
        searchClass: "fuzzy-search",
        location: 0,
        distance: 100,
        threshold: 0.4,
          multiSearch: true
      };

  // var options = {
  //   valueNames: [ {name:'company__name', attr:'data-target'}, 'company__category', 'company__type', 'company__founded', {name:'company__location', attr:'data-target'}, 'company__last-update', { attr: 'data-location', name: 'filter' }, {name: 'company__other-sources', attr: 'data-target'}, {name:'company__data-sectors',attr:'data-target'}, {name:'company__federal-sources', attr: 'data-target'}, {name:'company__provincial-sources', attr: 'data-target'} ],
  //       plugins: [ ListFuzzySearch() ]
  // };
  //
  // var cases = new List('case_data', options);



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



  // CLEAR ALL FILTERS
    // $(".clear_filters").on("click", function() {
    //     allFilters.each(function(idx,filter) {
    //         $('#'+filter.id).prop('selectedIndex',0);
    //     });
    //     $(".circle.active").attr("class","circle");
    //     companyList.filter();
    //     searchReset();
    //     companyList.sort('company__name', { order: "asc" });
    // });

});

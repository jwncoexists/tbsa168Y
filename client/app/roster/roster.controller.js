'use strict';

var app = angular.module('tbsa168App');

app.controller('RosterCtrl', ['Auth', 'TbsData', 'personList', 'Person',
  function (Auth, TbsData, personList, Person)  { // jshint ignore:line

    var self = this;
    self.isLoggedIn = Auth.isLoggedIn; // this points to a function, so need to call self.isLggedIn()
    self.isAdmin = Auth.isAdmin;
    self.currentUser = Auth.getCurrentUser();
    self.roster = {}; // object for controller variables
    self.roster.filterStr = '';
    self.personList = personList;

    /* list of column headers in the roster table */
    self.headerList = [
      { text: '2015 Reunion?', class:'col-md-1', property: 'reunions' },
      { text: 'Name', class:'col-md-3', property: 'name'},
      { text: 'S/M at TBS', class:'col-md-1', property: 'sm'},
      { text: 'Location', class:'col-md-1', property: 'location'},
      { text: 'Platoon', class:'col-md-1', property: 'platoon'},
      { text: 'School', class:'col-md-1', property: 'school'},
      { text: 'State', class:'col-md-1', property: 'schoolState'},
      { text: 'Commission Source', class:'col-md-1', property: 'commission'},
      { text: 'MOS', class:'col-md-1', property: 'mos'},
      { text: 'Career', class:'col-md-1', property: 'career'}
    ];

    /* sort options for the roster table */
    self.curSort = {
      hdrText: 'Name',
      property: 'name',
      order: '+',
      class: 'fa fa-caret-down'
    };

    /**********************************************************
    *
    * findClickedProperty( hdrText )
    *
    * Description:
    *   Given text from the table header, this function searches through
    *   headerList and finds and returns the associated property in personList
    *
    ***********************************************************/
    function findClickedProperty(hdrText) {
      var found = false,
          i = 0,
          property;
      while (i < self.headerList.length && !found) {
        if (hdrText === self.headerList[i].text) {
          found = true;
          property = self.headerList[i].property;
        }
        i++;
      }
      return property;
    }

    /**********************************************************
    *
    * toggleSort( event )
    *
    * Description:
    *   Called when a user clicks on a header to re-sort the table.
    *   This function sets up  curSort attributes which are
    *   monitored by angular to sort the table.
    *
    ***********************************************************/
    self.toggleSort = function(event) {

      // get the header that was clicked on
      var clickedHeader = event.currentTarget.firstChild.data.trim();

      // determine whether to sort ascending or descending
      if ((self.curSort.order === '+') && (self.curSort.hdrText === clickedHeader)) {
        // only time we set descending order is if they click on same property 2x
        self.curSort.order = '-';
        self.curSort.class = 'fa fa-caret-up';
      } else {
        self.curSort.order = '+';
        self.curSort.hdrText = clickedHeader;
        self.curSort.property = findClickedProperty(clickedHeader);
        self.curSort.class = 'fa fa-caret-down';
      }
    };

    /**********************************************************
    *
    * getOrderByString()
    *
    * Description:
    *   Returns a string for Angular's orderBy directive to
    *   sort personList according to curSort attributes
    *
    ***********************************************************/
    self.getOrderByString = function() {
      var returnStr = self.curSort.order + self.curSort.property;
      return returnStr;
    };

    /**********************************************************
    *
    * atReunion(person, year)
    *
    * Description:
    *   Given a person object, and a year represented as a 4-digit string
    *   returns true if that person attended that reunion
    *
    ***********************************************************/
    self.atReunion = function(person, year) {
      if (person.reunions) {
        return (person.reunions.indexOf(year) >= 0);
      } else {
        return false;
      }
    };

    /**********************************************************
    *
    * getReunionClass(person)
    *
    * Description:
    *   Returns css classname indicating whether person attended reunion
    *
    ***********************************************************/
    self.getReunionClass = function(person) {
      if (self.atReunion(person, '2015')) {
        return 'roster-reunion-cell';
      }
      else {
        return 'roster-no-reunions';
      }
    };

    /**********************************************************
    *
    * self.updatePerson(person)
    *
    * Description:
    *   Updates the person record in the database
    *
    ***********************************************************/
    self.updatePerson = function(person) {
      person.$update(function (){});
    };

    /**********************************************************
    *
    * self.getCellClass(person, property)
    *
    * Description:
    *   returns a css classname for the property
    *
    ***********************************************************/
    self.getCellClass = function(person, property) {
      var cellClass = '';
      var val = person[property];

      if (!val || val === '' || val == undefined) { // jshint ignore:line
        cellClass += 'roster-empty-cell ';
      } else {
        cellClass += 'roster-data-cell ';
      }

      if (person.officer) {
        cellClass += 'roster-officer-cell ';
      }

      if (!person.living) {
        cellClass += 'roster-deceased-cell ';
      }
      // center the following text
      if (property === 'platoon' || property ===  'schoolState' || property === 'mos') {
        cellClass += 'centered-text ';
      }

      return cellClass;
    };

    /**********************************************************
    *
    * self.formatMos(person)
    *
    * Description:
    *   Returns the mos attribute formatted with leading zero
    *
    ***********************************************************/
    self.formatMos = function(person) {
      var returnStr='';
      if (person && person.mos) {
        returnStr =  ('0' + person.mos).slice (-2);
      }
      return returnStr;
    };

    /**********************************************************
    *
    * self.getLocation(person)
    *
    * Description:
    *   Returns the location string to be displayed in the roster table
    *
    ***********************************************************/
    self.getLocation = function(person) {
      if (person.living === true) {
        return person.location;
      } else {
        return 'At Rest: ' + person.restingPlace;
      }
    };

    /**********************************************************
    *
    * self.downloadPDF()
    *
    * Description:
    *   downloads a pdf version of the roster, sorted according
    *   to current sort parameters
    *
    ***********************************************************/
    self.downloadPDF = function() {

      var person;
      var emptyRow =
      [ {text: '*************', style: 'emptyRowCtr'},
        {text: '*******************************', style: 'emptyRowCtr'},
        {text: '*********', style: 'emptyRowCtr'},
        {text: '*****************', style: 'emptyRowCtr'},
        {text: '**********', style: 'emptyRowCtr'},
        {text: '*****************', style: 'emptyRowCtr'},
        {text: '********', style: 'emptyRowCtr'},
        {text: '*****************', style: 'emptyRowCtr'},
        {text: '********', style: 'emptyRowCtr'},
        {text: '******************************************', style: 'emptyRowCtr'}
      ];

      // sort personList according to parameters stored in curSort object
      self.personList.sort( function(a,b) {
        var returnVal = 0;
        if (self.curSort.order === '-'){
          if (a[self.curSort.property] < b[self.curSort.property] ) {
            returnVal = 1;
          } else if (a[self.curSort.property] > b[self.curSort.property]) {
            returnVal = -1;
          }
        } else {
          if (a[self.curSort.property] > b[self.curSort.property] ) {
            returnVal = 1;
          } else if (a[self.curSort.property] < b[self.curSort.property]) {
            returnVal = -1;
          }
        }
        // if values are equal, then do a secondary sort by name

        if (returnVal === 0) {
          if (self.curSort.order === '-'){
            if (a.name < b.name) {
              returnVal = 1;
            } else if (a.name > b.name) {
              returnVal = -1;
            }
          } else {
            if (a.name > b.name) {
              returnVal = 1;
            } else if (a.name < b.name) {
              returnVal = -1;
            }
          }
        }
        return returnVal;
      });

      // create pdf docDefinition
      var docDefinition = {
            pageSize: 'LETTER', // a string or { width: number, height: number }
            pageOrientation: 'landscape', // default is portrait
            pageMargins: [ 20, 50, 20, 50 ], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            header: function(currentPage, pageCount) { return { text: 'TBS-A1-68 Roster', style: 'headerStyle', margin: [ 0, 20 ] }; },  // jshint ignore:line
            fontsize: 8,
            footer: function(currentPage, pageCount) { return { text: 'Page ' + currentPage.toString() + ' of ' + pageCount, style: 'footerStyle' }; },
            content: [
            {
              table: {
                // headers are automatically repeated if the table spans over multiple pages
                // you can declare how many rows should be treated as headers
                headerRows: 1,
                widths: [ '7%', '18%', '5%', '10%', '5%', '10%', '5%', '10%', '5%', '25%'],
                dontBreakRows: true,

                body: [
                  [ {text: 'Reunion?', style: 'tableHeaderCtr'},
                    {text: 'Name', style: 'tableHeaderCtr'},
                    {text: 'S/M', style: 'tableHeaderCtr'},
                    {text: 'Location', style: 'tableHeaderCtr'},
                    {text: 'Platoon', style: 'tableHeaderCtr'},
                    {text: 'School', style: 'tableHeaderCtr'},
                    {text: 'State', style: 'tableHeaderCtr'},
                    {text: 'Commission', style: 'tableHeaderCtr'},
                    {text: 'MOS', style: 'tableHeaderCtr'},
                    {text: 'Career', style: 'tableHeaderCtr'}
                  ]

                ]
              }, // table
              layout: {
												hLineWidth: function(i, node) {  // jshint ignore:line
														// return (i === 0 || i === node.table.body.length) ? 2 : 1;
                            return 1;
												},
												vLineWidth: function(i, node) {   // jshint ignore:line
														// return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                            return 1;
												},
												hLineColor: function(i, node) {  // jshint ignore:line
														// return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
                            return 'gray';
												},
												vLineColor: function(i, node) {  // jshint ignore:line
														// return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
                            return 'gray';
												},
												// paddingLeft: function(i, node) { return 4; },
												// paddingRight: function(i, node) { return 4; },
												// paddingTop: function(i, node) { return 2; },
												// paddingBottom: function(i, node) { return 2; }
						  }
            }], // content
            styles: {
              tableHeaderCtr: {
                bold: true,
                fontSize: 11,
                color: 'blue',
                alignment: 'center'
              },
              tableHeaderLeft: {
                bold: true,
                fontSize: 11,
                color: 'blue',
                alignment: 'left'
              },
              tableRowLeft: {
                fontSize: 9,
                bold: false,
                color: 'black',
                alignment: 'left'
              },
              emptyRowCtr: {
                fontSize: 9,
                bold: false,
                color: 'gray',
                alignment: 'center'
              },
              tableRowDeceased: {
                fontSize: 9,
                bold: false,
                color: 'red',
                alignment: 'left'
              },
              tableRowCtr: {
                fontSize: 9,
                bold: false,
                color: 'black',
                alignment: 'center'
              },
              footerStyle : {
                fontSize: 8,
                color: 'black',
                alignment: 'center'
              },
              headerStyle : {
                fontSize: 12,
                bold: true,
                color: 'black',
                alignment: 'center'
              }
            }
          }; // var docDefinition

      // add all the data to the table
      function addRowToTable(docDefinition, person) {
        var newRow = [],
            location,
            name= person.decorations ? person.name + ' **' + person.decorations : person.name,
            mos;
        if (self.atReunion(person,'2015')) {
          newRow.push( {text: 'Y', style: 'tableRowCtr'} );
        } else {
          newRow.push({text: '', style: 'tableRowCtr'} );
        }
        if (person.living) {
          newRow.push({text: name, style: 'tableRowLeft'});
        } else {
          newRow.push({text: name, style: 'tableRowDeceased'});
        }
        newRow.push({text: person.sm || '', style: 'tableRowCtr'});
        location = self.getLocation(person);
        newRow.push({text: location || '', style: 'tableRowLeft'});
        newRow.push({text: person.platoon || '', style: 'tableRowCtr'});
        newRow.push({text: person.school || '', style: 'tableRowLeft'});
        newRow.push({text: person.schoolState || '', style: 'tableRowCtr'});
        newRow.push({text: person.commission || '', style: 'tableRowLeft'});
        mos = self.formatMos(person);
        newRow.push({text: mos || '', style: 'tableRowCtr'});
        newRow.push({text: person.career || '', style: 'tableRowLeft'});

        docDefinition.content[0].table.body.push(newRow);
      }

      person = {};

      // print out the officers first
      for (var i=0; i < personList.length; i++) {
        person = self.personList[i];
        if (person.officer) {
          addRowToTable(docDefinition, person);
        }
      }

      // add empty row between officers & classmates
      docDefinition.content[0].table.body.push(emptyRow);

      // print out classmates
      for (i=0; i < personList.length; i++) {
        person = self.personList[i];
        if (!person.officer) {
          addRowToTable(docDefinition, person);
        }
      }

      // open the PDF in a new window
      // pdfMake.createPdf(docDefinition).open();

      // download the PDF
      pdfMake.createPdf(docDefinition).download();  // jshint ignore:line

    };


}]); // RosterCtrl

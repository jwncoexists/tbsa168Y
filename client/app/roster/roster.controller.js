'use strict';

var app = angular.module('tbsa168App');

app.controller('RosterCtrl', ['$scope', 'Auth', 'TbsData', 'personList', 'Person',
  function ($scope, Auth, TbsData, personList, Person)  {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.roster = {}; // object for controller variables
    $scope.roster.filterStr = "";
    $scope.personList = personList;

    $scope.curSort = {
      field: "name",
      order: "asc"
    };

    $scope.atReunion = function(person, year) {
      if (person.reunions) {
        return (person.reunions.indexOf(year) >= 0);
      } else {
        return false;
      }
    };
    $scope.getReunionClass = function(person) {
      if ($scope.atReunion(person, '2015')) {
        return "roster-reunion-cell";
      }
      else {
        return "roster-no-reunions";
      }
    }

    $scope.updatePerson = function(person) {
      person.$update(function (){});
    };

    $scope.getCellClass = function(person, property) {
      var cellClass = "";
      var val = person[property];

      if (!val || val === "" || val == undefined) {
        cellClass += "roster-empty-cell "
      } else {
        cellClass += "roster-data-cell "
      }

      if (person.officer) {
        cellClass += "roster-officer-cell "
      }

      if (!person.living) {
        cellClass += "roster-deceased-cell "
      }
      // center the following text
      if (property === "platoon" || property ===  "schoolState" || property === "mos") {
        cellClass += "centered-text "
      }

      return cellClass;
    }

    $scope.formatMos = function(person) {
      if (person.mos) {
        return ("0" + person.mos).slice (-2);
      }
    }

    $scope.getLocation = function(person) {
      if (person.living === true) {
        return person.location;
      } else {
        return "At Rest: " + person.restingPlace;
      }
    }

    $scope.downloadPDF = function() {

      var person = $scope.personList[0];
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

      var docDefinition = {
            pageSize: 'LETTER', // a string or { width: number, height: number }
            pageOrientation: 'landscape', // default is portrait
            pageMargins: [ 20, 50, 20, 50 ], // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            header: function(currentPage, pageCount) { return { text: 'TBS-A1-68 Roster', style: 'headerStyle', margin: [ 0, 20 ] }; },
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
												hLineWidth: function(i, node) {
														// return (i === 0 || i === node.table.body.length) ? 2 : 1;
                            return 1;
												},
												vLineWidth: function(i, node) {
														// return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                            return 1;
												},
												hLineColor: function(i, node) {
														// return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
                            return 'gray';
												},
												vLineColor: function(i, node) {
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


      // add data to the table
      var newRow = [];
      var person = {};
      var officers = true;
      for (var i=0; i < personList.length; i++) {
        person = $scope.personList[i];
        if (officers && !person.officer) {
          // add a blank line between officers and classmates
          officers = false;
          docDefinition.content[0].table.body.push(emptyRow);
        }
        newRow = [];
        if ($scope.atReunion(person,'2015')) {
          newRow.push( {text: 'Y', style: 'tableRowCtr'} );
        } else {
          newRow.push({text: '', style: 'tableRowCtr'} );
        }
        if (person.living) {
          newRow.push({text: person.name, style: 'tableRowLeft'});
        } else {
          newRow.push({text: person.name, style: 'tableRowDeceased'});
        }
        newRow.push({text: person.sm || '', style: 'tableRowCtr'});
        var location = $scope.getLocation(person);
        newRow.push({text: location || '', style: 'tableRowLeft'});
        newRow.push({text: person.platoon || '', style: 'tableRowCtr'});
        newRow.push({text: person.school || '', style: 'tableRowLeft'});
        newRow.push({text: person.schoolState || '', style: 'tableRowCtr'});
        newRow.push({text: person.commission || '', style: 'tableRowLeft'});
        var mos = $scope.formatMos(person);
        newRow.push({text: mos || '', style: 'tableRowCtr'});
        newRow.push({text: person.career || '', style: 'tableRowLeft'});

        docDefinition.content[0].table.body.push(newRow);

      }

      // open the PDF in a new window
      // pdfMake.createPdf(docDefinition).open();

      // download the PDF
      pdfMake.createPdf(docDefinition).download();

    }


}]); // RosterCtrl

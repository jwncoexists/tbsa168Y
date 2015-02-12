'use strict';

describe('Service: TbsData', function () {

  // load the service's module
  beforeEach(module('tbsa168App'));

  // instantiate service
  var tbsData;
  beforeEach(inject(function (_tbsData_) {
    tbsData = _tbsData_;
  }));

  it('should do something', function () {
    expect(!!tbsData).toBe(true);
  });

});

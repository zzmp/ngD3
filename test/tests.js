describe('ngD3', function () {
  it('should not bleed into the global scope', function () {
    var $injector = angular.injector(['ngD3']);
    expect(window.d3).toBe(undefined);
  });

  it('should have versioning: 3.4.8', function () {
    var $injector = angular.injector(['ngD3']);
    var $d3 = $injector.get('$d3');
    expect($d3.version).toBe('3.4.8');
  });
});

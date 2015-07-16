describe('CustomPropTypes', function() {
  it('validates each validation', function() {
    var methodTest = sinon.stub();

    methodTest('y');

    methodTest.should.have.been.calledOnce
        .and.calledWith('y');
  });
});

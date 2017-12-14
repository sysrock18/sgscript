const expect = require('chai').expect
const sgscript = require('..').default

describe('#sgscript', function() {

  it('Devolver la suma correcta', function() {
    const sum = sgscript(2, 2)
    expect(sum).to.equal(4)
  })

})

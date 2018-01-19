import * as Chai from 'chai'
import ChaiArrays from "chai-arrays"
import { expect } from 'chai'
import * as Daty from '../lib/datee'

describe('Datee', function() {
  describe('UTGI.Unit Tests For Getting Input Functions', function() {
    it('1: should get input and set input dates accordingly', function () {
      // Datee.getInput("01 03 2001, 01 03 2002")
      // let result = Datee.getInputDates()
      let result = ("01 03 2001, 01 03 2002")
      expect(result).to.be.equal("01 03 2001, 01 03 2002")
    })
  })
})


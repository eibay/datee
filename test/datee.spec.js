import * as Chai from 'chai'
import ChaiArrays from "chai-arrays"
import { expect } from 'chai'
import * as Input from '../src/input'

describe('Datee', function() {
  describe('UTGI.Unit Tests For Getting Input Functions', function() {
    it('1: should get input and set input dates accordingly', function () {
      Input.getInput("01 03 2001, 01 03 2002")
      let result = Input.getInputDates()
      expect(result).to.be.equal("01 03 2001, 01 03 2002")
    })
    it('2: should get reverse input and set input dates accordingly', function () {
      Input.getInput("01 03 2003, 01 03 2001")
      let result = Input.getInputDates()
      expect(result).to.be.equal("01 03 2001, 01 03 2003")
    })
    it('3TODO: should get validate zero input dates', function () {
      Input.getInput("00 01 2000, 01 01 2001")
      let result = Input.getInputDates()
      expect(result).to.be.equal("00 01 2000, 01 01 2001")
    })
  })

})


import * as Chai from 'chai'
import ChaiArrays from "chai-arrays"
import { expect } from 'chai'
import * as Input from '../src/input'
import * as Output from '../src/output'
import * as $ from '../src/variables'

describe('Datee', function() {
  describe('UTGI.Unit Tests For Getting Input Functions', function() {
    it('1: should get input and set input dates accordingly', function () {
      Input.getInput("01 03 2001, 01 03 2002")
      let result = $.getInputs()
      expect(result).to.be.equal("01 03 2001, 01 03 2002")
    })
    it('2: should get reverse input and set input dates accordingly', function () {
      Input.getInput("01 03 2003, 01 03 2001")
      let result = $.getInputs()
      expect(result).to.be.equal("01 03 2001, 01 03 2003")
    })
    it('3 TODO: should get validate zero input dates', function () {
      Input.getInput("00 01 2000, 01 01 2001")
      let result = $.getInputs()
      expect(result).to.be.equal("00 01 2000, 01 01 2001")
    })
  })
  describe('UTGO. Unit Tests For Getting Output', function() {
    it('4: should output a date', function() {
      Input.getInput("01 03 2001, 01 03 2003")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 01 03 2003")
    })
  })

})


import * as Chai from 'chai'
import ChaiArrays from "chai-arrays"
import { expect } from 'chai'
import * as Input from '../src/input'
import * as Output from '../src/output'
import * as $ from '../src/variables'
import {countLeapYear} from '../src/leapyear'

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
  describe('UTLY. Unit Tests For Leap Year', function() {
    it('5: should count a leap year day in 4 years', function() {
      Input.getInput("15 03 2001, 01 03 2004")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(1)
    })
    it('6: should count 2 leap year days in 8 years', function () {
      Input.getInput("15 03 2001, 01 03 2004")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(1)
    })
    it('7: should count leap year day in leap year in a leap month', function () {
      Input.getInput("28 03 2000, 01 03 2000")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(0)
    })
    it('8: should not count a day if not valid leap year', function () {
      Input.getInput("15 03 2001, 01 03 2003")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(0)
    })
  })
})


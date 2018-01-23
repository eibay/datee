import * as Chai from 'chai'
import ChaiArrays from "chai-arrays"
import { expect } from 'chai'
import * as Input from '../src/input'
import * as Output from '../src/output'
import * as $ from '../src/variables'
import * as C from '../src/constants'
import {countLeapYear} from '../src/leapyear'
import { validateInput } from "../src/validate";

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
      Input.getInput("00 01 1898, 01 01 2001")
      let result = validateInput()
      expect(result).to.be.equal(`Error 1: Input out of range. ${C.MIN_YEAR} - ${C.MAX_YEAR}`)
    })
  })
  describe('Functional Tests For Getting Output', function() {
    it('4: should output days when only end date day is greater', function() {
      Input.getInput("01 03 2001, 11 03 2001")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 11 03 2001, 10")
    })
    it('5: should output days when only end date month is greater', function () {
      Input.getInput("01 03 2001, 01 04 2001")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 01 04 2001, 31")
    })
    it('6: should output days when only end date year is greater', function () {
      Input.getInput("01 03 2001, 01 03 2002")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 01 03 2002, 365")
    })
    it('7: should output days when all end date places are greater', function () {
      Input.getInput("01 03 2001, 10 10 2004")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 10 10 2004, 1319")
    })
    it('8: should output days when end date day is lower and with 1 year gap ', function () {
      Input.getInput("15 03 2001, 01 03 2002")
      let result = Output.getOutput()
      expect(result).to.be.equal("15 03 2001, 01 03 2002, 351")
    })
    it('9: should output days when end date day is lower and with 3 years gap ', function () {
      Input.getInput("15 03 2001, 01 03 2004")
      let result = Output.getOutput()
      expect(result).to.be.equal("15 03 2001, 01 03 2004, 1082")
    })
    it('10: should output days when end date month is lower, similar day and with 1 year gap ', function () {
      Input.getInput("01 12 2001, 01 02 2002")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 12 2001, 01 02 2002, 62")
    })
    it('11: should output days when end date month is lower, similar day and with 2 years gap ', function () {
      Input.getInput("01 10 2005, 01 03 2007")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 10 2005, 01 03 2007, 516")
    })
    
    it('12: should output days when both end date month and day is lower and with 1 year gap ', function () {
      Input.getInput("31 12 2001, 15 03 2002")
      let result = Output.getOutput()
      expect(result).to.be.equal("31 12 2001, 15 03 2002, 74")
    })
    
    it('13: should output days when both end date month and day is lower and with 2 years gap ', function () {
      Input.getInput("17 08 2001, 01 03 2003")
      let result = Output.getOutput()
      expect(result).to.be.equal("17 08 2001, 01 03 2003, 561")
    })
    
    it('14: should output with 1 leap year day when both end date month and day is greater with 4 years gap ', function () {
      Input.getInput("01 03 2001, 02 04 2005")
      let result = Output.getOutput()
      expect(result).to.be.equal("01 03 2001, 02 04 2005, 1493")
    })
    
    it('15: should output with 1 leap year day when both end date month and day is greater with 3 years gap ', function () {
      Input.getInput("15 03 2001, 01 03 2004")
      let result = Output.getOutput()
      expect(result).to.be.equal("15 03 2001, 01 03 2004, 1082")
    })
    
    it('16: should output with 6 leap year days with mix months and days and 25 years gap ', function () {
      Input.getInput("12 09 1945, 15 04 1969")
      let result = Output.getOutput()
      expect(result).to.be.equal("12 09 1945, 15 04 1969, 8616")
    })
    
    it('17: should output with a valid leap day on a leap year ', function () {
      Input.getInput("28 02 2000, 01 03 2000")
      let result = Output.getOutput()
      expect(result).to.be.equal("28 02 2000, 01 03 2000, 2")
    })
    
    it('17: should not output if no valid leap day on a leap month and a leap year ', function () {
      Input.getInput("27 02 2000, 28 02 2000")
      let result = Output.getOutput()
      expect(result).to.be.equal("27 02 2000, 28 02 2000, 1")
    })
  })
  
  describe('UTLY. Unit Tests For Leap Year', function() {
    it('20: should count a leap year day in 4 years', function() {
      Input.getInput("15 03 2001, 01 03 2004")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(1)
    })
    it('21: should count 2 leap year days in 8 years', function () {
      Input.getInput("15 03 2001, 01 03 2004")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(1)
    })
    it('22: should count leap year day in leap year in a leap month', function () {
      Input.getInput("28 03 2000, 01 03 2000")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(0)
    })
    it('23: should not count a day if not valid leap year', function () {
      Input.getInput("15 03 2001, 01 03 2003")
      countLeapYear()
      let result = $.getLeapYear()
      expect(result).to.be.equal(0)
    })

  })
})


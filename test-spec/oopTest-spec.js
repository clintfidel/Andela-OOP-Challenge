import chai from 'chai';
const assert = chai.assert;

import { bankAccount,studentAccount } from '../oopChallenge/oop.js';

let Emeka = new bankAccount('clinton', 2110940144, 4444, 'zenith', 'current');
let clintFidel = new studentAccount('clinton Fidel',1014508643, 3222, 'zenith', 'savings')

describe("bankAccount", () => {
    describe('deposit', () => {
        it("should return Deposit successful, your new balance is: 40000' for deposit ", () => {
            Emeka.deposit(40000, 2110940144);
            const balance = Emeka.balanceInquiry(4444)
            assert.equal(balance,'Your balance is:  40000')
        })
        it("should return Unidentified Account Details Supplied", () => {
            const confirmAccount =  Emeka.deposit(70000, 2178877889);
            assert.equal(confirmAccount, 'Unidentified Account Details Supplied')
        })
    })

    describe('withdraw', () => {
        it("should return Insufficient Funds ", () => {
            
            const fundsCheck = Emeka.withdraw(4444, 300000);
            assert.equal(fundsCheck,'Insufficient Funds')
        })
        it("should returnIncorrect Pin", () => {
            const confirmPin =  Emeka.withdraw(3443,30000);
            assert.equal(confirmPin, 'Incorrect Pin')
        })
        it("should return Please Take your cash ", () => {
            Emeka.deposit(3443,30000)
            const withdrawSuccess = Emeka.withdraw(4444, 40000) ;
            assert.equal(withdrawSuccess, 'Please Take your cash!')
        })
    })
    describe('balanceInquiry', () => {
        it("should returnInvalid pin Supplied ", () => {
            const checkPin = Emeka.balanceInquiry(4443);
            assert.equal(checkPin,'Invalid pin Supplied')
        })
        it("should return currentBalance", () => {
            const currentBalance =  Emeka.balanceInquiry(4444);
            assert.equal(currentBalance, 'Your balance is:  0')
        })
    })
})
describe("studentAccount", () => {
    describe('deposit', () => {
        it("should return Deposit successful, your new balance is:  40000 ", () => {
            clintFidel.deposit(40000, 1014508643);
            const balance = clintFidel.balanceInquiry(3222)
            assert.equal(balance,'Your balance is: 40000')
        })
        it("should return Unidentified Account Details Supplied", () => {
            const confirmAccount =  clintFidel.deposit(70000, 2178877889);
            assert.equal(confirmAccount, 'Unidentified Account Details Supplied')
        })
    })

    describe('withdraw', () => {
        it("should returnInsufficient Funds ", () => {
            
            const fundsCheck = clintFidel.withdraw(3222, 300000);
            assert.equal(fundsCheck,'Insufficient Funds')
        })
        it("should return Incorrect Pin", () => {
            clintFidel.deposit(45000, 1014508643)
            const confirmPin =  clintFidel.withdraw(3443,30000);
            assert.equal(confirmPin, 'Incorrect Pin')
        })
        it("should return Please Take your cash ", () => {
            clintFidel.deposit(40000, 1014508643)
            const withdrawSuccess =  clintFidel.withdraw(3222,40000);
            assert.equal(withdrawSuccess, 'Please Take your cash!')
        })
    })
    describe('balanceInquiry', () => {
        it("should return Invalid pin Supplied ", () => {
            const checkPin = clintFidel.balanceInquiry(4443);
            assert.equal(checkPin,'Invalid pin Supplied')
        })
        it("should return currentBalance", () => {
            const currentBalance =  clintFidel.balanceInquiry(3222);
            assert.equal(currentBalance, 'Your balance is: 85000')
        })
    })
})    
const { Properties } = require('../src/greeter')
const { JavaScriptGreeter } = require('../src/JavaScriptGreeter')
const { LoudGreeter } = require('..LoudGreeter')

describe('Properties', () => {
    test('Testing with different greetings and names', () => {
        expect(Properties('Hello')).toEqual('Bob')
    })

    test('Testing with different greetings and names', () => {
        expect(Properties('Greetings')).toEqual('Jim')
    })

})

describe('JavaScriptGreeter', () => {
    test('Testing with different greetings and names', () => {
        expect(JavaScriptGreeter('Hello')).toEqual('Bob!')
    })

    test('Testing with different greetings and names', () => {
        expect(JavaScriptGreeter('Greetings')).toEqual('Jim!')
    })
})
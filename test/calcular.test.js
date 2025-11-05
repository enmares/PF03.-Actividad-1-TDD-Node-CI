import { describe, it, expect } from 'vitest'
import { fibonacci, esPinValido } from '../src/calcular.js'

describe('funcion-fibonacci', () => {
  it('fibonacci', () => {
    expect(fibonacci(-1)).toBe(0);
    expect(fibonacci(1)).toBe(0)
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(5)).toBe(3)
  })
})

/*
describe('funcion-esPinValido', () => {
  it('esPinValido', () => {
    expect(null).toBe(false)
    expect(undefined).toBe(false);
    expect("").toBe(false)
    expect("123456789").toBe(false)
    expect("123b4").toBe(false);
    expect("11111").toBe(false);
    expect("67221").toBe(true);
  })
})
*/
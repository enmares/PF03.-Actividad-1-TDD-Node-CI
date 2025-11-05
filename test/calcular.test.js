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

describe('funcion-esPinValido', () => {
  it('esPinValido', () => {
    expect(esPinValido(null)).toBe(false)
    expect(esPinValido(undefined)).toBe(false);
    expect(esPinValido("")).toBe(false)
    expect(esPinValido("123456789")).toBe(false)
    expect(esPinValido("123b4")).toBe(false);
    expect(esPinValido("11111")).toBe(false);
    expect(esPinValido("67221")).toBe(true);
  })
})
import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/calcular.js'

describe('funcion-fibonacci', () => {
  it('fibonacci', () => {
    expect(5).toBe(3)
    expect(-1).toThrow("El valor no puede ser negativo")
    expect(1).toBe(1)
    expect(0).toBe(0)
    expect(8).toBe(13)
  })
})
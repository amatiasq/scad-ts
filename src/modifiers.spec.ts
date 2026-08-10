import assert from 'node:assert';
import { square, union } from './index.js';

describe('disable', () => {
  const expected = { type: '*', children: square() };

  it('should add disable modifier existing object', () => {
    assert.deepEqual(square().disable(), expected);
  });

  it('should be usable in operations', () => {
    assert.deepEqual(union(square().disable()), {
      type: 'union',
      children: [expected],
    });
  });
});

describe('root', () => {
  const expected = { type: '!', children: square() };

  it('should add root modifier existing object', () => {
    assert.deepEqual(square().root(), expected);
  });

  it('should be usable in operations', () => {
    assert.deepEqual(union(square().root()), {
      type: 'union',
      children: [expected],
    });
  });
});

describe('debug', () => {
  const expected = { type: '#', children: square() };

  it('should add debug modifier existing object', () => {
    assert.deepEqual(square().debug(), expected);
  });

  it('should be usable in operations', () => {
    assert.deepEqual(union(square().debug()), {
      type: 'union',
      children: [expected],
    });
  });
});

describe('background', () => {
  const expected = { type: '%', children: square() };

  it('should add background modifier existing object', () => {
    assert.deepEqual(square().background(), expected);
  });

  it('should be usable in operations', () => {
    assert.deepEqual(union(square().background()), {
      type: 'union',
      children: [expected],
    });
  });
});

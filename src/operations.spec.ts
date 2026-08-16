import assert from 'node:assert';
import {
  cube,
  cylinder,
  difference,
  hull,
  intersection,
  minkowski,
  sphere,
  union,
} from './index.js';

describe('Union', () => {
  it('Union all aruments together', () => {
    assert.deepEqual(union(), { type: 'union', children: [] });
    assert.deepEqual(union(cube()), {
      type: 'union',
      children: [cube()],
    });
    assert.deepEqual(union(cube(), sphere(), cylinder()), {
      type: 'union',
      children: [cube(), sphere(), cylinder()],
    });
  });
  it('difference all aruments together', () => {
    assert.deepEqual(difference(cube(), sphere(), cylinder()), {
      type: 'difference',
      children: [cube(), sphere(), cylinder()],
    });
  });
  it('intersection all aruments together', () => {
    assert.deepEqual(intersection(cube(), sphere(), cylinder()), {
      type: 'intersection',
      children: [cube(), sphere(), cylinder()],
    });
  });
  it('hull all aruments together', () => {
    assert.deepEqual(hull(cube(), sphere(), cylinder()), {
      type: 'hull',
      children: [cube(), sphere(), cylinder()],
    });
  });
  it('minkowski all aruments together', () => {
    assert.deepEqual(minkowski(cube(), sphere(), cylinder()), {
      type: 'minkowski',
      children: [cube(), sphere(), cylinder()],
    });
  });
});

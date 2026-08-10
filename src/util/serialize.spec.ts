import assert from 'node:assert';
import { cube, sphere, square, union } from '../index.js';

describe('Serialize', () => {
  it('should serialize an object number value', () => {
    assert.equal(
      square().serialize({ $fn: 6 }).trim(),
      `
$fn = 6;
square(size = [1, 1], center = false);
      `.trim()
    );
  });
  it('should serialize an object with animation value', () => {
    assert.equal(
      square('$t').serialize(),
      'square(size = $t, center = false);\n'
    );
  });
  it('should serialize an object with array animation value', () => {
    assert.equal(
      cube(['$t', '2 * $t', 5]).serialize(),
      'cube(size = [$t, 2 * $t, 5], center = false);\n'
    );
  });
  it('should serialize an object with color transformation', () => {
    assert.equal(
      cube(8).color('green', 0.6).serialize().trim(),
      `
color(c = "green", alpha = 0.6) {
  cube(size = 8, center = false);
}
      `.trim()
    );
  });
  it('should serialize an object number value', () => {
    assert.equal(
      square().radius_offset(5).serialize().trim(),
      `
offset(r = 5) {
  square(size = [1, 1], center = false);
}
      `.trim()
    );
  });
  it('should serialize an object number value', () => {
    assert.equal(square(5).serialize(), 'square(size = 5, center = false);\n');
  });
  it('should serialize an object number value', () => {
    assert.equal(
      square(8).debug().serialize(),
      '#square(size = 8, center = false);\n'
    );
  });
  it('should serialize a transformed object', () => {
    assert.equal(
      square([4, 5]).translate([5, 6, 7]).serialize(),
      'translate(v = [5, 6, 7]) {\n  square(size = [4, 5], center = false);\n}\n'
    );
  });
  it('should serialize a operation', () => {
    assert.equal(
      union(sphere(), cube()).serialize().trim(),
      `
union() {
  sphere(r = 1);
  cube(size = [1, 1, 1], center = false);
}
      `.trim()
    );
  });
  it('should prevent invalid "auto = false" in scale', () => {
    assert.equal(
      cube().scale(1).serialize().trim(),
      `
scale(v = 1) {
  cube(size = [1, 1, 1], center = false);
}
      `.trim()
    );
  });
});

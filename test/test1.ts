import {hello}     from '../lib/index';
import * as assert from 'power-assert';

describe('main package', () => {
  it('hello()', () => {
    assert.equal("hello, world", hello());
  });
});

import { WholeNumberPipe } from './whole-number.pipe';

describe('WholeNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new WholeNumberPipe();
    expect(pipe).toBeTruthy();
  });
});

import { UserDto } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new UserDto()).toBeTruthy();
  });
});

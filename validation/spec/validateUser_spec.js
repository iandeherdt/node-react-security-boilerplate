import validateUser from '../validateUser';
const chai = require('chai');
const should = chai.should();
describe('validate user', () => {
  it('should mark an invalid user as such', () => {
    const validUser = {
      username: '' ,
      password: '',
      name: '',
      firstname: '',
      email: '',
      admin: false
    };
    const result = validateUser(validUser);
    should.exist(result.error);
  });
  it('should mark a valid user as such', () => {
    const validUser = {
      username: 'foobar' ,
      password: 'blablabla',
      name: 'foo',
      firstname: 'bar',
      email: 'foo@bar.com',
      admin: false
    };
    const result = validateUser(validUser);
    should.not.exist(result.error);
  });
});
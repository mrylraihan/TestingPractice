import { it, expect, beforeAll, beforeEach, afterAll, afterEach} from 'vitest';
import { User } from './hooks';

const testEmail = 'test@test.com';
// changed to a let so we can reassign 
let user 
beforeAll(()=>{
  user= new User(testEmail);

  // console.log('before all');
})
beforeEach(()=>{
  // user = new User(testEmail);

  console.log('before each')
})

afterEach(()=>{
  // after each test reassign to a new user 
  user = new User(testEmail);
  // console.log('after each')
})
afterAll(()=>{
  console.log('after all');
})
it('should update the email', () => {

  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  
  user.clearEmail();

  expect(user).toHaveProperty('email');
});

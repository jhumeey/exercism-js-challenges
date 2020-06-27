//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name, value = 'One for you, one for me.' ) => {
  name = typeof name !== 'undefined' ? name : value;
  return 'One for ' + name + ', one for me.';
};
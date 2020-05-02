import { FormControl } from '@angular/forms';

import { NumberValidators } from './number.validator';

describe('NumberValidators', () => {

  it('should be a Truthy validator. 4 fits in the range between 1 to 5', () => {
    const validator = NumberValidators.range(1, 5);
    const control = new FormControl(4, validator);

    expect(control.valid).toBeTruthy();
  });

  it('should be a Falsy validator. 6 doesn not fit in the range between 1 to 5', () => {
    const validator = NumberValidators.range(1, 5);
    const control = new FormControl(6, validator);

    expect(control.valid).toBeFalsy();
  });
});

import boot from './boot';

describe('boot', () => {

  describe('BootCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(boot);

      angular.mock.inject(($controller) => {
        ctrl = $controller('BootCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});
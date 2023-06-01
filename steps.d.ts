/// <reference types='codeceptjs' />
type steps_file = typeof import('./Zoom80_file.js');
type ResembleHelper = import('codeceptjs-resemblehelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends WebDriver, ResembleHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ResembleHelper> {}
  namespace Translation {
    interface Actions {}
  }
}

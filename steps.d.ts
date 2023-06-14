/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type ZoomMenosPage = typeof import('./pages/ZoomMenos.js');
type ResembleHelper = import('codeceptjs-resemblehelper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, ZoomMenosPage: ZoomMenosPage }
  interface Methods extends WebDriver, ResembleHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<ResembleHelper> {}
  namespace Translation {
    interface Actions {}
  }
}

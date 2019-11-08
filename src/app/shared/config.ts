// Angular
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export function apiHeaders() {
  return {
    headers: new HttpHeaders({ 'Authorization': `JWT ${localStorage.getItem('token')}` })
  };
}

export const apiUrl = getApiUrl();
export const PRIMARY_DOMAIN = environment.production ? 'ctemplar.com' : 'dev.ctemplar.com';

export function getApiUrl() {
  if (window.location && window.location.hostname === environment.onionDomain) {
    return environment.onionApiServerUrl;
  }
  return environment.apiServerUrl;
}

export function getWebsocketUrl() {
  if (window.location && window.location.hostname === environment.onionDomain) {
    return environment.webSocketOnionUrl;
  }
  return environment.webSocketUrl;
}


export const COLORS: string[] = [
  '#000000', '#616161', '#828282', '#adadad',
  '#d2d2d2', '#e9e9e9', '#ffffff', '#730000',
  '#ae0000', '#e60000', '#ff2121', '#ff7676',
  '#ffc9c9', '#ffefef', '#734600', '#ae6200',
  '#e66300', '#ff8c21', '#ffc576', '#ffe9c9',
  '#ffe9c9', '#737200', '#a0ae00', '#e6e300',
  '#fff621', '#fdff76', '#fffdc9', '#ffffef',
  '#0f7300', '#0eae00', '#1ee600', '#21ff38',
  '#76ff76', '#c9ffd0', '#effff1', '#006e73',
  '#00aeac', '#00dce6', '#21f4ff', '#76fff4',
  '#c9fffc', '#effeff', '#000173', '#0016ae',
  '#0100e6', '#5555ff', '#7681ff', '#cdc9ff',
  '#f1efff', '#530073', '#7500ae', '#ba00e6',
  '#e955ff', '#de76ff', '#f2c9ff', '#fcefff',
];

export const FOLDER_COLORS: string[] = [
    '#ced4da', '#868e96', '#212529', '#da77f2', '#be4bdb', '#8e44ad', '#f783ac', '#e64980', '#a61e4d',
    '#748ffc', '#4c6ef5', '#364fc7', '#9775fa', '#7950f2', '#5f3dc4', '#ff8787', '#fa5252', '#c0392b',
    '#4dabf7', '#3498db', '#1864ab', '#2ecc71', '#27ae60', '#16a085', '#ffd43b', '#fab005', '#e67e22',
    '#3bc9db', '#15aabf', '#0b7285', '#a9e34b', '#82c91e', '#5c940d', '#f39c12', '#fd7e14', '#e74c3c',
];

export const LANGUAGES: Language[] = [
  { name: 'English', locale: 'en' },
  { name: 'Spanish', locale: 'es' },
  { name: 'Russian', locale: 'ru' },
  { name: 'Chinese', locale: 'zh' },
  { name: 'French', locale: 'fr' },
  { name: 'Ukrainian', locale: 'uk' },
];

export interface Language {
  name: string;
  locale: string;
}

export const ESCAPE_KEYCODE = 27;

export const DEFAULT_STORAGE = 5; // storage in GB
export const DEFAULT_EMAIL_ADDRESS = 10;
export const DEFAULT_CUSTOM_DOMAIN = 1;

export const VALID_EMAIL_REGEX: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FONTS = ['lato', 'roboto', 'arial', 'times-new-roman'];

export const REFFERAL_CODE_KEY = 'referral_code';

export function isTORBrowser() {
  if (window.location.hostname === 'ctemplar42u6fulx.onion') {
    return true;
  }
  const date = new Date();
  if (window.innerWidth === 1000 &&
    navigator.userAgent.indexOf('Gecko/20100101 Firefox') > -1 &&
    date.getTimezoneOffset() === 0 &&
    (navigator.plugins && navigator.plugins.length === 0)) {
    if (window.location.hostname === 'ctemplar.com') {
      window.location.href = `http://ctemplar42u6fulx.onion${window.location.pathname}`;
    }
    return true;
  }
  return false;
}

isTORBrowser();

export const SummarySeparator = '-----------------------------------------------------------------------------------------------';

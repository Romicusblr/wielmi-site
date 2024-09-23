export const PHONENUMBER = "+48571780770";
export const CONTACT_HASH = "#contact";
export const LANDING_DESCRIPTION = "landing-description";
export const CONTACT_LINK = "/kontakt/#contact";
export const INTELIGENTNY_DOM_LINK = "/inteligentny-dom/";
export const INSTALACJE_ELEKTRYCZNE_LINK = "/instalacje-elektryczne/";
export const SIECI_LOKALNE_LINK = "/sieci-lokalne/";
export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export function formatNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

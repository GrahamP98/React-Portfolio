export function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function checkEmail(email) {
    var re = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    return re.test(String(email).toLowerCase());
  }
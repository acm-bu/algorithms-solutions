function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let skip: boolean = false;
        
        if (!isAlphaNumeric(s[i])) {
            i++;
            skip = true;
        }   
        if (!isAlphaNumeric(s[j])) {
            skip = true;
            j--;
        }

        // Don't tell aars I did this
        if (skip) {
            continue;
        }

        if (s[i].toLowerCase() != s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};

function isAlphaNumeric(str: string) {
  let code: number, i: number, len: number;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

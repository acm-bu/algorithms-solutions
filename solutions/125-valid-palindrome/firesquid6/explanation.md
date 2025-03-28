Let's start by looking at a simpler case:

> A phrase is a palindrome if it reads the same forwards and backwards

This is a simpler version of the actual problem statement:

> A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

This simple version has a relatively simple solution:

```ts
function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    while (i != j) {
        if (s[i] != s[j]) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};
```

For examples such as `ana` or `racecar` this works perfectly. 

We just read it forwards and backwards. If anytime it doesn't match up, we return false. We can relatively trivially add support for matching upper and lowercase:

```ts
function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length;

    while (i != j) {
        if (s[i].toLowerCase() != s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};
```

Note that `toLowerCase` is a built in function in javascript.


Now we can correctly find palindromes like `anA` or `Racecar`. However we still need to skip non-alphanumeric characters. Other languages have this built in, but we're gonna add a helper function in typescript:

```ts
function isAlphaNumeric(s: string) {
  var code, i, len;

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
```


Now we can finish the function:
```ts
function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;

    // note the change to i < j since there are cases where i can become
    // greater than j such as s = ".," which will cause a runtime error
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
```

If we see something non-alphanumeric, we just skip over it. 

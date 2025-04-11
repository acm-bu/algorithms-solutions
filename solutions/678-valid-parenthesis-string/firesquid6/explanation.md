First of all, leetcode gave this solution 0 ms and beats 100.00% so I'm kinda him.


Do valid parenthesis first. Our approach for this one will be pretty much the same.


First let's just solve with a string with no wildcards.

```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        unclosed = 0

        for i in range(len(s)):
            c = s[i]
            
            if c == '(':
                unclosed += 1
            if c == ')':
                if unclosed > 0:
                    unclosed -= 1
                else:
                    # if we hit here it's broken. pattern like ")("
                    return False

        return len(unclosed) == 0
```

This is relatively simple you may think that to track wildcards we could simply just count them and then whenever we hit a situation where something is broken, we "use up" a wildcard to fix it. For situations like `(()*`  or `*)` where we eliminate a wildcard to match a close parenthesis that works fine, but other testcases still fail.

Take `*(`. This will fail since there is no way to close that parenthesis, but if you were just counting you would think there's a wildcard to help "kill" your open parenthesis.

The key comes when you ensure that you track the *indicies* of the wildcards and open parenthesis. The wildcard that "matches" the open parenthesis must come after, and if it doesn't exist, you know that a pattern is impossible.

Here's a solution implementing that using two stacks:


```python
class Solution:
    def checkValidString(self, s: str) -> bool:
        wildcards = []
        unclosed = []

        for i in range(len(s)):
            c = s[i]
            if c == '*':
                wildcards.append(i)
            
            if c == '(':
                unclosed.append(i)
            if c == ')':
                if len(unclosed) > 0:
                    unclosed.pop()
                elif len(wildcards) > 0:
                    wildcards.pop()
                else:
                    return False
        

        while len(unclosed) > 0 and len(wildcards) > 0:
            if unclosed.pop() > wildcards.pop():
                return False
            
        
        return len(unclosed) == 0
```

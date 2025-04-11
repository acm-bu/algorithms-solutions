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

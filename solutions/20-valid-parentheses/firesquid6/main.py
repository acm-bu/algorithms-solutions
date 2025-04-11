class Solution:
    def isValid(self, s: str) -> bool:
        unclosed = []

        for c in s:
            if c == '(' or c == '[' or c == '{':
                unclosed.append(c)
            else:
                if len(unclosed) == 0:
                    return False
                
                u = unclosed.pop()
                isMatch = False
                if u == '(' and c == ')':
                    isMatch = True
                if u == '[' and c == ']':
                    isMatch = True
                if u == '{' and c == '}':
                    isMatch = True
                
                if not isMatch:
                    return False

        return len(unclosed) == 0

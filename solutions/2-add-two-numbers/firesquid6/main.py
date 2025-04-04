# NOT INCLUDED IN ACTUAL SUBMISSION
# -----
# stops LSP from crying
from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
# -----
# ACTUAL SUBMISSION

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]: 
        carry = 0

        # our acutal head is the node right after this one.
        # Makes life easier.
        dummy = ListNode(-1)

        # temp is the pointer we move around a lot
        temp = dummy

        while l1 and l2:
            n = carry + l1.val + l2.val
            
            # we need to account for the case where the
            # sum is bigger
            # note: in python // is integer divide and % is modulo
            carry = n // 10
            node = ListNode(n % 10)
            
            # this just appends to the end and increments
            temp.next = node
            temp = temp.next

            l1 = l1.next
            l2 = l2.next
        
        # now we do the same thing for whatever is leftover
        leftover = None  # none is the equivalent of nullptr in python
        if l1:
            leftover = l1
        else:
            leftover = l2
        
        # do the same thing as before.
        while leftover:
            n = carry + leftover.val

            carry = n // 10
            node = ListNode(n % 10)

            temp.next = node
            temp = temp.next
            leftover = leftover.next
        
        # check for edgecase where there's still some carry
        # easy one to forget
        if carry:
            temp.next = ListNode(carry)
        
        return dummy.next



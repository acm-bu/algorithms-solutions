# list node class is defined as:
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def deleteDuplicates(self, head):
        # l is the pointer we move around
        l = head

        # we know we are done if we are at the
        # last or second to last element
        while l and l.next:
            # it would seem intuitive to use a set or
            # hashmap to track if something has been seen
            # before. However, we can just use the fact
            # that since it's sorted, duplicates are next
            # to each other
            #
            # this reduces memory usage and makes memory
            # complexity O(1)
            if l.val == l.next.val:
                # we are garaunteed that head.next.next exists
                l.next = l.next.next
            else:
                # otherwise we just continue
                l = l.next

        return head


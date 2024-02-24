class Queue:
    def __init__(self, array=[]):
        self.array = array
    
    def enqueue(self,val):
        self.array.append(val)
    
    def dequeue(self):
        first = self.array[0].copy()
        del self.array[0]
        return first
    

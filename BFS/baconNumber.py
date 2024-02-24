# For Python:
from queuepy import Queue
actorGraph = {
    'Kevin Bacon': ['Carly', 'Fred', 'Isabella'],
    'Carly': ['Kevin Bacon'],
    'Fred': ['Kevin Bacon', 'Emma', 'Richard'],
    'Emma': ['Molly', 'Justin', 'Fred'],
    'Molly': ['Emma'],
    'Justin': ['Emma', 'Jacob'],
    'Jacob': ['Justin', 'Julia'],
    'Julia': ['Jacob'],
    'Richard': ['Fred', 'Olivia', 'Andrew'],
    'Olivia': ['Richard', 'Ben'],
    'Ben': ['Olivia'],
    'Andrew': ['Richard', 'Sophia'],
    'Sophia': ['Andrew'],
    'Isabella': ['Edward', 'Brian', 'Alexa', 'Kevin Bacon'],
    'Edward': ['Isabella'],
    'Brian': ['Isabella', 'Kendall'],
    'Kendall': ['Brian'],
    'Alexa': ['Isabella', 'Harry', 'Diana', 'Grace'],
    'Harry': ['Alexa'],
    'Diana': ['Alexa'],
    'Grace': ['Alexa', 'Monica'],
    'Monica': ['Grace', 'Taylor'],
    'Taylor': ['Monica', 'Robert'],
    'Robert': ['Taylor', 'Hayley'],
    'Hayley': ['Robert', 'Jessica'],
    'Jessica': ['Hayley', 'Jennifer'],
    'Jennifer': ['Jessica', 'Kate'],
    'Kate': ['Jennifer'],
}


def main(startNode):
    endNode = 'Kevin Bacon'
    q = Queue([[startNode, 0, []]])
    past_values = []
    while len(q.array):
        currentNode,dist,p = q.dequeue()
        past = p.copy()
        past.append(currentNode)
        if currentNode == 'Kevin Bacon':
            print(past)
            return dist
        connections = actorGraph[currentNode]
        
        [q.enqueue([conn, dist+1, past]) for conn in connections if conn not in past_values]
    
    return -1




if __name__ == '__main__':
    startNode = ''
    while startNode not in actorGraph.keys():
        print('Input a name to find the Bacon number')
        startNode = input()
        if startNode not in actorGraph.keys():
            print('Try again.')
    
    a = main(startNode)
    print(a)

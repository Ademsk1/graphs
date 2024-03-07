from collections import deque
"""
During the COVID-19 pandemic, contact tracing became incredibly important. For this problem, you'll implement a contact tracing algorithm. Given a person, you want to return the distance between them and the closest person to them who has COVID-19.

For example, if Alice has a friend of a friend of a friend who has COVID-19, then Alice's output would be 3 (or potentially lower if she has a shorter path to someone with COVID-19). In this problem, people will be represented as IDs (numbers in the range [0, n-1] where n is the number of people).

You'll be given a person number, an array of friendships, and an array of individuals infected with COVID-19. The friendships array will contain a bunch of smaller arrays of size 2. For each smaller array [a,b], we conclude that a is friends with b and b is friends with a. You must return the smallest degree of separation between the given person and an individual who has COVID-19, or -1 if the given person has no connection to an infected individual.
"""


friendships = [
    [0, 1],
    [0, 2],
    [2, 8],
    [2, 9],
    [1, 3],
    [3, 4],
    [4, 6],
    [6, 7],
    [8, 9],
    [7, 5],
]

initial_person_id = 0
infected_people = [5,6,7]


def check_contact_for_friendship(friend1, friend2, contact): # check alters contact in place
    if friend1 in contact:
        contact[friend1].append(friend2)
    else:
        contact[friend1] = [friend2]
    


def process_friendship_graph():
    contact = {}
    for friendship in friendships:
        friend1, friend2 = friendship
        check_contact_for_friendship(friend1, friend2, contact)
        check_contact_for_friendship(friend2, friend1, contact)
    return contact


def breadth_first_search(contact):
    q = deque([[initial_person_id, []]])
    while len(q):
        current_person_id, history = q.popleft()
        print(current_person_id, history)
        if current_person_id in infected_people:
            return len(history)
        else:
            new_history = history.copy()
            new_history.append(current_person_id)
            [q.append([friend, new_history]) for friend in contact[current_person_id] if friend not in history]

    return -1



def main():
    contact = process_friendship_graph()
    d = breadth_first_search(contact)
    print(d)

if __name__ == '__main__':
    main()
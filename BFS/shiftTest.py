import matplotlib.pyplot as plt


def read_file(filename):
    lengths = []
    durations = []
    with open(filename) as f:
        for line in f.readlines():
            try:
                array_length, duration = [int(v.strip()) for v in line.split(',')]
                print(array_length, duration)
                durations.append(duration)
                lengths.append(array_length)
            except:
                pass
            

    return lengths,durations


def main():

    lengths,durations = read_file('./lower_range_test.txt')
    print(lengths)
    print(durations)
    plt.plot(lengths,durations)
    plt.xlabel('Array length')
    plt.ylabel('Duration (ms)')
    plt.title('Timed duration for Array.shift() function \n as array length increases from 1-10 million integer array values')
    plt.show()


if __name__=='__main__':
    main()
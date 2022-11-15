'''
Add data to the file that contains our ML dataset

Sources:
https://codefather.tech/blog/python-pickle/#:~:text=Python%20Pickle%3A%20Serialize%20Your%20Objects%20%5BWith%20Examples%5D%201,Using%20Python%20Pickle%20with%20Lambdas%20...%20More%20items

'''
import pickle

FILENAME = 'recognition-service\\dataset.pickle'

def load():
    unpickled_dataset = {}
    try:
        f = open(FILENAME, 'rb')
        unpickled_dataset = pickle.load(f)
        f.close()
    except IOError:
        print("File not found, creating new dictionary")
    finally:
        return unpickled_dataset

def add(data, label):
    '''
    adds to dataset like:
    dataset[label] = data
    '''
    dataset = load()
    dataset[label] = data

    try:
        dataset_file = open(FILENAME, 'wb+')
        pickle.dump(dataset, dataset_file)
        dataset_file.close()
        return True
    except IOError:
        print("Something went wrong")
        return False

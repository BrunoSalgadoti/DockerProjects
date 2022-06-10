from asyncio import streams
import yaml
if __name__ == '__main__':

    streams = open("test.yaml", "r")
    dictionary = yaml.safe_load(streams)

    for key, value in dictionary.items():
        print(key + " : " + str(value))
import time
import random
#print("one",current,runnum)
while True:
    current=time.ctime(time.time())
    rantem=(round(random.uniform(10.33, 40.66), 2))
    ranhum=(random.randrange(10, 99))
    print("one",current,rantem,ranhum,"%")
    time.sleep(2)
    rantem=(round(random.uniform(10.33, 40.66), 2))
    ranhum=(random.randrange(10, 99))
    current=time.ctime(time.time())
    print("two",current,rantem,ranhum,"%")
    time.sleep(2)
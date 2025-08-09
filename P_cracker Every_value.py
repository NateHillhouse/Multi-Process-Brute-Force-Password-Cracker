import multiprocessing.pool
import time, keyboard, sys
import multiprocessing

#keyboard.add_hotkey('esc', exit()) #Make a function that goes from the max number of characters and works down


word = 'You are an Idiot!'
number = 9

def result_(list): #Redid this so that it will run through the numbers backwards, because lowercase is used more often than Upper; should be faster
    #<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<It Only runs backwards through column one; need to fix
    for i in list:
        i += 33
        i = abs(i-127)
    result = ''.join(chr(i+33) for i in list)
    return result


def check(list):
    while [x for x in list if x <= 0]:
        for x in range(len(list)):
            '''if list[x] >= 94: #This function works up the list, from 0 (Uppercase) to 94 (Lowercase)
                list[x] = list[x] % 94 
                try:
                    list[x + 1] += 1
                    result = result_(list)
                    print(result)
                except Exception as e:
                    list.append(0)'''
            
            #This one goes from lowercase to upercase, because lowercase is more likely to be used
            if list[x] <= 0: 
                #print('taking val')
                list[x] = 94 - abs(list[x])
                try:
                    list[x + 1] -= 1
                    result = result_(list)
                    print(result)
                except Exception as e:
                    list.append(94)


def proc(word, processes, num, re, attempts, result):
    print(f'Number: {processes}')
    procnum = processes
    print(num)
    passw = [num]

    pas_list = []
    pas_list.append(passw)

    result = result_(passw)
    while (result) != word:
        result = result_(passw)#''.join(chr(int(i + 33)) for i in passw)
        print(result)
        passw[0] -= procnum #skips every few numbers so that the other processes will cover them

        check(passw)
        #time.sleep(0.1)
        attempts[num - 1] += 1
    
    re.append(result)





def processes(word, attempts, x):
    process = []
    manager = multiprocessing.Manager()
    re = manager.list()
    result = ''
    if x > 1:
        #Start each process
        for i in range(x): 
            process.append(multiprocessing.Process(target=proc, args=(word, x, i, re, attempts, result)))
            attempts.append(i)
            process[i].start()

        
        while not [i for i in process if not i.is_alive()]: #While everything is alive, keep the processes going
            continue
            #\/ After we successfully finish, end all tasks
        for a in process: #Check each process to see if it has terminated
            if a.is_alive():
                a.terminate()
                #print(f'Terminating Process {a}')
            elif not a.is_alive():
                #print(f'process {a} is terminated')
                continue   
        return re[0]
    elif x == 1:
        attempts.append(0)
        proc(word, 1, 1, re, attempts, result)


if __name__ == '__main__':
    manager = multiprocessing.Manager()
    attempts = manager.list()
    start_time = time.time()
    word = 'aaa'
    number = 2
    fin = processes(word, attempts, number)
    elapsed_time = time.time() - start_time
    print(f'attempts = {sum(attempts)}')
    print(f'Elapsed Time: {elapsed_time}')
    print(f'The final result is: {fin}')  
    #keyboard.remove_all_hotkeys()
    sys.exit()

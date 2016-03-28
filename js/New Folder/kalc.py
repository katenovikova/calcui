#!/usr/bin/python3

__pragma__ ('alias', 'S', '$')

import json
from Math import ceil

DATA_DIR = '/home/n/none23/lapro/'
all_types=['lite','mini','uni','lux']
TYPES_LOADED = dict()
PANES = None
all_mounts = ['one','two','three']

def checkIfType(func):
    def prefunc(atype):
        if atype in all_types:
            return func(atype)
        else:
            raise ValueError('Type doesn\'t exist ({})'.format(atype))


@ checkIfType
def getDataForType(atype, path=PATH):
    global TYPES_LOADED
    file_path = path + atype + '.json'
    priceList = []
    with open(file_path, 'r') as f:
        priceList = json.load(f)
    TYPES_LOADED(atype) = priceList
    return priceList



@ checkIfType
def typeQuote(atype):
    global TYPES_LOADED
    if atype in TYPES_LOADED:
        return TYPES_LOADED(atype)
    else:
        return getDataForType(atype)


def getMeasuresOne():
    global PANES
    PANES = int(getPanesCount())

    wid = [0, 0, 0]
    hei = [0, 0, 0]

    if PANES in [1, 2, 3]:
        if PANES < 3:
            wid[2] = 0
            hei[2] = 0
            if PANES < 2:
                wid[1] = 0
                hei[1] = 0
            else:
                wid[1] = int(document.getElementById ('width2').value)
                hei[1] = int(document.getElementById ('height2').value)
        else:
            wid[2] = int(document.getElementById ('width3').value)
            hei[2] = int(document.getElementById ('height3').value)

        wid[0] = int(document.getElementById ('width1').value)
        hei[0] = int(document.getElementById ('height1').value)

        return wid,hei


def getMeasuresTwo():
    wid = [0, 0, 0]
    hei = [0, 0, 0]

    wid[0] = int(document.getElementById ('width').value)
    hei[0] = int(document.getElementById ('height').value)

    return wid,hei


def getMeasuresThree():
    wid = [0, 0, 0]
    hei = [0, 0, 0]

    wid[0] = int(document.getElementById ('width').value)
    hei[0] = int(document.getElementById ('height').value)

    return wid,hei


def getMeasures():

    # for testing
    mount = all_mounts[0]

    if mount in all_mounts:
        if mount == 'one':
            return getMeasuresOne
        elif mount =='two':
            return getMeasuresTwo
        elif mount =='three':
            return getMeasuresThree
    raise ValueError('Unknown mount type ({})'.format(mount))
    return ValueError


def rectangles(h, w):
    if len(h) == 3:
        if len(w) == 3:
            s = ((0,''), (0,''), (0,''))
            s = ((int(h[0]*w[0]), h[0], w[0]),
                 (int(h[1]*w[1]), h[0], w[0]),
                 (int(h[2]*w[2]), h[0], w[0]))
            nonZ = []
            for si in s:
                if si[0] > 0:
                    nonZ.append([si[1],si[2]])
            return nonZ
        raise ValueError('wrong len(w)')
    raise ValueError('wrong len(h)')

class vect(atype):
    def __init__(self, atype):
        self.avail = True
        self.p = [0, 0, 0]
        self.atype = atype

    def getQuotes(self):
        return typeQuote(self.atype)

    def render(self):
        numtype = dict()
        numtype("lite") = "1"
        numtype("mini") = "2"
        numtype("uni") = "3"
        numtype("lux") = "4"

        if self.avail:
            idToSearchFor_1 = "Prine_1_" + numtype(self.atype) + "_1"
            idToSearchFor_2 = "Prine_1_" + numtype(self.atype) + "_2"
            idToSearchFor_3 = "Prine_1_" + numtype(self.atype) + "_3"
            document.getElementById(idToSearchFor_1).innerHTML = self.p[0];
            document.getElementById(idToSearchFor_2).innerHTML = self.p[1];
            document.getElementById(idToSearchFor_3).innerHTML = self.p[2];



def findIndex(h, w, atype):
    indx = int()
    if atype == all_types[0]:
        indx = (ceil(w / 10) - 4) * 16 + ceil(h / 10) - 5
    elif atype == all_types[1]:
        indx = (ceil(w / 10) - 4) * 14 + ceil(h / 10) - 5
    elif atype == all_types[2]:
        indx = ceil(w / 5) - 8
    elif atype == all_types[3]:
        indx = (ceil(w / 10) - 5) * 11 + ceil(h / 10) - 5
    return indx


def start ():
    [rh,rw] = getMeasures()
    rs = rectangles(rh,rw)
    for atype in all_types:
        ivect = vect(atype)
        qs = ivect.getQuotes()
        priceTotal = [0, 0, 0]
        for r in rs:
            ri = findIndex(r[0], r[1], atype)
            rp = []
            try:
                rp = qs[ri]
            except:
                pass

            if rp[0] == 0:
                ivect.avail = False
            elif rp[1] == 0:
                ivect.avail = False
            elif rp[2] == 0:
                ivect.avail = False
            else:
                priceTotal[0] = priceTotal[0] + rp[0]
                priceTotal[1] = priceTotal[1] + rp[1]
                priceTotal[2] = priceTotal[2] + rp[2]
        ivect.p = priceTotal[:]
        ivect.render()


    S__divs = S ('div')
    start ()


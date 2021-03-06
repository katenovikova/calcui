function ՐՏ_Iterable(iterable) {
    if (Array.isArray(iterable) || iterable instanceof String || typeof iterable === "string") {
        return iterable;
    }
    return Object.keys(iterable);
}
function ՐՏ_bind(fn, thisArg) {
    var ret;
    if (fn.orig) {
        fn = fn.orig;
    }
    if (thisArg === false) {
        return fn;
    }
    ret = function() {
        return fn.apply(thisArg, arguments);
    };
    ret.orig = fn;
    return ret;
}
function range(start, stop, step) {
    var length, idx, range;
    if (arguments.length <= 1) {
        stop = start || 0;
        start = 0;
    }
    step = arguments[2] || 1;
    length = Math.max(Math.ceil((stop - start) / step), 0);
    idx = 0;
    range = new Array(length);
    while (idx < length) {
        range[idx++] = start;
        start += step;
    }
    return range;
}
function len(obj) {
    if (Array.isArray(obj) || typeof obj === "string") {
        return obj.length;
    }
    return Object.keys(obj).length;
}
function eq(a, b) {
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < len(a); i++) {
                if (!eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            var ՐՏ_Iter0 = ՐՏ_Iterable(a);
            for (var ՐՏ_Index0 = 0; ՐՏ_Index0 < ՐՏ_Iter0.length; ՐՏ_Index0++) {
                i = ՐՏ_Iter0[ՐՏ_Index0];
                if (!eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
}
function ՐՏ_in(val, arr) {
    if (Array.isArray(arr) || typeof arr === "string") {
        return arr.indexOf(val) !== -1;
    } else {
        if (arr.hasOwnProperty(val)) {
            return true;
        }
        return false;
    }
}
function dir(item) {
    var arr;
    arr = [];
    for (var i in item) {
        arr.push(i);
    }
    return arr;
}
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

var __name__ = "__main__";

$(document).ready(function() {
    var all_types, all_mounts, coefusd, dMini, dUni, dLux, dLite;
    var hei1, hei2, hei3, hei4, wid1, wid2, wid3, wid4;
    var resLite1 , resLite2 , resLite3 , resMini1 , resMini2 , resMini3 , resUni1  , resUni2  , resUni3  , resLux1  , resLux2  , resLux3 ;
    all_types = [ "lite", "mini", "uni", "lux" ];
    all_mounts = [ "one", "two", "three" ];
    coefusd = 0.00668;
    dLite = [[0,0,0], [67383, 100082, 123932], [88690, 110890, 142190], [91198, 121998, 144198], [101006, 132656, 162606], [106214, 143464, 164764], [137621, 154421, 183021], [139229, 165079, 185179], [140237, 175737, 203437], [144245, 186695, 205595], [168110, 208460, 226010], [168110, 208460, 226010], [170276, 230076, 246726], [170276, 230076, 246726], [204742, 238342, 324692], [204742, 238342, 324692], [206757, 326857, 326857], [206757, 326857, 326857], [238373, 348473, 367923], [238373, 348473, 367923], [239388, 370088, 370088], [239388, 370088, 370088], [269004, 392004, 411354], [269004, 392004, 411354], [270370, 413470, 413470], [270370, 413470, 413470], [305635, 435085, 414385], [305635, 435085, 414385], [307652, 456701, 456701], [307652, 456701, 456701]];
    dMini = [[0,0,0], [148236, 210672, 250668], [152460, 218856, 262416], [156948, 227568, 274428], [161436, 235752, 286176], [165924, 244200, 298056], [170412, 252780, 309804], [178200, 266376, 327756], [182820, 274956, 340164], [190872, 289080, 359040], [195756, 297792, 371316], [199980, 306504, 383328], [201960, 310860, 390192], [205524, 317988, 400356], [209880, 326568, 412368], [214368, 335016, 424512], [218856, 343596, 436524], [163020, 234300, 281160], [167376, 242484, 292908], [171864, 251196, 304656], [176352, 259380, 316536], [180840, 267828, 328284], [185064, 276276, 340296], [193644, 290532, 358776], [201960, 304920, 378180], [208692, 316800, 394152], [212916, 325512, 406692], [217800, 334224, 419100], [220440, 340032, 427416], [224928, 348744, 439560], [226380, 352176, 445632], [229812, 359304, 455400], [234564, 367752, 467676], [178068, 257796, 311256], [182424, 266508, 323136], [186912, 274824, 334752], [191268, 283140, 346500], [195756, 291456, 358644], [199980, 300036, 370392], [208560, 314688, 389928], [217404, 329604, 409728], [224268, 341484, 425964], [228624, 350328, 438768], [233508, 359436, 451044], [235884, 364716, 458832], [240504, 373428, 471108], [241560, 376860, 476652], [244728, 383592, 486420], [249084, 392172, 498696], [192852, 281424, 341616], [197208, 289872, 353364], [201828, 298452, 365244], [206448, 306768, 376992], [210672, 315216, 388872], [215028, 323664, 400620], [223872, 338712, 420816], [232848, 354288, 441276], [239712, 366432, 457908], [244596, 375276, 470448], [249084, 384120, 482856], [251460, 389532, 490512], [256080, 398244, 502524], [257004, 400884, 507672], [259908, 407616, 517308], [264660, 416196, 529584], [207768, 305184, 371976], [212124, 313764, 383724], [216876, 322212, 395472], [221232, 330528, 407352], [225588, 339108, 419100], [229944, 347424, 430980], [239316, 363000, 451836], [243672, 371712, 463716], [253308, 387552, 484968], [257532, 396396, 497244], [262152, 405108, 509652], [266904, 413952, 521928], [267564, 416592, 526680], [271128, 423456, 535920], [275484, 431904, 547800], [280236, 440484, 559812], [222816, 328944, 402072], [227172, 337260, 413952], [231528, 345708, 425700], [236016, 354288, 437448], [240240, 362736, 449592], [244860, 371052, 461340], [254232, 387024, 482460], [259116, 395736, 494604], [263340, 404184, 506484], [273108, 421212, 528792], [277860, 429792, 541068], [278388, 432300, 545424], [281820, 438768, 555060], [286044, 447348, 567204], [290400, 455928, 579216], [295020, 464640, 591228], [237600, 352440, 432300], [242088, 360888, 444180], [246576, 369600, 456060], [250932, 377784, 467808], [255552, 386364, 479820], [259644, 394812, 491568], [264132, 403260, 503316], [268884, 411840, 515328], [273108, 420156, 527076], [277728, 428736, 538824], [282084, 436920, 550704], [286704, 445632, 562452], [291060, 453948, 574332], [295416, 462528, 586212], [299904, 470844, 597828], [304128, 479292, 609708], [252384, 376200, 462792], [257004, 384516, 474540], [261360, 393228, 486420], [266112, 401676, 498168], [270336, 410124, 509916], [274692, 418308, 521796], [279444, 427020, 533940], [283668, 435468, 545688], [288156, 443784, 557172], [292644, 452364, 569052], [297000, 460680, 581064], [301356, 469128, 592680], [305976, 477708, 604560], [310464, 486156, 616440], [315084, 494472, 628320], [319440, 503052, 640068], [267564, 399960, 493152], [271920, 408276, 504768], [276540, 416856, 516648], [280632, 425172, 528396], [285120, 433752, 540144], [289740, 441936, 552156], [294096, 450648, 563772], [298584, 458964, 575784], [303072, 467676, 587532], [307428, 475860, 599544], [311916, 484440, 611292], [316404, 493020, 623040], [320892, 501204, 634920], [325116, 509784, 646800], [329472, 518496, 658548], [333696, 526944, 670560], [282216, 423588, 523380], [286836, 431904, 534996], [291192, 440748, 547008], [295680, 448932, 558756], [300168, 457512, 570504], [304656, 465828, 582384], [308880, 474408, 594132], [313500, 482724, 606144], [317988, 491304, 618024], [322344, 499620, 629772], [326832, 508332, 641520], [331452, 516516, 653400], [335808, 524964, 665412], [340164, 533412, 677028], [344916, 541860, 688644], [349404, 550308, 700392], [297264, 447348, 553476], [301752, 455664, 565488], [306108, 463980, 577368], [310596, 472692, 589116], [315084, 480876, 600732], [319440, 489324, 612876], [323928, 498036, 624492], [328548, 506352, 636504], [333036, 514800, 648120], [337392, 523380, 660264], [341880, 531828, 671748], [346368, 540144, 683760], [350724, 548856, 695508], [355212, 557172, 707388], [359964, 565752, 719136], [364452, 574068, 731148]];
    dUni =  [[0,0,0], [175428, 241824, 298584], [184404, 255024, 315480], [193248, 268092, 332376], [202356, 281292, 349272], [211200, 294228, 366300], [220044, 307560, 383196], [233772, 327096, 408144], [247500, 347028, 433884], [259380, 364320, 455664], [266112, 374484, 468996], [270204, 380820, 477444], [279444, 393756, 494472], [288552, 407220, 511764], [297792, 420552, 529320], [197208, 272844, 337656], [206184, 286044, 354552], [214896, 299112, 371448], [224004, 312180, 388476], [232980, 325248, 405240], [241956, 338580, 422400], [260964, 365640, 456852], [272712, 383064, 479292], [282084, 396792, 496848], [291588, 410520, 514932], [298056, 420156, 527472], [307428, 433884, 545028], [310464, 438900, 551892], [319836, 452100, 569052], [218856, 303864, 376860], [227832, 316932, 393756], [236808, 330000, 410784], [245784, 343200, 427548], [254892, 356400, 444576], [263604, 369468, 461604], [283272, 397980, 497508], [295548, 415404, 520080], [305052, 429396, 538164], [314424, 442860, 555852], [323796, 456852, 573408], [329868, 466092, 585816], [332772, 470448, 591888], [341880, 483780, 608916], [240768, 334752, 416064], [249612, 347820, 432960], [258324, 361020, 450120], [267432, 374220, 466884], [276540, 387420, 483780], [285516, 400356, 500808], [300168, 421740, 528000], [315348, 443784, 555984], [328020, 461604, 579216], [337260, 475464, 555852], [343332, 484440, 608784], [352572, 498300, 626736], [354816, 501996, 631620], [364188, 515328, 648912], [262548, 365772, 455136], [271260, 378972, 472164], [280236, 392040, 488928], [289344, 405108, 505956], [298188, 418308, 522984], [307032, 431376, 540012], [322476, 453288, 567996], [338052, 475860, 596904], [347292, 489456, 614592], [356532, 503052, 596904], [365772, 516648, 649572], [367884, 520212, 654588], [377124, 533544, 671748], [386364, 547140, 688776], [284196, 396792, 494472], [293304, 409860, 511368], [302148, 422928, 528264], [310992, 436128, 545160], [320100, 449064, 562320], [328944, 462396, 579084], [344652, 484968, 607860], [353628, 498300, 625416], [362736, 511500, 642708], [379236, 535392, 672672], [381084, 538296, 677160], [390192, 551892, 694320], [399300, 565224, 711612], [408276, 578424, 728904], [305976, 427680, 533676], [314820, 440748, 550572], [323796, 453816, 567336], [332772, 467016, 584496], [341748, 480216, 601260], [350724, 493284, 618288], [359568, 506484, 635184], [368544, 519552, 652080], [377388, 532620, 669108], [386364, 545556, 686136], [395472, 558888, 702768], [404316, 571956, 720060], [413292, 585024, 736956], [422004, 598092, 753852], [327756, 458832, 572748], [336732, 471768, 589644], [345576, 484836, 606672], [354552, 498168, 623568], [363528, 511104, 640596], [372504, 524304, 657492], [381348, 537372, 674520], [390192, 550572, 691284], [399300, 563508, 708312], [408276, 576708, 725340], [417252, 589644, 741972], [425964, 602844, 759000], [434940, 616044, 776028], [443784, 628980, 792924], [349536, 489720, 611952], [358380, 503052, 628848], [367356, 515856, 646008], [376200, 528924, 662640], [385044, 542256, 679668], [394152, 555192, 696828], [403128, 568392, 713592], [411972, 581328, 730488], [420948, 594528, 747252], [429792, 607596, 764412], [438768, 620796, 781176], [447744, 633732, 798072], [456588, 646932, 815364], [465696, 660000, 832128], [371316, 520872, 651288], [380160, 533940, 668184], [389004, 547008, 684948], [397980, 559944, 701976], [406956, 573012, 718872], [415932, 586212, 735900], [424908, 599280, 752664], [434016, 612348, 769692], [442464, 625416, 786456], [451572, 638484, 803484], [460416, 651552, 820380], [469392, 664752, 837540], [478500, 677820, 854304], [487344, 690888, 871332], [392832, 551760, 690228], [401808, 564828, 706992], [410916, 578028, 724152], [419628, 590964, 741048], [428604, 603900, 757944], [437580, 617100, 774972], [446688, 630300, 791868], [455400, 643236, 808764], [464376, 656304, 825660], [473352, 669636, 842820], [482328, 682572, 859584], [491304, 695772, 876480], [500280, 708708, 893640], [508992, 721776, 910404], [414744, 582648, 729696], [423720, 595848, 746460], [432564, 608916, 763356], [441540, 621984, 780384], [450384, 635052, 797148], [459492, 648120, 814308], [468204, 661188, 831072], [477180, 674256, 847968], [486288, 687324, 864864], [495000, 700392, 881892], [503976, 713592, 898788], [512952, 726660, 915684], [521796, 739596, 932580], [530772, 752796, 949740]];
    dLux =  [[0,0,0], [243540, 287628, 375936], [250008, 304260, 407748], [256344, 326436, 439560], [269148, 348480, 471372], [275616, 370656, 503316], [314160, 414876, 567072], [320364, 437052, 598752], [333300, 459228, 630828], [339768, 481272, 662508], [352440, 503448, 694452], [358908, 519816, 726264], [262812, 315348, 420420], [269148, 337392, 452232], [282084, 359568, 484308], [288420, 381744, 516120], [294756, 403920, 547932], [339768, 453552, 618024], [345972, 475728, 649836], [358908, 492360, 681780], [365244, 514404, 713460], [378180, 536580, 751740], [384516, 558756, 783552], [282084, 342936, 458700], [288420, 365112, 490512], [301224, 387288, 528792], [307560, 409332, 560604], [320364, 431508, 592548], [365244, 486816, 662508], [371712, 508992, 700788], [384516, 531036, 732732], [390984, 553080, 764412], [403656, 575256, 802692], [410124, 597432, 834636], [301224, 376068, 496980], [307560, 398244, 535260], [326832, 428868, 578424], [339900, 460284, 629508], [353232, 483252, 662508], [398772, 530376, 727716], [405240, 552948, 760320], [418308, 581064, 799260], [425040, 603768, 831732], [437976, 626340, 870804], [444444, 648912, 903276], [320364, 403920, 541596], [333300, 425964, 573408], [346500, 456984, 623832], [366564, 488928, 675840], [377520, 507804, 695376], [425040, 569844, 779724], [431376, 592416, 812328], [444444, 614988, 851400], [450912, 637560, 883740], [464112, 660132, 922680], [470580, 688380, 961752], [339768, 431508, 579876], [352440, 453552, 618024], [366168, 490908, 669240], [379104, 513480, 701976], [393360, 546480, 755304], [444444, 603768, 825264], [457776, 626340, 864336], [470580, 654588, 903276], [477312, 676896, 935748], [490380, 699600, 974688], [496848, 722172, 1013760], [358908, 464640, 624228], [371712, 486816, 662508], [385704, 519024, 708312], [398772, 547272, 747384], [411840, 569844, 786324], [479952, 650232, 894432], [483648, 665808, 916212], [496848, 688380, 955284], [503184, 716496, 994356], [516384, 739200, 1026696], [522984, 761640, 1065636], [378180, 492360, 662508], [390984, 514404, 700788], [411840, 552948, 753852], [418308, 575652, 792792], [439824, 615648, 848100], [506616, 690360, 947364], [509916, 699600, 968220], [522984, 727848, 1007160], [529584, 750288, 1046232], [542520, 778536, 1078836], [549120, 801240, 1117644], [403656, 519816, 707256], [410124, 547668, 745404], [431376, 581064, 799260], [444444, 609444, 838332], [450912, 631884, 877140], [522984, 710952, 974688], [546480, 753720, 1033560], [542520, 761640, 1059300], [555720, 789888, 1098372], [568656, 812460, 1137180], [575256, 840576, 1176252], [422796, 547668, 745404], [429528, 575256, 783552], [450912, 614988, 844800], [464112, 637560, 883740], [479952, 678876, 940896], [549120, 750288, 1026696], [562188, 773124, 1065636], [568656, 801240, 1104576], [581856, 823680, 1150248], [594924, 851928, 1189188], [607992, 880176, 1228260], [442200, 580932, 790020], [448668, 602976, 828168], [470580, 643236, 883740], [493020, 684552, 947364], [506616, 713460, 987096], [575256, 784344, 1078836], [588192, 812460, 1117644], [606672, 851400, 1179288], [607992, 863280, 1202256], [620928, 891396, 1241196], [633996, 919776, 1280268], [461340, 608520, 828168], [474144, 636240, 872916], [490380, 676896, 929148], [513084, 719136, 987096], [516384, 727848, 1013760], [601260, 818136, 1124112], [614460, 846252, 1169652], [620928, 874500, 1208592], [633996, 902748, 1254132], [647196, 930864, 1293072], [660264, 953568, 1338612], [480612, 636240, 872916], [493416, 663696, 910932], [516384, 705276, 974688], [522984, 733524, 1013760], [535920, 761640, 1059300], [627528, 857472, 1176252], [633996, 885720, 1221792], [647196, 908424, 1260600], [660264, 936672, 1306140], [673332, 964788, 1345080], [686400, 992904, 1390620], [499884, 669372, 910932], [512688, 696828, 955548], [525492, 724680, 993828], [538296, 752268, 1038576], [544764, 779988, 1082928], [640860, 873840, 1204104], [647328, 901692, 1242384], [660000, 929280, 1286868], [673068, 957000, 1331616], [685740, 984456, 1369764], [698544, 1012308, 1414248], [602316, 768900, 1031976], [615252, 796488, 1076724], [628056, 824076, 1121208], [640860, 851796, 1165824], [653664, 879516, 1210440], [660000, 907104, 1248720], [673068, 934956, 1293336], [685740, 967956, 1337820], [698544, 995676, 1382568], [711348, 1023396, 1426920], [724152, 1050852, 1465200], [628056, 802164, 1076724], [640860, 829752, 1121208], [653664, 857340, 1165824], [666468, 885060, 1210440], [673068, 918192, 1255056], [685740, 945912, 1299672], [698544, 973500, 1344288], [711348, 1001088, 1388772], [724152, 1028808, 1433520], [736956, 1056528, 1478004], [749892, 1089792, 1522620], [653664, 835296, 1127676], [660000, 863016, 1165824], [673068, 890472, 1210440], [685740, 912780, 1248720], [698544, 940368, 1293336], [704880, 967956, 1331616], [717684, 995676, 1369764], [730620, 1023396, 1414248], [743424, 1045440, 1452528], [756228, 1073028, 1497144], [762564, 1100748, 1535424], [673068, 868428, 1172160], [685740, 896016, 1210440], [698544, 918192, 1248720], [704880, 940368, 1286868], [717684, 967956, 1325148], [730620, 990132, 1363296], [736956, 1017720, 1401576], [749892, 1040028, 1439724], [756228, 1067484, 1478004], [768900, 1089792, 1516284], [781704, 1117380, 1554564], [698544, 901692, 1223244], [711348, 923736, 1255056], [717684, 945912, 1293336], [730620, 967956, 1325148], [736956, 995676, 1356960], [749892, 1017720, 1395240], [756228, 1040028, 1426920], [768900, 1062072, 1465200], [775500, 1084116, 1497144], [788304, 1106292, 1535424], [794640, 1128336, 1567236], [724152, 934956, 1267728], [730620, 957000, 1299672], [743424, 979176, 1331616], [749892, 995676, 1363296], [756228, 1017720, 1395240], [768900, 1040028, 1426920], [775500, 1062072, 1458996], [788304, 1078704, 1490676], [794640, 1100748, 1522620], [801108, 1122924, 1554564], [813912, 1139556, 1579908], [749892, 973500, 1312344], [756228, 990132, 1344288], [762564, 1006764, 1369764], [768900, 1028808, 1401576], [781704, 1045440, 1426920], [788304, 1062072, 1458996], [794640, 1084116, 1484472], [801108, 1100748, 1516284], [813912, 1117380, 1541628], [820248, 1139556, 1567236], [826716, 1156188, 1599048], [775500, 1006764, 1363296], [781704, 1023396, 1388772], [788304, 1040028, 1414248], [794640, 1056528, 1439724], [801108, 1073028, 1465200], [807444, 1089792, 1490676], [813912, 1100748, 1516284], [820248, 1117380, 1535424], [826716, 1134012, 1560768], [833052, 1150512, 1586376], [839520, 1167144, 1611720], [794640, 1040028, 1407912], [801108, 1050852, 1433520], [807444, 1067484, 1452528], [813912, 1084116, 1478004], [820248, 1095072, 1497144], [826716, 1111836, 1516284], [833052, 1122924, 1541628], [839520, 1139556, 1560768], [845988, 1156188, 1586376], [852324, 1167144, 1605516], [858792, 1183776, 1630860], [820248, 1073028, 1458996], [826716, 1084116, 1478004], [833052, 1095072, 1497144], [839520, 1111836, 1509816], [839520, 1122924, 1528956], [845988, 1134012, 1548096], [852324, 1144836, 1567236], [858792, 1161468, 1586376], [865128, 1172688, 1605516], [871596, 1183776, 1624524], [871596, 1194600, 1643664], [845988, 1106292, 1503480], [852324, 1117380, 1516284], [852324, 1128336, 1535424], [858792, 1139556, 1548096], [865128, 1150512, 1567236], [865128, 1156188, 1579908], [871596, 1167144, 1599048], [878064, 1178100, 1611720], [878064, 1189320, 1630860], [884268, 1200408, 1643664], [890868, 1211364, 1662804], [871596, 1139556, 1548096], [871596, 1150512, 1560768], [878064, 1156188, 1573440], [878064, 1167144, 1586376], [884268, 1172688, 1599048], [890868, 1183776, 1611720], [890868, 1189320, 1624524], [897204, 1200408, 1637328], [897204, 1205820, 1650000], [903540, 1216908, 1662804], [903540, 1222320, 1675476]];
    function findIndexLite(h, w) {
        var indx, ՐՏ_Temp;
        indx=0;
        h+=10;
        w+=7;
        if (h < 161 && w < 181 && w > 39) {
            indx = Math.ceil(w / 5) - 8 +1;
        }
        return indx;
    }
    function findIndexMini(h, w) {
        var indx, ՐՏ_Temp;
        indx=0;
        h+=15;
        w+=3;
        if (49 < h && h < 201) {
            indx = (Math.ceil(w / 10) - 4) * 16  + Math.ceil(h / 10) - 5 + 1;
        }
        return indx;
    }
    function findIndexUni(h, w) {
        var indx, ՐՏ_Temp;
        indx=0;
        w+=3;
        if (49 < h && h < 181) {
            indx = (Math.ceil(w / 10) - 4) * 14  + Math.ceil(h / 10) - 5 + 1;
        }
        return indx;
    }
    function findIndexLux(h, w) {
        var indx, ՐՏ_Temp;
        indx=0;
        h+=15;
        w+=3;
        if (99 < h && h < 301) {
            indx = (Math.ceil(w / 10) - 5) * 11 + Math.ceil(h / 20) - 5 + 1;
        }
        return indx;
    }
    function SubRes(h, w) {

      var iLite, iMini, iUni, iLux,
          subResLite1, subResLite2, subResLite3,
          subResMini1, subResMini2, subResMini3,
          subResUni1,  subResUni2,  subResUni3,
          subResLux1,  subResLux2,  subResLux3,
          subResultArray            ;

      iLite = findIndexLite(h, w)   ;
      iMini = findIndexMini(h, w)   ;
      iUni =  findIndexUni( h, w)   ;
      iLux =  findIndexLux( h, w)   ;

      subResLite1 = dLite[iLite][0] ;
      subResLite2 = dLite[iLite][1] ;
      subResLite3 = dLite[iLite][2] ;

      subResMini1 = dMini[iMini][0] ;
      subResMini2 = dMini[iMini][1] ;
      subResMini3 = dMini[iMini][2] ;

      subResUni1 = dUni[iUni][0]    ;
      subResUni2 = dUni[iUni][1]    ;
      subResUni3 = dUni[iUni][2]    ;

      subResLux1 = dLux[iLux][0]    ;
      subResLux2 = dLux[iLux][1]    ;
      subResLux3 = dLux[iLux][2]    ;

      subResultArray = {'Lite':[ subResLite1, subResLite2, subResLite3 ],
                        'Mini':[ subResMini1, subResMini2, subResMini3 ],
                        'Uni': [ subResUni1,  subResUni2,  subResUni3  ],
                        'Lux': [ subResLux1,  subResLux2,  subResLux3  ],
      } ;
      return subResultArray         ;
    }
    function TotalizePane(h, w){
      var subresLite1,subresLite2,subresLite3,
          subresMini1,subresMini2,subresMini3,
          subresUni1,subresUni2,subresUni3,
          subresLux1,subresLux2,subresLux3,
          gotSubRes                      ;

      gotSubRes = SubRes(h,w);

      subresLite1 = gotSubRes.Lite[0];
      subresLite2 = gotSubRes.Lite[1];
      subresLite3 = gotSubRes.Lite[2];
      subresMini1 = gotSubRes.Mini[0];
      subresMini2 = gotSubRes.Mini[1];
      subresMini3 = gotSubRes.Mini[2];
      subresUni1  = gotSubRes.Uni[0];
      subresUni2  = gotSubRes.Uni[1];
      subresUni3  = gotSubRes.Uni[2];
      subresLux1  = gotSubRes.Lux[0];
      subresLux2  = gotSubRes.Lux[1];
      subresLux3  = gotSubRes.Lux[2];

      sresLite1 =  subresLite1 * coefusd;
      sresLite2 =  subresLite2 * coefusd;
      sresLite3 =  subresLite3 * coefusd;
      sresMini1 =  subresMini1 * coefusd;
      sresMini2 =  subresMini2 * coefusd;
      sresMini3 =  subresMini3 * coefusd;
      sresUni1  =  subresUni1  * coefusd;
      sresUni2  =  subresUni2  * coefusd;
      sresUni3  =  subresUni3  * coefusd;
      sresLux1  =  subresLux1  * coefusd;
      sresLux2  =  subresLux2  * coefusd;
      sresLux3  =  subresLux3  * coefusd;

      console.log( resLite1 , resLite2 , resLite3 , resMini1 , resMini2 , resMini3 , resUni1  , resUni2  , resUni3  , resLux1  , resLux2  , resLux3 );
      console.log( resLite1 , resLite2 , resLite3 , resMini1 , resMini2 , resMini3 , resUni1  , resUni2  , resUni3  , resLux1  , resLux2  , resLux3 );

      resLite1 += sresLite1            ;
      resLite2 += sresLite2            ;
      resLite3 += sresLite3            ;
      resMini1 += sresMini1            ;
      resMini2 += sresMini2            ;
      resMini3 += sresMini3            ;
      resUni1  += sresUni1             ;
      resUni2  += sresUni2             ;
      resUni3  += sresUni3             ;
      resLux1  += sresLux1             ;
      resLux2  += sresLux2             ;
      resLux3  += sresLux3             ;
      return                           ;
      }
    function renderPrices() {

      strLite1 = accounting.formatMoney(resLite1 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strLite2 = accounting.formatMoney(resLite2 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strLite3 = accounting.formatMoney(resLite3 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strMini1 = accounting.formatMoney(resMini1 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strMini2 = accounting.formatMoney(resMini2 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strMini3 = accounting.formatMoney(resMini3 , "₽", 0 , " " , "." , "%v %s"  ) ;
      strUni1  = accounting.formatMoney(resUni1  , "₽", 0 , " " , "." , "%v %s"  ) ;
      strUni2  = accounting.formatMoney(resUni2  , "₽", 0 , " " , "." , "%v %s"  ) ;
      strUni3  = accounting.formatMoney(resUni3  , "₽", 0 , " " , "." , "%v %s"  ) ;
      strLux1  = accounting.formatMoney(resLux1  , "₽", 0 , " " , "." , "%v %s"  ) ;
      strLux2  = accounting.formatMoney(resLux2  , "₽", 0 , " " , "." , "%v %s"  ) ;
      strLux3  = accounting.formatMoney(resLux3  , "₽", 0 , " " , "." , "%v %s"  ) ;

      document.getElementById("PriceLite_1").innerHTML = strLite1;
      document.getElementById("PriceLite_2").innerHTML = strLite2;
      document.getElementById("PriceLite_3").innerHTML = strLite3;

      document.getElementById("PriceMini_1").innerHTML = strMini1;
      document.getElementById("PriceMini_2").innerHTML = strMini2;
      document.getElementById("PriceMini_3").innerHTML = strMini3;

      document.getElementById("PriceUni_1").innerHTML  = strUni1;
      document.getElementById("PriceUni_2").innerHTML  = strUni2;
      document.getElementById("PriceUni_3").innerHTML  = strUni3;

      document.getElementById("PriceLux_1").innerHTML  = strLux1;
      document.getElementById("PriceLux_2").innerHTML  = strLux2;
      document.getElementById("PriceLux_3").innerHTML  = strLux3;
    }

/*/
    var resLite1 , resLite2 , resLite3 , resMini1 , resMini2 , resMini3 , resUni1  , resUni2  , resUni3  , resLux1  , resLux2  , resLux3  ,
/*/
  function TheReCalcJS() {
    h1         = 0;
    h2         = 0;
    h3         = 0;
    h4         = 0;
    w1         = 0;
    w2         = 0;
    w3         = 0;
    w4         = 0;
    hei1       = 0;
    hei2       = 0;
    hei3       = 0;
    hei4       = 0;
    wid1       = 0;
    wid2       = 0;
    wid3       = 0;
    wid4       = 0;
    resLite1   = 0;
    resLite2   = 0;
    resLite3   = 0;
    resMini1   = 0;
    resMini2   = 0;
    resMini3   = 0;
    resUni1    = 0;
    resUni2    = 0;
    resUni3    = 0;
    resLux1    = 0;
    resLux2    = 0;
    resLux3    = 0;

    hei1 = document.getElementById("height_1").value;
    wid1 = document.getElementById("width_1").value;
    hei2 = document.getElementById("height_2").value;
    wid2 = document.getElementById("width_2").value;
    hei3 = document.getElementById("height_3").value;
    wid3 = document.getElementById("width_3").value;
    hei4 = document.getElementById("height_4").value;
    wid4 = document.getElementById("width_4").value;

    h1 = hei1/10;
    w1 = wid1/10;
    h2 = hei2/10;
    w2 = wid2/10;
    h3 = hei3/10;
    w3 = wid3/10;
    h4 = hei4/10;
    w4 = wid4/10;

    if ($('#MntThreeTab').hasClass('active')) {
      console.log('M3');
      w1+=12;
    }
    TotalizePane(h1, w1);
    if ($('#MntOneTab').hasClass('active')) {
      if ($('#win2b').hasClass('active')) {
        TotalizePane(h2, w2);

      }
      if ($('#win3b').hasClass('active')) {
          TotalizePane(h2, w2);
          TotalizePane(h3, w3);

      }
      if ($('#win4b').hasClass('active')) {
          TotalizePane(h2, w2);
          TotalizePane(h3, w3);
          TotalizePane(h4, w4);
      }
    }
    renderPrices();
  }
    TheReCalcJS();
    $(".wid_hei_input").on("change", function() {
      TheReCalcJS();
    });
  $("#MntOneTab").on("click", function() {
      TheReCalcJS();
  });
  $("#MntTwoTab").on("click", function() {
      TheReCalcJS();
  });
  $("#MntThreeTab").on("click", function() {
      TheReCalcJS();
  });
  $("#win1b").on("click", function() {
      TheReCalcJS();
  });
  $("#win2b").on("click", function() {
      TheReCalcJS();
  });
  $("#win3b").on("click", function() {
      TheReCalcJS();
  });
  $("#win4b").on("click", function() {
      TheReCalcJS();
  });
});

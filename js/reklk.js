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
    all_types = [ "lite", "mini", "uni", "lux" ];
    all_mounts = [ "one", "two", "three" ];
    coefusd = 0.00668;
    dMini = [ [ 148236, 210672, 210672 ], [ 152460, 218856, 218856 ], [ 156948, 227568, 227568 ], [ 161436, 235752, 235752 ], [ 165924, 244200, 244200 ], [ 170412, 252780, 252780 ], [ 178200, 266376, 266376 ], [ 182820, 274956, 274956 ], [ 190872, 289080, 289080 ], [ 195756, 297792, 297792 ], [ 199980, 306504, 306504 ], [ 201960, 310860, 310860 ], [ 205524, 317988, 317988 ], [ 209880, 326568, 326568 ], [ 214368, 335016, 335016 ], [ 218856, 343596, 343596 ], [ 163020, 234300, 234300 ], [ 167376, 242484, 242484 ], [ 171864, 251196, 251196 ], [ 176352, 259380, 259380 ], [ 180840, 267828, 267828 ], [ 185064, 276276, 276276 ], [ 193644, 290532, 290532 ], [ 201960, 304920, 304920 ], [ 208692, 316800, 316800 ], [ 212916, 325512, 325512 ], [ 217800, 334224, 334224 ], [ 220440, 340032, 340032 ], [ 224928, 348744, 348744 ], [ 226380, 352176, 352176 ], [ 229812, 359304, 359304 ], [ 234564, 367752, 367752 ], [ 178068, 257796, 257796 ], [ 182424, 266508, 266508 ], [ 186912, 274824, 274824 ], [ 191268, 283140, 283140 ], [ 195756, 291456, 291456 ], [ 199980, 300036, 300036 ], [ 208560, 314688, 314688 ], [ 217404, 329604, 329604 ], [ 224268, 341484, 341484 ], [ 228624, 350328, 350328 ], [ 233508, 359436, 359436 ], [ 235884, 364716, 364716 ], [ 240504, 373428, 373428 ], [ 241560, 376860, 376860 ], [ 244728, 383592, 383592 ], [ 249084, 392172, 392172 ], [ 192852, 281424, 281424 ], [ 197208, 289872, 289872 ], [ 201828, 298452, 298452 ], [ 206448, 306768, 306768 ], [ 210672, 315216, 315216 ], [ 215028, 323664, 323664 ], [ 223872, 338712, 338712 ], [ 232848, 354288, 354288 ], [ 239712, 366432, 366432 ], [ 244596, 375276, 375276 ], [ 249084, 384120, 384120 ], [ 251460, 389532, 389532 ], [ 256080, 398244, 398244 ], [ 257004, 400884, 400884 ], [ 259908, 407616, 407616 ], [ 264660, 416196, 416196 ], [ 207768, 305184, 305184 ], [ 212124, 313764, 313764 ], [ 216876, 322212, 322212 ], [ 221232, 330528, 330528 ], [ 225588, 339108, 339108 ], [ 229944, 347424, 347424 ], [ 239316, 363e3, 363e3 ], [ 243672, 371712, 371712 ], [ 253308, 387552, 387552 ], [ 257532, 396396, 396396 ], [ 262152, 405108, 405108 ], [ 266904, 413952, 413952 ], [ 267564, 416592, 416592 ], [ 271128, 423456, 423456 ], [ 275484, 431904, 431904 ], [ 280236, 440484, 440484 ], [ 222816, 328944, 328944 ], [ 227172, 337260, 337260 ], [ 231528, 345708, 345708 ], [ 236016, 354288, 354288 ], [ 240240, 362736, 362736 ], [ 244860, 371052, 371052 ], [ 254232, 387024, 387024 ], [ 259116, 395736, 395736 ], [ 263340, 404184, 404184 ], [ 273108, 421212, 421212 ], [ 277860, 429792, 429792 ], [ 278388, 432300, 432300 ], [ 281820, 438768, 438768 ], [ 286044, 447348, 447348 ], [ 290400, 455928, 455928 ], [ 295020, 464640, 464640 ], [ 237600, 352440, 352440 ], [ 242088, 360888, 360888 ], [ 246576, 369600, 369600 ], [ 250932, 377784, 377784 ], [ 255552, 386364, 386364 ], [ 259644, 394812, 394812 ], [ 264132, 403260, 403260 ], [ 268884, 411840, 411840 ], [ 273108, 420156, 420156 ], [ 277728, 428736, 428736 ], [ 282084, 436920, 436920 ], [ 286704, 445632, 445632 ], [ 291060, 453948, 453948 ], [ 295416, 462528, 462528 ], [ 299904, 470844, 470844 ], [ 304128, 479292, 479292 ], [ 252384, 376200, 376200 ], [ 257004, 384516, 384516 ], [ 261360, 393228, 393228 ], [ 266112, 401676, 401676 ], [ 270336, 410124, 410124 ], [ 274692, 418308, 418308 ], [ 279444, 427020, 427020 ], [ 283668, 435468, 435468 ], [ 288156, 443784, 443784 ], [ 292644, 452364, 452364 ], [ 297e3, 460680, 460680 ], [ 301356, 469128, 469128 ], [ 305976, 477708, 477708 ], [ 310464, 486156, 486156 ], [ 315084, 494472, 494472 ], [ 319440, 503052, 503052 ], [ 267564, 399960, 399960 ], [ 271920, 408276, 408276 ], [ 276540, 416856, 416856 ], [ 280632, 425172, 425172 ], [ 285120, 433752, 433752 ], [ 289740, 441936, 441936 ], [ 294096, 450648, 450648 ], [ 298584, 458964, 458964 ], [ 303072, 467676, 467676 ], [ 307428, 475860, 475860 ], [ 311916, 484440, 484440 ], [ 316404, 493020, 493020 ], [ 320892, 501204, 501204 ], [ 325116, 509784, 509784 ], [ 329472, 518496, 518496 ], [ 333696, 526944, 526944 ], [ 282216, 423588, 423588 ], [ 286836, 431904, 431904 ], [ 291192, 440748, 440748 ], [ 295680, 448932, 448932 ], [ 300168, 457512, 457512 ], [ 304656, 465828, 465828 ], [ 308880, 474408, 474408 ], [ 313500, 482724, 482724 ], [ 317988, 491304, 491304 ], [ 322344, 499620, 499620 ], [ 326832, 508332, 508332 ], [ 331452, 516516, 516516 ], [ 335808, 524964, 524964 ], [ 340164, 533412, 533412 ], [ 344916, 541860, 541860 ], [ 349404, 550308, 550308 ], [ 297264, 447348, 447348 ], [ 301752, 455664, 455664 ], [ 306108, 463980, 463980 ], [ 310596, 472692, 472692 ], [ 315084, 480876, 480876 ], [ 319440, 489324, 489324 ], [ 323928, 498036, 498036 ], [ 328548, 506352, 506352 ], [ 333036, 514800, 514800 ], [ 337392, 523380, 523380 ], [ 341880, 531828, 531828 ], [ 346368, 540144, 540144 ], [ 350724, 548856, 548856 ], [ 355212, 557172, 557172 ], [ 359964, 565752, 565752 ], [ 364452, 574068, 574068 ] ];
    dUni = [ [ 175428, 241824, 241824 ], [ 184404, 255024, 255024 ], [ 193248, 268092, 268092 ], [ 202356, 281292, 281292 ], [ 211200, 294228, 294228 ], [ 220044, 307560, 307560 ], [ 233772, 327096, 327096 ], [ 247500, 347028, 347028 ], [ 259380, 364320, 364320 ], [ 266112, 374484, 374484 ], [ 270204, 380820, 380820 ], [ 279444, 393756, 393756 ], [ 288552, 407220, 407220 ], [ 297792, 420552, 420552 ], [ 197208, 272844, 272844 ], [ 206184, 286044, 286044 ], [ 214896, 299112, 299112 ], [ 224004, 312180, 312180 ], [ 232980, 325248, 325248 ], [ 241956, 338580, 338580 ], [ 260964, 365640, 365640 ], [ 272712, 383064, 383064 ], [ 282084, 396792, 396792 ], [ 291588, 410520, 410520 ], [ 298056, 420156, 420156 ], [ 307428, 433884, 433884 ], [ 310464, 438900, 438900 ], [ 319836, 452100, 452100 ], [ 218856, 303864, 303864 ], [ 227832, 316932, 316932 ], [ 236808, 33e4, 33e4 ], [ 245784, 343200, 343200 ], [ 254892, 356400, 356400 ], [ 263604, 369468, 369468 ], [ 283272, 397980, 397980 ], [ 295548, 415404, 415404 ], [ 305052, 429396, 429396 ], [ 314424, 442860, 442860 ], [ 323796, 456852, 456852 ], [ 329868, 466092, 466092 ], [ 332772, 470448, 470448 ], [ 341880, 483780, 483780 ], [ 240768, 334752, 334752 ], [ 249612, 347820, 347820 ], [ 258324, 361020, 361020 ], [ 267432, 374220, 374220 ], [ 276540, 387420, 387420 ], [ 285516, 400356, 400356 ], [ 300168, 421740, 421740 ], [ 315348, 443784, 443784 ], [ 328020, 461604, 461604 ], [ 337260, 475464, 475464 ], [ 343332, 484440, 484440 ], [ 352572, 498300, 498300 ], [ 354816, 501996, 501996 ], [ 364188, 515328, 515328 ], [ 262548, 365772, 365772 ], [ 271260, 378972, 378972 ], [ 280236, 392040, 392040 ], [ 289344, 405108, 405108 ], [ 298188, 418308, 418308 ], [ 307032, 431376, 431376 ], [ 322476, 453288, 453288 ], [ 338052, 475860, 475860 ], [ 347292, 489456, 489456 ], [ 356532, 503052, 503052 ], [ 365772, 516648, 516648 ], [ 367884, 520212, 520212 ], [ 377124, 533544, 533544 ], [ 386364, 547140, 547140 ], [ 284196, 396792, 396792 ], [ 293304, 409860, 409860 ], [ 302148, 422928, 422928 ], [ 310992, 436128, 436128 ], [ 320100, 449064, 449064 ], [ 328944, 462396, 462396 ], [ 344652, 484968, 484968 ], [ 353628, 498300, 498300 ], [ 362736, 511500, 511500 ], [ 379236, 535392, 535392 ], [ 381084, 538296, 538296 ], [ 390192, 551892, 551892 ], [ 399300, 565224, 565224 ], [ 408276, 578424, 578424 ], [ 305976, 427680, 427680 ], [ 314820, 440748, 440748 ], [ 323796, 453816, 453816 ], [ 332772, 467016, 467016 ], [ 341748, 480216, 480216 ], [ 350724, 493284, 493284 ], [ 359568, 506484, 506484 ], [ 368544, 519552, 519552 ], [ 377388, 532620, 532620 ], [ 386364, 545556, 545556 ], [ 395472, 558888, 558888 ], [ 404316, 571956, 571956 ], [ 413292, 585024, 585024 ], [ 422004, 598092, 598092 ], [ 327756, 458832, 458832 ], [ 336732, 471768, 471768 ], [ 345576, 484836, 484836 ], [ 354552, 498168, 498168 ], [ 363528, 511104, 511104 ], [ 372504, 524304, 524304 ], [ 381348, 537372, 537372 ], [ 390192, 550572, 550572 ], [ 399300, 563508, 563508 ], [ 408276, 576708, 576708 ], [ 417252, 589644, 589644 ], [ 425964, 602844, 602844 ], [ 434940, 616044, 616044 ], [ 443784, 628980, 628980 ], [ 349536, 489720, 489720 ], [ 358380, 503052, 503052 ], [ 367356, 515856, 515856 ], [ 376200, 528924, 528924 ], [ 385044, 542256, 542256 ], [ 394152, 555192, 555192 ], [ 403128, 568392, 568392 ], [ 411972, 581328, 581328 ], [ 420948, 594528, 594528 ], [ 429792, 607596, 607596 ], [ 438768, 620796, 620796 ], [ 447744, 633732, 633732 ], [ 456588, 646932, 646932 ], [ 465696, 66e4, 66e4 ], [ 371316, 520872, 520872 ], [ 380160, 533940, 533940 ], [ 389004, 547008, 547008 ], [ 397980, 559944, 559944 ], [ 406956, 573012, 573012 ], [ 415932, 586212, 586212 ], [ 424908, 599280, 599280 ], [ 434016, 612348, 612348 ], [ 442464, 625416, 625416 ], [ 451572, 638484, 638484 ], [ 460416, 651552, 651552 ], [ 469392, 664752, 664752 ], [ 478500, 677820, 677820 ], [ 487344, 690888, 690888 ], [ 392832, 551760, 551760 ], [ 401808, 564828, 564828 ], [ 410916, 578028, 578028 ], [ 419628, 590964, 590964 ], [ 428604, 603900, 603900 ], [ 437580, 617100, 617100 ], [ 446688, 630300, 630300 ], [ 455400, 643236, 643236 ], [ 464376, 656304, 656304 ], [ 473352, 669636, 669636 ], [ 482328, 682572, 682572 ], [ 491304, 695772, 695772 ], [ 500280, 708708, 708708 ], [ 508992, 721776, 721776 ], [ 414744, 582648, 582648 ], [ 423720, 595848, 595848 ], [ 432564, 608916, 608916 ], [ 441540, 621984, 621984 ], [ 450384, 635052, 635052 ], [ 459492, 648120, 648120 ], [ 468204, 661188, 661188 ], [ 477180, 674256, 674256 ], [ 486288, 687324, 687324 ], [ 495e3, 700392, 700392 ], [ 503976, 713592, 713592 ], [ 512952, 726660, 726660 ], [ 521796, 739596, 739596 ], [ 530772, 752796, 752796 ] ];
    dLux = [ [ 243540, 287628, 287628 ], [ 250008, 304260, 304260 ], [ 256344, 326436, 326436 ], [ 269148, 348480, 348480 ], [ 275616, 370656, 370656 ], [ 314160, 414876, 414876 ], [ 320364, 437052, 437052 ], [ 333300, 459228, 459228 ], [ 339768, 481272, 481272 ], [ 352440, 503448, 503448 ], [ 358908, 519816, 519816 ], [ 262812, 315348, 315348 ], [ 269148, 337392, 337392 ], [ 282084, 359568, 359568 ], [ 288420, 381744, 381744 ], [ 294756, 403920, 403920 ], [ 339768, 453552, 453552 ], [ 345972, 475728, 475728 ], [ 358908, 492360, 492360 ], [ 365244, 514404, 514404 ], [ 378180, 536580, 536580 ], [ 384516, 558756, 558756 ], [ 282084, 342936, 342936 ], [ 288420, 365112, 365112 ], [ 301224, 387288, 387288 ], [ 307560, 409332, 409332 ], [ 320364, 431508, 431508 ], [ 365244, 486816, 486816 ], [ 371712, 508992, 508992 ], [ 384516, 531036, 531036 ], [ 390984, 553080, 553080 ], [ 403656, 575256, 575256 ], [ 410124, 597432, 597432 ], [ 301224, 376068, 376068 ], [ 307560, 398244, 398244 ], [ 326832, 428868, 428868 ], [ 339900, 460284, 460284 ], [ 353232, 483252, 483252 ], [ 398772, 530376, 530376 ], [ 405240, 552948, 552948 ], [ 418308, 581064, 581064 ], [ 425040, 603768, 603768 ], [ 437976, 626340, 626340 ], [ 444444, 648912, 648912 ], [ 320364, 403920, 403920 ], [ 333300, 425964, 425964 ], [ 346500, 456984, 456984 ], [ 366564, 488928, 488928 ], [ 377520, 507804, 507804 ], [ 425040, 569844, 569844 ], [ 431376, 592416, 592416 ], [ 444444, 614988, 614988 ], [ 450912, 637560, 637560 ], [ 464112, 660132, 660132 ], [ 470580, 688380, 688380 ], [ 339768, 431508, 431508 ], [ 352440, 453552, 453552 ], [ 366168, 490908, 490908 ], [ 379104, 513480, 513480 ], [ 393360, 546480, 546480 ], [ 444444, 603768, 603768 ], [ 457776, 626340, 626340 ], [ 470580, 654588, 654588 ], [ 477312, 676896, 676896 ], [ 490380, 699600, 699600 ], [ 496848, 722172, 722172 ], [ 358908, 464640, 464640 ], [ 371712, 486816, 486816 ], [ 385704, 519024, 519024 ], [ 398772, 547272, 547272 ], [ 411840, 569844, 569844 ], [ 479952, 650232, 650232 ], [ 483648, 665808, 665808 ], [ 496848, 688380, 688380 ], [ 503184, 716496, 716496 ], [ 516384, 739200, 739200 ], [ 522984, 761640, 761640 ], [ 378180, 492360, 492360 ], [ 390984, 514404, 514404 ], [ 411840, 552948, 552948 ], [ 418308, 575652, 575652 ], [ 439824, 615648, 615648 ], [ 506616, 690360, 690360 ], [ 509916, 699600, 699600 ], [ 522984, 727848, 727848 ], [ 529584, 750288, 750288 ], [ 542520, 778536, 778536 ], [ 549120, 801240, 801240 ], [ 403656, 519816, 519816 ], [ 410124, 547668, 547668 ], [ 431376, 581064, 581064 ], [ 444444, 609444, 609444 ], [ 450912, 631884, 631884 ], [ 522984, 710952, 710952 ], [ 546480, 753720, 753720 ], [ 542520, 761640, 761640 ], [ 555720, 789888, 789888 ], [ 568656, 812460, 812460 ], [ 575256, 840576, 840576 ], [ 422796, 547668, 547668 ], [ 429528, 575256, 575256 ], [ 450912, 614988, 614988 ], [ 464112, 637560, 637560 ], [ 479952, 678876, 678876 ], [ 549120, 750288, 750288 ], [ 562188, 773124, 773124 ], [ 568656, 801240, 801240 ], [ 581856, 823680, 823680 ], [ 594924, 851928, 851928 ], [ 607992, 880176, 880176 ], [ 442200, 580932, 580932 ], [ 448668, 602976, 602976 ], [ 470580, 643236, 643236 ], [ 493020, 684552, 684552 ], [ 506616, 713460, 713460 ], [ 575256, 784344, 784344 ], [ 588192, 812460, 812460 ], [ 606672, 851400, 851400 ], [ 607992, 863280, 863280 ], [ 620928, 891396, 891396 ], [ 633996, 919776, 919776 ], [ 461340, 608520, 608520 ], [ 474144, 636240, 636240 ], [ 490380, 676896, 676896 ], [ 513084, 719136, 719136 ], [ 516384, 727848, 727848 ], [ 601260, 818136, 818136 ], [ 614460, 846252, 846252 ], [ 620928, 874500, 874500 ], [ 633996, 902748, 902748 ], [ 647196, 930864, 930864 ], [ 660264, 953568, 953568 ], [ 480612, 636240, 636240 ], [ 493416, 663696, 663696 ], [ 516384, 705276, 705276 ], [ 522984, 733524, 733524 ], [ 535920, 761640, 761640 ], [ 627528, 857472, 857472 ], [ 633996, 885720, 885720 ], [ 647196, 908424, 908424 ], [ 660264, 936672, 936672 ], [ 673332, 964788, 964788 ], [ 686400, 992904, 992904 ], [ 499884, 669372, 669372 ], [ 512688, 696828, 696828 ], [ 525492, 724680, 724680 ], [ 538296, 752268, 752268 ], [ 544764, 779988, 779988 ], [ 640860, 873840, 873840 ], [ 647328, 901692, 901692 ], [ 66e4, 929280, 929280 ], [ 673068, 957e3, 957e3 ], [ 685740, 984456, 984456 ], [ 698544, 1012308, 1012308 ], [ 602316, 768900, 768900 ], [ 615252, 796488, 796488 ], [ 628056, 824076, 824076 ], [ 640860, 851796, 851796 ], [ 653664, 879516, 879516 ], [ 66e4, 907104, 907104 ], [ 673068, 934956, 934956 ], [ 685740, 967956, 967956 ], [ 698544, 995676, 995676 ], [ 711348, 1023396, 1023396 ], [ 724152, 1050852, 1050852 ], [ 628056, 802164, 802164 ], [ 640860, 829752, 829752 ], [ 653664, 857340, 857340 ], [ 666468, 885060, 885060 ], [ 673068, 918192, 918192 ], [ 685740, 945912, 945912 ], [ 698544, 973500, 973500 ], [ 711348, 1001088, 1001088 ], [ 724152, 1028808, 1028808 ], [ 736956, 1056528, 1056528 ], [ 749892, 1089792, 1089792 ], [ 653664, 835296, 835296 ], [ 66e4, 863016, 863016 ], [ 673068, 890472, 890472 ], [ 685740, 912780, 912780 ], [ 698544, 940368, 940368 ], [ 704880, 967956, 967956 ], [ 717684, 995676, 995676 ], [ 730620, 1023396, 1023396 ], [ 743424, 1045440, 1045440 ], [ 756228, 1073028, 1073028 ], [ 762564, 1100748, 1100748 ], [ 673068, 868428, 868428 ], [ 685740, 896016, 896016 ], [ 698544, 918192, 918192 ], [ 704880, 940368, 940368 ], [ 717684, 967956, 967956 ], [ 730620, 990132, 990132 ], [ 736956, 1017720, 1017720 ], [ 749892, 1040028, 1040028 ], [ 756228, 1067484, 1067484 ], [ 768900, 1089792, 1089792 ], [ 781704, 1117380, 1117380 ], [ 698544, 901692, 901692 ], [ 711348, 923736, 923736 ], [ 717684, 945912, 945912 ], [ 730620, 967956, 967956 ], [ 736956, 995676, 995676 ], [ 749892, 1017720, 1017720 ], [ 756228, 1040028, 1040028 ], [ 768900, 1062072, 1062072 ], [ 775500, 1084116, 1084116 ], [ 788304, 1106292, 1106292 ], [ 794640, 1128336, 1128336 ], [ 724152, 934956, 934956 ], [ 730620, 957e3, 957e3 ], [ 743424, 979176, 979176 ], [ 749892, 995676, 995676 ], [ 756228, 1017720, 1017720 ], [ 768900, 1040028, 1040028 ], [ 775500, 1062072, 1062072 ], [ 788304, 1078704, 1078704 ], [ 794640, 1100748, 1100748 ], [ 801108, 1122924, 1122924 ], [ 813912, 1139556, 1139556 ], [ 749892, 973500, 973500 ], [ 756228, 990132, 990132 ], [ 762564, 1006764, 1006764 ], [ 768900, 1028808, 1028808 ], [ 781704, 1045440, 1045440 ], [ 788304, 1062072, 1062072 ], [ 794640, 1084116, 1084116 ], [ 801108, 1100748, 1100748 ], [ 813912, 1117380, 1117380 ], [ 820248, 1139556, 1139556 ], [ 826716, 1156188, 1156188 ], [ 775500, 1006764, 1006764 ], [ 781704, 1023396, 1023396 ], [ 788304, 1040028, 1040028 ], [ 794640, 1056528, 1056528 ], [ 801108, 1073028, 1073028 ], [ 807444, 1089792, 1089792 ], [ 813912, 1100748, 1100748 ], [ 820248, 1117380, 1117380 ], [ 826716, 1134012, 1134012 ], [ 833052, 1150512, 1150512 ], [ 839520, 1167144, 1167144 ], [ 794640, 1040028, 1040028 ], [ 801108, 1050852, 1050852 ], [ 807444, 1067484, 1067484 ], [ 813912, 1084116, 1084116 ], [ 820248, 1095072, 1095072 ], [ 826716, 1111836, 1111836 ], [ 833052, 1122924, 1122924 ], [ 839520, 1139556, 1139556 ], [ 845988, 1156188, 1156188 ], [ 852324, 1167144, 1167144 ], [ 858792, 1183776, 1183776 ], [ 820248, 1073028, 1073028 ], [ 826716, 1084116, 1084116 ], [ 833052, 1095072, 1095072 ], [ 839520, 1111836, 1111836 ], [ 839520, 1122924, 1122924 ], [ 845988, 1134012, 1134012 ], [ 852324, 1144836, 1144836 ], [ 858792, 1161468, 1161468 ], [ 865128, 1172688, 1172688 ], [ 871596, 1183776, 1183776 ], [ 871596, 1194600, 1194600 ], [ 845988, 1106292, 1106292 ], [ 852324, 1117380, 1117380 ], [ 852324, 1128336, 1128336 ], [ 858792, 1139556, 1139556 ], [ 865128, 1150512, 1150512 ], [ 865128, 1156188, 1156188 ], [ 871596, 1167144, 1167144 ], [ 878064, 1178100, 1178100 ], [ 878064, 1189320, 1189320 ], [ 884268, 1200408, 1200408 ], [ 890868, 1211364, 1211364 ] ];
    dLite = [ [ 67382, 100082, 100082 ], [ 88690, 110890, 110890 ], [ 91198, 121998, 121998 ], [ 101006, 132656, 132656 ], [ 106214, 143464, 143464 ], [ 137621, 154421, 154421 ], [ 139229, 165079, 165079 ], [ 140237, 175737, 175737 ], [ 144245, 186695, 186695 ], [ 168110, 208460, 208460 ], [ 168110, 208460, 208460 ], [ 170276, 230076, 230076 ], [ 170276, 230076, 230076 ], [ 204742, 238342, 238342 ], [ 204742, 238342, 238342 ], [ 206757, 326857, 326857 ], [ 206757, 326857, 326857 ], [ 238373, 348473, 348473 ], [ 238373, 348473, 348473 ], [ 239388, 370088, 370088 ], [ 239388, 370088, 370088 ], [ 269004, 392004, 392004 ], [ 269004, 392004, 392004 ], [ 270370, 413470, 413470 ], [ 270370, 413470, 413470 ], [ 305635, 435085, 435085 ], [ 305635, 435085, 435085 ], [ 307651, 456701, 456701 ], [ 307651, 456701, 456701 ] ];
    function getQuotesLite(indx) {
        return dLite[indx];
    }
    function getQuotesMini(indx) {
        return dMini[indx];
    }
    function getQuotesUni(indx) {
        return dUni[indx];
    }
    function getQuotesLux(indx) {
        return dLux[indx];
    }
    function findIndexLite(h, w) {
        var indx, ՐՏ_Temp;
        if (39 < h && h < 181) {
            indx = (Math.ceil(w / 10) - 4) * 16 + Math.ceil(h / 10) - 5;
        }
        return indx;
    }
    function findIndexMini(h, w) {
        var indx, ՐՏ_Temp;
        if (49 < h && h < 201) {
            indx = (Math.ceil(w / 10) - 4) * 14 + Math.ceil(h / 10) - 5;
        }
        return indx;
    }
    function findIndexUni(h, w) {
        var indx, ՐՏ_Temp;
        if (49 < h && h < 181) {
            indx = Math.ceil(w / 5) - 8;
        }
        return indx;
    }
    function findIndexLux(h, w) {
        var indx, ՐՏ_Temp;
        if (99 < h && h < 301) {
            indx = (Math.ceil(w / 10) - 5) * 11 + Math.ceil(h / 10) - 5;
        }
        return indx;
    }
    var hei1, hei2, hei3, hei4, wid1, wid2, wid3, wid4;
    hei1=800;
    hei2=800;
    hei3=800;
    hei4=800;
    wid1=500;
    wid2=500;
    wid3=500;
    wid4=500;

    $("#height_1").change(function() {
        hei1 = document.getElementById("height_1").value;
    });
    $("#height_2").change(function() {
        hei2 = document.getElementById("height_2").value;
    });
    $("#height_3").change(function() {
        hei3 = document.getElementById("height_3").value;
    });
    $("#height_4").change(function() {
        hei4 = document.getElementById("height_4").value;
    });
    $("#width_1").change(function() {
        wid1 = document.getElementById("width_1").value;
    });
    $("#width_2").change(function() {
        wid2 = document.getElementById("width_2").value;
    });
    $("#width_3").change(function() {
        wid3 = document.getElementById("width_3").value;
    });
    $("#width_4").change(function() {
        wid4 = document.getElementById("width_4").value;
    });

    h1=hei1/10;
    h2=hei2/10;
    h3=hei3/10;
    h4=hei4/10;
    w1=wid1/10;
    w2=wid2/10;
    w3=wid3/10;
    w4=wid4/10;

    iLite = findIndexLite(h1, w1);
    iMini = findIndexMini(h1, w1);
    iUni = findIndexUni(h1, w1);
    iLux = findIndexLux(h1, w1);
    function renderPrices() {
        document.getElementById("PriceLite_1").innerHTML = getQuotesLite(iLite)[0]*coefusd;
        document.getElementById("PriceLite_2").innerHTML = getQuotesLite(iLite)[1]*coefusd;
        document.getElementById("PriceLite_3").innerHTML = getQuotesLite(iLite)[2]*coefusd;
        document.getElementById("PriceMini_1").innerHTML = getQuotesMini(iMini)[0]*coefusd;
        document.getElementById("PriceMini_2").innerHTML = getQuotesMini(iMini)[1]*coefusd;
        document.getElementById("PriceMini_3").innerHTML = getQuotesMini(iMini)[2]*coefusd;
        document.getElementById("PriceUni_1").innerHTML = getQuotesUni(iUni)[0]*coefusd;
        document.getElementById("PriceUni_2").innerHTML = getQuotesUni(iUni)[1]*coefusd;
        document.getElementById("PriceUni_3").innerHTML = getQuotesUni(iUni)[2]*coefusd;

        document.getElementById("PriceLite_1").innerHTML = iLite;
        document.getElementById("PriceMini_1").innerHTML = iMini;
        document.getElementById("PriceUni_1").innerHTML = iUni;
        document.getElementById("PriceLux_1").innerHTML = iLux;
        
        document.getElementById("PriceLux_1").innerHTML = getQuotesLux(iLux)[0]*coefusd;
        document.getElementById("PriceLux_2").innerHTML = getQuotesLux(iLux)[1]*coefusd;
        document.getElementById("PriceLux_3").innerHTML = getQuotesLux(iLux)[2]*coefusd;
    }
    renderPrices();
});

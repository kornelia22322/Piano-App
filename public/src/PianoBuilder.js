import Piano from "./Piano.js";

export default class PianoBuilder {
    constructor() {
        this.mapWhiteKeys = [ {17:16}, {20:18}, {27:20}, {49:21}, {65:23}, {18:25}, {88:27},
                            {87:28}, {51:30}, {68:32}, {67:33}, {86:35}, {82:37}, {53:39},
                            {84:40}, {66:42}, {72:44}, {89:45}, {55:47}, {74:49}, {188:51},
                            {75:52}, {56:54}, {79:56}, {76:57}, {191:59}, {80:61}, {189:63},
                            {219:64}, {16:66}, {221:68}, {187:69}, {13:71}, {38:73}, {37:75},
                            {35:76}  ];
        this.mapBlackKeys = [ {16:17}, {192:19},
                            {81:22}, {90:24}, {83:26},
                            {50:29}, {69:31},
                            {32:34}, {70:36}, {52:38},
                            {71:41}, {78:43},
                            {54:46}, {85:48}, {77:50},
                            {73:53}, {57:55},
                            {190:58}, {186:60}, {48:62},
                            {222:65}, {220:67},
                            {8:70}, {40:72}, {46:74} ];
        this.whites = Object.keys(this.mapWhiteKeys).length;
        this.blacks = Object.keys(this.mapBlackKeys).length;
        this.piano = null;
    };

    step1() {
        this.piano = new Piano(this.whites, this.blacks);
    };

    step2() {
        for(let i in this.mapWhiteKeys) {
            let val = Object.keys(this.mapWhiteKeys[i])[0];
            this.piano.addKeytoPiano(Number(val), this.mapWhiteKeys[i][val], true);
        }
        for(let i in this.mapBlackKeys){
            let val = Object.keys(this.mapBlackKeys[i])[0];
            this.piano.addKeytoPiano(Number(val), this.mapBlackKeys[i][val], false);
        }
    };

    build() {
        this.step1();
        this.step2();
        return this.piano;
    };
};

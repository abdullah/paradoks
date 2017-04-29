
var paradoks = [[], [], [], [], [], []];

for (var p1 = 1; p1 < 64; p1 += 2) {
  paradoks[0].push(p1);
}

for (var p2 = 2; p2 < 64; ) {
  paradoks[1].push(p2);
  p2 += p2 % 2 == 0 ? 1 : 3;
}

for (var p3 = 4, p3s = 1; p3 < 64; p3s++) {
  paradoks[2].push(p3);
  p3 += p3s % 4 == 0 && p3s != 0 ? 5 : 1;
}

for (var p4 = 8, p4s = 1; p4 < 64; p4s++) {
  paradoks[3].push(p4);
  p4 += p4s % 8 == 0 && p4s != 0 ? 9 : 1;
}

for (var p5 = 16, p5s = 1; p5 < 64; p5s++) {
  paradoks[4].push(p5);
  p5 += p5s % 16 == 0 && p5s != 0 ? 17 : 1;
}

for (var p6 = 32; p6 < 64; p6++) {
  paradoks[5].push(p6);
}


new Vue({
  el: "#paradoks",
  data: function() {
    return {
      paradoks: paradoks,
      step: 0,
      result: 0
    };
  },
  methods: {
    yep: function() {
      this.result += this.paradoks[this.step][0];
      this.step++;
    },
    nope: function() {
      this.step++;
    },
    again: function(){
      this.step = 0;
      this.result = 0;
    }
  }
});

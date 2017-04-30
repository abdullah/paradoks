/**
 *
  Her tur icin sayilar arasi fark 1, kumeler arasi fark kume eleman sayisi +1 dir, Her turun baslangic sayisi bir onceki turun kumelerinin herhangi    bir kumesinin eleman sayisinin 2 katidir.

  Ornek:
  tur 1 baslangic 1 fark 1 kume 1 kumeFarki 2
  tur 2 baslangic 2 fark 1 kume 2 kumeFarki 3
  tur 3 baslangic 4 fark 1 kume 4 kumeFarki 5
  tur 4 baslangic 8 fark 1 kume 8 kumeFarki 9
  tur 5 baslangic 16 fark 1 kume 16 kumeFarki 17
 */

var paradoks = [];

var loop = true;
var grupSize = 1;
var cardSize = 0;
var next = false;

while (loop) {
  paradoks[cardSize] = [];

  for (var i = grupSize; i <= 100; i++) {
    if (i % grupSize == 0) {
      next = !next;
    }

    if (next) {
      paradoks[cardSize].push(i);
    }
  }

  cardSize++;
  grupSize = grupSize * 2;
  next = false;

  if (cardSize == 7) {
    loop = false;
  }
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
  computed: {
    resultText: function() {
      if (this.result > 0 && this.result <= 100) {
        return `😎😎 ${this.result} 😎😎`;
      } else {
        return `Whoops! sanırım olmadı  '${this.result}' bulduk ** tekrar dener misin?`;
      }
    }
  },
  methods: {
    yep: function() {
      this.result += this.paradoks[this.step][0];
      this.step++;
    },
    nope: function() {
      this.step++;
    },
    again: function() {
      this.step = 0;
      this.result = 0;
    }
  }
});

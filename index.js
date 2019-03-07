new Vue({
  el: '#paradoks',
  data() {
    return {
      step: 0,
      result: 0,
      maxSize: 2048,
      maxSizeInput: 2048
    };
  },
  computed: {
    totalStep() {
      return Math.ceil(Math.log2(this.maxSize));
    },
    paradoks() {
      const paradoks = [];
      let loop = true;
      let grupSize = 1;
      let cardSize = 0;
      let next = false;
      let maxLimit = 0;

      while (loop) {
        paradoks[cardSize] = [];

        for (let i = grupSize; i <= this.maxSize; i++) {
          if (i % grupSize == 0) {
            next = !next;
          }

          if (next) {
            paradoks[cardSize].push(i);
          }
        }

        cardSize++;
        grupSize *= 2;
        next = false;
        if (cardSize == this.totalStep) {
          loop = false;
        }
      }

      return paradoks;
    },
    currentCard() {
      return this.paradoks[this.step];
    },
    resultText() {
      if (this.result > 0 && this.result) {
        return `😎😎 ${this.result} 😎😎`;
      }
      return `Whoops! '${this.result}' is found.`;

    }
  },
  watch: {
    maxSizeInput(value) {
      if (value > 3) {

        if (value > 5000) {
          const res = confirm('Are you sure you want to render more than 5000?');
          if (!res) {
            return;
          }
        }

        this.maxSize = value;
        this.reset();
      }
    }
  },
  mounted() {
    const extraRuleTag = document.querySelector('#extra-rule');
    document.addEventListener('keydown', (e) => {
      if (Number.isSafeInteger(parseInt(e.key))) {
        extraRuleTag.innerHTML = `[class^="${e.key}"] { background-color: red }`
      }
    })
  },
  methods: {
    yep() {
      this.result += this.paradoks[this.step][0];
      this.step++;
    },
    nope() {
      this.step++;
    },
    reset() {
      this.step = 0;
      this.result = 0;
    }
  }
});

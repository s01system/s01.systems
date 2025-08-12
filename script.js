const logoAnimator = {
  row1: document.querySelector('[data-js-logo-row-1]'),
  row2: document.querySelector('[data-js-logo-row-2]'),
  row3: document.querySelector('[data-js-logo-row-3]'),
  keyframeIndex: 0,
  lastFrameTime: null,
  direction: 1,
  keyframes: [
    {
      row1: '███████▓▓▓▓▓▓▒▒▒▒',
      row2: '███▓▓▓▓▓▓▒▒▒▒▒▒░░',
      row3: '▓▓▓▓▓▒▒▒▒▒▒▒░░░░░',
    },
    {
      row1: '███████▓▓▓▓▓▓▒▒▒▒',
      row2: '███▓▓▓▓▓▓▒▒▒▒▒▒░░',
      row3: '▓▓▓▓▓▒▒▒▒▒▒▒░░░░░',
    },
    {
      row1: '███████▓▓▓▓▓▓▒▒▒▒',
      row2: '███▓▓▓▓▓▓▒▒▒▒▒▒▒░',
      row3: '▓▓▓▓▓▓▒▒▒▒▒▒▒▒░░░',
    },
    {
      row1: '████████▓▓▓▓▓▓▒▒▒',
      row2: '████▓▓▓▓▓▓▓▒▒▒▒▒░',
      row3: '█▓▓▓▓▓▓▓▓▒▒▒▒▒░░░',
    },
    {
      row1: '██████████▓▓▓▓▓▓▒',
      row2: '██████▓▓▓▓▓▓▒▒▒▒▒',
      row3: '██▓▓▓▓▓▓▓▒▒▒▒▒▒░░',
    },
    {
      row1: '██████████▓▓▓▓▓▓▒',
      row2: '████████▓▓▓▓▓▒▒▒▒',
      row3: '████▓▓▓▓▓▓▒▒▒▒▒░░',
    },
    {
      row1: '████████████▓▓▓▓▒',
      row2: '██████████▓▓▓▒▒▒▒',
      row3: '██████▓▓▓▓▓▒▒▒▒▒░',
    },
    {
      row1: '█████████████▓▓▓▒',
      row2: '███████████▓▓▓▒▒▒',
      row3: '████████▓▓▓▓▒▒▒▒▒',
    },
  ],
  timeframes: [300, 400, 500, 600, 700, 1000, 1500, 2000, 2500, 3000, 3500],
  animate: function (timestamp) {
    if (!this.lastFrameTime) {
      this.lastFrameTime = timestamp;
    }

    const elapsed = timestamp - this.lastFrameTime;

    const keyframeDelay =
      this.keyframeIndex === 0
        ? 4000
        : this.timeframes[Math.floor(Math.random() * this.timeframes.length)];

    if (elapsed >= keyframeDelay) {
      this.row1.textContent = this.keyframes[this.keyframeIndex].row1;
      this.row2.textContent = this.keyframes[this.keyframeIndex].row2;
      this.row3.textContent = this.keyframes[this.keyframeIndex].row3;

      // compute next index (ping-pong)
      if (this.keyframes.length > 1) {
        // if we're at an edge, flip direction so next step goes inward
        if (this.keyframeIndex === this.keyframes.length - 1) {
          this.direction = -1;
        } else if (this.keyframeIndex === 0) {
          this.direction = 1;
        }
        // advance for the next frame
        this.keyframeIndex += this.direction;
      }

      this.lastFrameTime = timestamp;
    }

    requestAnimationFrame((t) => this.animate(t));
  },

  init: function () {
    requestAnimationFrame((t) => this.animate(t));
  },
};

logoAnimator.init();

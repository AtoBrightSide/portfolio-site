<template>
  <div class="flex justify-center items-center md:my-10">
    <span class="text-hotmag">{{ typeValue }}</span>
    <span class="animate-blink">|</span>
    <span class="cursor" :class="{ typing: isTyping }">&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: "Typer",
  data: () => {
    return {
      typeValue: "",
      isTyping: false,
      displayTextArray: [
        "I make cool stuff",
        "Like websites",
        "And apps",
        "And even games!!",
      ],
      typingSpeed: 200,
      erasingSpeed: 50,
      newTextDelay: 100,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.isTyping) this.isTyping = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.isTyping = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.isTyping) this.isTyping = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.isTyping = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  word = "SAL";
  wordHide = "";
  attemps = 0;
  win = false;
  losed = false;

  constructor() {
    this.wordHide = "_ ".repeat(this.word.length);
  }

  check(letter) {
    this.existsLetter(letter);
    const wordHideArr = this.wordHide.split(" ");

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        wordHideArr[i] = letter;
      }
    }
    this.wordHide = wordHideArr.join(" ");
    this.verifyWin();
  }

  verifyWin() {
    const wordArr = this.wordHide.split(" ");
    const wordEvaluate = wordArr.join("");
    if (wordEvaluate === this.word) {
      this.win = true;
    }

    if (this.attemps === 9) {
      this.losed = true;
    }
  }

  existsLetter(letter) {
    if (this.word.indexOf(letter) >= 0) {
    } else {
      this.attemps++;
    }
  }

  reset(){
    this.attemps = 0;
    this.win = false;
    this.losed = false;
    this.wordHide = "_ ".repeat(this.word.length);
  }
}

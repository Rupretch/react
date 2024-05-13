import { signal } from "@preact/signals-react";

export default class Signals {
  static countries = signal([
    {
      flags: {
        png: "https://flagcdn.com/w320/cy.png",
      },
      capital: ["Nicosia"],
      ccn3:"196"
    },
  ]);
  static randomDog = signal({ message: "..." });
}

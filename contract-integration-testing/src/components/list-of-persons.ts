export class ListOfPersons extends HTMLElement {
  private names = [
    "John",
    "Mary",
    "Peter",
    "Anna",
    "Charles",
    "Lucy",
    "Michael",
    "Sophie",
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  private getRandomPerson() {
    const randomName =
      this.names[Math.floor(Math.random() * this.names.length)];
    const randomAge = Math.floor(Math.random() * 50) + 20;
    return { name: randomName, age: randomAge };
  }

  render() {
    const persons = Array.from({ length: 5 }, () => this.getRandomPerson());

    this.innerHTML = `
      <div class="persons-list">
        ${persons
          .map(
            (person) => `
          <person-component 
            name="${person.name}" 
            age="${person.age}">
          </person-component>
        `
          )
          .join("")}
      </div>
    `;
  }
}

customElements.define("list-of-persons", ListOfPersons);

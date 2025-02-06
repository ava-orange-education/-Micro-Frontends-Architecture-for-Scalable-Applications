import "../components/person";
import "../components/list-of-persons";
import { personContractExpectations } from "../contracts/person.contract";

describe("Component Contract Tests", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("ListOfPersons should create 5 Person components with valid data", () => {
    const listComponent = document.createElement("list-of-persons");
    document.body.appendChild(listComponent);

    const persons = document.querySelectorAll("person-component");
    expect(persons.length).toBe(5);

    persons.forEach((person) => {
      const personData = {
        name: person.getAttribute("name") || "",
        age: Number(person.getAttribute("age")),
      };

      personContractExpectations.validatePerson(personData);
    });
  });

  test("Person component should correctly render received data", () => {
    const person = document.createElement("person-component");
    person.setAttribute("name", "Test Name");
    person.setAttribute("age", "25");
    document.body.appendChild(person);

    const shadowRoot = person.shadowRoot;
    expect(shadowRoot?.querySelector(".person")).toBeTruthy();
    expect(shadowRoot?.textContent).toContain("Test Name");
    expect(shadowRoot?.textContent).toContain("25");
  });
});

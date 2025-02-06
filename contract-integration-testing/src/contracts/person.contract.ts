export interface PersonContract {
  name: string;
  age: number;
}

/** Expectations that the ListOfPersons component has in regards to the Person component */
export const personContractExpectations = {
  name: expect.any(String),
  age: expect.any(Number),

  validatePerson: (person: PersonContract) => {
    // set expectations in regards to the name being defined and not empty
    expect(person.name).toBeTruthy();
    expect(person.name.length).toBeGreaterThan(0);

    // set expectations in regards to the age being defined and between 20 and 70 range
    expect(person.age).toBeTruthy();
    expect(person.age).toBeGreaterThanOrEqual(20);
    expect(person.age).toBeLessThanOrEqual(70);
  },
};

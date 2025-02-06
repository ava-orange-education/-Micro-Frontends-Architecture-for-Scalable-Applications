## Consumer-Driven Contract Pattern

This project implements CDC testing where:

1. The `PersonComponent` (Consumer) defines its data requirements through a contract
2. The `ListOfPersons` (Provider) must adhere to this contract when creating Person components
3. The contract (`person.contract.ts`) serves as the single source of truth for the data shape

This pattern ensures:
- Clear documentation of component dependencies
- Early detection of breaking changes
- Reliable component integration

## Integrations tests

Additionally integration tests are implemented to test the consumer-provider relationship.
## Running the Project

- Install dependencies: `npm install`
- Run tests: `npm test`

const domainUrl = "http://localhost:3002";

class TasksComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async loadHtml() {
    const response = await fetch(domainUrl);
    const templateHTML = await response.text();
    this.shadowRoot.innerHTML = templateHTML;
  }

  async loadTasks() {
    const response = await fetch(`${domainUrl}/tasks`);
    const content = await response.text();

    this.shadowRoot.getElementById("taskList").innerHTML = content;
  }

  async connectedCallback() {
    await this.loadHtml();
    await this.loadTasks();
  }
}

customElements.define("tasks-component", TasksComponent);

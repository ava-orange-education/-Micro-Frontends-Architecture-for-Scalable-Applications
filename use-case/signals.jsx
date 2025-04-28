import React, { useEffect, useRef } from "react";
import { signal } from "@preact/signals-react";

const tasksSignal = signal([]);

const ShellApplication = () => {
  // it holds references to the web-component elements
  const searchComponentRef = useRef(null);
  const tasksComponentRef = useRef(null);

  useEffect(() => {
    const searchComponent = searchComponentRef.current;

    // Attach the onSearch function
    searchComponent.onSearch = (searchResult) => {
      tasksSignal.value = searchResult;
    };
  }, []);

  useEffect(() => {
    const tasksComponent = tasksComponentRef.current;

    // Update the tasks component whenever tasksSignal changes
    tasksComponent.tasks = tasksSignal.value;
  }, [tasksSignal.value]);

  return (
    <div>
      <h2>Shell Application</h2>
      <search-component ref={searchComponentRef}></search-component>
      <tasks-component ref={tasksComponentRef}></tasks-component>
    </div>
  );
};

export default ShellApplication;

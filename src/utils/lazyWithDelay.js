import { lazy } from "react";

const lazyWithDelay = (importFunc, delay) => {
  return lazy(
    () =>
      new Promise((resolve) => setTimeout(() => resolve(importFunc()), delay))
  );
};

export default lazyWithDelay;

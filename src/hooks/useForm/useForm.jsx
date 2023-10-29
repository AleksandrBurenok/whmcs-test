import { useState } from "react";

export function useForm(steps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((i) => {
      if (i >= steps.length - 1) return 1;
      return i + 1;
    });
  }

  function goTo(index) {
    setCurrentIndex(index);
  }

  return {
    currentIndex,
    step: steps[currentIndex],
    steps,
    goTo,
    next,
  };
}

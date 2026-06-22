type ScrollPosition = "start" | "center" | "end";

function slowScrollTo(
  element: Element,
  speed = 1, // pixels per ms
  position: ScrollPosition = "start",
  offset = 0 // ✅ NEW: positive or negative offset
) {
  const start = window.scrollY;
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  let end = start + rect.top;

  if (position === "center") {
    end = start + rect.top - viewportHeight / 2 + rect.height / 2;
  } else if (position === "end") {
    end = start + rect.top - viewportHeight + rect.height;
  }

  // ✅ apply offset
  end += offset;

  const distance = end - start;
  const duration = Math.abs(distance) / speed;
  const startTime = performance.now();

  function animate(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

export { slowScrollTo };

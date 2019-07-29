

document.addEventListener('DOMContentLoaded', () => {
  console.log('Welcome, to my webpage!!!');
});

const handleView = item => {
  const linkEl = document.querySelector(`#link-${item}`);

  let offsetHeight = 0.6 * window.innerHeight;
  inView.offset({
    bottom: offsetHeight
  });

  inView(`#${item}`).on("enter", () => linkEl.classList.add('is-active')).on("exit", el => linkEl.classList.remove('is-active'));
};

// Apply method on each DOM element
["home", "experience", "skills"].forEach(handleView);
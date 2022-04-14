const startCreature = () => {
  const eye = document.querySelector(".creature .pupil");
  const moveEye = (e) => {
    const width = window.innerWidth;
    const x = e.clientX;
    const dx = (x / width) * (100 - (60 * 100) / 200);

    const height = window.innerHeight;
    const y = e.clientY;
    const dy = (y / height) * (100 - (60 * 100) / 300);

    eye.style.left = `${dx}%`;
    eye.style.top = `${dy}%`;
  };

  document.addEventListener("mousemove", moveEye);
};

export default startCreature

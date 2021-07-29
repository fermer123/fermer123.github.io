const button = document.getElementById('btn');
const text = document.getElementById('text');

const handler = () => {
  if (text.hidden) {
    text.hidden = false;

    return;
  }

  text.hidden = true;
};

button.addEventListener('click', handler);

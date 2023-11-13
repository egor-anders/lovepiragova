const blocks = document.querySelectorAll('[data-block]');
const compoundBtns = document.querySelectorAll('[data-toggle]');

compoundBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    blocks.forEach(block => {
      const blockText = block.querySelector('.about__block-text');
      const blockCompound = block.querySelector('.about__block-compound');
      if(block.getAttribute('data-block') == btn.getAttribute('data-toggle')) {
        $(blockText).fadeOut(0);
        $(blockCompound).fadeIn(300);
      }
    });
  });
});

blocks.forEach(block => {
  const blockText = block.querySelector('.about__block-text');
  const blockCompound = block.querySelector('.about__block-compound');
  const blockClose = blockCompound.querySelector('.about__close');

  blockClose.addEventListener('click', () => {
    $(blockCompound).fadeOut(0);
    $(blockText).fadeIn(300);
  });
});

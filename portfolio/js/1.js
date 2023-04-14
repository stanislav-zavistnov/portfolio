const htmlCssBtn = document.querySelector('.skills-tech__icon--htmlcss');
const bemBtn = document.querySelector('.skills-tech__icon--bem');
const bootstrapBtn = document.querySelector('.skills-tech__icon--bootstrap');
const jsBtn = document.querySelector('.skills-tech__icon--js');
const htmlMailBtn = document.querySelector('.skills-tech__icon--htmlmail');
const gitBtn = document.querySelector('.skills-tech__icon--git');
const figmaBtn = document.querySelector('.skills-tech__icon--figma');
const anotherSkillBtn = document.querySelector('.skills-tech__icon--any');
const comingSoonBtn = document.querySelector('.skills-tech__icon--comingsoon');

const htmlCssDiv = document.querySelector('.skills-tech-type-htmlcss');
const bemDiv = document.querySelector('.skills-tech-type-bem');
const bootstrapDiv = document.querySelector('.skills-tech-type-bootstrap');
const jsDiv = document.querySelector('.skills-tech-type-js');
const htmlMailDiv = document.querySelector('.skills-tech-type-htmlmail');
const gitDiv = document.querySelector('.skills-tech-type-htmlgit');
const figmaDiv = document.querySelector('.skills-tech-type-htmlfigma');
const anotherSkillsDiv = document.querySelector('.skills-tech-type-htmlanotherskills');
const comingSoonDiv = document.querySelector('.skills-tech-type-htmlcomingsoon');

const wrapper = document.querySelector('.skills-tech-wrapper');

const removeActiveClassAndHideDiv = () => {
  for (let i = 0; i < arrPairBtnDiv.length; i++) {
    arrPairBtnDiv[i].nameBtn.classList.remove('skills-icon-active');
    arrPairBtnDiv[i].nameDiv.style.display = 'none';
  }
};

const showSelectedDiv = (index) => {
  arrPairBtnDiv[index].nameBtn.classList.add('skills-icon-active');
  arrPairBtnDiv[index].nameDiv.style.display = 'block';
};

const handleClick = (e) => {
  let index = arrPairBtnDiv.findIndex(pair => pair.nameBtn == e.target);

  if (e.target !== wrapper) {
    removeActiveClassAndHideDiv();
    showSelectedDiv(index);
  };
};

const arrBtn = [htmlCssBtn, bootstrapBtn, jsBtn, htmlMailBtn, gitBtn, figmaBtn, anotherSkillBtn, comingSoonBtn];
const arrPairBtnDiv = [{nameBtn: htmlCssBtn, nameDiv: htmlCssDiv},
  {nameBtn: bemBtn, nameDiv: bemDiv},
  {nameBtn: bootstrapBtn, nameDiv: bootstrapDiv},
  {nameBtn: jsBtn, nameDiv: jsDiv},
  {nameBtn: htmlMailBtn, nameDiv: htmlMailDiv},
  {nameBtn: gitBtn, nameDiv: gitDiv},
  {nameBtn: figmaBtn, nameDiv: figmaDiv},
  {nameBtn: anotherSkillBtn, nameDiv: anotherSkillsDiv},
  {nameBtn: comingSoonBtn, nameDiv: comingSoonDiv}];

wrapper.addEventListener('click', handleClick);

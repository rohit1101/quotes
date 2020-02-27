const quoteEl = document.querySelector('.quote i');
const quoteBy = document.querySelector('.by');
const btn = document.querySelector('.effect');

const quoteArr = [
  {
    quote: 'People are starting to notice me.',
    by: 'Arthur Fleck'
  },
  {
    quote: 'Knowledge is Power.No Power is Power.',
    by: 'Cersei Lannister'
  },
  {
    quote: 'There is god and then there is peaky blinders.',
    by: 'Thomas Shelby'
  },
  {
    quote: 'Whatever It Takes.',
    by: 'Avengers'
  },
  {
    quote: 'I am Groot.',
    by: 'Groot'
  },
  {
    quote: 'Information is Wealth.',
    by: 'White Devil'
  },
  {
    quote: 'I am Iron Man.',
    by: 'Tony Stark'
  }
];
let i = 0;

btn.addEventListener('click', e => {
  if (i < quoteArr.length) {
    quoteEl.textContent = `${quoteArr[i].quote}`;
    quoteBy.textContent = `-${quoteArr[i].by}`;
  }
  if (i === quoteArr.length) {
    i = 0;
    quoteEl.textContent = `${quoteArr[i].quote}`;
    quoteBy.textContent = `- ${quoteArr[i].by}`;
  }
  // console.log(i);
  i++;
});

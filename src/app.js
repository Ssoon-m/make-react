// import { createDOM, createElement, render } from './react';

// const vdom = {
//   tag: 'p',
//   props: {},
//   children: [
//     { tag: 'h1', props: {}, children: ['React'] },
//     {
//       tag: 'ul',
//       props: {},
//       children: [
//         {
//           tag: 'li',
//           props: {
//             style: 'color:red',
//           },
//           children: ['첫 번째 아이템'],
//         },
//         {
//           tag: 'li',
//           props: {
//             style: 'color:blue',
//           },
//           children: ['두 번째 아이템'],
//         },
//         {
//           tag: 'li',
//           props: {
//             style: 'color:green',
//           },
//           children: ['세 번째 아이템'],
//         },
//       ],
//     },
//   ],
// };

const vdom = createElement(
  'p',
  {},
  createElement('h1', {}, '리액트 만들기'),
  createElement(
    'h1',
    {},
    createElement(
      'ul',
      {},
      createElement('li', { style: 'color:red' }, '첫 번째 아이템'),
      createElement('li', { style: 'color:blud' }, '두 번째 아이템'),
      createElement('li', { style: 'color:green' }, '세 번째 아이템')
    )
  )
);

render(vdom, document.querySelector('#root'));

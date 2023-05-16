const scores = [{
  name: 'Name',
  score: 100,
},
{
  name: 'Name',
  score: 20,
},
{
  name: 'Name',
  score: 50,
},
{
  name: 'Name',
  score: 78,
},
{
  name: 'Name',
  score: 125,
},
{
  name: 'Name',
  score: 77,
},
{
  name: 'Name',
  score: 42,
},
];

const scoreList = () => {
  const list = document.querySelector('ul');
  list.innerHTML = scores
    .map(
      (score, index) => `
      <ul>
        <li>${scores[index].name}: ${scores[index].score}</li>                        
      </ul> 
  `,
    ).join('');
};

export default scoreList;
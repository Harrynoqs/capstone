/* eslint-disable no-unused-vars */
function clickToSwitch() {
  const switchD = document.getElementById('closemenu');
  if (switchD.style.display === 'block') {
    switchD.style.display = 'none';
  } else {
    switchD.style.display = 'block';
  }
}

const speakerData = [{
  imageSrc: 'image/memberone.png',
  imageAlt: 'Yochai Benkler image',
  speakerName: 'Yochai Benkler',
  speakerTitle: 'Berkman Professor of Entrepreneurial Legal Studies at Havard Law School',
  speakerDescription: 'Benkler known for his published book, the wealth of Network.',
},
{
  imageSrc: 'image/membertwo.png',
  imageAlt: 'SohYeong Noh image',
  speakerName: 'SohYeong Noh',
  speakerTitle: 'Director of Art Centre Nobi',
  speakerDescription: 'As the main venue for digital space, Noh promotes understanding among technology.',
},
{
  imageSrc: 'image/memberthree.png',
  imageAlt: 'Kilnam Chon image',
  speakerName: 'Kilnam Chon',
  speakerTitle: '',
  speakerDescription: 'Kilnam Chon is an internet enthusiast who has been experienced in the IT industry for years.',
  display: 'hidden',
},
{
  imageSrc: 'image/memberfour.png',
  imageAlt: 'Julia Leda image',
  speakerName: 'Julia Leda',
  speakerTitle: 'President of Young Pirates of Europe',
  speakerDescription: 'Leda who supports and encourages young youths in digital and tech field.',
  display: 'hidden',
},
{
  imageSrc: 'image/memberfive.png',
  imageAlt: 'Lila Tretikov image',
  speakerName: 'Lila Tretikov',
  speakerTitle: 'Executive Director of the Wikimedia Foundation',
  speakerDescription: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation who aims at developing more people through out the world.',
  display: 'hidden',
},
{
  imageSrc: 'image/membersix.png',
  imageAlt: 'Ryan Merkley image',
  speakerName: 'Ryan Merkley',
  speakerTitle: 'CEO of creative commons, ex COO of the moxilla Foundation',
  speakerDescription: 'Ryan had been leading open-source projects at the Mozilla Foundation.',
  display: 'hidden',
},
];

const featuredSpeakers = document.getElementById('featured-speakers');

speakerData.forEach((speaker) => {
  const speakerContent = `
    <div class="d-flex col-md-6">
        <div class="hover-zoom p-2">
          <img src="${speaker.imageSrc}" id="card-pic" alt="${speaker.imageAlt}">
        </div>
        <div class="card-content">
          <h6 class="name">${speaker.speakerName}</h6>
          <small>${speaker.speakerTitle}</small>
          <p class="p-0">
            ${speaker.speakerDescription}
          </p>
    </div>
    `;
  featuredSpeakers.innerHTML += speakerContent;
});

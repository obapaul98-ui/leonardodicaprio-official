export interface AwardBody {
  name: string;
  nominations: number;
  wins: number;
  highlights: string[];
}

/** Totals as listed on Wikipedia's "List of awards and nominations received by Leonardo DiCaprio". */
export const AWARD_BODIES: AwardBody[] = [
  {
    name: 'Academy Awards',
    nominations: 8,
    wins: 1,
    highlights: [
      'Won Best Actor for The Revenant',
      'Nominated for Best Supporting Actor, What\'s Eating Gilbert Grape',
      'Nominated for Best Actor for The Aviator, Blood Diamond, The Wolf of Wall Street, Once Upon a Time… in Hollywood and One Battle After Another',
      'Nominated for Best Picture as a producer of The Wolf of Wall Street',
    ],
  },
  {
    name: 'Golden Globe Awards',
    nominations: 15,
    wins: 3,
    highlights: [
      'Best Actor, Drama: The Aviator and The Revenant',
      'Best Actor, Musical or Comedy: The Wolf of Wall Street',
    ],
  },
  {
    name: 'BAFTA Awards',
    nominations: 7,
    wins: 1,
    highlights: ['Best Actor in a Leading Role: The Revenant'],
  },
  {
    name: 'Screen Actors Guild Awards',
    nominations: 15,
    wins: 1,
    highlights: ['Outstanding Male Actor in a Leading Role: The Revenant'],
  },
  {
    name: 'Critics\' Choice Awards',
    nominations: 15,
    wins: 2,
    highlights: ['Best Actor: The Revenant', 'Best Actor in a Comedy: The Wolf of Wall Street'],
  },
];

export interface AchievementMoment {
  year: string;
  title: string;
  body: string;
  kind: 'award' | 'honour' | 'planet' | 'career';
}

export const ACHIEVEMENT_TIMELINE: AchievementMoment[] = [
  { year: '1994', kind: 'award', title: 'First Oscar nomination, at 19', body: 'Nominated for Best Supporting Actor for What\'s Eating Gilbert Grape, after also winning the National Board of Review\'s Best Supporting Actor award.' },
  { year: '1997', kind: 'award', title: 'Silver Bear at Berlin', body: 'Won the Silver Bear for Best Actor at the Berlin International Film Festival for Romeo + Juliet.' },
  { year: '1998', kind: 'planet', title: 'Founded the Leonardo DiCaprio Foundation', body: 'Started his environmental foundation at the age of 24, the beginning of more than two decades of conservation work.' },
  { year: '2005', kind: 'award', title: 'Golden Globe for The Aviator', body: 'Won the Golden Globe for Best Actor in a Drama for playing Howard Hughes, and earned an Oscar nomination.' },
  { year: '2005', kind: 'honour', title: 'Order of Arts and Letters', body: 'Named a Commander of France\'s Order of Arts and Letters for his contribution to the arts.' },
  { year: '2007', kind: 'award', title: 'Oscar nomination for Blood Diamond', body: 'His third Oscar nomination, for Best Actor.' },
  { year: '2009', kind: 'planet', title: 'Big Green Help Award', body: 'Received the first Big Green Help Award at the Nickelodeon Kids\' Choice Awards for inspiring young people to care about the climate.' },
  { year: '2014', kind: 'award', title: 'Golden Globe for The Wolf of Wall Street', body: 'Won Best Actor in a Musical or Comedy, plus a Critics\' Choice Award, and earned Oscar nominations for Best Actor and, as a producer, Best Picture.' },
  { year: '2014', kind: 'planet', title: 'United Nations Messenger of Peace', body: 'Designated a UN Messenger of Peace with a focus on climate change, and received the Clinton Global Citizen Award the same year.' },
  { year: '2016', kind: 'award', title: 'The Oscar', body: 'Won the Academy Award for Best Actor for The Revenant, along with the Golden Globe, BAFTA, Screen Actors Guild and Critics\' Choice awards for the same performance.' },
  { year: '2016', kind: 'honour', title: 'Time 100', body: 'Named one of Time magazine\'s 100 most influential people in the world, with the essay written by John Kerry highlighting his environmental work.' },
  { year: '2019', kind: 'planet', title: 'Co-chaired the launch of Earth Alliance', body: 'Launched Earth Alliance with Laurene Powell Jobs and Brian Sheth, which quickly committed $5 million to an emergency fund for the Amazon.' },
  { year: '2020', kind: 'award', title: 'Oscar nomination for Once Upon a Time… in Hollywood', body: 'His sixth acting nomination, for playing Rick Dalton.' },
  { year: '2021', kind: 'planet', title: 'Re:wild is launched', body: 'The Leonardo DiCaprio Foundation joined forces with Global Wildlife Conservation to form Re:wild, with Leonardo as a founding board member.' },
  { year: '2022', kind: 'honour', title: 'Among the 50 greatest actors', body: 'Placed among the 50 greatest actors of all time in a poll of readers of Empire magazine.' },
  { year: '2026', kind: 'award', title: 'Oscar nomination for One Battle After Another', body: 'Received a Best Actor nomination at the 98th Academy Awards for the film by Paul Thomas Anderson.' },
];

export const CAREER_RECORDS = [
  { value: '≈ $7B', label: 'Worldwide box office from films in which he is the lead', note: 'As stated on Wikipedia' },
  { value: '8×', label: 'Named in annual lists of the world\'s highest-paid actors', note: 'As stated on Wikipedia' },
  { value: '$50M', label: 'His largest single payday, from Inception', note: 'Through a share of the film\'s first-dollar gross' },
  { value: '#1', label: 'Titanic, the highest-grossing film in the world when it was released', note: 'Held the record for about twelve years' },
];

export const PLANET_FACTS = [
  { value: '1998', label: 'Foundation founded at age 24', body: 'The Leonardo DiCaprio Foundation began with a mission to protect the planet\'s wild places.' },
  { value: '200+', label: 'projects supported in 50 countries', body: 'By its own account, the foundation funded more than 200 projects across Asia, the Americas, Africa, the Arctic, Antarctica and the oceans, awarding more than $80 million in grants.' },
  { value: '$5M', label: 'Amazon forest emergency fund', body: 'Earth Alliance, launched in 2019 with Laurene Powell Jobs and Brian Sheth, committed $5 million to protect the Amazon and its Indigenous communities in the 2019 fires.' },
  { value: '12M+', label: 'acres conserved by Re:wild', body: 'Re:wild, formed in 2021 from the foundation and Global Wildlife Conservation, reports more than 12 million acres protected, benefiting over 16,000 species.' },
];

export const DOCUMENTARIES = [
  { year: '2007', title: 'The 11th Hour', role: 'Producer, co-writer and narrator' },
  { year: '2014', title: 'Virunga', role: 'Executive producer' },
  { year: '2014', title: 'Cowspiracy: The Sustainability Secret', role: 'Executive producer' },
  { year: '2016', title: 'Before the Flood', role: 'Producer, host and narrator' },
  { year: '2016', title: 'The Ivory Game and Catching the Sun', role: 'Executive producer' },
  { year: '2019', title: 'Ice on Fire', role: 'Producer and narrator' },
];

export const FAMILY_ROOTS = {
  intro:
    'Leonardo Wilhelm DiCaprio was born in Los Angeles, California, on November 11, 1974. His roots run through Italy, Germany and Russia.',
  facts: [
    { label: 'Father', value: 'George DiCaprio, an underground comics artist and distributor.' },
    { label: 'Mother', value: 'Irmelin Indenbirken, a legal secretary who was born in Germany.' },
    { label: 'Paternal grandparents', value: 'Salvatore Di Caprio and Rosina Cassella, of Italian origin.' },
    { label: 'Maternal grandparents', value: 'Wilhelm Indenbirken, who was German, and Helene Indenbirken, who was Russian and lived in Germany.' },
    { label: 'Family', value: 'He is an only child. His parents divorced when he was one, and he was raised by his mother.' },
    { label: 'His name', value: 'According to the family story, his mother felt him kick for the first time while she was looking at a painting by Leonardo da Vinci in the Uffizi Gallery in Florence.' },
  ],
  childhood: [
    'He grew up in Los Angeles, first in a pair of small cottages in Echo Park and later in Los Feliz, a long way from the Hollywood glamour that would later make him famous.',
    'He went to public schools in the city, including the Los Angeles Center for Enriched Studies and John Marshall High School. He left high school and later earned his GED, to focus on acting.',
  ],
};

export const PRESENCE = [
  { title: 'A voice for the planet online', body: 'Leonardo\'s official social media accounts are used mainly to raise awareness of climate change, wildlife and conservation, and to amplify the work of Indigenous communities and environmental groups, far more than to promote his own films.' },
  { title: 'Selective with publicity', body: 'He is known for keeping his private life out of the spotlight, choosing when and where he speaks, and using his public attention for his work and his causes.' },
];

export const SOURCES = [
  { label: 'Wikipedia: Leonardo DiCaprio', url: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio' },
  { label: 'Wikipedia: List of awards and nominations received by Leonardo DiCaprio', url: 'https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio' },
  { label: 'United Nations: Messengers of Peace, Leonardo DiCaprio', url: 'https://www.un.org/en/messengers-peace/leonardo-dicaprio' },
  { label: 'World Economic Forum: Leonardo DiCaprio Foundation', url: 'https://www.weforum.org/organizations/leonardo-dicaprio-foundation-ldf/' },
  { label: 'Variety: Earth Alliance commits $5 million to Amazon fires', url: 'https://variety.com/2019/film/news/leonardo-dicaprio-earth-alliance-amazon-fires-1203313644/' },
  { label: 'World Economic Forum: Re:wild and the Galápagos', url: 'https://www.weforum.org/stories/2021/05/40-partners-including-leonardo-di-caprio-unite-to-restore-habitats-to-galapagos-islands/' },
];

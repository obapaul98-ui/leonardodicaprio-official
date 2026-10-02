export interface LegacyImage {
  src: string;
  caption: string;
  /** CSS object-position for cropping */
  focus?: string;
  credit?: string;
}

export interface LegacyEra {
  id: string;
  years: string;
  title: string;
  summary: string;
  paragraphs: string[];
  images: LegacyImage[];
}

const S = '/assets/stills/';
const L = '/assets/legacy/';
const P = '/assets/portraits/';

export const LEGACY_ERAS: LegacyEra[] = [
  {
    id: 'beginnings',
    years: '1991 – 1994',
    title: 'A Hollywood kid breaks through',
    summary: 'From commercials and TV bit parts to an Oscar nomination at 19.',
    paragraphs: [
      'Leonardo began acting as a child, working in television commercials, educational films and TV series before landing his first film role in Critters 3 in 1991. He was a working child actor in a city full of them, and the early years were about auditions, small parts and learning the craft.',
      'The turn came in 1993. In This Boy\'s Life he held his own opposite Robert De Niro, after being chosen from many young actors. Later that year, in What\'s Eating Gilbert Grape, he played Arnie, a teenager with an intellectual disability, alongside Johnny Depp. The performance earned him his first Academy Award nomination, for Best Supporting Actor, at the age of 19.',
    ],
    images: [
      { src: L + 'this-boys-life.jpg', caption: 'This Boy\'s Life (1993), opposite Robert De Niro', focus: '50% 40%' },
      { src: L + 'gilbert-grape.jpg', caption: 'What\'s Eating Gilbert Grape (1993), with Johnny Depp', focus: '30% 35%' },
    ],
  },
  {
    id: 'stardom',
    years: '1995 – 1998',
    title: 'From young talent to global phenomenon',
    summary: 'Romeo + Juliet, Titanic, and the biggest fame in the world.',
    paragraphs: [
      'He followed his breakthrough with riskier work, including The Basketball Diaries, a harsh adaptation of Jim Carroll\'s memoir. In 1996 he starred in Baz Luhrmann\'s Romeo + Juliet, a bold, modern take on Shakespeare that made him a star with a new generation.',
      'Then came Titanic in 1997. The film became a worldwide event, passing a billion dollars at the box office, and Leonardo went from respected young actor to one of the most famous people on the planet. In the same period, in 1998, he founded the Leonardo DiCaprio Foundation, an early sign that his ambitions reached beyond the screen.',
    ],
    images: [
      { src: L + 'basketball-diaries.jpg', caption: 'The Basketball Diaries (1995)', focus: '50% 30%' },
      { src: L + 'romeo-juliet.jpg', caption: 'Romeo + Juliet (1996), with Claire Danes', focus: '50% 40%' },
      { src: S + 'titanic-s1.jpg', caption: 'Titanic (1997), the film that made him a global icon', focus: '50% 40%' },
    ],
  },
  {
    id: 'harder-path',
    years: '1999 – 2005',
    title: 'Choosing the harder path',
    summary: 'He turned away from easy fame and toward great directors.',
    paragraphs: [
      'After Titanic, Leonardo could have taken any easy, safe role in Hollywood. He mostly did the opposite. He worked with directors who would stretch him: Danny Boyle on The Beach, Steven Spielberg on Catch Me If You Can, and, most importantly, Martin Scorsese.',
      'Gangs of New York in 2002 began the partnership that would define his career. In 2004 The Aviator, in which he played Howard Hughes, earned him a Golden Globe and another Oscar nomination, and showed that the young star had become a serious leading man.',
    ],
    images: [
      { src: L + 'the-beach.jpg', caption: 'The Beach (2000)', focus: '50% 40%' },
      { src: L + 'gangs-of-new-york.jpg', caption: 'Gangs of New York (2002), his first film with Martin Scorsese', focus: '50% 40%' },
      { src: S + 'catch-me-if-you-can-s3.jpg', caption: 'Catch Me If You Can (2002), directed by Steven Spielberg', focus: '50% 40%' },
      { src: S + 'the-aviator-s1.jpg', caption: 'The Aviator (2004), as Howard Hughes', focus: '50% 40%' },
    ],
  },
  {
    id: 'master-years',
    years: '2006 – 2013',
    title: 'The great collaborations',
    summary: 'Scorsese, Nolan and Tarantino, and a run of modern classics.',
    paragraphs: [
      'This was the stretch in which Leonardo worked with almost every major director of his generation. The Departed in 2006 won Best Picture. Blood Diamond brought another Oscar nomination. Inception and Shutter Island arrived in the same year, 2010, one a huge original blockbuster and the other a dark psychological thriller. J. Edgar, Django Unchained and The Great Gatsby followed.',
      'In 2013 The Wolf of Wall Street, which he also produced, earned him a Golden Globe and a fourth acting nomination for an Oscar. By the end of this run his name on a poster was one of the few things that could bring a worldwide audience to a serious adult film.',
    ],
    images: [
      { src: S + 'the-departed-s1.jpg', caption: 'The Departed (2006)', focus: '50% 40%' },
      { src: L + 'blood-diamond.jpg', caption: 'Blood Diamond (2006)', focus: '50% 40%' },
      { src: S + 'inception-s2.jpg', caption: 'Inception (2010)', focus: '50% 40%' },
      { src: L + 'j-edgar.jpg', caption: 'J. Edgar (2011), directed by Clint Eastwood', focus: '60% 40%' },
      { src: L + 'great-gatsby.jpg', caption: 'The Great Gatsby (2013)', focus: '50% 40%' },
      { src: S + 'the-wolf-of-wall-street-s1.jpg', caption: 'The Wolf of Wall Street (2013)', focus: '50% 40%' },
    ],
  },
  {
    id: 'oscar',
    years: '2015 – 2016',
    title: 'The Oscar, and the speech',
    summary: 'The Revenant, a long-awaited win, and a message to the world.',
    paragraphs: [
      'The Revenant asked more of him physically than any film before it. Shot in freezing, remote locations in natural light, it demanded months of hard work in snow and rivers. On February 28, 2016, after years of nominations, Leonardo won the Academy Award for Best Actor.',
      'In his acceptance speech he used his moment to speak about climate change, calling it the most urgent threat facing our entire species. That same year he produced and starred in the documentary Before the Flood. For many people, it was the moment his two lives, as an actor and as an advocate, became one story.',
    ],
    images: [
      { src: S + 'the-revenant-s1.jpg', caption: 'The Revenant (2015), the performance that won the Oscar', focus: '50% 30%' },
      { src: P + 'tiff-2016-red-carpet.jpg', caption: 'Toronto International Film Festival, 2016', focus: '50% 25%', credit: 'Photo: GabboT · CC BY-SA 2.0' },
    ],
  },
  {
    id: 'today',
    years: '2019 – today',
    title: 'A legacy still being written',
    summary: 'New collaborations, a new generation of directors, and a larger purpose.',
    paragraphs: [
      'He has kept choosing ambitious work. In Once Upon a Time in Hollywood he starred beside Brad Pitt for the first time, earning another Oscar nomination. In Don\'t Look Up he made a satire about ignoring scientific warnings. In Killers of the Flower Moon he reunited with Martin Scorsese to tell the story of the Osage murders. In 2025 he starred in One Battle After Another for director Paul Thomas Anderson, which earned him another Best Actor nomination at the 98th Academy Awards.',
      'Off screen, his environmental work has deepened. He helped found Earth Alliance in 2019 and Re:wild in 2021, and he keeps using his reach to draw attention to wildlife, forests, oceans and Indigenous communities.',
    ],
    images: [
      { src: S + 'once-upon-a-time-in-hollywood-s2.jpg', caption: 'Once Upon a Time… in Hollywood (2019)', focus: '50% 40%' },
      { src: S + 'dont-look-up-s3.jpg', caption: 'Don\'t Look Up (2021)', focus: '50% 40%' },
      { src: S + 'killers-of-the-flower-moon-s1.jpg', caption: 'Killers of the Flower Moon (2023)', focus: '50% 40%' },
      { src: L + 'one-battle.jpg', caption: 'One Battle After Another (2025), directed by Paul Thomas Anderson', focus: '50% 40%' },
    ],
  },
];

export const HOLLYWOOD_IMPACT = [
  {
    title: 'He made a love story the biggest film in the world',
    body: 'Titanic proved that an epic romance, with a very long running time and a story everyone knew the ending to, could be the biggest event in cinema. It became the first film to pass a billion dollars and reset what studios believed audiences would show up for.',
  },
  {
    title: 'He helped keep serious, adult films alive',
    body: 'In a period when blockbusters were increasingly built around sequels and franchises, his name could still open original, ambitious films for grown-up audiences, from Inception to The Departed to Killers of the Flower Moon.',
  },
  {
    title: 'He built one of cinema\'s great partnerships',
    body: 'Over six films, from Gangs of New York to Killers of the Flower Moon, he and Martin Scorsese created one of the great actor and director collaborations in film history, in the tradition of Scorsese\'s earlier work with Robert De Niro.',
  },
  {
    title: 'He put his weight behind other people\'s stories',
    body: 'Through his production company, Appian Way, and by lending his name to projects, he helped bring difficult stories to the screen, including The Wolf of Wall Street and Killers of the Flower Moon.',
  },
  {
    title: 'He showed that a star could also be a serious artist',
    body: 'After Titanic, he could have repeated himself. Instead he chose risky roles and demanding directors again and again. That choice, more than any single film, changed how many people saw what a leading man in Hollywood could be.',
  },
];

export const PHILOSOPHY = [
  {
    title: 'Choose the work, not the fame',
    body: 'He picks projects for the story and the filmmaker, not for the size of the audience. That is why his filmography looks more like a series of bets than a brand.',
  },
  {
    title: 'Go all the way in',
    body: 'From months of cold in The Revenant to years of preparation for The Aviator, he is known for committing completely to a role and to the people making it with him.',
  },
  {
    title: 'Stay loyal to the people you trust',
    body: 'His long creative partnerships, with Martin Scorsese above all, and his lifelong friendship with Kate Winslet, show a person who values trust and loyalty over novelty.',
  },
  {
    title: 'Guard your private life',
    body: 'Despite being one of the most photographed people in the world, he has kept much of his private life to himself, and his public image has been built through his work and his causes rather than through publicity.',
  },
  {
    title: 'Use influence for something bigger',
    body: 'He has said again and again, in speeches and in action, that fame is only worth something if you use it. For him, that has meant putting a global platform behind nature and climate.',
  },
];

export const CARES = [
  {
    title: 'The natural world',
    body: 'Wild places and the wildlife in them are at the centre of his work. He founded the Leonardo DiCaprio Foundation in 1998, and has supported efforts to protect forests, oceans and endangered species ever since.',
  },
  {
    title: 'The climate crisis',
    body: 'He was named a United Nations Messenger of Peace for climate change in 2014, produced Before the Flood in 2016, and used his Oscar speech to call for action.',
  },
  {
    title: 'Indigenous peoples',
    body: 'He has repeatedly lent his voice to the communities who defend forests and rivers, and to stories like that of the Osage Nation in Killers of the Flower Moon.',
  },
  {
    title: 'Great storytelling',
    body: 'Beyond causes, what he cares about most as an artist is simple: good stories, told by great filmmakers, with the time and freedom to do them properly.',
  },
];

export const REMEMBERED = [
  { title: 'The Titanic generation', body: 'The face of a film that millions around the world shared, and still return to.' },
  { title: 'An unmatched run of films', body: 'A body of work spanning Scorsese, Nolan, Tarantino, Spielberg, Eastwood and Anderson.' },
  { title: 'The Revenant moment', body: 'The long-awaited Oscar, and a speech that tied cinema to the climate.' },
  { title: 'A voice for the planet', body: 'An actor who spent decades, and a great deal of his influence, defending wild places.' },
  { title: 'A standard for the craft', body: 'Proof that a movie star can also be a serious, risk-taking artist.' },
];

/** Worldwide box office in millions of USD, rounded. Used for the interactive chart. */
export interface BlockbusterEntry {
  id: string;
  title: string;
  year: number;
  director: string;
  grossM: number;
  hook: string;
}

export const BLOCKBUSTERS: BlockbusterEntry[] = [
  { id: 'titanic', title: 'Titanic', year: 1997, director: 'James Cameron', grossM: 2260, hook: 'The first film ever to pass a billion dollars, and the biggest in history for about twelve years. People went back to see it again and again, and a song, a pose and a line from it entered everyday life.' },
  { id: 'inception', title: 'Inception', year: 2010, director: 'Christopher Nolan', grossM: 830, hook: 'An original idea with no sequel or franchise behind it, and one of the biggest hits of its decade. It sent people home arguing about a spinning top.' },
  { id: 'the-revenant', title: 'The Revenant', year: 2015, director: 'Alejandro G. Iñárritu', grossM: 533, hook: 'A brutal survival story shot in natural light in some of the coldest places on Earth. It won Leonardo his Oscar and drew audiences who came for the spectacle and stayed for the performance.' },
  { id: 'django-unchained', title: 'Django Unchained', year: 2012, director: 'Quentin Tarantino', grossM: 425, hook: 'Tarantino\'s biggest hit at the time. Leonardo\'s turn as the charming, cruel Calvin Candie gave audiences one of the most talked-about villains of the decade.' },
  { id: 'the-wolf-of-wall-street', title: 'The Wolf of Wall Street', year: 2013, director: 'Martin Scorsese', grossM: 392, hook: 'A three-hour, R-rated comedy about greed that became a pop-culture phenomenon. It earned five Oscar nominations and a flood of quotes and memes.' },
  { id: 'once-upon-a-time-in-hollywood', title: 'Once Upon a Time… in Hollywood', year: 2019, director: 'Quentin Tarantino', grossM: 377, hook: 'Leonardo and Brad Pitt on screen together for the first time. It opened at number one and earned ten Oscar nominations.' },
  { id: 'catch-me-if-you-can', title: 'Catch Me If You Can', year: 2002, director: 'Steven Spielberg', grossM: 352, hook: 'A breezy, stylish chase film that proved he could carry a light caper as well as a heavy drama.' },
  { id: 'shutter-island', title: 'Shutter Island', year: 2010, director: 'Martin Scorsese', grossM: 294, hook: 'A haunting psychological thriller that opened at number one and kept fans rewatching for clues.' },
  { id: 'the-departed', title: 'The Departed', year: 2006, director: 'Martin Scorsese', grossM: 291, hook: 'The crime thriller that won Best Picture and finally earned Scorsese his Best Director Oscar.' },
  { id: 'the-aviator', title: 'The Aviator', year: 2004, director: 'Martin Scorsese', grossM: 214, hook: 'A lavish portrait of Howard Hughes that won five Oscars and made Leonardo a serious leading man.' },
  { id: 'killers-of-the-flower-moon', title: 'Killers of the Flower Moon', year: 2023, director: 'Martin Scorsese', grossM: 157, hook: 'A long, serious epic that carried the story of the Osage murders into cinemas around the world and earned ten Oscar nominations.' },
];

export interface CinemaMoment {
  filmId: string;
  title: string;
  stat: string;
  body: string;
}

export const CINEMA_MOMENTS: CinemaMoment[] = [
  { filmId: 'titanic', title: 'The first billion', stat: '15 weeks at No. 1', body: 'Titanic stayed at the top of the U.S. box office for fifteen weeks in a row, won eleven Oscars and made Leonardo a household name on every continent. It changed what studios believed an audience would sit through for love.' },
  { filmId: 'the-departed', title: 'Scorsese\'s long-awaited Oscar', stat: 'Best Picture', body: 'After years of nominations, Martin Scorsese finally won Best Director for The Departed, a tense mob thriller carried by Leonardo\'s fraying undercover cop. Hollywood celebrated it as a career honoured.' },
  { filmId: 'inception', title: 'Originality as a blockbuster', stat: '≈ $830M, no franchise', body: 'Inception proved that a huge summer film could be built on a puzzle of an idea. Its rotating hallway, folding city and booming score were copied for years afterwards.' },
  { filmId: 'the-wolf-of-wall-street', title: 'Comedy at full volume', stat: '5 Oscar nominations', body: 'Leonardo and Scorsese turned a story of greed into a wild, fast, darkly funny three-hour film that audiences argued over and quoted endlessly.' },
  { filmId: 'the-revenant', title: 'The Oscar', stat: 'Best Actor, 2016', body: 'The Revenant asked everything of him physically. The win that followed, and the speech that went with it, were celebrated around the world.' },
  { filmId: 'once-upon-a-time-in-hollywood', title: 'Two stars, one love letter', stat: '10 Oscar nominations', body: 'Tarantino\'s tribute to 1969 Los Angeles put Leonardo and Brad Pitt together at last, playing an actor and his stunt double with real affection.' },
  { filmId: 'dont-look-up', title: 'A film that started an argument', stat: 'A Netflix streaming hit', body: 'Don\'t Look Up got scientists, politicians and viewers debating how the world responds to warnings. It sat among the most-watched films in Netflix history when it came out.' },
  { filmId: 'killers-of-the-flower-moon', title: 'Bringing the Osage story to the world', stat: '10 Oscar nominations', body: 'A story many people had never been taught reached cinemas worldwide, with Osage voices, language and customs at the centre of the telling.' },
];

export interface ScorseseFilm {
  filmId: string;
  title: string;
  year: number;
  note: string;
}

export const SCORSESE_RUN: ScorseseFilm[] = [
  { filmId: 'gangs-of-new-york', title: 'Gangs of New York', year: 2002, note: 'The beginning: a sprawling, violent portrait of 19th-century New York that earned ten Oscar nominations.' },
  { filmId: 'the-aviator', title: 'The Aviator', year: 2004, note: 'Leonardo as Howard Hughes, and the first time the pair reached the top of awards season together.' },
  { filmId: 'the-departed', title: 'The Departed', year: 2006, note: 'Best Picture, and Scorsese\'s first Best Director Oscar.' },
  { filmId: 'shutter-island', title: 'Shutter Island', year: 2010, note: 'A dark psychological thriller that opened at number one.' },
  { filmId: 'the-wolf-of-wall-street', title: 'The Wolf of Wall Street', year: 2013, note: 'Their loudest, funniest collaboration, with Leonardo also producing.' },
  { filmId: 'killers-of-the-flower-moon', title: 'Killers of the Flower Moon', year: 2023, note: 'The most serious film of the run, about the Osage murders of the 1920s.' },
];

export const DIRECTORS = [
  { name: 'James Cameron', films: 'Titanic' },
  { name: 'Steven Spielberg', films: 'Catch Me If You Can' },
  { name: 'Martin Scorsese', films: 'Six films, 2002–2023' },
  { name: 'Christopher Nolan', films: 'Inception' },
  { name: 'Quentin Tarantino', films: 'Django Unchained, Once Upon a Time… in Hollywood' },
  { name: 'Clint Eastwood', films: 'J. Edgar' },
  { name: 'Alejandro G. Iñárritu', films: 'The Revenant' },
  { name: 'Adam McKay', films: 'Don\'t Look Up' },
  { name: 'Paul Thomas Anderson', films: 'One Battle After Another' },
  { name: 'Baz Luhrmann', films: 'Romeo + Juliet, The Great Gatsby' },
];

/** Wikipedia articles that cover his life and career in more depth (all checked to exist). */
export const WIKIPEDIA_LINKS = [
  { title: 'Leonardo DiCaprio', note: 'His full biography', href: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio' },
  { title: 'Leonardo DiCaprio filmography', note: 'Every film, series and documentary', href: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio_filmography' },
  { title: 'Awards and nominations', note: 'The complete list of honours', href: 'https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio' },
  { title: 'Martin Scorsese and Leonardo DiCaprio', note: 'The partnership, film by film', href: 'https://en.wikipedia.org/wiki/Martin_Scorsese_and_Leonardo_DiCaprio' },
  { title: 'Leonardo DiCaprio Foundation', note: 'His environmental foundation', href: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio_Foundation' },
  { title: 'Before the Flood', note: 'The climate documentary', href: 'https://en.wikipedia.org/wiki/Before_the_Flood' },
  { title: 'Titanic (1997 film)', note: 'The film that made him a global star', href: 'https://en.wikipedia.org/wiki/Titanic_%281997_film%29' },
  { title: 'The Revenant (2015 film)', note: 'The performance that won the Oscar', href: 'https://en.wikipedia.org/wiki/The_Revenant_%282015_film%29' },
  { title: 'What Happens at Night', note: 'His next film with Scorsese', href: 'https://en.wikipedia.org/wiki/What_Happens_at_Night' },
];

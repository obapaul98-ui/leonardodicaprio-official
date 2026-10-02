export interface FilmCredit {
  name: string;
  character: string;
  note?: string;
  isLeo?: boolean;
}

export interface FilmImpact {
  /** One-line verdict shown under the title */
  headline: string;
  director: string;
  directorNote: string;
  studio: string;
  budget: string;
  gross: string;
  grossNote: string;
  honors: string[];
  /** "Why it matters": the film's impact on audiences, cinema and Hollywood */
  impact: string[];
  /** Leonardo's own contribution to the film */
  leoRole: string;
  cast: FilmCredit[];
  /** Optional deep-dive content, shown as extra sections on the film page */
  byTheNumbers?: { value: string; label: string }[];
  behindTheScenes?: { title: string; body: string }[];
  timeline?: { when: string; what: string }[];
  didYouKnow?: string[];
}

const LEO = 'Leonardo DiCaprio';

export const FILM_IMPACT: Record<string, FilmImpact> = {
  titanic: {
    headline: 'The love story that turned a disaster into a global shared memory.',
    director: 'James Cameron',
    directorNote:
      'Writer, director and co-producer. Cameron pushed Hollywood to build a near full-scale replica of the ship and invented new underwater and effects techniques to film it.',
    studio: 'Paramount Pictures / 20th Century Fox',
    budget: '≈ $200 million',
    gross: '≈ $2.26 billion',
    grossNote: 'Worldwide, including re-releases. It was the highest-grossing film ever for about 12 years.',
    honors: [
      '11 Academy Awards, including Best Picture and Best Director',
      '14 Oscar nominations, a record it shares with All About Eve',
      'Best Original Song for "My Heart Will Go On"',
      'Golden Globe for Best Motion Picture – Drama',
    ],
    impact: [
      'Titanic did not just break box-office records, it rewrote what a film could be in the cinema. It stayed in theatres for months, audiences returned again and again, and it became the first film to pass one billion dollars worldwide. Nothing had ever sold that many tickets for that long.',
      'It proved that an epic romance, a three-hour running time and a story everyone knew the ending to could still be the biggest event of the decade. Studios took note: the big-budget, big-emotion spectacle became a template for years afterwards.',
      'Culturally, the film changed how the world remembers the 1912 sinking. The ship, the "king of the world" moment at the bow and Celine Dion\'s theme song became part of everyday life across every continent. James Horner\'s score became one of the best-selling orchestral soundtracks of all time.',
      'Technically, it pushed visual effects and large-scale production design forward. It is still held up as proof that a film can be both a technical landmark and an emotional one, and its 2012 3D and later anniversary releases showed the audience had never gone away.',
    ],
    leoRole:
      'As Jack Dawson, a penniless artist who wins his passage in a card game, Leonardo became a global star almost overnight. His warmth, charm and openness made the film\'s central romance believable, and the performance introduced him to a worldwide audience that would follow him through every role since.',
    byTheNumbers: [
      { value: '11', label: 'Academy Awards won' },
      { value: '14', label: 'Oscar nominations' },
      { value: '15', label: 'straight weeks at No. 1 in the U.S.' },
      { value: '$1B', label: 'first film ever to pass it' },
      { value: '194 min', label: 'running time' },
      { value: '12', label: 'dives Cameron made to the real wreck' },
    ],
    behindTheScenes: [
      {
        title: 'Cameron went to the real wreck first',
        body: 'Before filming, James Cameron made a series of deep-sea dives to the actual Titanic wreck in the North Atlantic, and used the footage for the opening and closing of the film. The visit shaped how the ship\'s final hours were recreated on screen.',
      },
      {
        title: 'A ship built almost to scale',
        body: 'The production built a huge, near full-size replica of the ship\'s exterior and a giant water tank at a purpose-built studio in Baja California, Mexico. Interiors, furniture, china and carpets were reproduced from original plans and surviving samples.',
      },
      {
        title: 'The most expensive film ever made at the time',
        body: 'With a budget of around $200 million, Titanic was widely expected to fail. The release was moved from the summer to December 1997 to give the effects time to finish. It went on to become the biggest hit in cinema history up to that point.',
      },
      {
        title: 'The sketch is Cameron\'s own work',
        body: 'The drawing of Rose that Jack makes in the film was drawn by James Cameron himself, and the hands you see sketching in the close-ups are his.',
      },
    ],
    timeline: [
      { when: 'April 1912', what: 'R.M.S. Titanic sinks on her maiden voyage.' },
      { when: '1995–1997', what: 'Cameron dives to the wreck, then shoots the film in Mexico and on location.' },
      { when: 'Dec 19, 1997', what: 'Titanic opens in the U.S. and stays at No. 1 for 15 weeks.' },
      { when: 'Early 1998', what: 'It becomes the first film to pass $1 billion, then the highest-grossing film ever.' },
      { when: 'March 1998', what: 'It wins 11 Academy Awards, tying the record held by Ben-Hur.' },
      { when: '2010', what: 'Cameron\'s own Avatar finally takes the box-office record.' },
      { when: 'April 2012', what: 'A 3D re-release marks 100 years since the sinking.' },
      { when: 'February 2023', what: 'A 25th-anniversary re-release returns it to cinemas in 4K 3D.' },
    ],
    didYouKnow: [
      '"My Heart Will Go On" by Celine Dion reached No. 1 on the Billboard Hot 100 and won multiple Grammy Awards, including Record of the Year and Song of the Year.',
      'Leonardo DiCaprio was not nominated for an Oscar for Jack Dawson, a fact fans have debated ever since.',
      'Gloria Stuart, who played the 100-year-old Rose, was 87 when she was nominated, then the oldest person ever nominated for an acting Oscar.',
      'Leonardo and Kate Winslet stayed close friends for life and reunited on screen in Revolutionary Road (2008).',
      'In 2023, Cameron ran an experiment for a National Geographic special on whether Jack could have survived on the floating door. His conclusion was that he could have, with the right technique.',
    ],
    cast: [
      { name: LEO, character: 'Jack Dawson', isLeo: true },
      { name: 'Kate Winslet', character: 'Rose DeWitt Bukater', note: 'Oscar-nominated for Best Actress' },
      { name: 'Billy Zane', character: 'Caledon "Cal" Hockley' },
      { name: 'Kathy Bates', character: 'Molly Brown' },
      { name: 'Gloria Stuart', character: 'Old Rose', note: 'Oscar-nominated for Best Supporting Actress at 87' },
      { name: 'Frances Fisher', character: 'Ruth DeWitt Bukater' },
      { name: 'Bill Paxton', character: 'Brock Lovett' },
      { name: 'Bernard Hill', character: 'Captain Edward Smith' },
      { name: 'Victor Garber', character: 'Thomas Andrews' },
    ],
  },

  'the-departed': {
    headline: 'The crime thriller that finally won Martin Scorsese his Oscar.',
    director: 'Martin Scorsese',
    directorNote:
      'Scorsese adapted the Hong Kong thriller Infernal Affairs to Boston and, after several nominations over the decades, won his first Best Director Oscar for it.',
    studio: 'Warner Bros. Pictures',
    budget: '≈ $90 million',
    gross: '≈ $291 million',
    grossNote: 'Worldwide. It was Scorsese\'s highest-grossing film at the time.',
    honors: [
      '4 Academy Awards: Best Picture, Best Director, Best Adapted Screenplay, Best Film Editing',
      'Mark Wahlberg nominated for Best Supporting Actor',
      'Scorsese\'s first Oscar for directing',
    ],
    impact: [
      'The Departed turned a Hong Kong thriller into an American classic and showed the strength of the crime genre at a moment when many thought it had run its course. Its tense game of two moles, one inside the police and one inside the mob, became one of the most imitated plots of its decade.',
      'It is also the film that gave Martin Scorsese the Best Director Oscar the industry had owed him for years. The award was celebrated across Hollywood as a recognition of an entire career, and the film went on to win Best Picture too.',
      'Audiences responded to its pace, its violence and its dark humour. The cast was packed with legends and rising stars, and the film is still quoted and rewatched, regularly named among the best crime films of the 2000s.',
    ],
    leoRole:
      'Leonardo plays Billy Costigan, a young cop sent undercover into Frank Costello\'s gang. It is a performance built on pressure and fear: a man slowly losing himself in a lie he cannot leave. The role deepened his partnership with Scorsese and helped define the intense, unguarded leading man he became.',
    byTheNumbers: [{"value": "4", "label": "Academy Awards won"}, {"value": "5", "label": "Oscar nominations"}, {"value": "151 min", "label": "running time"}, {"value": "≈ $291M", "label": "worldwide gross"}, {"value": "3rd", "label": "Scorsese–DiCaprio film"}],
    behindTheScenes: [{"title": "A Hong Kong thriller moved to Boston", "body": "The film remakes the 2002 Hong Kong crime thriller Infernal Affairs. Screenwriter William Monahan relocated the story to Boston and rooted it in the city's Irish-American crime world, loosely inspired by the real Winter Hill Gang."}, {"title": "Scorsese's visual signature", "body": "Scorsese marked characters with X shapes in the frame, a nod to the 1932 film Scarface, and kept the camera moving to make every scene feel on edge."}, {"title": "Room to improvise", "body": "Jack Nicholson, playing mob boss Frank Costello, improvised several moments, and Scorsese kept the best of them in the finished film."}],
    timeline: [{"when": "2002", "what": "Hong Kong's Infernal Affairs is released."}, {"when": "2005", "what": "The Departed is shot in Boston and New York."}, {"when": "Oct 6, 2006", "what": "The film opens in the U.S. and goes to No. 1."}, {"when": "Feb 25, 2007", "what": "It wins four Oscars, including Best Picture and Best Director."}],
    didYouKnow: ["It was Martin Scorsese's first Best Director win after five earlier nominations.", "Editor Thelma Schoonmaker won her third Oscar for the film, all for her work with Scorsese.", "It was the third film Leonardo made with Scorsese, after Gangs of New York and The Aviator."],
    cast: [
      { name: LEO, character: 'Billy Costigan', isLeo: true },
      { name: 'Matt Damon', character: 'Colin Sullivan' },
      { name: 'Jack Nicholson', character: 'Frank Costello' },
      { name: 'Mark Wahlberg', character: 'Sgt. Dignam', note: 'Oscar-nominated for Best Supporting Actor' },
      { name: 'Martin Sheen', character: 'Captain Queenan' },
      { name: 'Vera Farmiga', character: 'Madolyn Madden' },
      { name: 'Ray Winstone', character: 'Mr. French' },
      { name: 'Alec Baldwin', character: 'Captain Ellerby' },
    ],
  },

  inception: {
    headline: 'A blockbuster that asked audiences to think, and they came in their millions.',
    director: 'Christopher Nolan',
    directorNote:
      'Nolan wrote and directed Inception after about ten years of developing the idea, shooting on location across six countries and building practical effects in-camera wherever possible.',
    studio: 'Warner Bros. Pictures / Legendary Pictures',
    budget: '≈ $160 million',
    gross: '≈ $830 million',
    grossNote: 'Worldwide. One of the biggest original (non-sequel, non-adaptation) hits of its era.',
    honors: [
      '4 Academy Awards: Cinematography, Sound Editing, Sound Mixing, Visual Effects',
      '8 Oscar nominations in total, including Best Picture and Best Original Screenplay',
      'BAFTA wins for Production Design and Special Visual Effects',
    ],
    impact: [
      'Inception showed that a huge summer blockbuster could be built on a completely original idea, with no franchise behind it. Its layered dream structure sent viewers home debating it, and the final spinning top shot became one of the most discussed endings in modern film.',
      'Its look and sound changed the blockbuster. The rotating hallway fight and the folding Paris street were done largely with real sets and practical effects, setting a standard that effects teams still point to. Hans Zimmer\'s booming brass motif was copied in film trailers for years.',
      'The film also helped restore trust in big, intelligent cinema. It made hundreds of millions of dollars from word of mouth and repeat viewings, and it cemented Christopher Nolan as one of the few directors audiences follow by name.',
    ],
    leoRole:
      'Leonardo is Dom Cobb, a thief who steals secrets from dreams and is haunted by guilt over his wife. He anchors the film\'s emotional core: all the spectacle works because audiences believe in Cobb\'s need to get home to his children.',
    byTheNumbers: [{"value": "4", "label": "Academy Awards won"}, {"value": "8", "label": "Oscar nominations"}, {"value": "148 min", "label": "running time"}, {"value": "≈ $830M", "label": "worldwide gross"}, {"value": "6", "label": "countries filmed in"}],
    behindTheScenes: [{"title": "A rotating hallway, built for real", "body": "The famous zero-gravity hallway fight was shot on a huge set that physically rotated, with the actors really moving through it rather than relying on computer effects alone."}, {"title": "Paris folds in half", "body": "The city-folding sequence combined practical sets with digital effects from the studio Double Negative, and became one of the film's signature images."}, {"title": "A score born from a slowed-down song", "body": "Hans Zimmer's booming brass sound was built from a slowed-down version of Edith Piaf's \"Non, je ne regrette rien\", the song the characters use as a signal."}],
    timeline: [{"when": "Early 2000s", "what": "Christopher Nolan begins developing the idea, which takes about ten years to reach the screen."}, {"when": "2009", "what": "Filming starts in Tokyo and moves through the U.K., France, Morocco, Canada and the U.S."}, {"when": "July 16, 2010", "what": "Inception opens worldwide."}, {"when": "Feb 27, 2011", "what": "It wins four Oscars."}],
    didYouKnow: ["Marion Cotillard, who plays Mal, won an Oscar for playing Edith Piaf in La Vie en Rose, the singer whose song drives the film's score.", "Nolan has always left the ending open on purpose: the film cuts to black before the top shows whether it falls.", "Inception was a major original hit in an era dominated by sequels and adaptations."],
    cast: [
      { name: LEO, character: 'Dom Cobb', isLeo: true },
      { name: 'Joseph Gordon-Levitt', character: 'Arthur' },
      { name: 'Elliot Page', character: 'Ariadne', note: 'Credited as Ellen Page at release' },
      { name: 'Tom Hardy', character: 'Eames' },
      { name: 'Ken Watanabe', character: 'Saito' },
      { name: 'Cillian Murphy', character: 'Robert Fischer' },
      { name: 'Marion Cotillard', character: 'Mal Cobb' },
      { name: 'Michael Caine', character: 'Professor Miles' },
    ],
  },

  'the-revenant': {
    headline: 'The survival epic that finally earned Leonardo his Academy Award.',
    director: 'Alejandro G. Iñárritu',
    directorNote:
      'Iñárritu shot in sequence, in remote winter locations, using only natural light. He won Best Director for the second year in a row after Birdman.',
    studio: '20th Century Fox / New Regency',
    budget: '≈ $135 million',
    gross: '≈ $533 million',
    grossNote: 'Worldwide.',
    honors: [
      '3 Academy Awards: Best Actor (Leonardo DiCaprio), Best Director, Best Cinematography',
      '12 Oscar nominations, including Best Picture',
      'Golden Globe, BAFTA and SAG awards for Leonardo as Best Actor',
    ],
    impact: [
      'The Revenant became the defining film of Leonardo DiCaprio\'s career. After years of acclaimed performances and several nominations, he won the Best Actor Oscar for it, and the moment was celebrated by audiences around the world.',
      'It also pushed what a big-studio film could look like. Emmanuel Lubezki\'s natural-light photography, with its long, flowing takes in freezing wilderness, won him a third Best Cinematography Oscar in a row and inspired a wave of imitators.',
      'The production itself became part of the story. The cast and crew worked in deep cold, in rivers and in snow, and the film\'s physical realism, from the bear attack to the river scenes, became a talking point that drew audiences to watch it in theatres.',
      'In his acceptance speech, Leonardo used the platform to talk about climate change, saying it is "the most urgent threat facing our entire species." The line was widely quoted and tied his screen work to the cause he has championed for decades.',
    ],
    leoRole:
      'Leonardo plays Hugh Glass, a frontiersman left for dead after a bear attack who crawls across the winter wilderness in search of the men who betrayed him. Much of the performance is physical and almost wordless, and it earned him the Oscar, the Golden Globe, the BAFTA and the SAG award in the same season.',
    byTheNumbers: [{"value": "3", "label": "Academy Awards won"}, {"value": "12", "label": "Oscar nominations"}, {"value": "156 min", "label": "running time"}, {"value": "≈ $533M", "label": "worldwide gross"}, {"value": "1st", "label": "Oscar for Leonardo DiCaprio"}],
    behindTheScenes: [{"title": "Only natural light", "body": "Director Alejandro G. Iñárritu and cinematographer Emmanuel Lubezki filmed almost entirely in natural light, which meant very short shooting windows each day and long waits for the right sun."}, {"title": "Chasing the snow", "body": "The production started in Canada, then moved to Ushuaia in Argentina, at the southern tip of South America, when the snow melted. The shoot ran well beyond its original schedule."}, {"title": "A real story", "body": "The film is inspired by the true story of frontiersman Hugh Glass in 1823 and by Michael Punke's novel about it."}, {"title": "Leonardo's commitment", "body": "Leonardo, a vegetarian, ate raw bison liver for one scene and worked for months in freezing rivers and snow."}],
    timeline: [{"when": "1823", "what": "The real Hugh Glass is mauled by a bear and left behind by his party."}, {"when": "2014–15", "what": "The film is shot in Canada and Argentina."}, {"when": "Dec 25, 2015", "what": "It opens in limited release, then widely in January 2016."}, {"when": "Feb 28, 2016", "what": "Leonardo wins his first Oscar for Best Actor, after four earlier nominations."}],
    didYouKnow: ["Emmanuel Lubezki won the Best Cinematography Oscar for the third year in a row, after Gravity and Birdman.", "Alejandro G. Iñárritu won Best Director two years running, after Birdman.", "Tom Hardy was nominated for Best Supporting Actor for playing Fitzgerald."],
    cast: [
      { name: LEO, character: 'Hugh Glass', isLeo: true, note: 'Academy Award winner, Best Actor' },
      { name: 'Tom Hardy', character: 'John Fitzgerald', note: 'Oscar-nominated for Best Supporting Actor' },
      { name: 'Domhnall Gleeson', character: 'Captain Andrew Henry' },
      { name: 'Will Poulter', character: 'Jim Bridger' },
      { name: 'Forrest Goodluck', character: 'Hawk' },
    ],
  },

  'the-wolf-of-wall-street': {
    headline: 'A wild, fearless comedy of excess that earned five Oscar nominations.',
    director: 'Martin Scorsese',
    directorNote:
      'Scorsese adapted Jordan Belfort\'s memoir with screenwriter Terence Winter, and gave the cast room to improvise on set.',
    studio: 'Paramount Pictures / Red Granite Pictures',
    budget: '≈ $100 million',
    gross: '≈ $392 million',
    grossNote: 'Worldwide. It was Scorsese\'s highest-grossing film at the time.',
    honors: [
      '5 Oscar nominations: Best Picture, Director, Actor, Supporting Actor, Adapted Screenplay',
      'Golden Globe for Best Actor – Musical or Comedy (Leonardo DiCaprio)',
      'Jonah Hill nominated for Best Supporting Actor',
    ],
    impact: [
      'The Wolf of Wall Street became a pop-culture phenomenon. Its mix of dark comedy and non-stop energy made it one of the most quoted and shared films of the 2010s, and Leonardo\'s big speeches are still copied and parodied.',
      'It sparked a global conversation about greed, money and the 1990s stock market. Audiences argued about whether it glamorised or condemned its subject, and that debate kept the film in the public eye long after release.',
      'For Scorsese, it showed a filmmaker in his seventies making one of his fastest, funniest and loudest films. Its box-office success proved that an adult, three-hour, R-rated comedy could still draw crowds.',
    ],
    leoRole:
      'Leonardo is Jordan Belfort, the charming and ruthless stockbroker who built a fortune through fraud. He was also a producer on the project and spent years helping bring it to the screen. The performance mixes physical comedy with real menace and earned him a Golden Globe and an Oscar nomination.',
    byTheNumbers: [{"value": "5", "label": "Oscar nominations"}, {"value": "180 min", "label": "running time"}, {"value": "≈ $392M", "label": "worldwide gross"}, {"value": "500+", "label": "uses of one famous four-letter word"}, {"value": "4th", "label": "Scorsese–DiCaprio film"}],
    behindTheScenes: [{"title": "Leonardo as producer", "body": "Leonardo's company Appian Way developed the project for years. He fought to get it made and then starred in it."}, {"title": "McConaughey's warm-up becomes a scene", "body": "The chest-thumping, humming lunch scene with Matthew McConaughey grew from the actor's own warm-up habit and was kept by Scorsese."}, {"title": "Built on improvisation", "body": "Scorsese let his cast improvise, and many of the film's best-known lines and moments came out of those takes."}],
    timeline: [{"when": "2007", "what": "Leonardo's company acquires the rights to Jordan Belfort's memoir."}, {"when": "2012–13", "what": "The film is shot in New York and on location."}, {"when": "Dec 25, 2013", "what": "It opens in cinemas."}, {"when": "March 2, 2014", "what": "It earns five Oscar nominations, including Best Actor for Leonardo."}],
    didYouKnow: ["The real Jordan Belfort has a cameo at the end, introducing Leonardo's character at a seminar.", "Jonah Hill reportedly took a very low salary so he could work with Scorsese.", "It is one of the most profane mainstream films ever made, with the number of expletives widely quoted as more than 500."],
    cast: [
      { name: LEO, character: 'Jordan Belfort', isLeo: true },
      { name: 'Jonah Hill', character: 'Donnie Azoff', note: 'Oscar-nominated for Best Supporting Actor' },
      { name: 'Margot Robbie', character: 'Naomi Lapaglia' },
      { name: 'Matthew McConaughey', character: 'Mark Hanna' },
      { name: 'Kyle Chandler', character: 'Agent Patrick Denham' },
      { name: 'Rob Reiner', character: 'Max Belfort' },
      { name: 'Jon Favreau', character: 'Manny Riskin' },
      { name: 'Jean Dujardin', character: 'Jean-Jacques Saurel' },
    ],
  },

  'killers-of-the-flower-moon': {
    headline: 'A haunting true story that brought the Osage murders to a global audience.',
    director: 'Martin Scorsese',
    directorNote:
      'Scorsese adapted David Grann\'s book, worked closely with the Osage Nation on language, costume and customs, and filmed in Osage County, Oklahoma.',
    studio: 'Apple Original Films / Paramount Pictures',
    budget: '≈ $200 million',
    gross: '≈ $157 million',
    grossNote: 'Worldwide theatrical gross, followed by a large streaming audience.',
    honors: [
      '10 Academy Award nominations, including Best Picture and Best Director',
      'Lily Gladstone: first Native American nominated for Best Actress; Golden Globe winner',
      'Robert De Niro nominated for Best Supporting Actor',
    ],
    impact: [
      'Killers of the Flower Moon brought a chapter of American history that many people had never been taught to a worldwide audience: the murders of Osage people in 1920s Oklahoma for their oil wealth. Many viewers learned about it for the first time through the film.',
      'It is also seen as an important step for Native representation. Osage people were involved in the production, Osage language appears on screen, and Lily Gladstone\'s performance as Mollie Burkhart made history at the Oscars.',
      'The film continued Scorsese\'s long career of examining violence and power in America. At nearly three and a half hours, it showed a streaming-backed studio giving a legendary director the space to make a patient, serious epic for cinemas.',
    ],
    leoRole:
      'Leonardo plays Ernest Burkhart, a returning soldier who marries into the Osage family while being manipulated by his uncle. It is one of his most morally complicated performances: a weak, loving and complicit man at the centre of a terrible crime.',
    byTheNumbers: [{"value": "10", "label": "Oscar nominations"}, {"value": "206 min", "label": "running time"}, {"value": "≈ $157M", "label": "worldwide gross"}, {"value": "10th", "label": "Scorsese Best Director nomination"}, {"value": "1st", "label": "Native American Best Actress nominee"}],
    behindTheScenes: [{"title": "From a bestselling book", "body": "The film is based on David Grann's 2017 non-fiction book about the Osage murders and the birth of the FBI."}, {"title": "A story that changed focus", "body": "Leonardo was first attached to play FBI agent Tom White. After the team spoke with the Osage community and reworked the script, the story moved to Mollie and Ernest Burkhart."}, {"title": "Made with the Osage Nation", "body": "Scorsese consulted Osage leaders, shot in Osage County, Oklahoma, and the film includes Osage language, customs and community members."}, {"title": "A final score", "body": "The score is by Robbie Robertson, who died in 2023 and received a posthumous Oscar nomination for it."}],
    timeline: [{"when": "1920s", "what": "The Osage murders take place in Oklahoma."}, {"when": "2017", "what": "David Grann publishes his book."}, {"when": "2021", "what": "Filming takes place in Oklahoma."}, {"when": "May 2023", "what": "The film premieres at the Cannes Film Festival."}, {"when": "March 10, 2024", "what": "It receives 10 Oscar nominations at the Academy Awards."}],
    didYouKnow: ["Lily Gladstone became the first Native American to be nominated for Best Actress.", "It was Martin Scorsese's tenth nomination for Best Director.", "The film runs more than three and a half hours, yet drew large audiences in cinemas."],
    cast: [
      { name: LEO, character: 'Ernest Burkhart', isLeo: true },
      { name: 'Lily Gladstone', character: 'Mollie Burkhart', note: 'Oscar-nominated for Best Actress' },
      { name: 'Robert De Niro', character: 'William "King" Hale', note: 'Oscar-nominated for Best Supporting Actor' },
      { name: 'Jesse Plemons', character: 'Tom White' },
      { name: 'Tantoo Cardinal', character: 'Lizzie Q' },
      { name: 'John Lithgow', character: 'Prosecutor Peter Leaward' },
      { name: 'Brendan Fraser', character: 'W.S. Hamilton' },
      { name: 'Cara Jade Myers', character: 'Anna Brown' },
    ],
  },

  'django-unchained': {
    headline: 'Tarantino\'s boldest western, and his biggest box-office hit at the time.',
    director: 'Quentin Tarantino',
    directorNote:
      'Tarantino wrote and directed this revenge western, combining spaghetti-western style with a story set in the American South before the Civil War.',
    studio: 'The Weinstein Company / Columbia Pictures',
    budget: '≈ $100 million',
    gross: '≈ $425 million',
    grossNote: 'Worldwide. It was Tarantino\'s highest-grossing film at the time.',
    honors: [
      '2 Academy Awards: Best Supporting Actor (Christoph Waltz), Best Original Screenplay',
      '5 Oscar nominations in total, including Best Picture',
    ],
    impact: [
      'Django Unchained brought the western back to a mass audience and set off a lively public debate about how cinema should depict slavery. It was praised, criticised and discussed everywhere, which made it one of the most talked-about films of its year.',
      'It was a huge commercial success, proving Tarantino\'s name alone could carry a long, violent, dialogue-heavy film to hundreds of millions of dollars. It also won him his second screenplay Oscar.',
    ],
    leoRole:
      'Leonardo plays Calvin Candie, the charming and cruel plantation owner. It was a rare villain role for him, and his chilling dinner-table scene, in which he hurt his hand on set and kept going, is one of the most remembered moments of his career.',
    byTheNumbers: [{"value": "2", "label": "Academy Awards won"}, {"value": "5", "label": "Oscar nominations"}, {"value": "165 min", "label": "running time"}, {"value": "≈ $425M", "label": "worldwide gross"}, {"value": "$100M", "label": "production budget"}],
    behindTheScenes: [{"title": "Written with Waltz in mind", "body": "Tarantino has said he wrote the role of Dr. King Schultz for Christoph Waltz, who won his second Oscar for it."}, {"title": "A first without Sally Menke", "body": "It was the first Tarantino film made after the death of his longtime editor Sally Menke in 2010. Fred Raskin took over the edit."}, {"title": "A hand really cut", "body": "In the dinner-table scene, Leonardo's hand was cut when he smashed a glass. He stayed in character and kept going, and the take was used."}],
    timeline: [{"when": "1966", "what": "The original Italian western Django is released."}, {"when": "2011–12", "what": "Tarantino shoots the film in California, Wyoming and Louisiana."}, {"when": "Dec 25, 2012", "what": "The film opens in cinemas."}, {"when": "Feb 24, 2013", "what": "It wins Oscars for Supporting Actor and Original Screenplay."}],
    didYouKnow: ["Franco Nero, who starred in the original 1966 Django, has a cameo in the film.", "Christoph Waltz's first Oscar was for Tarantino's Inglourious Basterds.", "It became Tarantino's biggest box-office hit at the time."],
    cast: [
      { name: LEO, character: 'Calvin Candie', isLeo: true },
      { name: 'Jamie Foxx', character: 'Django' },
      { name: 'Christoph Waltz', character: 'Dr. King Schultz', note: 'Oscar winner, Best Supporting Actor' },
      { name: 'Kerry Washington', character: 'Broomhilda von Shaft' },
      { name: 'Samuel L. Jackson', character: 'Stephen' },
    ],
  },

  'shutter-island': {
    headline: 'A psychological mystery that audiences argued about for years.',
    director: 'Martin Scorsese',
    directorNote:
      'Scorsese adapted Dennis Lehane\'s novel as a nod to classic 1940s and 50s psychological thrillers, with a tense, shadowy look throughout.',
    studio: 'Paramount Pictures',
    budget: '≈ $80 million',
    gross: '≈ $294 million',
    grossNote: 'Worldwide. It was Scorsese\'s highest-grossing film at the time.',
    honors: [
      'Strong critical reception and a lasting cult following',
      'Widely cited among the best psychological thrillers of its decade',
    ],
    impact: [
      'Shutter Island proved that Scorsese could make a pure suspense film as gripping as his gangster epics. It was a major hit, and fans kept rewatching it to hunt for clues.',
      'Its twist ending sparked debate across the internet and in film schools, and the film is now remembered as one of the great modern puzzle thrillers.',
    ],
    leoRole:
      'Leonardo plays U.S. Marshal Teddy Daniels, who investigates a vanished patient at a hospital for the criminally insane. His performance carries the whole film as it gradually changes meaning, and rewards a second viewing.',
    byTheNumbers: [{"value": "138 min", "label": "running time"}, {"value": "≈ $294M", "label": "worldwide gross"}, {"value": "$80M", "label": "production budget"}, {"value": "$41M", "label": "U.S. opening weekend"}, {"value": "4th", "label": "Scorsese–DiCaprio film"}],
    behindTheScenes: [{"title": "A novel by Dennis Lehane", "body": "The film is based on Lehane's 2003 novel, by the author of Mystic River and Gone, Baby, Gone."}, {"title": "Filmed on a real island", "body": "Locations in Massachusetts, including the Boston Harbor Islands and a former state hospital, gave the film its eerie look."}, {"title": "A film school for the cast", "body": "Scorsese showed his cast and crew classic thrillers and horror films as reference for the mood he wanted."}, {"title": "A score of existing music", "body": "Instead of a traditional new score, the film uses modern and classical pieces chosen by Robbie Robertson, which add to its unsettling feel."}],
    timeline: [{"when": "2003", "what": "Dennis Lehane's novel is published."}, {"when": "2008", "what": "The film is shot in Massachusetts."}, {"when": "Late 2009", "what": "Its release is moved from fall to February."}, {"when": "Feb 19, 2010", "what": "It opens at No. 1 at the box office."}],
    didYouKnow: ["It was Leonardo's fourth film with Scorsese, after Gangs of New York, The Aviator and The Departed.", "It was Scorsese's highest-grossing film at the time of release.", "Fans have rewatched it to search for clues to its ending."],
    cast: [
      { name: LEO, character: 'Teddy Daniels', isLeo: true },
      { name: 'Mark Ruffalo', character: 'Chuck Aule' },
      { name: 'Ben Kingsley', character: 'Dr. John Cawley' },
      { name: 'Michelle Williams', character: 'Dolores Chanal' },
      { name: 'Max von Sydow', character: 'Dr. Jeremiah Naehring' },
      { name: 'Emily Mortimer', character: 'Rachel Solando' },
    ],
  },

  'once-upon-a-time-in-hollywood': {
    headline: 'Tarantino\'s love letter to 1969 Los Angeles and the end of an era.',
    director: 'Quentin Tarantino',
    directorNote:
      'Tarantino\'s ninth film is a tribute to the Los Angeles of his childhood, filmed on location with careful period detail.',
    studio: 'Sony Pictures',
    budget: '≈ $90 million',
    gross: '≈ $377 million',
    grossNote: 'Worldwide.',
    honors: [
      '10 Academy Award nominations, including Best Picture, Director and Best Actor (Leonardo DiCaprio)',
      '2 Oscars: Best Supporting Actor (Brad Pitt) and Best Production Design',
      'Golden Globes for Best Picture – Musical or Comedy, Best Supporting Actor and Best Screenplay',
    ],
    impact: [
      'The film gave audiences a loving, funny and unexpectedly moving portrait of Hollywood in 1969. It opened at number one and became a conversation piece about nostalgia, fame and who gets remembered.',
      'It also put two of the biggest stars in the world on screen together for the first time and brought the buddy film back to cinemas, with both lead performances honoured by critics.',
    ],
    leoRole:
      'Leonardo plays Rick Dalton, a fading television cowboy star who fears his time is over. He plays the insecurity, comedy and heartbreak of an actor in decline, and earned another Oscar nomination for Best Actor.',
    byTheNumbers: [{"value": "10", "label": "Oscar nominations"}, {"value": "2", "label": "Academy Awards won"}, {"value": "161 min", "label": "running time"}, {"value": "≈ $377M", "label": "worldwide gross"}, {"value": "9th", "label": "Tarantino film"}],
    behindTheScenes: [{"title": "A rebuilt 1969", "body": "The crew redressed real Los Angeles streets, restoring period signs, cars and storefronts, and shot on 35mm film to match the look of the era."}, {"title": "Leonardo meets Brad Pitt on screen", "body": "It was the first time Leonardo and Brad Pitt appeared together in a film, playing an actor and his stunt double."}, {"title": "Rick's bad day on set", "body": "In one scene, Rick Dalton blows his lines on a western set and berates himself in his trailer. It shows off Leonardo's mix of comedy and vulnerability."}],
    timeline: [{"when": "1969", "what": "The story is set in Los Angeles in 1969."}, {"when": "2018", "what": "Filming takes place across Los Angeles."}, {"when": "May 21, 2019", "what": "The film premieres at the Cannes Film Festival."}, {"when": "July 26, 2019", "what": "It opens in cinemas worldwide."}, {"when": "Feb 9, 2020", "what": "Brad Pitt wins the Oscar for Best Supporting Actor."}],
    didYouKnow: ["It was Tarantino's first film after leaving The Weinstein Company, released by Sony.", "Margot Robbie plays the actress Sharon Tate in the film.", "Tarantino has said he plans to direct only ten films, making this his ninth."],
    cast: [
      { name: LEO, character: 'Rick Dalton', isLeo: true },
      { name: 'Brad Pitt', character: 'Cliff Booth', note: 'Oscar winner, Best Supporting Actor' },
      { name: 'Margot Robbie', character: 'Sharon Tate' },
      { name: 'Al Pacino', character: 'Marvin Schwarz' },
      { name: 'Margaret Qualley', character: 'Pussycat' },
      { name: 'Timothy Olyphant', character: 'James Stacy' },
      { name: 'Julia Butters', character: 'Trudi Fraser' },
      { name: 'Austin Butler', character: 'Tex' },
    ],
  },

  'catch-me-if-you-can': {
    headline: 'A stylish, charming chase film built on a real life story.',
    director: 'Steven Spielberg',
    directorNote:
      'Spielberg directed this light, stylish crime story based on the true story of Frank Abagnale Jr., with a 1960s look and a swinging jazz score.',
    studio: 'DreamWorks Pictures',
    budget: '≈ $52 million',
    gross: '≈ $352 million',
    grossNote: 'Worldwide.',
    honors: [
      '2 Oscar nominations: Best Supporting Actor (Christopher Walken) and Best Original Score (John Williams)',
      'Golden Globe nominations for Leonardo DiCaprio and Christopher Walken',
    ],
    impact: [
      'Catch Me If You Can became one of the most rewatched crime comedies of the 2000s. Its animated title sequence, John Williams\'s score and the pairing of Leonardo with Tom Hanks all became favourites with viewers.',
      'It was also part of a rare double: in 2002, Leonardo starred in this film and in Gangs of New York, showing he could carry both a light caper and a dark epic in the same year.',
    ],
    leoRole:
      'Leonardo plays Frank Abagnale Jr., a teenager who becomes a pilot, doctor and lawyer without any qualifications. The role needed charm, speed and vulnerability all at once, and showed a lighter side of his talent.',
    byTheNumbers: [{"value": "2", "label": "Oscar nominations"}, {"value": "141 min", "label": "running time"}, {"value": "≈ $352M", "label": "worldwide gross"}, {"value": "$52M", "label": "production budget"}, {"value": "2", "label": "Leonardo films released in December 2002"}],
    behindTheScenes: [{"title": "Based on a memoir", "body": "The film is adapted from Frank Abagnale Jr.'s 1980 memoir, written with Stan Redding, about his years as a teenage con man."}, {"title": "A jazz-age score", "body": "John Williams wrote a cool, saxophone-led jazz score and was nominated for an Oscar for it."}, {"title": "An animated title sequence", "body": "The stylish opening titles, inspired by 1960s design, are among the film's most remembered features."}, {"title": "A cameo from the real man", "body": "Frank Abagnale Jr. himself appears briefly in the film as a French policeman."}],
    timeline: [{"when": "1960s", "what": "The real Frank Abagnale Jr. carries out his impostures as a teenager."}, {"when": "1980", "what": "His memoir is published."}, {"when": "Dec 25, 2002", "what": "The film opens in cinemas."}, {"when": "2003", "what": "Christopher Walken is nominated for an Oscar."}],
    didYouKnow: ["Some parts of Abagnale's own account have been questioned by journalists, but the film remains a favourite.", "It was one of two Leonardo films released in December 2002, along with Gangs of New York.", "Jennifer Garner appears in a small early role as Cheryl Ann."],
    cast: [
      { name: LEO, character: 'Frank Abagnale Jr.', isLeo: true },
      { name: 'Tom Hanks', character: 'Carl Hanratty' },
      { name: 'Christopher Walken', character: 'Frank Abagnale Sr.', note: 'Oscar-nominated for Best Supporting Actor' },
      { name: 'Martin Sheen', character: 'Roger Strong' },
      { name: 'Nathalie Baye', character: 'Paula Abagnale' },
      { name: 'Amy Adams', character: 'Brenda Strong' },
      { name: 'Jennifer Garner', character: 'Cheryl Ann' },
    ],
  },

  'the-aviator': {
    headline: 'A grand portrait of Howard Hughes that won five Oscars.',
    director: 'Martin Scorsese',
    directorNote:
      'Scorsese made a lavish biography of the filmmaker and aviation pioneer, with a colour style that imitated the film stock of each era.',
    studio: 'Miramax / Warner Bros. / Initial Entertainment Group',
    budget: '≈ $110 million',
    gross: '≈ $214 million',
    grossNote: 'Worldwide.',
    honors: [
      '5 Academy Awards, including Best Supporting Actress (Cate Blanchett), Cinematography and Film Editing',
      '11 Oscar nominations in total, including Best Picture, Director and Best Actor (Leonardo DiCaprio)',
      'Golden Globe for Best Motion Picture – Drama and for Leonardo as Best Actor',
    ],
    impact: [
      'The Aviator took Leonardo and Martin Scorsese\'s partnership into the awards conversation. Leonardo had worked for years to bring the story of Howard Hughes to the screen as a producer.',
      'Cate Blanchett\'s Oscar-winning performance as Katharine Hepburn is still remembered as one of the great screen imitations, and the film\'s depiction of Hughes\'s struggle with obsessive-compulsive disorder helped open conversations about mental health in public.',
    ],
    leoRole:
      'Leonardo plays Howard Hughes, from a daring young film producer and aviator to a man shut in by his own fears. It earned him his second Oscar nomination and a Golden Globe for Best Actor, and established him as a serious dramatic lead.',
    byTheNumbers: [{"value": "5", "label": "Academy Awards won"}, {"value": "11", "label": "Oscar nominations"}, {"value": "170 min", "label": "running time"}, {"value": "≈ $214M", "label": "worldwide gross"}, {"value": "$110M", "label": "production budget"}],
    behindTheScenes: [{"title": "A film that imitates old film stock", "body": "Scorsese used digital colour techniques to imitate the look of early two-colour Technicolor for the 1920s scenes and three-strip Technicolor later."}, {"title": "Leonardo prepares for Hughes", "body": "Leonardo met people living with obsessive-compulsive disorder to portray Howard Hughes's struggle honestly."}, {"title": "Years in the making", "body": "Leonardo had spent years developing the Hughes story as a producer before Scorsese came on board as director."}],
    timeline: [{"when": "1927–30", "what": "Howard Hughes makes his aviation epic Hell's Angels."}, {"when": "1947", "what": "Hughes flies the giant H-4 Hercules, the \"Spruce Goose\"."}, {"when": "Dec 17, 2004", "what": "The film opens in the U.S."}, {"when": "Feb 27, 2005", "what": "It wins five Oscars, including Best Supporting Actress for Cate Blanchett."}],
    didYouKnow: ["Cate Blanchett was the first actor to win an Oscar for playing another Oscar-winning actor.", "It was Leonardo's second film with Scorsese, after Gangs of New York.", "It earned Leonardo his second Oscar nomination."],
    cast: [
      { name: LEO, character: 'Howard Hughes', isLeo: true },
      { name: 'Cate Blanchett', character: 'Katharine Hepburn', note: 'Oscar winner, Best Supporting Actress' },
      { name: 'Kate Beckinsale', character: 'Ava Gardner' },
      { name: 'John C. Reilly', character: 'Noah Dietrich' },
      { name: 'Alec Baldwin', character: 'Juan Trippe' },
      { name: 'Alan Alda', character: 'Senator Owen Brewster' },
      { name: 'Jude Law', character: 'Errol Flynn' },
      { name: 'Ian Holm', character: 'Professor Fitz' },
    ],
  },

  'dont-look-up': {
    headline: 'A satire about ignoring the science, and one of Netflix\'s most-watched films.',
    director: 'Adam McKay',
    directorNote:
      'McKay wrote and directed this satire about a comet heading for Earth, a story he and journalist David Sirota wrote as a metaphor for the climate crisis.',
    studio: 'Netflix / Hyperobject Industries',
    budget: '≈ $75 million',
    gross: 'Streaming release',
    grossNote: 'Released on Netflix in December 2021, where it was among the most-watched films in the service\'s history at the time.',
    honors: [
      '4 Academy Award nominations: Best Picture, Original Screenplay, Film Editing, Original Score',
      'Golden Globe nominations including Best Picture – Musical or Comedy',
    ],
    impact: [
      'Don\'t Look Up got millions of people talking about how societies react to scientific warnings. Whether viewers loved it or argued with it, the film was impossible to ignore, and it was discussed by scientists, politicians and activists.',
      'Many climate scientists said it captured their frustration at being ignored. The film made climate change a mainstream conversation topic during a major streaming moment and linked Leonardo\'s acting career directly with his environmental work.',
    ],
    leoRole:
      'Leonardo plays Dr. Randall Mindy, an astronomer who tries to warn the world about an approaching comet and is dismissed by the media and politicians. It is a role that mixes comedy with real anger, and it was personal for an actor who has campaigned on climate for decades.',
    byTheNumbers: [{"value": "4", "label": "Oscar nominations"}, {"value": "138 min", "label": "running time"}, {"value": "$75M", "label": "production budget"}, {"value": "Dec 2021", "label": "release on Netflix"}],
    behindTheScenes: [{"title": "A comet for a climate warning", "body": "Director Adam McKay has said the approaching comet is a stand-in for the climate crisis and the public's reaction to scientific warnings."}, {"title": "Made during the pandemic", "body": "The film was shot in Massachusetts in late 2020 under strict health protocols."}, {"title": "An all-star cast", "body": "Leonardo is joined by Jennifer Lawrence, Meryl Streep, Cate Blanchett, Jonah Hill, Timothée Chalamet and many others."}],
    timeline: [{"when": "2019", "what": "Leonardo and Jennifer Lawrence join the project."}, {"when": "Late 2020", "what": "Filming begins in Massachusetts."}, {"when": "Dec 24, 2021", "what": "The film is released on Netflix after a limited theatrical run."}, {"when": "Feb 2022", "what": "It is nominated for four Oscars, including Best Picture."}],
    didYouKnow: ["Ariana Grande plays pop star Riley Bina and sings \"Just Look Up\" in the film.", "It was among the most-watched films in Netflix history when it was released.", "Leonardo has campaigned on climate change for decades, and the film's message reflects that."],
    cast: [
      { name: LEO, character: 'Dr. Randall Mindy', isLeo: true },
      { name: 'Jennifer Lawrence', character: 'Kate Dibiasky' },
      { name: 'Meryl Streep', character: 'President Janie Orlean' },
      { name: 'Cate Blanchett', character: 'Brie Evantee' },
      { name: 'Jonah Hill', character: 'Jason Orlean' },
      { name: 'Mark Rylance', character: 'Peter Isherwell' },
      { name: 'Timothée Chalamet', character: 'Yule' },
      { name: 'Rob Morgan', character: 'Dr. Teddy Oglethorpe' },
    ],
  },
};

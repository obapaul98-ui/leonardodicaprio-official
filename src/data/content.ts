import { ARCHIVE_PHOTOS } from './archive';
import { CLIPS } from './clips';
export interface CastMember {
  name: string;
  character: string;
  avatar?: string;
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  role: string;
  synopsis: string;
  quote: string;
  awards: string[];
  category: 'masterpiece' | 'scorsese' | 'award-winner' | 'classic';
  image: string;
  backdrop: string;
  boxOffice?: string;
  rating: number;
  matchScore: string;
  duration: string;
  ageRating: 'R' | 'PG-13' | 'PG';
  quality: '4K Ultra HD' | 'IMAX Enhanced' | 'HD';
  audio: 'Dolby Atmos' | '5.1 Surround';
  genres: string[];
  tagline: string;
  cast: CastMember[];
  videoSrc: string;
  rank?: number;
  isTrending?: boolean;
  continueWatching?: {
    progress: number;
    remaining: string;
    lastWatchedEpisode?: string;
  };
}

export interface CharityProject {
  id: string;
  title: string;
  organization: 'Re:wild' | 'Earth Alliance' | 'Leonardo DiCaprio Foundation';
  description: string;
  impactMetric: string;
  impactLabel: string;
  region: string;
  image: string;
  video?: string;
  keyPartners: string[];
  ctaUrl: string;
}

export interface ReelItem {
  id: string;
  title: string;
  caption: string;
  /** Local video file (unused for YouTube clips) */
  videoSrc: string;
  /** 11-character YouTube id; the clip plays in an embedded player */
  youtubeId?: string;
  thumbnail?: string;
  /** Channel that published the clip on YouTube */
  source?: string;
  category: 'Red Carpet & Events' | 'Behind The Scenes' | 'Fan Moments' | 'Interviews';
  duration: string;
  date: string;
}

export interface Collaborator {
  id: string;
  name: string;
  role: string;
  count: number;
  avatar: string;
  notable: string;
}

export const STREAM_GENRES = [
  'All Titles',
  'Top 10 Today',
  'Scorsese Auteur',
  'Oscar Winners',
  'Crime & Thriller',
  'Drama & History',
  'Sci-Fi & Epic',
  'Docu & Conservation',
];

export const TOP_COLLABORATORS: Collaborator[] = [
  { id: 'scorsese', name: 'Martin Scorsese', role: 'Director', count: 6, avatar: '/assets/legacy/scorsese.jpg', notable: 'Killers of the Flower Moon, The Departed' },
  { id: 'nolan', name: 'Christopher Nolan', role: 'Director', count: 1, avatar: '/assets/legacy/nolan.jpg', notable: 'Inception' },
  { id: 'tarantino', name: 'Quentin Tarantino', role: 'Director', count: 2, avatar: '/assets/legacy/tarantino.jpg', notable: 'Once Upon a Time in Hollywood, Django' },
  { id: 'gladstone', name: 'Lily Gladstone', role: 'Lead Actress', count: 1, avatar: '/assets/legacy/gladstone.jpg', notable: 'Killers of the Flower Moon (Golden Globe Winner)' },
  { id: 'deniro', name: 'Robert De Niro', role: 'Co-Star', count: 3, avatar: '/assets/legacy/deniro.jpg', notable: 'Killers of the Flower Moon, This Boy’s Life' },
  { id: 'goodall', name: 'Dr. Jane Goodall', role: 'Global Partner', count: 4, avatar: '/assets/legacy/goodall.jpg', notable: 'Virunga Gorilla & Biodiversity Projects' },
];

export const IMPACT_METRICS = [
  { value: '$100M+', label: 'Grants & Philanthropy Awarded', sublabel: 'Across 200+ projects globally' },
  { value: '100M+', label: 'Acres of Wilderness Protected', sublabel: 'Vital ecosystems safeguarded' },
  { value: '430+', label: 'Endangered Species Supported', sublabel: 'From Galápagos to Sumatra' },
  { value: '80+', label: 'Countries With Active Work', sublabel: 'Direct grassroots partnerships' },
];

export const CHARITY_PROJECTS: CharityProject[] = [
  {
    id: 'rewild-biodiversity',
    title: 'Re:wild — Restoring the Planet’s Wildest Places',
    organization: 'Re:wild',
    description: 'Co-founded by Leonardo DiCaprio and world-renowned conservation scientists, Re:wild protects and restores the wild to tackle the climate and biodiversity crises across 80+ countries.',
    impactMetric: '180M+ Acres',
    impactLabel: 'Conserved globally',
    region: 'Worldwide',
    image: '/assets/charity/rewild.jpg',
    video: '/media/rewild_biodiversity.mp4',
    keyPartners: ['Global Wildlife Conservation', 'IUCN', 'Local Indigenous Communities'],
    ctaUrl: '/charity',
  },
  {
    id: 'earth-alliance-emergency',
    title: 'Earth Alliance — Emergency Climate Action',
    organization: 'Earth Alliance',
    description: 'Launched in 2019 by Leonardo DiCaprio, Laurene Powell Jobs, and Brian Sheth to protect ecosystems, support indigenous communities, and provide rapid emergency funding for climate disasters.',
    impactMetric: '$15M+ Rapid Aid',
    impactLabel: 'Emergency funds deployed',
    region: 'Amazon Basin, Australia & California',
    image: '/assets/charity/earth-alliance.jpg',
    video: '/media/earth_alliance_reel.mp4',
    keyPartners: ['Amazon Conservation Team', 'WWF', 'Rainforest Trust'],
    ctaUrl: '/charity',
  },
  {
    id: 'galapagos-initiative',
    title: 'Galápagos Islands Ecological Rebirth',
    organization: 'Re:wild',
    description: 'A historic $43 million commitment partnering with the Galápagos National Park Directorate to restore Floreana Island, reintroduce 13 locally extinct species, and shield marine sanctuaries.',
    impactMetric: '13 Extinct Species',
    impactLabel: 'Targeted for reintroduction',
    region: 'Galápagos Islands, Ecuador',
    image: '/assets/charity/galapagos.jpg',
    video: '/media/wildlife_patrol.mp4',
    keyPartners: ['Galápagos National Park', 'Island Conservation', 'Jocoto Foundation'],
    ctaUrl: '/charity',
  },
  {
    id: 'indigenous-guardians',
    title: 'Indigenous Land Sovereignty & Protection',
    organization: 'Leonardo DiCaprio Foundation',
    description: 'Championing indigenous land titles and direct funding for forest guardians in Brazil, Ecuador, and Colombia. Over 80% of remaining biodiversity is safeguarded on indigenous lands.',
    impactMetric: '500+ Guardians',
    impactLabel: 'Directly supported on ground',
    region: 'Amazon & South America',
    image: '/assets/charity/indigenous-guardians.jpg',
    video: '/media/we_are_guardians.mp4',
    keyPartners: ['APIB', 'Amazon Frontlines', 'COICA'],
    ctaUrl: '/charity',
  },
  {
    id: 'global-fishing-watch',
    title: 'Global Fishing Watch & Ocean Sanctuaries',
    organization: 'Leonardo DiCaprio Foundation',
    description: 'Utilizing satellite tracking and artificial intelligence to bring transparency to commercial fishing operations and eliminate illegal fishing in marine protected areas.',
    impactMetric: '65,000+ Vessels',
    impactLabel: 'Monitored across global oceans',
    region: 'International Waters',
    image: '/assets/charity/global-fishing-watch.jpg',
    video: '/media/ocean_dispatch.mp4',
    keyPartners: ['SkyTruth', 'Google', 'Oceana'],
    ctaUrl: 'https://globalfishingwatch.org',
  },
  {
    id: 'virunga-protection',
    title: 'Virunga National Park Gorilla Haven',
    organization: 'Earth Alliance',
    description: 'Providing vital emergency infrastructure, solar energy systems, and ranger patrol support for Virunga National Park in the Democratic Republic of the Congo, home to the endangered mountain gorillas.',
    impactMetric: '1/3 of Mountain Gorillas',
    impactLabel: 'Protected in their sanctuary',
    region: 'Democratic Republic of Congo',
    image: '/assets/filmography/virunga-protection.jpg',
    video: '/media/leo_dispatch.mp4',
    keyPartners: ['Virunga National Park', 'Jane Goodall Institute', 'European Union'],
    ctaUrl: 'https://virunga.org',
  }
];

export const REELS_DATA: ReelItem[] = [
  {
    id: 'oscars-best-actor',
    title: 'Winning Best Actor at the Oscars',
    caption: 'The moment Leonardo won his first Academy Award, for The Revenant, at the 88th Oscars.',
    videoSrc: '',
    youtubeId: 'xpyrefzvTpI',
    thumbnail: 'https://i.ytimg.com/vi/xpyrefzvTpI/hqdefault.jpg',
    source: 'Oscars',
    category: 'Red Carpet & Events',
    duration: '4:30',
    date: 'Feb 2016',
  },
  {
    id: 'jack-rose-oscars',
    title: 'Jack and Rose Reunite at the Oscars',
    caption: 'Leonardo and Kate Winslet share a warm reunion at the Academy Awards.',
    videoSrc: '',
    youtubeId: '113euxVxULg',
    thumbnail: 'https://i.ytimg.com/vi/113euxVxULg/hqdefault.jpg',
    source: 'FirstLook',
    category: 'Red Carpet & Events',
    duration: '1:54',
    date: 'Feb 2016',
  },
  {
    id: 'oscars-2020-arrival',
    title: 'Arriving at the Oscars',
    caption: 'Leonardo arrives on the red carpet at the Academy Awards.',
    videoSrc: '',
    youtubeId: '8Bdim8rasaA',
    thumbnail: 'https://i.ytimg.com/vi/8Bdim8rasaA/hqdefault.jpg',
    source: 'ScreenSlam',
    category: 'Red Carpet & Events',
    duration: '0:25',
    date: 'Feb 2020',
  },
  {
    id: 'cannes-stir',
    title: 'Cannes Red Carpet Frenzy',
    caption: 'Leonardo draws a huge crowd as he walks the red carpet at the Cannes Film Festival.',
    videoSrc: '',
    youtubeId: 'YoeWZsoM4jw',
    thumbnail: 'https://i.ytimg.com/vi/YoeWZsoM4jw/hqdefault.jpg',
    source: 'Agencia EFE',
    category: 'Red Carpet & Events',
    duration: '1:10',
    date: 'Cannes',
  },
  {
    id: 'cannes-scorsese-deniro',
    title: 'Cannes Arrival with De Niro & Scorsese',
    caption: 'Leonardo arrives at Cannes alongside Robert De Niro and Martin Scorsese.',
    videoSrc: '',
    youtubeId: 'As_mKMXcpg8',
    thumbnail: 'https://i.ytimg.com/vi/As_mKMXcpg8/hqdefault.jpg',
    source: 'CannesFest',
    category: 'Red Carpet & Events',
    duration: '3:50',
    date: 'Cannes 2023',
  },
  {
    id: 'inception-uk-premiere',
    title: 'Inception UK Premiere',
    caption: 'Leonardo greets fans and the press at the UK premiere of Inception.',
    videoSrc: '',
    youtubeId: 'REkW4cvpPSY',
    thumbnail: 'https://i.ytimg.com/vi/REkW4cvpPSY/hqdefault.jpg',
    source: 'Official Pop Drop',
    category: 'Red Carpet & Events',
    duration: '1:48',
    date: '2010',
  },
  {
    id: 'sag-kate',
    title: 'Leo & Kate at the SAG Awards',
    caption: 'The Titanic co-stars together at the Screen Actors Guild Awards.',
    videoSrc: '',
    youtubeId: 'hZ4drVaesH4',
    thumbnail: 'https://i.ytimg.com/vi/hZ4drVaesH4/hqdefault.jpg',
    source: 'Alida V',
    category: 'Red Carpet & Events',
    duration: '3:04',
    date: 'Awards season',
  },
  {
    id: 'tiff-2016',
    title: 'Toronto Film Festival Red Carpet',
    caption: 'Arriving at the Toronto International Film Festival premiere of Before the Flood.',
    videoSrc: '',
    youtubeId: '8LqAhjfzMI0',
    thumbnail: 'https://i.ytimg.com/vi/8LqAhjfzMI0/hqdefault.jpg',
    source: 'Is1174',
    category: 'Red Carpet & Events',
    duration: '1:50',
    date: 'Sep 2016',
  },
  {
    id: 'revenant-bear',
    title: 'The Revenant: Bear Attack, Behind the Scenes',
    caption: 'A look at how the film\'s famous bear attack scene was made.',
    videoSrc: '',
    youtubeId: 'Z8PvZZmWbw0',
    thumbnail: 'https://i.ytimg.com/vi/Z8PvZZmWbw0/hqdefault.jpg',
    source: '20th Century Studios',
    category: 'Behind The Scenes',
    duration: '1:58',
    date: 'The Revenant',
  },
  {
    id: 'killers-inside-look',
    title: 'Killers of the Flower Moon: Inside Look',
    caption: 'A short official look behind the scenes of Martin Scorsese\'s film.',
    videoSrc: '',
    youtubeId: 'EoG_oUlpf_k',
    thumbnail: 'https://i.ytimg.com/vi/EoG_oUlpf_k/hqdefault.jpg',
    source: 'Paramount Pictures',
    category: 'Behind The Scenes',
    duration: '1:31',
    date: '2023',
  },
  {
    id: 'killers-bts-scorsese',
    title: 'Making Killers of the Flower Moon',
    caption: 'Behind the scenes with Leonardo and Martin Scorsese on set.',
    videoSrc: '',
    youtubeId: '5SRfCWBWliU',
    thumbnail: 'https://i.ytimg.com/vi/5SRfCWBWliU/hqdefault.jpg',
    source: 'Paramount Movies',
    category: 'Behind The Scenes',
    duration: '7:14',
    date: '2023',
  },
  {
    id: 'killers-scene-breakdown',
    title: 'Breaking Down a Scene with Lily Gladstone',
    caption: 'Leonardo and Lily Gladstone walk through a scene from Killers of the Flower Moon.',
    videoSrc: '',
    youtubeId: 'a-4X-K_iB9E',
    thumbnail: 'https://i.ytimg.com/vi/a-4X-K_iB9E/hqdefault.jpg',
    source: 'Vanity Fair',
    category: 'Behind The Scenes',
    duration: '8:09',
    date: '2023',
  },
  {
    id: 'django-hand',
    title: 'Django Unchained: The Cut Hand Take',
    caption: 'The on-set moment when Leonardo cut his hand and kept the scene going.',
    videoSrc: '',
    youtubeId: '85OjZr-3tTU',
    thumbnail: 'https://i.ytimg.com/vi/85OjZr-3tTU/hqdefault.jpg',
    source: 'Miklós Vincze',
    category: 'Behind The Scenes',
    duration: '1:14',
    date: 'Django Unchained',
  },
  {
    id: 'titanic-rare-bts',
    title: 'Rare Titanic Behind-the-Scenes Footage',
    caption: 'Rare footage of Leonardo working on the set of Titanic.',
    videoSrc: '',
    youtubeId: 'Wxo7b8IdKs0',
    thumbnail: 'https://i.ytimg.com/vi/Wxo7b8IdKs0/hqdefault.jpg',
    source: 'dicapricorn',
    category: 'Behind The Scenes',
    duration: '1:52',
    date: 'Titanic',
  },
  {
    id: 'romeo-juliet-set',
    title: 'On the Set of Romeo + Juliet',
    caption: 'Leonardo and Claire Danes on the set of Baz Luhrmann\'s Romeo + Juliet.',
    videoSrc: '',
    youtubeId: 'oduVNibXa-k',
    thumbnail: 'https://i.ytimg.com/vi/oduVNibXa-k/hqdefault.jpg',
    source: 'ahsoka',
    category: 'Behind The Scenes',
    duration: '2:08',
    date: 'Romeo + Juliet',
  },
  {
    id: 'wolf-cast-off-camera',
    title: 'What Leo Is Like Off-Camera',
    caption: 'The cast of The Wolf of Wall Street talk about working with Leonardo.',
    videoSrc: '',
    youtubeId: 'fU9UXn8o_6I',
    thumbnail: 'https://i.ytimg.com/vi/fU9UXn8o_6I/hqdefault.jpg',
    source: 'Official Pop Drop',
    category: 'Behind The Scenes',
    duration: '5:21',
    date: 'The Wolf of Wall Street',
  },
  {
    id: 'paris-fans',
    title: 'Sharing Some Love with Fans in Paris',
    caption: 'Leonardo stops to greet fans in Paris after a screening of The Revenant.',
    videoSrc: '',
    youtubeId: 'EmuLJlnbAx4',
    thumbnail: 'https://i.ytimg.com/vi/EmuLJlnbAx4/hqdefault.jpg',
    source: 'StormShadowCrew',
    category: 'Fan Moments',
    duration: '1:47',
    date: 'Paris',
  },
  {
    id: 'bafta-chant',
    title: 'Fans Chant His Name at the BAFTAs',
    caption: 'Leonardo laughs along as fans chant on the BAFTA red carpet.',
    videoSrc: '',
    youtubeId: 'OtrQFzMMPTQ',
    thumbnail: 'https://i.ytimg.com/vi/OtrQFzMMPTQ/hqdefault.jpg',
    source: 'Official Pop Drop',
    category: 'Fan Moments',
    duration: '1:42',
    date: 'BAFTAs 2014',
  },
  {
    id: 'edinburgh-fans',
    title: 'Screaming Fans in Edinburgh',
    caption: 'A crowd of fans greets Leonardo in Edinburgh.',
    videoSrc: '',
    youtubeId: 'X-O-LBQGMZ8',
    thumbnail: 'https://i.ytimg.com/vi/X-O-LBQGMZ8/hqdefault.jpg',
    source: 'Onlooker UK',
    category: 'Fan Moments',
    duration: '1:34',
    date: 'Edinburgh',
  },
  {
    id: 'leomania-1998',
    title: 'Leomania: London',
    caption: 'Archive footage of the crowds that followed Leonardo after Titanic.',
    videoSrc: '',
    youtubeId: 'rsxy0kJE8jM',
    thumbnail: 'https://i.ytimg.com/vi/rsxy0kJE8jM/hqdefault.jpg',
    source: 'Kinolibrary',
    category: 'Fan Moments',
    duration: '0:51',
    date: '1998',
  },
  {
    id: 'autographs-sidewalk',
    title: 'Signing Autographs on the Sidewalk',
    caption: 'Leonardo stops to sign for fans while walking down the street.',
    videoSrc: '',
    youtubeId: '_55kopC1TGw',
    thumbnail: 'https://i.ytimg.com/vi/_55kopC1TGw/hqdefault.jpg',
    source: 'The Hollywood Fix',
    category: 'Fan Moments',
    duration: '1:17',
    date: 'Street moment',
  },
  {
    id: 'autographs-tiff',
    title: 'Signing for Fans at TIFF',
    caption: 'Leonardo signs autographs for fans at the Toronto International Film Festival.',
    videoSrc: '',
    youtubeId: 'xfqHNlKf3gQ',
    thumbnail: 'https://i.ytimg.com/vi/xfqHNlKf3gQ/hqdefault.jpg',
    source: 'TopPix Autographs',
    category: 'Fan Moments',
    duration: '0:37',
    date: 'Sep 2016',
  },
  {
    id: 'michael-jordan',
    title: 'Leo Meets Michael Jordan',
    caption: 'A short, fun moment of Leonardo meeting basketball legend Michael Jordan.',
    videoSrc: '',
    youtubeId: 'yjouWlUSdRs',
    thumbnail: 'https://i.ytimg.com/vi/yjouWlUSdRs/hqdefault.jpg',
    source: 'Daily Leo',
    category: 'Fan Moments',
    duration: '0:21',
    date: 'Fan moment',
  },
];

// Local video clips of Leonardo from the archive folder.
const LOCAL_REELS: ReelItem[] = CLIPS.map(([file, seconds, title, category]) => ({
  id: `clip-${file}`,
  title,
  caption: '',
  videoSrc: `/media/clips/${file}.mp4`,
  thumbnail: `/media/clips/${file}.jpg`,
  category: category as ReelItem['category'],
  duration: `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2, '0')}`,
  date: '',
}));

export const ALL_REELS: ReelItem[] = [...REELS_DATA, ...LOCAL_REELS];


export const MOVIES_DATA: Movie[] = [
  {
    id: 'killers-of-the-flower-moon',
    title: 'Killers of the Flower Moon',
    year: 2023,
    director: 'Martin Scorsese',
    role: 'Ernest Burkhart',
    synopsis: 'At the turn of the 20th century, oil brought vast wealth to the Osage Nation. The wealth of these Native Americans immediately attracted white interlopers, who manipulated, extorted, and murdered Osage people for money.',
    quote: 'I love that money, sir. But I do love Mollie.',
    awards: ['10 Academy Award Nominations', 'Golden Globe Winner', 'BAFTA Nominee'],
    category: 'scorsese',
    image: '/assets/filmography/killers-of-the-flower-moon.jpg',
    backdrop: '/assets/filmography/killers-of-the-flower-moon.jpg',
    boxOffice: '$157 Million',
    rating: 8.9,
    matchScore: '99% Match',
    duration: '3h 26m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Crime', 'Drama', 'History'],
    tagline: 'Greed is an animal that hungers for blood.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Ernest Burkhart', avatar: '/assets/filmography/killers-of-the-flower-moon.jpg' },
      { name: 'Robert De Niro', character: 'William King Hale', avatar: '/assets/legacy/deniro.jpg' },
      { name: 'Lily Gladstone', character: 'Mollie Burkhart', avatar: '/assets/legacy/gladstone.jpg' },
      { name: 'Jesse Plemons', character: 'Tom White' }
    ],
    videoSrc: '/media/climate_action.mp4',
    rank: 1,
    isTrending: true,
    continueWatching: {
      progress: 68,
      remaining: '1h 05m remaining',
      lastWatchedEpisode: 'Chapter 4: The Investigation Begins'
    }
  },
  {
    id: 'inception',
    title: 'Inception',
    year: 2010,
    director: 'Christopher Nolan',
    role: 'Dom Cobb',
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    quote: 'An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow.',
    awards: ['4 Academy Awards', 'BAFTA Nominee', 'AFI Movie of the Year'],
    category: 'masterpiece',
    image: '/assets/filmography/inception.jpg',
    backdrop: '/assets/filmography/inception.jpg',
    boxOffice: '$839 Million',
    rating: 8.8,
    matchScore: '98% Match',
    duration: '2h 28m',
    ageRating: 'PG-13',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    tagline: 'Your mind is the scene of the crime.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Dom Cobb', avatar: '/assets/filmography/inception.jpg' },
      { name: 'Joseph Gordon-Levitt', character: 'Arthur' },
      { name: 'Elliot Page', character: 'Ariadne' },
      { name: 'Tom Hardy', character: 'Eames' },
      { name: 'Marion Cotillard', character: 'Mal Cobb' }
    ],
    videoSrc: '/media/rewild_biodiversity.mp4',
    rank: 2,
    isTrending: true,
    continueWatching: {
      progress: 42,
      remaining: '1h 24m remaining',
      lastWatchedEpisode: 'Level 2: Hotel Dream Sequence'
    }
  },
  {
    id: 'the-revenant',
    title: 'The Revenant',
    year: 2015,
    director: 'Alejandro G. Iñárritu',
    role: 'Hugh Glass',
    synopsis: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    quote: 'I ain’t afraid to die anymore. I’d done it already.',
    awards: ['Academy Award Winner: Best Actor', 'Golden Globe Winner: Best Actor', 'BAFTA Winner: Best Actor'],
    category: 'award-winner',
    image: '/assets/charity/earth-alliance.jpg',
    backdrop: '/assets/filmography/the-revenant.jpg',
    boxOffice: '$533 Million',
    rating: 8.0,
    matchScore: '97% Match',
    duration: '2h 36m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Adventure', 'Drama', 'Western'],
    tagline: 'Blood lost. Life found.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Hugh Glass', avatar: '/assets/filmography/the-revenant.jpg' },
      { name: 'Tom Hardy', character: 'John Fitzgerald' },
      { name: 'Domhnall Gleeson', character: 'Captain Andrew Henry' },
      { name: 'Will Poulter', character: 'Bridger' }
    ],
    videoSrc: '/media/wildlife_patrol.mp4',
    rank: 3,
    isTrending: true,
    continueWatching: {
      progress: 85,
      remaining: '24m remaining',
      lastWatchedEpisode: 'Final Climax: Frozen River Confrontation'
    }
  },
  {
    id: 'the-wolf-of-wall-street',
    title: 'The Wolf of Wall Street',
    year: 2013,
    director: 'Martin Scorsese',
    role: 'Jordan Belfort',
    synopsis: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    quote: 'The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it.',
    awards: ['Academy Award Nominee: Best Actor', 'Golden Globe Winner: Best Actor'],
    category: 'scorsese',
    image: '/assets/filmography/the-wolf-of-wall-street.jpg',
    backdrop: '/assets/filmography/the-wolf-of-wall-street.jpg',
    boxOffice: '$406 Million',
    rating: 8.2,
    matchScore: '96% Match',
    duration: '3h 00m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: '5.1 Surround',
    genres: ['Biography', 'Comedy', 'Crime'],
    tagline: 'EARN. SPEND. PARTY.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Jordan Belfort', avatar: '/assets/legacy/deniro.jpg' },
      { name: 'Jonah Hill', character: 'Donnie Azoff' },
      { name: 'Margot Robbie', character: 'Naomi Lapaglia' },
      { name: 'Matthew McConaughey', character: 'Mark Hanna' }
    ],
    videoSrc: '/media/leo_dispatch.mp4',
    rank: 4,
    isTrending: true
  },
  {
    id: 'once-upon-a-time-in-hollywood',
    title: 'Once Upon a Time in Hollywood',
    year: 2019,
    director: 'Quentin Tarantino',
    role: 'Rick Dalton',
    synopsis: 'A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood’s Golden Age in 1969 Los Angeles.',
    quote: 'Rick Dalton: You’re a good friend, Cliff. Cliff: I try.',
    awards: ['Academy Award Nominee: Best Actor', 'Golden Globe Nominee'],
    category: 'masterpiece',
    image: '/assets/filmography/once-upon-a-time-in-hollywood.jpg',
    backdrop: '/assets/filmography/once-upon-a-time-in-hollywood.jpg',
    boxOffice: '$377 Million',
    rating: 7.6,
    matchScore: '95% Match',
    duration: '2h 41m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Comedy', 'Drama'],
    tagline: 'In this town, it can all change like that.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Rick Dalton', avatar: '/assets/filmography/once-upon-a-time-in-hollywood.jpg' },
      { name: 'Brad Pitt', character: 'Cliff Booth' },
      { name: 'Margot Robbie', character: 'Sharon Tate' },
      { name: 'Al Pacino', character: 'Marvin Schwarz' }
    ],
    videoSrc: '/media/we_are_guardians.mp4',
    rank: 5,
    isTrending: true
  },
  {
    id: 'django-unchained',
    title: 'Django Unchained',
    year: 2012,
    director: 'Quentin Tarantino',
    role: 'Calvin J. Candie',
    synopsis: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.',
    quote: 'Gentlemen, you had my curiosity. But now you have my attention.',
    awards: ['Golden Globe Nominee', 'National Board of Review Winner'],
    category: 'masterpiece',
    image: '/assets/filmography/django-unchained.jpg',
    backdrop: '/assets/filmography/django-unchained.jpg',
    boxOffice: '$426 Million',
    rating: 8.5,
    matchScore: '97% Match',
    duration: '2h 45m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Drama', 'Western'],
    tagline: 'Life, liberty and the pursuit of vengeance.',
    cast: [
      { name: 'Jamie Foxx', character: 'Django' },
      { name: 'Christoph Waltz', character: 'Dr. King Schultz' },
      { name: 'Leonardo DiCaprio', character: 'Calvin J. Candie', avatar: '/assets/filmography/django-unchained.jpg' },
      { name: 'Samuel L. Jackson', character: 'Stephen' }
    ],
    videoSrc: '/media/amazon_protection.mp4',
    rank: 6
  },
  {
    id: 'shutter-island',
    title: 'Shutter Island',
    year: 2010,
    director: 'Martin Scorsese',
    role: 'Edward "Teddy" Daniels',
    synopsis: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
    quote: 'Which would be worse: to live as a monster, or to die as a good man?',
    awards: ['Saturn Award Nominee', 'National Board of Review Top Ten'],
    category: 'scorsese',
    image: '/assets/charity/rewild.jpg',
    backdrop: '/assets/filmography/shutter-island.jpg',
    boxOffice: '$294 Million',
    rating: 8.2,
    matchScore: '94% Match',
    duration: '2h 18m',
    ageRating: 'R',
    quality: 'HD',
    audio: '5.1 Surround',
    genres: ['Mystery', 'Thriller'],
    tagline: 'Someone is missing.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Teddy Daniels', avatar: '/assets/filmography/shutter-island.jpg' },
      { name: 'Mark Ruffalo', character: 'Chuck Aule' },
      { name: 'Ben Kingsley', character: 'Dr. John Cawley' },
      { name: 'Michelle Williams', character: 'Dolores Chanal' }
    ],
    videoSrc: '/media/climate_action.mp4',
    rank: 7
  },
  {
    id: 'the-departed',
    title: 'The Departed',
    year: 2006,
    director: 'Martin Scorsese',
    role: 'Billy Costigan',
    synopsis: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    quote: 'I’m not a cop! I’m a rat! I’m a guy who tells you what you want to hear!',
    awards: ['4 Academy Awards including Best Picture', 'Golden Globe Nominee', 'BAFTA Nominee'],
    category: 'scorsese',
    image: '/assets/charity/galapagos.jpg',
    backdrop: '/assets/filmography/the-departed.jpg',
    boxOffice: '$291 Million',
    rating: 8.5,
    matchScore: '98% Match',
    duration: '2h 31m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: '5.1 Surround',
    genres: ['Crime', 'Drama', 'Thriller'],
    tagline: 'Lies. Betrayal. Sacrifice. How far will you take it?',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Billy Costigan', avatar: '/assets/filmography/the-departed.jpg' },
      { name: 'Matt Damon', character: 'Colin Sullivan' },
      { name: 'Jack Nicholson', character: 'Frank Costello' },
      { name: 'Mark Wahlberg', character: 'Dignam' }
    ],
    videoSrc: '/media/wildlife_patrol.mp4',
    rank: 8
  },
  {
    id: 'titanic',
    title: 'Titanic',
    year: 1997,
    director: 'James Cameron',
    role: 'Jack Dawson',
    synopsis: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    quote: 'I figure life’s a gift and I don’t intend on wasting it.',
    awards: ['11 Academy Awards', 'Golden Globe Nominee', 'Blockbuster of the Century'],
    category: 'classic',
    image: '/assets/charity/global-fishing-watch.jpg',
    backdrop: '/assets/filmography/titanic.jpg',
    boxOffice: '$2.26 Billion',
    rating: 7.9,
    matchScore: '99% Match',
    duration: '3h 14m',
    ageRating: 'PG-13',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Drama', 'Romance'],
    tagline: 'Nothing on Earth could come between them.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Jack Dawson', avatar: '/assets/filmography/titanic.jpg' },
      { name: 'Kate Winslet', character: 'Rose DeWitt Bukater' },
      { name: 'Billy Zane', character: 'Caledon Hockley' },
      { name: 'Kathy Bates', character: 'Molly Brown' }
    ],
    videoSrc: '/media/ocean_dispatch.mp4',
    rank: 9
  },
  {
    id: 'catch-me-if-you-can',
    title: 'Catch Me If You Can',
    year: 2002,
    director: 'Steven Spielberg',
    role: 'Frank Abagnale Jr.',
    synopsis: 'Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. An obsessive FBI agent pursues him relentlessly.',
    quote: 'Two little mice fell into a bucket of cream. The first mouse quickly gave up and drowned. The second mouse wouldn’t quit.',
    awards: ['Golden Globe Nominee: Best Actor'],
    category: 'classic',
    image: '/assets/filmography/catch-me-if-you-can.jpg',
    backdrop: '/assets/filmography/catch-me-if-you-can.jpg',
    boxOffice: '$352 Million',
    rating: 8.1,
    matchScore: '96% Match',
    duration: '2h 21m',
    ageRating: 'PG-13',
    quality: 'HD',
    audio: '5.1 Surround',
    genres: ['Biography', 'Crime', 'Drama'],
    tagline: 'The true story of a real fake.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Frank Abagnale Jr.', avatar: '/assets/filmography/catch-me-if-you-can.jpg' },
      { name: 'Tom Hanks', character: 'Carl Hanratty' },
      { name: 'Christopher Walken', character: 'Frank Abagnale Sr.' },
      { name: 'Amy Adams', character: 'Brenda Strong' }
    ],
    videoSrc: '/media/earth_alliance_reel.mp4',
    rank: 10
  },
  {
    id: 'the-aviator',
    title: 'The Aviator',
    year: 2004,
    director: 'Martin Scorsese',
    role: 'Howard Hughes',
    synopsis: 'A biopic depicting the early years of legendary director and aviator Howard Hughes’ career from the late 1920s to the mid 1940s.',
    quote: 'The way of the future. The way of the future.',
    awards: ['Golden Globe Winner: Best Actor', 'Academy Award Nominee: Best Actor', 'BAFTA Nominee'],
    category: 'scorsese',
    image: '/assets/charity/indigenous-guardians.jpg',
    backdrop: '/assets/filmography/the-aviator.jpg',
    boxOffice: '$213 Million',
    rating: 7.5,
    matchScore: '92% Match',
    duration: '2h 50m',
    ageRating: 'PG-13',
    quality: '4K Ultra HD',
    audio: '5.1 Surround',
    genres: ['Biography', 'Drama'],
    tagline: 'Some men dream the future. He built it.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Howard Hughes', avatar: '/assets/filmography/the-aviator.jpg' },
      { name: 'Cate Blanchett', character: 'Katharine Hepburn' },
      { name: 'Kate Beckinsale', character: 'Ava Gardner' },
      { name: 'John C. Reilly', character: 'Noah Dietrich' }
    ],
    videoSrc: '/media/rewild_biodiversity.mp4'
  },
  {
    id: 'dont-look-up',
    title: 'Don’t Look Up',
    year: 2021,
    director: 'Adam McKay',
    role: 'Dr. Randall Mindy',
    synopsis: 'Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth.',
    quote: 'We really did have everything, didn’t we? If you think about it.',
    awards: ['4 Academy Award Nominations', 'Golden Globe Nominee'],
    category: 'award-winner',
    image: '/assets/filmography/dont-look-up.jpg',
    backdrop: '/assets/filmography/dont-look-up.jpg',
    boxOffice: 'Netflix Record Break',
    rating: 7.2,
    matchScore: '93% Match',
    duration: '2h 18m',
    ageRating: 'R',
    quality: '4K Ultra HD',
    audio: 'Dolby Atmos',
    genres: ['Comedy', 'Drama', 'Sci-Fi'],
    tagline: 'Based on truly possible events.',
    cast: [
      { name: 'Leonardo DiCaprio', character: 'Dr. Randall Mindy', avatar: '/assets/filmography/dont-look-up.jpg' },
      { name: 'Jennifer Lawrence', character: 'Kate Dibiasky' },
      { name: 'Meryl Streep', character: 'President Orlean' },
      { name: 'Cate Blanchett', character: 'Brie Evantee' }
    ],
    videoSrc: '/media/climate_action.mp4'
  }
];

export const TRIVIA_QUESTIONS = [
  {
    question: 'In which year did Leonardo DiCaprio win the Academy Award for Best Actor for his role in The Revenant?',
    options: ['2014', '2015', '2016', '2018'],
    correct: 2,
    explanation: 'He won the Oscar at the 88th Academy Awards in February 2016, where he delivered his historic climate speech.',
  },
  {
    question: 'Which global conservation organization did Leonardo co-found to protect biodiversity in over 80 countries?',
    options: ['Greenpeace', 'Re:wild', 'The Sierra Club', 'Conservation World'],
    correct: 1,
    explanation: 'Leonardo co-founded Re:wild alongside world-leading conservation scientists to tackle biodiversity loss.',
  },
  {
    question: 'How many feature films has Leonardo DiCaprio starred in under the direction of Martin Scorsese?',
    options: ['3', '4', '6', '8'],
    correct: 2,
    explanation: 'They have collaborated on 6 feature films: Gangs of New York, The Aviator, The Departed, Shutter Island, The Wolf of Wall Street, and Killers of the Flower Moon.',
  },
  {
    question: 'At what age did Leonardo receive his very first Academy Award nomination for What’s Eating Gilbert Grape?',
    options: ['16', '19', '22', '25'],
    correct: 1,
    explanation: 'He was nominated for Best Supporting Actor at just 19 years old in 1994.',
  }
];

export const FAMOUS_QUOTES = [
  {
    text: "Climate change is real, it is happening right now. It is the most urgent threat facing our entire species, and we need to work collectively together and stop procrastinating.",
    source: "Academy Award Acceptance Speech, 2016"
  },
  {
    text: "If you can do what you do best and be happy, you're further along in life than most people.",
    source: "On Craft & Passion"
  },
  {
    text: "Protecting our planet is not an option, nor is it a luxury. It is our absolute obligation to the next generation.",
    source: "United Nations Address"
  },
  {
    text: "The good thing about acting is that it always stimulates the imagination. Every character lets you step into another soul.",
    source: "On The Art of Cinema"
  }
];

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category:
    | 'Red Carpet & Premieres'
    | 'With Co-Stars & Directors'
    | 'Portraits'
    | 'Film Stills'
    | 'Movie Covers'
    | 'People'
    | 'Nature & Wildlife';
  year: string;
  caption: string;
  /** CSS object-position used when the photo is cropped into a card */
  focus?: string;
  /** Photographer credit and licence, shown with the photo where required */
  credit?: string;
  creditUrl?: string;
}

const CURATED_GALLERY: GalleryPhoto[] = [
  {
    id: 'with-brad-pitt-margot-robbie',
    src: '/assets/portraits/with-brad-pitt-margot-robbie.jpg',
    title: 'With Brad Pitt & Margot Robbie',
    category: 'With Co-Stars & Directors',
    year: '2019',
    caption: 'The Once Upon a Time… in Hollywood co-stars together at the film\'s 2019 premiere.',
    focus: '50% 25%',
    credit: 'Photo: Toglenn · CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Brad_Pitt,_Margot_Robbie,_and_Leonardo_DiCaprio_2019_by_Glenn_Francis.jpg',
  },
  {
    id: 'berlinale-2010-arrival',
    src: '/assets/portraits/berlinale-2010-arrival.jpg',
    title: 'Berlin Film Festival',
    category: 'Red Carpet & Premieres',
    year: '2010',
    caption: 'Arriving at the 2010 Berlinale, where Shutter Island had its premiere.',
    focus: '50% 30%',
    credit: 'Photo: Siebbi · CC BY 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_Berlinale_2010.jpg',
  },
  {
    id: 'with-martin-scorsese-2007',
    src: '/assets/portraits/with-martin-scorsese-2007.jpg',
    title: 'With Martin Scorsese',
    category: 'With Co-Stars & Directors',
    year: '2007',
    caption: 'Two of cinema\'s great collaborators, photographed together in 2007.',
    focus: '50% 30%',
    credit: 'Photo: Informador Digital · CC BY 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Martin_Scorsese_y_Leonardo_DiCaprio.jpg',
  },
  {
    id: 'portrait-2008',
    src: '/assets/portraits/portrait-2008.jpg',
    title: 'Portrait',
    category: 'Portraits',
    year: '2008',
    caption: 'A portrait from November 2008.',
    focus: '50% 15%',
    credit: 'Photo: Colin Chou · CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:LeonardoDiCaprioNov08.jpg',
  },
  {
    id: 'golden-globes-2012',
    src: '/assets/portraits/golden-globes-2012.jpg',
    title: 'Golden Globe Awards',
    category: 'Red Carpet & Premieres',
    year: '2012',
    caption: 'Arriving at the 69th Golden Globe Awards in January 2012.',
    focus: '50% 30%',
    credit: 'Photo: jdeeringdavis · CC BY 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_@_69th_Annual_Golden_Globes_Awards.jpg',
  },
  {
    id: 'cinemacon-with-scorsese',
    src: '/assets/portraits/cinemacon-with-scorsese.jpg',
    title: 'With Martin Scorsese at CinemaCon',
    category: 'With Co-Stars & Directors',
    year: '2023',
    caption: 'Together at CinemaCon in 2023, ahead of Killers of the Flower Moon.',
    focus: '50% 30%',
  },
  {
    id: 'berlinale-2010-portrait',
    src: '/assets/portraits/berlinale-2010-portrait.jpg',
    title: 'Berlinale Portrait',
    category: 'Portraits',
    year: '2010',
    caption: 'A smiling portrait from the 2010 Berlin Film Festival.',
    focus: '50% 20%',
    credit: 'Photo: Siebbi · CC BY 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_2010.jpg',
  },
  {
    id: 'tribeca-2007-with-costars',
    src: '/assets/portraits/tribeca-2007-with-costars.jpg',
    title: 'Tribeca Film Festival',
    category: 'With Co-Stars & Directors',
    year: '2007',
    caption: 'With Lukas Haas and Kevin Connolly at the 2007 Tribeca Film Festival.',
    focus: '40% 30%',
    credit: 'Photo: David Shankbone · CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio,_Lukas_Haas_and_Kevin_Connely_by_David_Shankbone.jpg',
  },
  {
    id: 'with-lily-gladstone',
    src: '/assets/portraits/with-lily-gladstone.jpg',
    title: 'With Lily Gladstone',
    category: 'With Co-Stars & Directors',
    year: '2023',
    caption: 'With his Killers of the Flower Moon co-star at Variety\'s Power of Women event, November 2023.',
    focus: '45% 25%',
  },
  {
    id: 'tiff-2016-red-carpet',
    src: '/assets/portraits/tiff-2016-red-carpet.jpg',
    title: 'Toronto International Film Festival',
    category: 'Red Carpet & Premieres',
    year: '2016',
    caption: 'On the red carpet at the Toronto International Film Festival, September 2016.',
    focus: '50% 25%',
    credit: 'Photo: GabboT · CC BY-SA 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Before_the_Flood_03_(29660407562).jpg',
  },
  {
    id: 'portrait-2019',
    src: '/assets/portraits/portrait-2019.jpg',
    title: 'Portrait',
    category: 'Portraits',
    year: '2019',
    caption: 'A portrait from the summer of 2019.',
    focus: '50% 20%',
    credit: 'Photo: Toglenn · CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_2019_by_Glenn_Francis_(cropped).jpg',
  },
  {
    id: 'red-carpet-2014',
    src: '/assets/portraits/red-carpet-2014.jpg',
    title: 'Red Carpet',
    category: 'Red Carpet & Premieres',
    year: '2014',
    caption: 'On the red carpet in May 2014.',
    focus: '50% 40%',
    credit: 'Photo: Christopher William Adach · CC BY-SA 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_20140503.jpg',
  },
  {
    id: 'bfi-conversation-2025',
    src: '/assets/portraits/bfi-conversation-2025.jpg',
    title: 'In Conversation with Paul Thomas Anderson',
    category: 'With Co-Stars & Directors',
    year: '2025',
    caption: 'On stage with director Paul Thomas Anderson at BFI Southbank, London, November 2025.',
    focus: '50% 40%',
    credit: 'Photo: Raph PH · CC BY 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_&_Paul_Thomas_Anderson_-_BFI_Southbank.jpg',
  },
  {
    id: 'studio-portrait',
    src: '/assets/portraits/studio-portrait.jpg',
    title: 'Studio Portrait',
    category: 'Portraits',
    year: '',
    caption: 'A cinematic studio portrait.',
    focus: '50% 20%',
  },
  {
    id: 'tiff-2016-fans',
    src: '/assets/portraits/tiff-2016-fans.jpg',
    title: 'Greeting Fans in Toronto',
    category: 'Red Carpet & Premieres',
    year: '2016',
    caption: 'Meeting fans along the red carpet in Toronto, September 2016.',
    focus: '50% 25%',
    credit: 'Photo: GabboT · CC BY-SA 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Before_the_Flood_05_(29480722230).jpg',
  },
  {
    id: 'bfi-portrait-2025',
    src: '/assets/portraits/bfi-portrait-2025.jpg',
    title: 'Portrait',
    category: 'Portraits',
    year: '2025',
    caption: 'A portrait from November 2025 in London.',
    focus: '50% 25%',
    credit: 'Photo: Raph PH · CC BY 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_-_BFI_Southbank.jpg',
  },
  {
    id: 'podium-portrait',
    src: '/assets/portraits/podium-portrait.jpg',
    title: 'Speaking at a Podium',
    category: 'Portraits',
    year: '',
    caption: 'A thoughtful moment at the podium.',
    focus: '55% 30%',
  },
  {
    id: 'tiff-2016-signing',
    src: '/assets/portraits/tiff-2016-signing.jpg',
    title: 'Signing Autographs',
    category: 'Red Carpet & Premieres',
    year: '2016',
    caption: 'Signing autographs for fans in Toronto, September 2016.',
    focus: '50% 25%',
    credit: 'Photo: GabboT · CC BY-SA 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_(29736977296).jpg',
  },
  {
    id: 'still-titanic',
    src: '/assets/stills/titanic-s1.jpg',
    title: 'Titanic',
    category: 'Film Stills',
    year: '1997',
    caption: 'Jack and Rose at the bow of the ship, the film\'s most famous scene.',
    focus: '50% 40%',
  },
  {
    id: 'still-revenant',
    src: '/assets/stills/the-revenant-s1.jpg',
    title: 'The Revenant',
    category: 'Film Stills',
    year: '2015',
    caption: 'As frontiersman Hugh Glass, the role that won him the Oscar.',
    focus: '50% 30%',
  },
  {
    id: 'still-wolf',
    src: '/assets/stills/the-wolf-of-wall-street-s1.jpg',
    title: 'The Wolf of Wall Street',
    category: 'Film Stills',
    year: '2013',
    caption: 'As Jordan Belfort, working the room.',
    focus: '50% 30%',
  },
  {
    id: 'still-aviator',
    src: '/assets/stills/the-aviator-s1.jpg',
    title: 'The Aviator',
    category: 'Film Stills',
    year: '2004',
    caption: 'As Howard Hughes, in Martin Scorsese\'s biopic.',
    focus: '50% 30%',
  },
  {
    id: 'still-shutter',
    src: '/assets/stills/shutter-island-s5.jpg',
    title: 'Shutter Island',
    category: 'Film Stills',
    year: '2010',
    caption: 'As U.S. Marshal Teddy Daniels.',
    focus: '50% 30%',
  },
  {
    id: 'still-departed',
    src: '/assets/stills/the-departed-s1.jpg',
    title: 'The Departed',
    category: 'Film Stills',
    year: '2006',
    caption: 'As undercover cop Billy Costigan.',
    focus: '50% 30%',
  },
  {
    id: 'still-once',
    src: '/assets/stills/once-upon-a-time-in-hollywood-s2.jpg',
    title: 'Once Upon a Time in Hollywood',
    category: 'Film Stills',
    year: '2019',
    caption: 'As Rick Dalton, alongside Brad Pitt\'s Cliff Booth.',
    focus: '50% 30%',
  },
  {
    id: 'cover-titanic',
    src: '/assets/posters/titanic.jpg',
    title: 'Titanic — Official Poster',
    category: 'Movie Covers',
    year: '1997',
    caption: 'The official poster for Titanic.',
    focus: '50% 50%',
  },
  {
    id: 'cover-catch-me-if-you-can',
    src: '/assets/posters/catch-me-if-you-can.jpg',
    title: 'Catch Me If You Can — Official Poster',
    category: 'Movie Covers',
    year: '2002',
    caption: 'The official poster for Catch Me If You Can.',
    focus: '50% 50%',
  },
  {
    id: 'cover-the-aviator',
    src: '/assets/posters/the-aviator.jpg',
    title: 'The Aviator — Official Poster',
    category: 'Movie Covers',
    year: '2004',
    caption: 'The official poster for The Aviator.',
    focus: '50% 50%',
  },
  {
    id: 'cover-the-departed',
    src: '/assets/posters/the-departed.jpg',
    title: 'The Departed — Official Poster',
    category: 'Movie Covers',
    year: '2006',
    caption: 'The official poster for The Departed.',
    focus: '50% 50%',
  },
  {
    id: 'cover-shutter-island',
    src: '/assets/posters/shutter-island.jpg',
    title: 'Shutter Island — Official Poster',
    category: 'Movie Covers',
    year: '2010',
    caption: 'The official poster for Shutter Island.',
    focus: '50% 50%',
  },
  {
    id: 'cover-inception',
    src: '/assets/posters/inception.jpg',
    title: 'Inception — Official Poster',
    category: 'Movie Covers',
    year: '2010',
    caption: 'The official poster for Inception.',
    focus: '50% 50%',
  },
  {
    id: 'cover-django-unchained',
    src: '/assets/posters/django-unchained.jpg',
    title: 'Django Unchained — Official Poster',
    category: 'Movie Covers',
    year: '2012',
    caption: 'The official poster for Django Unchained.',
    focus: '50% 50%',
  },
  {
    id: 'cover-the-wolf-of-wall-street',
    src: '/assets/posters/the-wolf-of-wall-street.jpg',
    title: 'The Wolf of Wall Street — Official Poster',
    category: 'Movie Covers',
    year: '2013',
    caption: 'The official poster for The Wolf of Wall Street.',
    focus: '50% 50%',
  },
  {
    id: 'cover-the-revenant',
    src: '/assets/posters/the-revenant.jpg',
    title: 'The Revenant — Official Poster',
    category: 'Movie Covers',
    year: '2015',
    caption: 'The official poster for The Revenant.',
    focus: '50% 50%',
  },
  {
    id: 'cover-once-upon-a-time-in-hollywood',
    src: '/assets/posters/once-upon-a-time-in-hollywood.jpg',
    title: 'Once Upon a Time… in Hollywood — Official Poster',
    category: 'Movie Covers',
    year: '2019',
    caption: 'The official poster for Once Upon a Time… in Hollywood.',
    focus: '50% 50%',
  },
  {
    id: 'cover-dont-look-up',
    src: '/assets/posters/dont-look-up.jpg',
    title: 'Don\'t Look Up — Official Poster',
    category: 'Movie Covers',
    year: '2021',
    caption: 'The official poster for Don\'t Look Up.',
    focus: '50% 50%',
  },
  {
    id: 'cover-killers-of-the-flower-moon',
    src: '/assets/posters/killers-of-the-flower-moon.jpg',
    title: 'Killers of the Flower Moon — Official Poster',
    category: 'Movie Covers',
    year: '2023',
    caption: 'The official poster for Killers of the Flower Moon.',
    focus: '50% 50%',
  },
];

// Photographs imported from the local archive folder, newest first.
const ARCHIVE_GALLERY: GalleryPhoto[] = ARCHIVE_PHOTOS.map(([file, year, hasPeople], idx) => ({
  id: `archive-${idx}`,
  src: `/assets/archive/${file}`,
  title: hasPeople ? 'Candid moment' : 'Nature & wildlife',
  category: hasPeople ? 'People' : 'Nature & Wildlife',
  year: String(year),
  caption: '',
  focus: hasPeople ? '50% 25%' : '50% 50%',
}));

export const GALLERY_PHOTOS: GalleryPhoto[] = [...CURATED_GALLERY, ...ARCHIVE_GALLERY];


export interface Achievement {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: 'Oscar' | 'Golden Globe' | 'BAFTA' | 'Humanitarian' | 'Box Office';
  description: string;
  stat?: string;
}

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    year: '2016',
    title: 'Academy Award Winner — Best Actor',
    organization: 'Academy of Motion Picture Arts and Sciences',
    category: 'Oscar',
    description: 'Awarded for his transcendent, visceral performance as frontiersman Hugh Glass in The Revenant.',
    stat: '88th Oscars'
  },
  {
    id: 'ach-2',
    year: '1994–2026',
    title: '8 Academy Award Nominations',
    organization: 'The Oscars',
    category: 'Oscar',
    description: 'Best Supporting Actor (Gilbert Grape), Best Actor (The Aviator, Blood Diamond, The Wolf of Wall Street, The Revenant, Once Upon a Time in Hollywood, One Battle After Another), and Best Picture as a producer (The Wolf of Wall Street).',
    stat: '8 Nominations'
  },
  {
    id: 'ach-3',
    year: '2005, 2014, 2016',
    title: '3-Time Golden Globe Winner',
    organization: 'Hollywood Foreign Press Association',
    category: 'Golden Globe',
    description: 'Best Actor in a Motion Picture – Drama for The Aviator (2005) & The Revenant (2016); Best Actor in Musical or Comedy for The Wolf of Wall Street (2014).',
    stat: '15 Nominations'
  },
  {
    id: 'ach-4',
    year: '2016',
    title: 'BAFTA Award Winner — Best Leading Actor',
    organization: 'British Academy of Film and Television Arts',
    category: 'BAFTA',
    description: 'Honored by the British Academy for leading performance excellence in The Revenant.',
    stat: 'BAFTA Mask'
  },
  {
    id: 'ach-5',
    year: '2014–Present',
    title: 'United Nations Messenger of Peace',
    organization: 'United Nations',
    category: 'Humanitarian',
    description: 'Designated by the UN Secretary-General to champion urgent worldwide climate action and biodiversity protection.',
    stat: 'UN Messenger'
  },
  {
    id: 'ach-6',
    year: '1997–2024',
    title: '$7.2+ Billion Global Box Office Legacy',
    organization: 'Worldwide Theatrical Distribution',
    category: 'Box Office',
    description: 'One of the few remaining genuine worldwide theatrical draws, headlining original visionary auteur films to historic global box office records.',
    stat: '$7.2B+'
  },
  {
    id: 'ach-7',
    year: '2014',
    title: 'Clinton Global Citizen Award',
    organization: 'Clinton Global Initiative',
    category: 'Humanitarian',
    description: 'Recognising his philanthropic leadership on climate and conservation.',
    stat: 'Global Citizen'
  },
  {
    id: 'ach-8',
    year: '1997',
    title: 'Titanic — 11 Academy Awards Record',
    organization: 'Paramount & 20th Century Fox',
    category: 'Box Office',
    description: 'Highest-grossing film of all time for over a decade, grossing $2.26 Billion worldwide and defining a generation.',
    stat: '$2.26B'
  }
];

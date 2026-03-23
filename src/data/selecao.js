export const selecao = {
  coach: {
    name: 'Carlo Ancelotti',
    nationalityPt: 'Italiano',
    nationalityEn: 'Italian',
    born: '10 Jun 1959',
    club: 'Seleção Brasileira',
    since: '2024',
    formation: '4-2-3-1',
    titlesPt: 'UCL (2003, 2005, 2014, 2022) · LaLiga · Serie A · Bundesliga · Ligue 1 · Premier League',
    titlesEn:  'UCL (2003, 2005, 2014, 2022) · LaLiga · Serie A · Bundesliga · Ligue 1 · Premier League',
    stylePt: 'Futebol posicional com transições rápidas. Liberdade criativa para os meias e alas. Solidez defensiva como base para explorar contra-ataques velozes pelos flancos.',
    styleEn: 'Positional football with quick transitions. Creative freedom for midfielders and wingers. Defensive solidity as the base to exploit fast counter-attacks down the flanks.',
  },

  group: {
    name: 'C',
    teams: [
      { namePt: 'Brasil',   nameEn: 'Brazil',   flag: '🇧🇷' },
      { namePt: 'Marrocos', nameEn: 'Morocco',  flag: '🇲🇦' },
      { namePt: 'Haiti',    nameEn: 'Haiti',    flag: '🇭🇹' },
      { namePt: 'Escócia',  nameEn: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    ],
    matches: [
      {
        date: '13 Jun',
        time: '18:00 ET',
        home: 'Brasil',    homeEn: 'Brazil',   homeFlag: '🇧🇷',
        away: 'Marrocos',  awayEn: 'Morocco',  awayFlag: '🇲🇦',
        venuePt: 'New York / New Jersey',
        venueEn: 'New York / New Jersey',
      },
      {
        date: '19 Jun',
        time: '21:00 ET',
        home: 'Brasil',  homeEn: 'Brazil',  homeFlag: '🇧🇷',
        away: 'Haiti',   awayEn: 'Haiti',   awayFlag: '🇭🇹',
        venuePt: 'Filadélfia',
        venueEn: 'Philadelphia',
      },
      {
        date: '24 Jun',
        time: '18:00 ET',
        home: 'Escócia',  homeEn: 'Scotland',  homeFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        away: 'Brasil',   awayEn: 'Brazil',    awayFlag: '🇧🇷',
        venuePt: 'Miami Gardens',
        venueEn: 'Miami Gardens',
      },
    ],
  },

  // Escalação provável 4-2-3-1
  lineup: [
    { role: 'fwd', players: [
      { name: 'Endrick',     club: 'Lyon',             number: 9  },
    ]},
    { role: 'am', players: [
      { name: 'Vinicius Jr', club: 'Real Madrid',      number: 10 },
      { name: 'Danilo',      club: 'Botafogo',         number: 8  },
      { name: 'Raphinha',    club: 'Barcelona',        number: 11 },
    ]},
    { role: 'dm', players: [
      { name: 'Casemiro',    club: 'Man. United',      number: 5  },
      { name: 'A. Santos',   club: 'Chelsea',          number: 17 },
    ]},
    { role: 'def', players: [
      { name: 'Alex Sandro', club: 'Flamengo',         number: 6  },
      { name: 'Bremer',      club: 'Juventus',         number: 3  },
      { name: 'Marquinhos',  club: 'PSG',              number: 4  },
      { name: 'Wesley',      club: 'Roma',             number: 2  },
    ]},
    { role: 'gk', players: [
      { name: 'Alisson',     club: 'Liverpool',        number: 1  },
    ]},
  ],

  history: [
    { year: 1958, locationPt: 'Suécia',        locationEn: 'Sweden',       finalPt: 'Brasil 5–2 Suécia',         finalEn: 'Brazil 5–2 Sweden'         },
    { year: 1962, locationPt: 'Chile',          locationEn: 'Chile',        finalPt: 'Brasil 3–1 Tchecoslov.',    finalEn: 'Brazil 3–1 Czechoslovakia' },
    { year: 1970, locationPt: 'México',         locationEn: 'Mexico',       finalPt: 'Brasil 4–1 Itália',         finalEn: 'Brazil 4–1 Italy'          },
    { year: 1994, locationPt: 'Estados Unidos', locationEn: 'USA',          finalPt: 'Brasil 0–0 Itália (3–2 p.)',finalEn: 'Brazil 0–0 Italy (3–2 p.)' },
    { year: 2002, locationPt: 'Coreia/Japão',   locationEn: 'Korea/Japan',  finalPt: 'Brasil 2–0 Alemanha',       finalEn: 'Brazil 2–0 Germany'        },
  ],
}

export const squad = [
  // Goleiros
  { id: 1,  number: 1,  name: 'Alisson',           pos: 'GK', club: 'Liverpool',         age: 32 },
  { id: 2,  number: 12, name: 'Bento',              pos: 'GK', club: 'Al-Nassr',          age: 25 },
  { id: 3,  number: 23, name: 'Ederson',            pos: 'GK', club: 'Fenerbahçe',        age: 31 },
  // Defensores
  { id: 4,  number: 4,  name: 'Marquinhos',         pos: 'CB', club: 'PSG',               age: 30 },
  { id: 5,  number: 3,  name: 'Bremer',             pos: 'CB', club: 'Juventus',          age: 27 },
  { id: 6,  number: 14, name: 'Gabriel Magalhães',  pos: 'CB', club: 'Arsenal',           age: 26 },
  { id: 7,  number: 15, name: 'Léo Pereira',        pos: 'CB', club: 'Flamengo',          age: 28 },
  { id: 8,  number: 13, name: 'Ibañez',             pos: 'CB', club: 'Al-Ahli',           age: 26 },
  { id: 9,  number: 6,  name: 'Alex Sandro',        pos: 'LB', club: 'Flamengo',          age: 33 },
  { id: 10, number: 2,  name: 'Wesley',             pos: 'RB', club: 'Roma',              age: 21 },
  { id: 11, number: 16, name: 'Danilo',             pos: 'RB', club: 'Flamengo',          age: 33 },
  { id: 12, number: 22, name: 'Douglas Santos',     pos: 'LB', club: 'Zenit',             age: 29 },
  // Meio-campo
  { id: 13, number: 5,  name: 'Casemiro',           pos: 'DM', club: 'Manchester United', age: 34 },
  { id: 14, number: 17, name: 'Andrey Santos',      pos: 'CM', club: 'Chelsea',           age: 20 },
  { id: 15, number: 18, name: 'Fabinho',            pos: 'DM', club: 'Al-Ittihad',        age: 30 },
  { id: 16, number: 8,  name: 'Danilo',             pos: 'CM', club: 'Botafogo',          age: 23 },
  { id: 17, number: 20, name: 'Gabriel Sara',       pos: 'CM', club: 'Galatasaray',       age: 25 },
  // Atacantes
  { id: 18, number: 7,  name: 'Vinicius Jr',        pos: 'LW', club: 'Real Madrid',       age: 24 },
  { id: 19, number: 11, name: 'Raphinha',           pos: 'RW', club: 'Barcelona',         age: 29 },
  { id: 20, number: 9,  name: 'Endrick',            pos: 'ST', club: 'Lyon',              age: 18 },
  { id: 21, number: 10, name: 'Matheus Cunha',      pos: 'ST', club: 'Manchester United', age: 25 },
  { id: 22, number: 19, name: 'Gabriel Martinelli', pos: 'LW', club: 'Arsenal',           age: 23 },
  { id: 23, number: 21, name: 'João Pedro',         pos: 'ST', club: 'Chelsea',           age: 23 },
  { id: 24, number: 25, name: 'Luiz Henrique',      pos: 'RW', club: 'Zenit',             age: 23 },
  { id: 25, number: 26, name: 'Igor Thiago',        pos: 'ST', club: 'Brentford',         age: 24 },
  { id: 26, number: 24, name: 'Rayan',              pos: 'RW', club: 'Bournemouth',       age: 17 },
]

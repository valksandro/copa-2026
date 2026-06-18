// Dados REAIS da Copa do Mundo 2026 (EUA, México, Canadá)
// 48 seleções, 12 grupos (A-L), 104 jogos, 16 estádios
// Fonte: FIFA.com, GE Globo, ESPN, CBF — atualizado em 18/06/2026

export interface Team {
  name: string;
  code: string; // código ISO 3 letras
  flag: string; // emoji bandeira
  group: string;
  federation: "CONMEBOL" | "UEFA" | "CONCACAF" | "CAF" | "AFC" | "OFC";
  titles: number;
  fifaRanking: number;
  starPower: "⭐⭐⭐⭐⭐" | "⭐⭐⭐⭐" | "⭐⭐⭐" | "⭐⭐" | "⭐";
  color: string; // cor primária da seleção
  color2: string;
  coach: string;
  starPlayer: string;
  strength: number; // 0-100
}

export const teams: Team[] = [
  // GRUPO A
  { name: "México", code: "MEX", flag: "🇲🇽", group: "A", federation: "CONCACAF", titles: 0, fifaRanking: 17, starPower: "⭐⭐⭐", color: "#006847", color2: "#CE1126", coach: "Javier Aguirre", starPlayer: "Santiago Giménez", strength: 78 },
  { name: "África do Sul", code: "RSA", flag: "🇿🇦", group: "A", federation: "CAF", titles: 0, fifaRanking: 56, starPower: "⭐⭐", color: "#007749", color2: "#FFB81C", coach: "Hugo Broos", starPlayer: "Percy Tau", strength: 70 },
  { name: "Coreia do Sul", code: "KOR", flag: "🇰🇷", group: "A", federation: "AFC", titles: 0, fifaRanking: 22, starPower: "⭐⭐⭐", color: "#003478", color2: "#CD2E3A", coach: "Hong Myung-bo", starPlayer: "Son Heung-min", strength: 78 },
  { name: "República Tcheca", code: "CZE", flag: "🇨🇿", group: "A", federation: "UEFA", titles: 0, fifaRanking: 36, starPower: "⭐⭐⭐", color: "#11457E", color2: "#FFFFFF", coach: "Ivan Hašek", starPlayer: "Patrik Schick", strength: 75 },

  // GRUPO B
  { name: "Canadá", code: "CAN", flag: "🇨🇦", group: "B", federation: "CONCACAF", titles: 0, fifaRanking: 31, starPower: "⭐⭐⭐", color: "#FF0000", color2: "#FFFFFF", coach: "Jesse Marsch", starPlayer: "Alphonso Davies", strength: 73 },
  { name: "Bósnia", code: "BIH", flag: "🇧🇦", group: "B", federation: "UEFA", titles: 0, fifaRanking: 74, starPower: "⭐⭐", color: "#0093DD", color2: "#FCD116", coach: "Sergej Barbarez", starPlayer: "Edin Džeko", strength: 69 },
  { name: "Catar", code: "QAT", flag: "🇶🇦", group: "B", federation: "AFC", titles: 0, fifaRanking: 53, starPower: "⭐", color: "#8A1538", color2: "#FFFFFF", coach: "Bart Maris", starPlayer: "Akram Afif", strength: 68 },
  { name: "Suíça", code: "SUI", flag: "🇨🇭", group: "B", federation: "UEFA", titles: 0, fifaRanking: 18, starPower: "⭐⭐⭐", color: "#D52B1E", color2: "#FFFFFF", coach: "Murat Yakin", starPlayer: "Granit Xhaka", strength: 79 },

  // GRUPO C (Brasil)
  { name: "Brasil", code: "BRA", flag: "🇧🇷", group: "C", federation: "CONMEBOL", titles: 5, fifaRanking: 5, starPower: "⭐⭐⭐⭐⭐", color: "#FFDF00", color2: "#009C3B", coach: "Carlo Ancelotti", starPlayer: "Vinícius Júnior", strength: 90 },
  { name: "Marrocos", code: "MAR", flag: "🇲🇦", group: "C", federation: "CAF", titles: 0, fifaRanking: 13, starPower: "⭐⭐⭐⭐", color: "#C1272D", color2: "#006233", coach: "Walid Regragui", starPlayer: "Achraf Hakimi", strength: 83 },
  { name: "Haiti", code: "HAI", flag: "🇭🇹", group: "C", federation: "CONCACAF", titles: 0, fifaRanking: 83, starPower: "⭐", color: "#00209F", color2: "#D21034", coach: "Sébastien Migné", starPlayer: "Frantzdy Pierrot", strength: 64 },
  { name: "Escócia", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C", federation: "UEFA", titles: 0, fifaRanking: 39, starPower: "⭐⭐", color: "#0065BD", color2: "#FFFFFF", coach: "Steve Clarke", starPlayer: "Scott McTominay", strength: 74 },

  // GRUPO D
  { name: "Estados Unidos", code: "USA", flag: "🇺🇸", group: "D", federation: "CONCACAF", titles: 0, fifaRanking: 16, starPower: "⭐⭐⭐", color: "#3C3B6E", color2: "#B22234", coach: "Mauricio Pochettino", starPlayer: "Christian Pulisic", strength: 76 },
  { name: "Paraguai", code: "PAR", flag: "🇵🇾", group: "D", federation: "CONMEBOL", titles: 0, fifaRanking: 41, starPower: "⭐⭐", color: "#D52B1E", color2: "#0038A8", coach: "Gustavo Alfaro", starPlayer: "Miguel Almirón", strength: 73 },
  { name: "Austrália", code: "AUS", flag: "🇦🇺", group: "D", federation: "AFC", titles: 0, fifaRanking: 26, starPower: "⭐⭐", color: "#FFCD00", color2: "#00843D", coach: "Tony Popovic", starPlayer: "Mathew Ryan", strength: 72 },
  { name: "Turquia", code: "TUR", flag: "🇹🇷", group: "D", federation: "UEFA", titles: 0, fifaRanking: 27, starPower: "⭐⭐⭐", color: "#E30A17", color2: "#FFFFFF", coach: "Vincenzo Montella", starPlayer: "Arda Güler", strength: 78 },

  // GRUPO E
  { name: "Alemanha", code: "GER", flag: "🇩🇪", group: "E", federation: "UEFA", titles: 4, fifaRanking: 11, starPower: "⭐⭐⭐⭐", color: "#000000", color2: "#DD0000", coach: "Julian Nagelsmann", starPlayer: "Jamal Musiala", strength: 87 },
  { name: "Curaçao", code: "CUW", flag: "🇨🇼", group: "E", federation: "CONCACAF", titles: 0, fifaRanking: 82, starPower: "⭐", color: "#002B7F", color2: "#FCD116", coach: "Dick Advocaat", starPlayer: "Leandro Bacuna", strength: 63 },
  { name: "Costa do Marfim", code: "CIV", flag: "🇨🇮", group: "E", federation: "CAF", titles: 0, fifaRanking: 42, starPower: "⭐⭐⭐", color: "#FF8200", color2: "#009E60", coach: "Emerse Faé", starPlayer: "Sébastien Haller", strength: 76 },
  { name: "Equador", code: "ECU", flag: "🇪🇨", group: "E", federation: "CONMEBOL", titles: 0, fifaRanking: 24, starPower: "⭐⭐⭐", color: "#FCD116", color2: "#003893", coach: "Sebastián Beccacece", starPlayer: "Moisés Caicedo", strength: 75 },

  // GRUPO F
  { name: "Holanda", code: "NED", flag: "🇳🇱", group: "F", federation: "UEFA", titles: 0, fifaRanking: 6, starPower: "⭐⭐⭐⭐", color: "#FF6600", color2: "#FFFFFF", coach: "Ronald Koeman", starPlayer: "Memphis Depay", strength: 86 },
  { name: "Japão", code: "JPN", flag: "🇯🇵", group: "F", federation: "AFC", titles: 0, fifaRanking: 15, starPower: "⭐⭐⭐⭐", color: "#BC002D", color2: "#FFFFFF", coach: "Hajime Moriyasu", starPlayer: "Takefusa Kubo", strength: 80 },
  { name: "Suécia", code: "SWE", flag: "🇸🇪", group: "F", federation: "UEFA", titles: 0, fifaRanking: 38, starPower: "⭐⭐⭐", color: "#005B99", color2: "#FFCC00", coach: "Jon Dahl Tomasson", starPlayer: "Alexander Isak", strength: 76 },
  { name: "Tunísia", code: "TUN", flag: "🇹🇳", group: "F", federation: "CAF", titles: 0, fifaRanking: 41, starPower: "⭐⭐", color: "#E70013", color2: "#FFFFFF", coach: "Sami Trabelsi", starPlayer: "Aïssa Laïdouni", strength: 72 },

  // GRUPO G
  { name: "Bélgica", code: "BEL", flag: "🇧🇪", group: "G", federation: "UEFA", titles: 0, fifaRanking: 8, starPower: "⭐⭐⭐⭐", color: "#FAE042", color2: "#ED2939", coach: "Domenico Tedesco", starPlayer: "Kevin De Bruyne", strength: 85 },
  { name: "Egito", code: "EGY", flag: "🇪🇬", group: "G", federation: "CAF", titles: 0, fifaRanking: 32, starPower: "⭐⭐⭐", color: "#CE1126", color2: "#FFFFFF", coach: "Hossam Hassan", starPlayer: "Mohamed Salah", strength: 77 },
  { name: "Irã", code: "IRN", flag: "🇮🇷", group: "G", federation: "AFC", titles: 0, fifaRanking: 20, starPower: "⭐⭐", color: "#239F40", color2: "#DA0000", coach: "Amir Ghalenoei", starPlayer: "Mehdi Taremi", strength: 73 },
  { name: "Nova Zelândia", code: "NZL", flag: "🇳🇿", group: "G", federation: "OFC", titles: 0, fifaRanking: 102, starPower: "⭐", color: "#000000", color2: "#C8102E", coach: "Darren Bazeley", starPlayer: "Chris Wood", strength: 64 },

  // GRUPO H
  { name: "Espanha", code: "ESP", flag: "🇪🇸", group: "H", federation: "UEFA", titles: 1, fifaRanking: 3, starPower: "⭐⭐⭐⭐⭐", color: "#AA151B", color2: "#F1BF00", coach: "Luis de la Fuente", starPlayer: "Lamine Yamal", strength: 91 },
  { name: "Cabo Verde", code: "CPV", flag: "🇨🇻", group: "H", federation: "CAF", titles: 0, fifaRanking: 70, starPower: "⭐", color: "#003893", color2: "#FFFFFF", coach: "Bubista", starPlayer: "Bebé", strength: 65 },
  { name: "Arábia Saudita", code: "KSA", flag: "🇸🇦", group: "H", federation: "AFC", titles: 0, fifaRanking: 56, starPower: "⭐⭐", color: "#006C35", color2: "#FFFFFF", coach: "Hervé Renard", starPlayer: "Salem Al-Dawsari", strength: 71 },
  { name: "Uruguai", code: "URU", flag: "🇺🇾", group: "H", federation: "CONMEBOL", titles: 2, fifaRanking: 14, starPower: "⭐⭐⭐⭐", color: "#7B9BD6", color2: "#FFFFFF", coach: "Marcelo Bielsa", starPlayer: "Federico Valverde", strength: 84 },

  // GRUPO I
  { name: "França", code: "FRA", flag: "🇫🇷", group: "I", federation: "UEFA", titles: 2, fifaRanking: 2, starPower: "⭐⭐⭐⭐⭐", color: "#0055A4", color2: "#EF4135", coach: "Didier Deschamps", starPlayer: "Kylian Mbappé", strength: 92 },
  { name: "Senegal", code: "SEN", flag: "🇸🇳", group: "I", federation: "CAF", titles: 0, fifaRanking: 19, starPower: "⭐⭐⭐", color: "#00853F", color2: "#FDEF42", coach: "Pape Thiaw", starPlayer: "Sadio Mané", strength: 78 },
  { name: "Iraque", code: "IRQ", flag: "🇮🇶", group: "I", federation: "AFC", titles: 0, fifaRanking: 58, starPower: "⭐", color: "#CE1126", color2: "#000000", coach: "Graham Arnold", starPlayer: "Aymen Hussein", strength: 67 },
  { name: "Noruega", code: "NOR", flag: "🇳🇴", group: "I", federation: "UEFA", titles: 0, fifaRanking: 30, starPower: "⭐⭐⭐⭐", color: "#EF2B2D", color2: "#002868", coach: "Ståle Solbakken", starPlayer: "Erling Haaland", strength: 81 },

  // GRUPO J
  { name: "Argentina", code: "ARG", flag: "🇦🇷", group: "J", federation: "CONMEBOL", titles: 3, fifaRanking: 1, starPower: "⭐⭐⭐⭐⭐", color: "#74ACDF", color2: "#FFFFFF", coach: "Lionel Scaloni", starPlayer: "Lionel Messi", strength: 93 },
  { name: "Argélia", code: "ALG", flag: "🇩🇿", group: "J", federation: "CAF", titles: 0, fifaRanking: 35, starPower: "⭐⭐⭐", color: "#006233", color2: "#FFFFFF", coach: "Vladimir Petković", starPlayer: "Riyad Mahrez", strength: 75 },
  { name: "Áustria", code: "AUT", flag: "🇦🇹", group: "J", federation: "UEFA", titles: 0, fifaRanking: 23, starPower: "⭐⭐⭐", color: "#ED2939", color2: "#FFFFFF", coach: "Ralf Rangnick", starPlayer: "Marcel Sabitzer", strength: 79 },
  { name: "Jordânia", code: "JOR", flag: "🇯🇴", group: "J", federation: "AFC", titles: 0, fifaRanking: 62, starPower: "⭐", color: "#000000", color2: "#CE1126", coach: "Jamal Sellami", starPlayer: "Musa Al-Taamari", strength: 66 },

  // GRUPO K
  { name: "Portugal", code: "POR", flag: "🇵🇹", group: "K", federation: "UEFA", titles: 0, fifaRanking: 7, starPower: "⭐⭐⭐⭐⭐", color: "#006600", color2: "#FF0000", coach: "Roberto Martínez", starPlayer: "Cristiano Ronaldo", strength: 88 },
  { name: "RD Congo", code: "COD", flag: "🇨🇩", group: "K", federation: "CAF", titles: 0, fifaRanking: 55, starPower: "⭐⭐", color: "#007FFF", color2: "#CE1021", coach: "Sébastien Desabre", starPlayer: "Cédric Bakambu", strength: 71 },
  { name: "Uzbequistão", code: "UZB", flag: "🇺🇿", group: "K", federation: "AFC", titles: 0, fifaRanking: 60, starPower: "⭐⭐", color: "#1EB53A", color2: "#0099B5", coach: "Timur Kapadze", starPlayer: "Eldor Shomurodov", strength: 68 },
  { name: "Colômbia", code: "COL", flag: "🇨🇴", group: "K", federation: "CONMEBOL", titles: 0, fifaRanking: 12, starPower: "⭐⭐⭐⭐", color: "#FCD116", color2: "#003893", coach: "Néstor Lorenzo", starPlayer: "James Rodríguez", strength: 84 },

  // GRUPO L
  { name: "Inglaterra", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L", federation: "UEFA", titles: 1, fifaRanking: 4, starPower: "⭐⭐⭐⭐⭐", color: "#FFFFFF", color2: "#CE1124", coach: "Thomas Tuchel", starPlayer: "Jude Bellingham", strength: 89 },
  { name: "Croácia", code: "CRO", flag: "🇭🇷", group: "L", federation: "UEFA", titles: 0, fifaRanking: 10, starPower: "⭐⭐⭐⭐", color: "#FF0000", color2: "#FFFFFF", coach: "Zlatko Dalić", starPlayer: "Luka Modrić", strength: 83 },
  { name: "Gana", code: "GHA", flag: "🇬🇭", group: "L", federation: "CAF", titles: 0, fifaRanking: 73, starPower: "⭐⭐", color: "#FCD116", color2: "#CE1126", coach: "Otto Addo", starPlayer: "Mohammed Kudus", strength: 70 },
  { name: "Panamá", code: "PAN", flag: "🇵🇦", group: "L", federation: "CONCACAF", titles: 0, fifaRanking: 80, starPower: "⭐", color: "#005EB3", color2: "#D21034", coach: "Thomas Christiansen", starPlayer: "Adalberto Carrasquilla", strength: 65 },
];

export const groups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

export interface Stadium {
  name: string;
  city: string;
  country: "EUA" | "México" | "Canadá";
  capacity: number;
  flag: string;
  matches: string;
  yearOpened: number;
  description: string;
  emoji: string;
}

export const stadiums: Stadium[] = [
  // EUA - 11 estádios
  { name: "MetLife Stadium", city: "Nova York / Nova Jersey", country: "EUA", capacity: 82500, flag: "🇺🇸", matches: "Final + 7 jogos", yearOpened: 2010, description: "Sede da grande final do Mundial 2026. Maior estádio da NFL.", emoji: "🏆" },
  { name: "AT&T Stadium", city: "Dallas", country: "EUA", capacity: 80000, flag: "🇺🇸", matches: "Semifinal + 8 jogos", yearOpened: 2009, description: "Casa do Dallas Cowboys, teto retrátil e telão gigante.", emoji: "⭐" },
  { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "EUA", capacity: 71000, flag: "🇺🇸", matches: "Semifinal + 8 jogos", yearOpened: 2017, description: "Teto retrátil icônico em formato de câmera.", emoji: "🎯" },
  { name: "SoFi Stadium", city: "Los Angeles", country: "EUA", capacity: 70240, flag: "🇺🇸", matches: "8 jogos", yearOpened: 2020, description: "Arena indoor de luxo, sede do Super Bowl LVI.", emoji: "🌟" },
  { name: "Gillette Stadium", city: "Boston (Foxborough)", country: "EUA", capacity: 65000, flag: "🇺🇸", matches: "Jogos do Grupo C", yearOpened: 2002, description: "Casa do New England Patriots e Revolution.", emoji: "⚽" },
  { name: "Lincoln Financial Field", city: "Filadélfia", country: "EUA", capacity: 67500, flag: "🇺🇸", matches: "Brasil x Haiti + outros jogos", yearOpened: 2003, description: "Casa do Philadelphia Eagles. Sede de Brasil x Haiti.", emoji: "🦅" },
  { name: "Levi's Stadium", city: "San Francisco", country: "EUA", capacity: 68500, flag: "🇺🇸", matches: "6 jogos", yearOpened: 2014, description: "Estádio sustentável de alta tecnologia.", emoji: "⚡" },
  { name: "NRG Stadium", city: "Houston", country: "EUA", capacity: 72000, flag: "🇺🇸", matches: "7 jogos", yearOpened: 2002, description: "Casa do Houston Texans, teto retrátil.", emoji: "🚀" },
  { name: "Lumen Field", city: "Seattle", country: "EUA", capacity: 69000, flag: "🇺🇸", matches: "6 jogos", yearOpened: 2002, description: "Conhecido pelo barulho ensurdecedor da torcida.", emoji: "🔊" },
  { name: "Arrowhead Stadium", city: "Kansas City", country: "EUA", capacity: 76000, flag: "🇺🇸", matches: "6 jogos", yearOpened: 1972, description: "Recorde mundial de ruído em estádio.", emoji: "📣" },
  { name: "Hard Rock Stadium", city: "Miami", country: "EUA", capacity: 65000, flag: "🇺🇸", matches: "3º lugar + outros jogos", yearOpened: 1987, description: "Sede de vários Super Bowls.", emoji: "🌴" },

  // México - 3 estádios
  { name: "Estádio Azteca", city: "Cidade do México", country: "México", capacity: 83000, flag: "🇲🇽", matches: "Jogo de abertura + 5 jogos", yearOpened: 1966, description: "Único estádio a sediar duas finais de Copa (1970 e 1986).", emoji: "🏛️" },
  { name: "Estádio Akron", city: "Guadalajara", country: "México", capacity: 49000, flag: "🇲🇽", matches: "4 jogos", yearOpened: 2010, description: "Casa do Chivas de Guadalajara.", emoji: "🐎" },
  { name: "Estádio BBVA", city: "Monterrey", country: "México", capacity: 53000, flag: "🇲🇽", matches: "4 jogos", yearOpened: 2015, description: "Casa do Monterrey Rayados.", emoji: "🐉" },

  // Canadá - 2 estádios
  { name: "BMO Field", city: "Toronto", country: "Canadá", capacity: 45000, flag: "🇨🇦", matches: "5 jogos", yearOpened: 2007, description: "Casa do Toronto FC e Argonauts.", emoji: "🍁" },
  { name: "BC Place", city: "Vancouver", country: "Canadá", capacity: 54500, flag: "🇨🇦", matches: "5 jogos", yearOpened: 1983, description: "Teto retrátil, sede da cerimônia olímpica de 2010.", emoji: "🏔️" },
];

export interface Match {
  id: string;
  date: string;
  stage: string;
  home: string;
  away: string;
  stadium: string;
  city: string;
  time: string;
  group?: string;
}

// Jogos da fase de grupos — REAIS (fonte: FIFA.com, GE Globo, ESPN)
export const groupMatches: Match[] = [
  // ABERTURA — Grupo A
  { id: "M1", date: "2026-06-11", stage: "Abertura", home: "México", away: "África do Sul", stadium: "Estádio Azteca", city: "Cidade do México", time: "21:00", group: "A" },
  // Grupo A
  { id: "M2", date: "2026-06-12", stage: "Fase de Grupos", home: "Coreia do Sul", away: "República Tcheca", stadium: "Estádio Akron", city: "Guadalajara", time: "13:00", group: "A" },
  { id: "M3", date: "2026-06-17", stage: "Fase de Grupos", home: "México", away: "Coreia do Sul", stadium: "Estádio Azteca", city: "Cidade do México", time: "18:00", group: "A" },
  { id: "M4", date: "2026-06-17", stage: "Fase de Grupos", home: "África do Sul", away: "República Tcheca", stadium: "AT&T Stadium", city: "Dallas", time: "16:00", group: "A" },
  { id: "M5", date: "2026-06-23", stage: "Fase de Grupos", home: "México", away: "República Tcheca", stadium: "Estádio Azteca", city: "Cidade do México", time: "20:00", group: "A" },
  { id: "M6", date: "2026-06-23", stage: "Fase de Grupos", home: "África do Sul", away: "Coreia do Sul", stadium: "Lumen Field", city: "Seattle", time: "16:00", group: "A" },

  // Grupo B
  { id: "M7", date: "2026-06-12", stage: "Fase de Grupos", home: "Canadá", away: "Bósnia", stadium: "BMO Field", city: "Toronto", time: "15:00", group: "B" },
  { id: "M8", date: "2026-06-13", stage: "Fase de Grupos", home: "Catar", away: "Suíça", stadium: "Hard Rock Stadium", city: "Miami", time: "13:00", group: "B" },
  { id: "M9", date: "2026-06-18", stage: "Fase de Grupos", home: "Canadá", away: "Catar", stadium: "BMO Field", city: "Toronto", time: "19:00", group: "B" },
  { id: "M10", date: "2026-06-18", stage: "Fase de Grupos", home: "Suíça", away: "Bósnia", stadium: "Levi's Stadium", city: "San Francisco", time: "21:00", group: "B" },
  { id: "M11", date: "2026-06-24", stage: "Fase de Grupos", home: "Canadá", away: "Suíça", stadium: "BC Place", city: "Vancouver", time: "18:00", group: "B" },
  { id: "M12", date: "2026-06-24", stage: "Fase de Grupos", home: "Bósnia", away: "Catar", stadium: "Hard Rock Stadium", city: "Miami", time: "21:00", group: "B" },

  // GRUPO C (BRASIL) ⭐
  { id: "M13", date: "2026-06-13", stage: "Fase de Grupos", home: "Brasil", away: "Marrocos", stadium: "MetLife Stadium", city: "Nova York / Nova Jersey", time: "19:00", group: "C" },
  { id: "M14", date: "2026-06-13", stage: "Fase de Grupos", home: "Haiti", away: "Escócia", stadium: "Gillette Stadium", city: "Boston", time: "22:00", group: "C" },
  { id: "M15", date: "2026-06-19", stage: "Fase de Grupos", home: "Brasil", away: "Haiti", stadium: "Lincoln Financial Field", city: "Filadélfia", time: "21:30", group: "C" },
  { id: "M16", date: "2026-06-19", stage: "Fase de Grupos", home: "Escócia", away: "Marrocos", stadium: "Gillette Stadium", city: "Boston", time: "19:00", group: "C" },
  { id: "M17", date: "2026-06-24", stage: "Fase de Grupos", home: "Escócia", away: "Brasil", stadium: "Hard Rock Stadium", city: "Miami", time: "19:00", group: "C" },
  { id: "M18", date: "2026-06-24", stage: "Fase de Grupos", home: "Marrocos", away: "Haiti", stadium: "MetLife Stadium", city: "Nova York", time: "21:00", group: "C" },

  // Grupo D
  { id: "M19", date: "2026-06-13", stage: "Fase de Grupos", home: "Estados Unidos", away: "Paraguai", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "20:00", group: "D" },
  { id: "M20", date: "2026-06-13", stage: "Fase de Grupos", home: "Austrália", away: "Turquia", stadium: "BC Place", city: "Vancouver", time: "16:00", group: "D" },
  { id: "M21", date: "2026-06-18", stage: "Fase de Grupos", home: "Estados Unidos", away: "Austrália", stadium: "MetLife Stadium", city: "Nova York", time: "18:00", group: "D" },
  { id: "M22", date: "2026-06-18", stage: "Fase de Grupos", home: "Paraguai", away: "Turquia", stadium: "Estádio Azteca", city: "Cidade do México", time: "21:00", group: "D" },
  { id: "M23", date: "2026-06-24", stage: "Fase de Grupos", home: "Estados Unidos", away: "Turquia", stadium: "SoFi Stadium", city: "Los Angeles", time: "16:00", group: "D" },
  { id: "M24", date: "2026-06-25", stage: "Fase de Grupos", home: "Paraguai", away: "Austrália", stadium: "AT&T Stadium", city: "Dallas", time: "21:00", group: "D" },

  // Grupo E
  { id: "M25", date: "2026-06-14", stage: "Fase de Grupos", home: "Alemanha", away: "Curaçao", stadium: "AT&T Stadium", city: "Dallas", time: "13:00", group: "E" },
  { id: "M26", date: "2026-06-14", stage: "Fase de Grupos", home: "Costa do Marfim", away: "Equador", stadium: "Lincoln Financial Field", city: "Filadélfia", time: "20:00", group: "E" },
  { id: "M27", date: "2026-06-19", stage: "Fase de Grupos", home: "Alemanha", away: "Costa do Marfim", stadium: "Arrowhead Stadium", city: "Kansas City", time: "16:00", group: "E" },
  { id: "M28", date: "2026-06-20", stage: "Fase de Grupos", home: "Equador", away: "Curaçao", stadium: "Levi's Stadium", city: "San Francisco", time: "16:00", group: "E" },
  { id: "M29", date: "2026-06-25", stage: "Fase de Grupos", home: "Alemanha", away: "Equador", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "20:00", group: "E" },
  { id: "M30", date: "2026-06-25", stage: "Fase de Grupos", home: "Costa do Marfim", away: "Curaçao", stadium: "NRG Stadium", city: "Houston", time: "18:00", group: "E" },

  // Grupo F
  { id: "M31", date: "2026-06-14", stage: "Fase de Grupos", home: "Holanda", away: "Japão", stadium: "SoFi Stadium", city: "Los Angeles", time: "16:00", group: "F" },
  { id: "M32", date: "2026-06-14", stage: "Fase de Grupos", home: "Suécia", away: "Tunísia", stadium: "Lumen Field", city: "Seattle", time: "13:00", group: "F" },
  { id: "M33", date: "2026-06-19", stage: "Fase de Grupos", home: "Holanda", away: "Suécia", stadium: "AT&T Stadium", city: "Dallas", time: "20:00", group: "F" },
  { id: "M34", date: "2026-06-20", stage: "Fase de Grupos", home: "Japão", away: "Tunísia", stadium: "BMO Field", city: "Toronto", time: "13:00", group: "F" },
  { id: "M35", date: "2026-06-25", stage: "Fase de Grupos", home: "Holanda", away: "Tunísia", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "16:00", group: "F" },
  { id: "M36", date: "2026-06-26", stage: "Fase de Grupos", home: "Suécia", away: "Japão", stadium: "Hard Rock Stadium", city: "Miami", time: "21:00", group: "F" },

  // Grupo G
  { id: "M37", date: "2026-06-14", stage: "Fase de Grupos", home: "Bélgica", away: "Irã", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "16:00", group: "G" },
  { id: "M38", date: "2026-06-14", stage: "Fase de Grupos", home: "Nova Zelândia", away: "Egito", stadium: "Estádio BBVA", city: "Monterrey", time: "22:00", group: "G" },
  { id: "M39", date: "2026-06-19", stage: "Fase de Grupos", home: "Bélgica", away: "Nova Zelândia", stadium: "Levi's Stadium", city: "San Francisco", time: "16:00", group: "G" },
  { id: "M40", date: "2026-06-20", stage: "Fase de Grupos", home: "Irã", away: "Egito", stadium: "Lumen Field", city: "Seattle", time: "13:00", group: "G" },
  { id: "M41", date: "2026-06-25", stage: "Fase de Grupos", home: "Bélgica", away: "Egito", stadium: "AT&T Stadium", city: "Dallas", time: "20:00", group: "G" },
  { id: "M42", date: "2026-06-26", stage: "Fase de Grupos", home: "Irã", away: "Nova Zelândia", stadium: "Estádio Akron", city: "Guadalajara", time: "16:00", group: "G" },

  // Grupo H
  { id: "M43", date: "2026-06-14", stage: "Fase de Grupos", home: "Espanha", away: "Arábia Saudita", stadium: "MetLife Stadium", city: "Nova York", time: "13:00", group: "H" },
  { id: "M44", date: "2026-06-14", stage: "Fase de Grupos", home: "Uruguai", away: "Cabo Verde", stadium: "Lincoln Financial Field", city: "Filadélfia", time: "19:00", group: "H" },
  { id: "M45", date: "2026-06-19", stage: "Fase de Grupos", home: "Espanha", away: "Uruguai", stadium: "SoFi Stadium", city: "Los Angeles", time: "16:00", group: "H" },
  { id: "M46", date: "2026-06-20", stage: "Fase de Grupos", home: "Arábia Saudita", away: "Cabo Verde", stadium: "Estádio BBVA", city: "Monterrey", time: "16:00", group: "H" },
  { id: "M47", date: "2026-06-26", stage: "Fase de Grupos", home: "Espanha", away: "Cabo Verde", stadium: "MetLife Stadium", city: "Nova York", time: "20:00", group: "H" },
  { id: "M48", date: "2026-06-26", stage: "Fase de Grupos", home: "Arábia Saudita", away: "Uruguai", stadium: "Hard Rock Stadium", city: "Miami", time: "16:00", group: "H" },

  // Grupo I
  { id: "M49", date: "2026-06-15", stage: "Fase de Grupos", home: "França", away: "Senegal", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "16:00", group: "I" },
  { id: "M50", date: "2026-06-15", stage: "Fase de Grupos", home: "Iraque", away: "Noruega", stadium: "Estádio BBVA", city: "Monterrey", time: "13:00", group: "I" },
  { id: "M51", date: "2026-06-20", stage: "Fase de Grupos", home: "França", away: "Iraque", stadium: "MetLife Stadium", city: "Nova York", time: "16:00", group: "I" },
  { id: "M52", date: "2026-06-21", stage: "Fase de Grupos", home: "Senegal", away: "Noruega", stadium: "NRG Stadium", city: "Houston", time: "21:00", group: "I" },
  { id: "M53", date: "2026-06-26", stage: "Fase de Grupos", home: "França", away: "Noruega", stadium: "AT&T Stadium", city: "Dallas", time: "20:00", group: "I" },
  { id: "M54", date: "2026-06-27", stage: "Fase de Grupos", home: "Senegal", away: "Iraque", stadium: "BC Place", city: "Vancouver", time: "16:00", group: "I" },

  // Grupo J
  { id: "M55", date: "2026-06-15", stage: "Fase de Grupos", home: "Argentina", away: "Argélia", stadium: "MetLife Stadium", city: "Nova York", time: "20:00", group: "J" },
  { id: "M56", date: "2026-06-15", stage: "Fase de Grupos", home: "Áustria", away: "Jordânia", stadium: "BMO Field", city: "Toronto", time: "13:00", group: "J" },
  { id: "M57", date: "2026-06-20", stage: "Fase de Grupos", home: "Argentina", away: "Áustria", stadium: "AT&T Stadium", city: "Dallas", time: "16:00", group: "J" },
  { id: "M58", date: "2026-06-21", stage: "Fase de Grupos", home: "Argélia", away: "Jordânia", stadium: "Estádio Azteca", city: "Cidade do México", time: "13:00", group: "J" },
  { id: "M59", date: "2026-06-27", stage: "Fase de Grupos", home: "Argentina", away: "Jordânia", stadium: "Lincoln Financial Field", city: "Filadélfia", time: "20:00", group: "J" },
  { id: "M60", date: "2026-06-27", stage: "Fase de Grupos", home: "Argélia", away: "Áustria", stadium: "Levi's Stadium", city: "San Francisco", time: "20:00", group: "J" },

  // Grupo K
  { id: "M61", date: "2026-06-15", stage: "Fase de Grupos", home: "Portugal", away: "RD Congo", stadium: "SoFi Stadium", city: "Los Angeles", time: "16:00", group: "K" },
  { id: "M62", date: "2026-06-16", stage: "Fase de Grupos", home: "Uzbequistão", away: "Colômbia", stadium: "Lumen Field", city: "Seattle", time: "13:00", group: "K" },
  { id: "M63", date: "2026-06-20", stage: "Fase de Grupos", home: "Portugal", away: "Uzbequistão", stadium: "Mercedes-Benz Stadium", city: "Atlanta", time: "16:00", group: "K" },
  { id: "M64", date: "2026-06-21", stage: "Fase de Grupos", home: "RD Congo", away: "Colômbia", stadium: "Arrowhead Stadium", city: "Kansas City", time: "20:00", group: "K" },
  { id: "M65", date: "2026-06-27", stage: "Fase de Grupos", home: "Portugal", away: "Colômbia", stadium: "MetLife Stadium", city: "Nova York", time: "16:00", group: "K" },
  { id: "M66", date: "2026-06-27", stage: "Fase de Grupos", home: "RD Congo", away: "Uzbequistão", stadium: "Estádio Akron", city: "Guadalajara", time: "16:00", group: "K" },

  // Grupo L
  { id: "M67", date: "2026-06-15", stage: "Fase de Grupos", home: "Inglaterra", away: "Croácia", stadium: "MetLife Stadium", city: "Nova York", time: "13:00", group: "L" },
  { id: "M68", date: "2026-06-16", stage: "Fase de Grupos", home: "Gana", away: "Panamá", stadium: "Estádio BBVA", city: "Monterrey", time: "13:00", group: "L" },
  { id: "M69", date: "2026-06-21", stage: "Fase de Grupos", home: "Inglaterra", away: "Gana", stadium: "NRG Stadium", city: "Houston", time: "13:00", group: "L" },
  { id: "M70", date: "2026-06-21", stage: "Fase de Grupos", home: "Croácia", away: "Panamá", stadium: "BMO Field", city: "Toronto", time: "13:00", group: "L" },
  { id: "M71", date: "2026-06-27", stage: "Fase de Grupos", home: "Inglaterra", away: "Panamá", stadium: "AT&T Stadium", city: "Dallas", time: "16:00", group: "L" },
  { id: "M72", date: "2026-06-27", stage: "Fase de Grupos", home: "Croácia", away: "Gana", stadium: "BC Place", city: "Vancouver", time: "20:00", group: "L" },
];

// Mata-mata — chaves
export interface KnockoutMatch {
  id: string;
  stage: "Rodada de 32" | "Oitavas" | "Quartas" | "Semifinal" | "3º Lugar" | "Final";
  round: number;
  position: number;
  home?: string;
  away?: string;
  winner?: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  stadium: string;
  city: string;
  label: string;
}

// Bracket do mata-mata — formato novo (32 times nas oitavas)
export const knockoutBracket: KnockoutMatch[] = [
  // RODADA DE 32 (16 jogos) — 28 jun a 3 jul
  { id: "R32-1", stage: "Rodada de 32", round: 1, position: 1, date: "2026-06-28", stadium: "MetLife Stadium", city: "Nova York", label: "1A vs 3B/F/H" },
  { id: "R32-2", stage: "Rodada de 32", round: 1, position: 2, date: "2026-06-28", stadium: "AT&T Stadium", city: "Dallas", label: "1C vs 3D/E/F" },
  { id: "R32-3", stage: "Rodada de 32", round: 1, position: 3, date: "2026-06-28", stadium: "Mercedes-Benz Stadium", city: "Atlanta", label: "1E vs 3A/D/F" },
  { id: "R32-4", stage: "Rodada de 32", round: 1, position: 4, date: "2026-06-29", stadium: "SoFi Stadium", city: "Los Angeles", label: "1G vs 3A/B/C" },
  { id: "R32-5", stage: "Rodada de 32", round: 1, position: 5, date: "2026-06-29", stadium: "NRG Stadium", city: "Houston", label: "1B vs 3A/C/E" },
  { id: "R32-6", stage: "Rodada de 32", round: 1, position: 6, date: "2026-06-29", stadium: "Hard Rock Stadium", city: "Miami", label: "1D vs 3C/E/H" },
  { id: "R32-7", stage: "Rodada de 32", round: 1, position: 7, date: "2026-06-30", stadium: "Levi's Stadium", city: "San Francisco", label: "1F vs 3A/B/I" },
  { id: "R32-8", stage: "Rodada de 32", round: 1, position: 8, date: "2026-06-30", stadium: "Arrowhead Stadium", city: "Kansas City", label: "1H vs 3B/G/I" },
  { id: "R32-9", stage: "Rodada de 32", round: 1, position: 9, date: "2026-06-30", stadium: "Lumen Field", city: "Seattle", label: "1I vs 3E/F/G" },
  { id: "R32-10", stage: "Rodada de 32", round: 1, position: 10, date: "2026-07-01", stadium: "Lincoln Financial Field", city: "Filadélfia", label: "1J vs 3H/I/K" },
  { id: "R32-11", stage: "Rodada de 32", round: 1, position: 11, date: "2026-07-01", stadium: "Gillette Stadium", city: "Boston", label: "1K vs 3G/J/L" },
  { id: "R32-12", stage: "Rodada de 32", round: 1, position: 12, date: "2026-07-02", stadium: "Estádio Azteca", city: "Cidade do México", label: "1L vs 3D/J/K" },
  { id: "R32-13", stage: "Rodada de 32", round: 1, position: 13, date: "2026-07-02", stadium: "BC Place", city: "Vancouver", label: "2A vs 2C" },
  { id: "R32-14", stage: "Rodada de 32", round: 1, position: 14, date: "2026-07-03", stadium: "BMO Field", city: "Toronto", label: "2B vs 2F" },
  { id: "R32-15", stage: "Rodada de 32", round: 1, position: 15, date: "2026-07-03", stadium: "Estádio BBVA", city: "Monterrey", label: "2D vs 2E" },
  { id: "R32-16", stage: "Rodada de 32", round: 1, position: 16, date: "2026-07-03", stadium: "Estádio Akron", city: "Guadalajara", label: "2G vs 2H" },

  // OITAVAS DE FINAL (8 jogos) — 4 a 7 de julho
  { id: "R16-1", stage: "Oitavas", round: 2, position: 1, date: "2026-07-04", stadium: "MetLife Stadium", city: "Nova York", label: "V R32-1 vs V R32-2" },
  { id: "R16-2", stage: "Oitavas", round: 2, position: 2, date: "2026-07-04", stadium: "AT&T Stadium", city: "Dallas", label: "V R32-3 vs V R32-4" },
  { id: "R16-3", stage: "Oitavas", round: 2, position: 3, date: "2026-07-05", stadium: "Mercedes-Benz Stadium", city: "Atlanta", label: "V R32-5 vs V R32-6" },
  { id: "R16-4", stage: "Oitavas", round: 2, position: 4, date: "2026-07-05", stadium: "SoFi Stadium", city: "Los Angeles", label: "V R32-7 vs V R32-8" },
  { id: "R16-5", stage: "Oitavas", round: 2, position: 5, date: "2026-07-06", stadium: "NRG Stadium", city: "Houston", label: "V R32-9 vs V R32-10" },
  { id: "R16-6", stage: "Oitavas", round: 2, position: 6, date: "2026-07-06", stadium: "Hard Rock Stadium", city: "Miami", label: "V R32-11 vs V R32-12" },
  { id: "R16-7", stage: "Oitavas", round: 2, position: 7, date: "2026-07-07", stadium: "Levi's Stadium", city: "San Francisco", label: "V R32-13 vs V R32-14" },
  { id: "R16-8", stage: "Oitavas", round: 2, position: 8, date: "2026-07-07", stadium: "Lumen Field", city: "Seattle", label: "V R32-15 vs V R32-16" },

  // QUARTAS (4 jogos) — 9 a 11 de julho
  { id: "QF-1", stage: "Quartas", round: 3, position: 1, date: "2026-07-09", stadium: "MetLife Stadium", city: "Nova York", label: "V Oi-1 vs V Oi-2" },
  { id: "QF-2", stage: "Quartas", round: 3, position: 2, date: "2026-07-09", stadium: "AT&T Stadium", city: "Dallas", label: "V Oi-3 vs V Oi-4" },
  { id: "QF-3", stage: "Quartas", round: 3, position: 3, date: "2026-07-10", stadium: "Mercedes-Benz Stadium", city: "Atlanta", label: "V Oi-5 vs V Oi-6" },
  { id: "QF-4", stage: "Quartas", round: 3, position: 4, date: "2026-07-10", stadium: "SoFi Stadium", city: "Los Angeles", label: "V Oi-7 vs V Oi-8" },

  // SEMIFINAIS (2 jogos) — 14 a 15 de julho
  { id: "SF-1", stage: "Semifinal", round: 4, position: 1, date: "2026-07-14", stadium: "AT&T Stadium", city: "Dallas", label: "V QF-1 vs V QF-2" },
  { id: "SF-2", stage: "Semifinal", round: 4, position: 2, date: "2026-07-15", stadium: "Mercedes-Benz Stadium", city: "Atlanta", label: "V QF-3 vs V QF-4" },

  // 3º LUGAR
  { id: "3RD", stage: "3º Lugar", round: 5, position: 1, date: "2026-07-18", stadium: "Hard Rock Stadium", city: "Miami", label: "Perdedores SF" },

  // FINAL
  { id: "FINAL", stage: "Final", round: 5, position: 1, date: "2026-07-19", stadium: "MetLife Stadium", city: "Nova York", label: "Vencedores SF" },
];

// Top artilheiros históricos
export interface TopScorer {
  rank: number;
  player: string;
  country: string;
  flag: string;
  goals: number;
  worldCups: number;
  years: string;
  active: boolean;
}

export const topScorers: TopScorer[] = [
  { rank: 1, player: "Miroslav Klose", country: "Alemanha", flag: "🇩🇪", goals: 16, worldCups: 4, years: "2002-2014", active: false },
  { rank: 2, player: "Ronaldo Fenômeno", country: "Brasil", flag: "🇧🇷", goals: 15, worldCups: 4, years: "1994-2006", active: false },
  { rank: 3, player: "Gerd Müller", country: "Alemanha", flag: "🇩🇪", goals: 14, worldCups: 2, years: "1970-1974", active: false },
  { rank: 4, player: "Just Fontaine", country: "França", flag: "🇫🇷", goals: 13, worldCups: 1, years: "1958", active: false },
  { rank: 5, player: "Lionel Messi", country: "Argentina", flag: "🇦🇷", goals: 13, worldCups: 5, years: "2006-2022", active: true },
  { rank: 6, player: "Pelé", country: "Brasil", flag: "🇧🇷", goals: 12, worldCups: 4, years: "1958-1970", active: false },
  { rank: 7, player: "Kylian Mbappé", country: "França", flag: "🇫🇷", goals: 12, worldCups: 2, years: "2018-2022", active: true },
  { rank: 8, player: "Sándor Kocsis", country: "Hungria", flag: "🇭🇺", goals: 11, worldCups: 1, years: "1954", active: false },
  { rank: 9, player: "Jürgen Klinsmann", country: "Alemanha", flag: "🇩🇪", goals: 11, worldCups: 3, years: "1990-1998", active: false },
  { rank: 10, player: "Helmut Rahn", country: "Alemanha", flag: "🇩🇪", goals: 10, worldCups: 2, years: "1954-1958", active: false },
  { rank: 11, player: "Gary Lineker", country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 10, worldCups: 2, years: "1986-1990", active: false },
  { rank: 12, player: "Thomas Müller", country: "Alemanha", flag: "🇩🇪", goals: 10, worldCups: 4, years: "2010-2022", active: false },
  { rank: 13, player: "Grzegorz Lato", country: "Polônia", flag: "🇵🇱", goals: 10, worldCups: 3, years: "1974-1982", active: false },
  { rank: 14, player: "Gabriel Batistuta", country: "Argentina", flag: "🇦🇷", goals: 10, worldCups: 3, years: "1994-2002", active: false },
  { rank: 15, player: "Neymar Jr", country: "Brasil", flag: "🇧🇷", goals: 8, worldCups: 3, years: "2014-2022", active: true },
];

// Campeões da história
export interface Champion {
  year: number;
  country: string;
  flag: string;
  host: string;
  runnerUp: string;
  flagRunnerUp: string;
}

export const champions: Champion[] = [
  { year: 1930, country: "Uruguai", flag: "🇺🇾", host: "Uruguai", runnerUp: "Argentina", flagRunnerUp: "🇦🇷" },
  { year: 1934, country: "Itália", flag: "🇮🇹", host: "Itália", runnerUp: "Tchecoslováquia", flagRunnerUp: "🇨🇿" },
  { year: 1938, country: "Itália", flag: "🇮🇹", host: "França", runnerUp: "Hungria", flagRunnerUp: "🇭🇺" },
  { year: 1950, country: "Uruguai", flag: "🇺🇾", host: "Brasil", runnerUp: "Brasil", flagRunnerUp: "🇧🇷" },
  { year: 1954, country: "Alemanha", flag: "🇩🇪", host: "Suíça", runnerUp: "Hungria", flagRunnerUp: "🇭🇺" },
  { year: 1958, country: "Brasil", flag: "🇧🇷", host: "Suécia", runnerUp: "Suécia", flagRunnerUp: "🇸🇪" },
  { year: 1962, country: "Brasil", flag: "🇧🇷", host: "Chile", runnerUp: "Tchecoslováquia", flagRunnerUp: "🇨🇿" },
  { year: 1966, country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", host: "Inglaterra", runnerUp: "Alemanha", flagRunnerUp: "🇩🇪" },
  { year: 1970, country: "Brasil", flag: "🇧🇷", host: "México", runnerUp: "Itália", flagRunnerUp: "🇮🇹" },
  { year: 1974, country: "Alemanha", flag: "🇩🇪", host: "Alemanha", runnerUp: "Holanda", flagRunnerUp: "🇳🇱" },
  { year: 1978, country: "Argentina", flag: "🇦🇷", host: "Argentina", runnerUp: "Holanda", flagRunnerUp: "🇳🇱" },
  { year: 1982, country: "Itália", flag: "🇮🇹", host: "Espanha", runnerUp: "Alemanha", flagRunnerUp: "🇩🇪" },
  { year: 1986, country: "Argentina", flag: "🇦🇷", host: "México", runnerUp: "Alemanha", flagRunnerUp: "🇩🇪" },
  { year: 1990, country: "Alemanha", flag: "🇩🇪", host: "Itália", runnerUp: "Argentina", flagRunnerUp: "🇦🇷" },
  { year: 1994, country: "Brasil", flag: "🇧🇷", host: "EUA", runnerUp: "Itália", flagRunnerUp: "🇮🇹" },
  { year: 1998, country: "França", flag: "🇫🇷", host: "França", runnerUp: "Brasil", flagRunnerUp: "🇧🇷" },
  { year: 2002, country: "Brasil", flag: "🇧🇷", host: "Coreia/Japão", runnerUp: "Alemanha", flagRunnerUp: "🇩🇪" },
  { year: 2006, country: "Itália", flag: "🇮🇹", host: "Alemanha", runnerUp: "França", flagRunnerUp: "🇫🇷" },
  { year: 2010, country: "Espanha", flag: "🇪🇸", host: "África do Sul", runnerUp: "Holanda", flagRunnerUp: "🇳🇱" },
  { year: 2014, country: "Alemanha", flag: "🇩🇪", host: "Brasil", runnerUp: "Argentina", flagRunnerUp: "🇦🇷" },
  { year: 2018, country: "França", flag: "🇫🇷", host: "Rússia", runnerUp: "Croácia", flagRunnerUp: "🇭🇷" },
  { year: 2022, country: "Argentina", flag: "🇦🇷", host: "Catar", runnerUp: "França", flagRunnerUp: "🇫🇷" },
];

// Curiosidades
export const facts = [
  { icon: "🌍", title: "3 Países Sede", text: "Pela primeira vez na história, três países sediam a Copa: EUA, México e Canadá" },
  { icon: "⚽", title: "48 Seleções", text: "Recorde absoluto: 48 seleções participam, contra 32 das edições anteriores" },
  { icon: "🏆", title: "104 Jogos", text: "Maior número de partidas na história: 104 no total, contra 64 das Copas recentes" },
  { icon: "🏟️", title: "16 Estádios", text: "11 nos EUA, 3 no México e 2 no Canadá recebendo os jogos" },
  { icon: "📅", title: "39 Dias", text: "O torneio vai de 11 de junho a 19 de julho de 2026" },
  { icon: "👑", title: "Nova Fase", text: "Pela 1ª vez, fase de 32 times (16 jogos) antes das oitavas" },
  { icon: "🎖️", title: "12 Grupos", text: "Os 48 times divididos em 12 grupos de 4 seleções (A ao L)" },
  { icon: "🥉", title: "32 Classificam", text: "Os 2 primeiros de cada grupo + 8 melhores terceiros avançam para a Rodada de 32" },
];

export const mascotInfo = {
  name: "Maple, Zayu & Clay",
  description: "Os mascotes oficiais da Copa 2026 representam os três países sede. São figuras inspiradas na diversidade cultural das Américas.",
  ball: "Adidas Triondo",
  ballDescription: "Bola oficial com tecnologia avançada e design inspirado nas três sedes",
  song: "A confirmar",
  songDescription: "A música tema oficial será anunciada pela FIFA próxima ao evento",
};

import { FruitsRegex, FishSpeciesList, UserConfig } from './userconfig';

export const HegeConfig = {
  userNameToFind: 'Hegedűs Tamás László',
  blacklist: [
    'halfilé', 'halszelet', 'halrud', 'rákragu', 'koktélrák',
    'tonhal', 'szardínia',
    'garnéla', 'polip', 'kagyló', 'tenger gyümölcs', 'tengeri gyümölcs', 
    'gomb(a|á)',
    '(sertés|kacsa|liba|csirke|szárnyas).?máj',
    'zúza',
    'ceruzabab', 'héjas zöldborsó',
    'Budapest sertés', 'milánói',
  ].concat(FishSpeciesList),
  warnList: ['hal', 'rák', 'máj'],
  blacklistExceptions: ['[^a-z]dhal', 'kagylótészta', 'kultúrák', 'lepkeszegmag'],
  mehList: ['tarhonya', 'főzelék', 'zöldbab', 'csirkeszárny',
    'wok zöldség', 'fahéj', 'kávé',
    'mátrai saláta'],
  favList1: ['kijevi', 'brassói', 'lyoni', 'floridai', 'borzas',
    'szűz', 'chilis bab',
    '^(?!.*leves).*(tepsis|házi|falusi|tejföl).*(burgonya|burgonyá|krumpli)(?!püré)',
    'bors.*(mártás|szósz)',
    '(' + FruitsRegex + '|mézes|édes).*leves',
    'paradicsomleves',
    'tápiókapuding', 'gyümölcsrizs',
    'édesburgony(a|á)',
    'cheddar',
    'padlizsánkrém',
  ],
  favList2: ['hidasi', 'dijoni', 'mátrai',
    '^(?!.*leves).*(grillezett|bacon).*(burgonya|burgonyá|krumpli)(?!püré)',
    'aszalt paradicsom',
    'palak', 'tikka masala',
    'tzatziki', 'tartár', 'majonéz',
    'hagym(a|á)',
    'rózsabors',
    'rétes',
    'burrito', 'quesadilla',
    'coleslaw', 'káposztasaláta',
  ],
  testingList: [],
} as const satisfies UserConfig;

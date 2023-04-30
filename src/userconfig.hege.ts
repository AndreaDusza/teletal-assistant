import { FruitsRegex, UserConfig } from "./userconfig";

export const HegeConfig = {
    userNameToFind: "Hegedűs Tamás László",
    blacklist: [
                'lazac', 'harcsa', 'hekk', 'halfilé', 'halrud', 'rákragu',
                'tonhal', 'szardínia',
                'garnéla', 'polip', 'tenger gyümölcs', 'tengeri gyümölcs', 'kagyló',
                'gomb(a|á)',
                '(sertés|kacsa|liba|csirke)máj',
                'zúza',
                'ceruzabab', 'héjas zöldborsó',
               ],
    warnList: ['hal', 'rák', 'máj',],
    blacklistExceptions: ['[^a-z]dhal', 'kagylótészta', 'kultúrák',],
    mehList: ['tarhonya','főzelék', 'zöldbab', 'csirkeszárny',
             'wok zöldség', 'fahéj',],
    favList1: ['kijevi', 'brassói', 'lyoni', 'floridai', 'borzas',
               'szűz','chilis bab',
               '^(?!.*leves).*(tepsis|házi|falusi|tejföl).*(burgony|krumpli)(?!püré)',
               'bors.*(mártás|szósz)',
               '(' + FruitsRegex + ').*leves',
               'paradicsomleves',
               'tápiókapuding', 'gyümölcsrizs',
               'édesburgony(a|á)',
               'cheddar',
              ],
    favList2: ['hidasi', 'dijoni', 'mátrai',
               '^(?!.*leves).*(grillezett|bacon).*(burgony|krumpli)(?!püré)',
               'aszalt paradicsom',
               'palak', 'tikka masala',
               'tzatziki', 'tartár',
               'hagym(a|á)',
               'rétes',
              ],
    testingList: [],
} as const satisfies UserConfig;

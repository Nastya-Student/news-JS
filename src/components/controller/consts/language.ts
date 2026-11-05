export const LANGUAGE = {
    Ar: 'ar',
    De: 'de',
    En: 'en',
    Es: 'es',
    Fr: 'fr',
    He: 'he',
    It: 'it',
    Nl: 'nl',
    No: 'no',
    Pt: 'pt',
    Ru: 'ru',
    Sv: 'sv',
    Ud: 'ud',
    Zh: 'zh',
} as const;

export type Language = (typeof LANGUAGE)[keyof typeof LANGUAGE];

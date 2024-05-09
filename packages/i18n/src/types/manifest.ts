export type Translation = {
  key: string,
  value: string
  lang: string
  type: TranslationType
}

export enum TranslationType {
  SHARED,
  FIELD
}

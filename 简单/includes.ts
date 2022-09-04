type Includes<T extends readonly any[], U extends any> = { [P in T[number]]: true }[U] extends true
  ? true
  : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

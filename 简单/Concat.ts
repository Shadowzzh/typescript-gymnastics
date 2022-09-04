type Concat<T extends any[], TT extends any[]> = [...T, ...TT]

type Result = Concat<[1], [2]> // expected to be [1, 2]

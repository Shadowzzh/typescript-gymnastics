namespace pick {
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  type User = {
    age: 19
    name: 'zzh'
    a: 1
  }

  type test = MyPick<User, 'age' | 'name'>
}

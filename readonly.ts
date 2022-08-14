namespace readonly {
  type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
  }

  type User = {
    age?: number
    name?: 'zzh'
    a?: 1
  }

  type Test = MyReadonly<User>
  const test: Test = { age: 123 }
  // test.age = 2
}

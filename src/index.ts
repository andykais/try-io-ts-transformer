import * as either from 'fp-ts/lib/Either'
import * as t from 'io-ts'
import { buildDecoder } from 'io-ts-transformer'

// type User = {
//   name: string
//   age: number
//   // user?: User
// }

// const usersDecoder = buildDecoder<User>()

// // const usersDecoder = t.type({
// //   age: t.number,
// //   name: t.string
// // })


// const ioInput = { name: 'str', age: 1 }
// const decoded = usersDecoder.decode(ioInput)

// function onLeft(errors: any) {
//   console.log('Failure')
//   console.log(errors)
// }
// function onRight(obj: any) {
//   console.log('Success')
//   console.log(obj)
// }

// either.fold(onLeft, onRight)(decoded)

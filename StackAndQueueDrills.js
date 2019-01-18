class _Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null)
      return this.top
    }
    const node = new _Node(data, this.top)
    this.top = node
  }

  pop() {
    const node = this.top
    this.top = node.next
    return node.data
  }

  // isEmpty() {
  //   this.top === null ? true : false
  // }
}

// const chars = ['Kirk', 'Spock', 'McCoy', 'Scotty']
// function main(chars) {
//   let starTrek = new Stack()
//   chars.map(name => starTrek.push(name))
//   starTrek.push('Luke')
//   starTrek.pop()
//   starTrek.pop()
//   starTrek.pop()
//   return starTrek
// }

const peek = starTrek => starTrek.top

const display = stack => {
  let currNode = stack.top
  while (currNode) {
    console.log(currNode.data)
    currNode = currNode.next
  }
}

const is_palindrome = string => {
  string = string.toLowerCase().replace(/[^a-zA-z0-0]/g, '')
  let stringStack = new Stack()
  let stringStackReversed = new Stack()

  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i])
  }
  for (let i = string.length; i >= 0; i--) {
    stringStackReversed.push(string[i])
  }

  while (stringStack.top) {
    if (stringStack.top.data != stringStackReversed.top.data) {
      return false
    }
    stringStack.top = stringStack.top.next
    stringStackReversed.top = stringStackReversed.top.next
  }
  return true
}
// console.log(is_palindrome('dad'))
// console.log(is_palindrome('A man, a plan, a canal: Panama'))
// console.log(is_palindrome('1001'))
// console.log(is_palindrome('Tauhida'))

// const stacked = main(chars)
// console.log(peek(main(stacked)))
//display(stacked)

// Check if value exists and convert string to array
// Iterate through the array
// Use isParentheses() to see if current element is parentheses -- if true, push parentheses character onto stack
// If False - check if top of stack. If it does not match the current element using matches(top, closedParentheses) -- return false
// Move onto next element
//

const missingParentheses = string => {
  const validators = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let tempStorage = new Stack()
  let count = 1
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(validators).includes(string[i])) {
      tempStorage.push(string[i])
      ++count
    } else if (string[i] === validators[tempStorage.top.data]) {
      //console.log(string[i] == validators[tempStorage.top.data])
      tempStorage.pop()
      ++count
    }
  }
  tempStorage.top ? console.log(false, count) : true
}

// missingParentheses('(()')

// Sort hints
// Input/Output -->  Draw stack
// 6         2
// 2         3
// 9         6
// 3 ----- > 9
// Check both stacks to see if empty [[isEmpty() && peek()]]
// store pop in temp variable
//  check if stack empty and push from temp variable
// go back to original stack (should be minus previous popped top)
// store pop in temp variable
// compare new stack from line 107, see if > or < than popped temp variable
// if < push to top.
// when comparing multiple  (if 2-> 6 is stack and comparing 9)
// Pop off 2 then 6 to old stack so 6 -> 2 -> 3 are contents
// Add temp popped 9 to new stack, then pop and push from old stack
function main() {
  let stringStack = new Stack()
  stringStack.push(5)
  stringStack.push(2)
  stringStack.push(9)
  stringStack.push(7)
  stringStack.push(4)
  return stringStack
}

const sortMethod = (sList, poppedValue) => {
  // Either the stack is empty or newly inserted item is greater than top
  if (sList.top === null || poppedValue > sList.top.data) {
    sList.push(poppedValue)
    return
  }
  // If top is greater, remove the top item and go into recursive
  let temp = sList.pop()
  sortMethod(sList, poppedValue)
  // Put back the top item removed earlier
  sList.push(temp)
  return
}

const sortStack = sList => {
  // if stack is not empty
  if (sList.top !== null) {
    // console.log(object)
    //remove the top item
    let z = sList.pop()
    // sort remaining stack
    sortStack(sList)
    // Push the top item back in sorted stack
    sortMethod(sList, z)
  }
  return sList
}

// Only use push and pop for isEmpty. focus on things you can actually do 'ideally'
// Push, Pop, isEmpty
const sort = stringStack => {
  let tempStack = new Stack()
  let temp = new Stack()

  while (stringStack.top) {
    temp.push(stringStack.pop())

    while (tempStack.top && tempStack.top.data > temp.top.data) {
      console.log(stringStack.push(tempStack.pop()))
    }
    tempStack.push(temp)
  }
  return stringStack
}
//sort(main())
// console.log(main())
const qq = main()
// // console.log(qq)
console.log(JSON.stringify(sortStack(qq), null, 2))

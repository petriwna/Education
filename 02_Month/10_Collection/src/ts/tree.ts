export interface ITree {
    init:(array) => void
    clear:() => void
    size:() => number
    insert: (value) => void
    print: (node, calb) => void
    toArray: () => number[]
    search: (value) => number
    width: () => number
    height: () => number
    nodes: () => number
    leaves: () => number
    reverse: () => void
    minNode: () => number
    maxNode: () => number
    remove: (value) => void
}
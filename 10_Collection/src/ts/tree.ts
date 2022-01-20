export interface ITree {
    init:(array) => void
    clear:() => void
    size:() => void
    insert: () => void
    print: () => void
    toArray: () => void
    search: () => void
    width: () => void
    height: () => void
    nodes: () => void
    leaves: () => void
    reverse: () => void
    minNode: () => void
    maxNode: () => void
    remove: (value) => void
}
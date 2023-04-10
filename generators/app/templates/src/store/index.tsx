import React, { useReducer, createContext, type Reducer } from 'react'

type State = { count: number }

type Action<T> = { type: 'increment'; payload: T } | { type: 'decrement'; payload: T }

const initialState: State = { count: 0 }

const reducer: Reducer<State, Action<number>> = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: action.payload + 1 }
    case 'decrement':
      return { count: action.payload - 1 }
    default:
      throw new Error()
  }
}

export const Context = createContext<{ state: State; dispatch: React.Dispatch<Action<number>> }>({
  state: initialState,
  dispatch: () => null
})

type Props = {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}

export default Provider

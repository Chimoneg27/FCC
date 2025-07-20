export const initialState: CounterState = {
  count: 0,
  status: 'Pending'
}

export type CounterState = {
  count:number;
  status: string
}

export const counterReducer = (state:CounterState, action:any):CounterState => {
  return state
}
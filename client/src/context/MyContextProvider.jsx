import MyExpenseContext from "./ExpenseContext"

const MyContextProvider = ({children}) => {
  return (
    <MyExpenseContext.Provider>
      {children}
    </MyExpenseContext.Provider>
  )
}

export default MyContextProvider;

import { Box, Flex, Tabs, Text } from '@radix-ui/themes'

import LoginTab from './components/LoginTab'
import Todo from './components/Todo'

function App() {


  return (
    <>

    <div className='min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>

      <div className='flex justify-center items-center pt-20'>
        {/* <LoginTab/> */}
        <Todo/>
      </div>
    </div>
    </>
  )
}

export default App

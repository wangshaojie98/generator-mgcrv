import { useEffect } from 'react'
import { Box } from '@/styled_components/base'

const List = () => {
  useEffect(() => {
    console.log('demo init')
  }, [])

  return <Box>List</Box>
}

export default List

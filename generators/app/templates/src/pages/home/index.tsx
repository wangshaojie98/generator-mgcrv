import { useEffect } from 'react'
import { Box } from '@/styled_components/base'

const Demo = () => {
  useEffect(() => {
    console.log('demo init')
  }, [])

  return (
    <Box>
      <h1>主页</h1>
    </Box>
  )
}

export default Demo

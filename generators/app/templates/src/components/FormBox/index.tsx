import { useEffect } from 'react'
import { Box } from '@/styled_components/base'

const FormBox = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log('demo init')
  }, [])

  return (
    <Box border={'1px solid #f0f0f0'} padding={'12px 12px 12px 12px'}>
      {children}
    </Box>
  )
}

export default FormBox

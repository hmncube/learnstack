import { cva } from "../../styled-system/css";
 
const button = cva({
  base: {
    display: 'center'
  },
  variants: {
    visual: {
      solid: { bg: 'green', color: 'white' },
      outline: { borderWidth: '4px', borderColor: 'red', borderRadius: '18px' },
      solidBordered: {  bg: 'green', color: 'white', borderWidth: '4px', borderColor: 'green', borderRadius: '18px' },
    },
    size: {
      sm: { padding: '2', fontSize: '18px'},
      md: { padding: '4', fontSize: '20px'},
      lg: { padding: '8', fontSize: '24px'}
    }
  }
})

export default button;
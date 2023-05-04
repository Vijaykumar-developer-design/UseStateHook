// Write your code here
import {useState} from 'react'
import {MainDiv, Head, SubHead, Image, Para, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [dis, update] = useState({display: true})

  const UpdateStatus = () => {
    update(prevState => ({display: !prevState.display}))
  }

  return (
    <MainDiv>
      <Head>React Hooks</Head>
      <SubHead>Hooks are a new addition to React</SubHead>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>
        {reactHooksDescription.slice(0, 170)}
        {dis.display ? '' : reactHooksDescription.slice(170)}
      </Para>

      <Button onClick={UpdateStatus} type="button">
        {dis.display ? 'Read More' : 'Read Less'}
      </Button>
    </MainDiv>
  )
}

export default ReadMore

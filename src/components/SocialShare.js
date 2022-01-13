import { FacebookShareButton, LineShareButton } from 'react-share'
import { FacebookIcon, LineIcon } from 'react-share'

function SocialShare(props) {
  return (
    <>
      <FacebookShareButton url={props.url}>
        <FacebookIcon />
      </FacebookShareButton>
      <LineShareButton url={props.url}>
        <LineIcon />
      </LineShareButton>
    </>
  )
}

export default SocialShare

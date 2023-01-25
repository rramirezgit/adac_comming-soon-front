import Twitter from 'assets/img/socialMedia/Twitter.png'
import Facebook from 'assets/img/socialMedia/Facebook.png'
import Instagram from 'assets/img/socialMedia/Instagram.png'
import TikTok from 'assets/img/socialMedia/TikTok.png'
import Discord from 'assets/img/socialMedia/Discord.png'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import styles from './socialMedia.module.css'

const Icons = [
  {
    name: 'twitter',
    url: Twitter
  },
  {
    name: 'instagram',
    url: Instagram
  },
  {
    name: 'TikTok',
    url: TikTok
  },
  {
    name: 'Discord',
    url: Discord
  },
  {
    name: 'facebook',
    url: Facebook
  }
]

const SocialMediaIcons = (): JSX.Element => {
  return (
    <Box className={styles.social}>
      {Icons.map((item, index) => {
        return (
          <IconButton aria-label="delete" key={index}>
            <img src={item.url} alt={item.name} key={index} />
          </IconButton>
        )
      })}
    </Box>
  )
}

export default SocialMediaIcons

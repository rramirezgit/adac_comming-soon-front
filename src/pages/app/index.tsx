import { Box, IconButton, Typography } from '@mui/material'
import logo from 'assets/img/logo.svg'
import cel from 'assets/img/cel.svg'
import styles from './app.module.css'
import FormEmail from 'components/formEmail'
import { SocialMediaIcons } from './icons'

const App = (): JSX.Element => {
  return (
    <>
      <Box className={styles.content}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <Box className={styles['content-info']}>
          <Box className={styles.info}>
            <Typography className={styles.title}>
              ¡Vuélvete la persona más interesante del lugar!
            </Typography>
            <Typography className={styles.subtitle}>
              Únete a nuestro newsletter para recibir las noticias mas
              relevantes antes que cualquiera!
            </Typography>
            <FormEmail />
            <Box className={styles.social}>
              {SocialMediaIcons.map((item, index) => {
                return (
                  <IconButton aria-label="delete" key={index}>
                    <img src={item.url} alt={item.name} key={index} />
                  </IconButton>
                )
              })}
            </Box>
          </Box>
          <img src={cel} alt="Logo" className={styles.cel} />
        </Box>
      </Box>
    </>
  )
}

export default App

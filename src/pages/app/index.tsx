import { Box, Typography, useMediaQuery } from '@mui/material'
import logo from 'assets/img/logo.svg'
import cel from 'assets/img/cel.json'
import styles from './app.module.css'
import SocialMediaIcons from 'components/socialMediaIcons'
import FormEmail from 'components/formEmail'
import Lottie from 'react-lottie'
const App = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cel,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const matches = useMediaQuery('(min-width:900px)')
  return (
    <>
      <Box className={styles.content}>
        <Box
          sx={{
            '& img': {
              width: {
                xs: '115.53px',
                md: '10%'
              },
              height: {
                xs: 'auto',
                md: '8vh'
              },
              padding: {
                xs: '52px  26px',
                md: '2% 0 0 2.5%'
              }
            }
          }}
        >
          <img src={logo} alt="Logo" className={styles.logo} />
        </Box>
        <Box
          className={styles['content-info']}
          sx={{
            flexDirection: {
              xs: 'column',
              sm: 'column',
              md: 'row',
              lg: 'row'
            }
          }}
        >
          <Box
            className={styles.info}
            sx={{
              width: {
                xs: '328px',
                sm: '328px',
                md: '328px',
                lg: '661px'
              },
              height: {
                xs: 'auto',
                sm: 'auto',
                md: '85vh'
              },
              gap: {
                xs: '20px',
                md: '34px'
              }
            }}
          >
            <Typography
              className={styles.title}
              sx={{
                fontSize: {
                  xs: '40px',
                  sm: '40px',
                  md: '40px',
                  lg: '58px'
                },
                lineHeight: {
                  xs: '48px',
                  sm: '48px',
                  md: '60px',
                  lg: '70px'
                }
              }}
            >
              ¡Vuélvete la persona más interesante del lugar!
            </Typography>
            <Typography
              className={styles.subtitle}
              sx={{
                fontSize: {
                  xs: '12px',
                  md: '20.8333px'
                },
                lineHeight: {
                  xs: '14px',
                  md: '25px'
                }
              }}
            >
              Únete a nuestro newsletter para recibir las noticias mas
              relevantes antes que cualquiera!
            </Typography>
            <FormEmail />
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                }
              }}
            >
              <SocialMediaIcons />
            </Box>
          </Box>
          <Box
            sx={{
              '& img': {
                width: {
                  xs: '373.99px',
                  sm: '373.99px',
                  md: '530px'
                },
                height: {
                  xs: '435.7px',
                  sm: '435.7px',
                  md: '617.44px'
                },
                minWidth: {
                  xs: '373.99px',
                  sm: '373.99px',
                  md: '530px'
                },
                marginTop: {
                  xs: '30px',
                  md: '0'
                }
              }
            }}
          >
            <Box className={styles.contentLottie}>
              <Lottie
                options={defaultOptions}
                width={matches ? '297px' : '190.52px'}
                height={matches ? '601.63px' : '385.93px'}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none'
              },
              marginBottom: {
                xs: '30px',
                md: '0'
              }
            }}
          >
            <SocialMediaIcons />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App

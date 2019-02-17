import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    height: 250,
    marginTop: -74,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
  },
  container: {
    position: 'absolute',
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 15,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 120,
      paddingTop: 110,
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 200,
      paddingTop: 250,
    },
  },
  img: {
    zIndex: -5,
    left: 0,
    top: 0,
    width: '100%',
    height: 250,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 700,
    },
  },
  text: {
    letterSpacing: 3,
    fontWeight: 600,
    color: theme.status.black,
    textShadow: '2px 2px 4px #ccc',
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 35,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 122,
    },
  },
  title2: {
    marginLeft: 60,
  },
  small: {
    fontSize: 35,
    [theme.breakpoints.up('sm')]: {
      fontSize: 48,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 96,
    },
  },
  subtitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    paddingTop: 30,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 24,
    },
  },
}))

function Hero({ img }) {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className={classes.root}>
      <Img
        fluid={img.node.fluid}
        alt="wave"
        className={classes.img}
        style={{ position: 'absolute' }}
      />
      <div className={classes.container}>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title)}
        >
          E<span className={classes.small}>ISBACH</span>
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          className={classnames(classes.text, classes.title, classes.title2)}
        >
          R<span className={classes.small}>IDERS</span>
        </Typography>
        <Typography className={classnames(classes.text, classes.subtitle)}>
          {t('hero.subtitle')}
        </Typography>
      </div>
    </div>
  )
}

Hero.propTypes = {
  img: PropTypes.object,
}

export default Hero

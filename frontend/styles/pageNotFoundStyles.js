const pageNotFoundStyles = {
  mainGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    maxWidth: { laptop: '1450px' },
    sx: {
      borderRadius: '22px',
    },
  },

  logoGridProps: {
    container: true,
    item: true,
    columnGap: 1,
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 12,
    sx: {
      cursor: 'pointer',
    },
    px: { laptop: 2, desktop: 3, desktopMedium: 4 },
  },
  logoImageGridProps: {
    container: true,
    item: true,
    mobileSmall: 'auto',
    height: 'auto',
  },
  logoTitleGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoTitleProps: {
    fontFamily: 'Ethnocentric Regular',
    fontSize: '36px',
    color: 'black',
  },
  logoSubtitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '16px',
    color: '#AD83FF',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  mainContentGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 10,
    desktop: 8,
    desktopExtraLarge: 5,
    justifyContent: 'center',
    rowGap: 1,
  },
  contentGridProps: {
    position: 'relative',
    container: true,
    item: true,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  radialBg1Props: {
    position: 'absolute',
    left: 0,
    width: '810px',
    height: '810px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(-25%, 0px)',
    },
  },
  radialBg2Props: {
    position: 'absolute',
    left: 0,
    width: '400px',
    height: '400px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(25%, -35%)',
    },
  },
  radialBg3Props: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '600px',
    height: '600px',
    sx: {
      opacity: 0.5,
      borderRadius: '655px',
      transform: 'translate(35%, 10%)',
    },
  },
  sectionGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsGridProps: {
    container: true,
    columnGap: { mobileSmall: 0, desktop: 10 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
  },
  subtitleProps: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Satoshi Black',
    fontSize: { laptop: '42px', desktop: '46px', desktopMedium: '50px' },
    lineHeight: '92px',
  },
  bodyGridProps: {
    container: true,
    item: true,
    mobileSmall: 9,
    desktopMedium: 8,
    justifyContent: 'center',
    mb: 3,
  },
  bodyProps: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Satoshi Medium',
    fontSize: '18px',
    lineHeight: '30px',
  },
  buttonGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
  },
  buttonProps: {
    variant: 'contained',
    sx: {
      px: 5,
      py: '26px',
      borderRadius: '100px',
      textTransform: 'capitalize',
      fontSize: '18px',
      fontFamily: 'Satoshi Bold',
      lineHeight: '20px',
      bgcolor: '#1D1A2E',
      ':hover': {
        bgcolor: '#242038',
      },
    },
  },
  titleProps: {
    fontSize: { laptop: '80px', desktop: '100px', desktopMedium: '140px' },
    fontFamily: 'Ethnocentric Regular Italics',
    sx: {
      // textShadow: '0px 4px 30px rgba(26, 214, 161, 0.24)',
      background: (theme) => theme.palette.primary.main,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  submitButtonProps: {
    color: 'purple',
    inverted: true,
    extraProps: {
      padding: '2px',
      height: { laptop: '54px', desktopMedium: '60px' },
      width: 'auto',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      px: 4,
    },
  },
  yellowStarProps: {
    position: 'absolute',
    top: '-5%',
    left: '30%',
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  planetProps: {
    position: 'absolute',
    bottom: 0,
    right: '20%',
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  rocketProps: {
    position: 'absolute',
    top: '35%',
    left: { laptop: '10%', desktop: '15%', desktopMedium: '18%' },
    width: { laptop: '60px', dekstop: '64px', dekstopMedium: '90px' },
  },
  star1Props: {
    position: 'absolute',
    top: '20%',
    left: '27%',
    width: 16,
  },
  star2Props: {
    position: 'absolute',
    bottom: '10%',
    left: '20%',
    width: 36,
  },
  star3Props: {
    position: 'absolute',
    top: '35%',
    right: '25%',
    width: 42,
  },
};

export default pageNotFoundStyles;

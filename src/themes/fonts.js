import EnglandFCDISPLAY from '../assets/fonts/ENGLAND_FC_DISPLAY/EnglandFCDISPLAY-Regular.woff';
import Grot12Condensed from '../assets/fonts/GROT/Grot12Condensed-MediumWEB.ttf';
import InterBold from '../assets/fonts/Inter/Inter-Bold-slnt=0.ttf';
import InterLight from '../assets/fonts/Inter/Inter-Light-slnt=0.ttf';
import InterSemiBold from '../assets/fonts/Inter/Inter-SemiBold-slnt=0.ttf';

import JackReg from '../assets/fonts/FS-Jack/FSJack-Regular.otf';
import JackMed from '../assets/fonts/FS-Jack/FSJack-Medium.otf';
import JackLight from '../assets/fonts/FS-Jack/FSJack-Light.otf';

export const grot12 = {
  fontFamily: 'Grot12Condensed',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Grot12Condensed'),
    url(${Grot12Condensed}) format('truetype')
  `
};

export const englandFCDisplay = {
  fontFamily: 'EnglandFCDISPLAY',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('EnglandFCDISPLAY'),
    url(${EnglandFCDISPLAY}) format('truetype')
  `
};

export const interBold = {
  fontFamily: 'Inter_Bold',
  fontStyle: 'normal',
  fontWeight: 'bold',
  src: `
    local('Inter_Bold'),
    url(${InterBold}) format('truetype')
  `
};

export const interLight = {
  fontFamily: 'Inter_Light',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `
    local('Inter_Light'),
    url(${InterLight}) format('truetype')
  `
};

export const interSemiBold = {
  fontFamily: 'Inter_Semi-Bold',
  fontStyle: 'normal',
  fontWeight: 'bold',
  src: `
    local('Inter_Semi-Bold'),
    url(${InterSemiBold}) format('truetype')
  `
};


export const jackReg = {
  fontFamily: 'FSJack',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `
    local('FSJack'),
    url(${JackReg}) format('opentype')
  `
};

export const jackLight= {
  fontFamily: 'FSJack_Light',
  fontStyle: 'normal',
  fontWeight: '300',
  src: `
    local('FSJack_Light'),
    url(${JackLight}) format('opentype')
  `
};

export const jackMed = {
  fontFamily: 'FSJack_Medium',
  fontStyle: 'normal',
  fontWeight: '500',
  src: `
    local('FSJack_Medium'),
    url(${JackMed}) format('opentype')
  `
};
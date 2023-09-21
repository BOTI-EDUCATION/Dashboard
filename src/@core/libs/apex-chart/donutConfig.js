import axiosIns from '@/plugins/axios'
import { hexToRgb } from '@layouts/utils'


// 👉 Colors variables
const colorVariables = themeColors => {
  const themeSecondaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['medium-emphasis-opacity']})`
  const themeDisabledTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['disabled-opacity']})`
  const themeBorderColor = `rgba(${hexToRgb(String(themeColors.variables['border-color']))},${themeColors.variables['border-opacity']})`
  const themePrimaryTextColor = `rgba(${hexToRgb(themeColors.colors['on-surface'])},${themeColors.variables['high-emphasis-opacity']})`
    
  return { themeSecondaryTextColor, themeDisabledTextColor, themeBorderColor, themePrimaryTextColor }
}

let primiryValue  = 0 
axiosIns.get('getInscriptionsByCycles_/').then(res=>{
  primiryValue = res.data.cycles[1].inscriptions + res.data.cycles[1].reinscriptions
}).catch(err=>{
  console.log(err)
})

export const getDonutChartConfig = themeColors => {



  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',

    // series4: '#32baff',
    series5: '#ffa1a1',
  }


  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors)
  
  return {
    stroke: { width: 0 },
    
    labels: ['Préscolaire', 'Primaire', 'Collége' , 'Lycée' ],
    
    colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.5rem',
            },
            value: {
              fontSize: '1.5rem',
              color: themeSecondaryTextColor,
              formatter: val => `${parseInt(val, 10)}`,
            },
    
            total: {
              show: true,
    
              fontSize: '1.5rem',
              label: 'Primaire',
              formatter: () => primiryValue ,

              // color: themePrimaryTextColor,
              color: donutColors.series5,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1rem',
                  },
                },
              },
            },
          },
        },
      },
    ],
  }
}

export const getDonutHelpdeskChartConfig = (themeColors , labels , values) => {



  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#32baff',
    series5: '#ffa1a1',
  }


  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors)
  
  return {
    stroke: { width: 0 },
    
    labels: labels,
    
    colors: [donutColors.series1,  donutColors.series2 , donutColors.series3 , donutColors.series4,donutColors.series5],
    dataLabels: {
      enabled: true,
      formatter: val => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: -3 },
      labels: { colors: themeSecondaryTextColor },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.5rem',
            },
            value: {
              fontSize: '1.5rem',
              color: themeSecondaryTextColor,
              formatter: val => `${parseInt(val, 10)}`,
            },
    
            total: {
              show: true,
    
              fontSize: '1.5rem',
              label: labels[0],
              formatter: () => values[0] ,
              color: donutColors.series1,
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1rem',
                  },
                },
              },
            },
          },
        },
      },
    ],
  }
}

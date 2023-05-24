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

let primiryValues  = []

// let primiryLabels  = []
 
const getData = async()=>{

  await axiosIns.get('getCrmData/').then(res=>{
    for (let i = 0; i < res.data.test_mission_by_ressponsable.length; i++) {
      primiryValues.push( res.data.test_mission_by_ressponsable[i].
        count_test_admission)

      // if(res.data.test_mission_by_ressponsable[i].
      //   responsable ){

      //   primiryLabels.push( res.data.test_mission_by_ressponsable[i].
      //     responsable)
      // }else{
      //   primiryLabels.push('anonymos')
      // }
    }
  
  }).catch(err=>{
    console.log(err)
  })
}
 
getData()
export const getDonutCrmChartConfig = (themeColors,primiryLabels) => {



  const donutColors = {
    series1: '#7678ed',
    series2: '#c8b6ff',
    series3: '#e7c6ff',
    series4: '#0077b6',
    series5: '#81b29a',
    series6: '#560bad',
    series7: '#83c5be',
    series8: '#457b9d',
    series9: '#ef233c',
    series10: '#faedcd',
    series11: '#2a9d8f',
    series12: '#a2d2ff',
  }

  const { themeSecondaryTextColor, themePrimaryTextColor } = colorVariables(themeColors)
  
  return {
    stroke: { width: 0 },
    
    labels: primiryLabels,
    
    colors: [donutColors.series12, donutColors.series11, donutColors.series10 , donutColors.series4, donutColors.series5, donutColors.series6 , donutColors.series7, donutColors.series8, donutColors.series9 , donutColors.series3, donutColors.series2, donutColors.series1],
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
              label: primiryLabels[0],
              formatter: () => primiryValues[0] ,
              color: donutColors.series12,
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



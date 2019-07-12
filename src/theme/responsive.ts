const responsiveTheme = {
  axis: {
    x: {
      category: {
        label: {
          constraints: [
            'elementDist',
          ],
          rules: [
            {
              name: 'textWrapper',
              options: {
                lineNumber: 2,
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 45,
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 90,
              },
            },
            {
              name: 'textAbbreviate',
              options: {
                abbreviateBy: 'end',
              },
            },
            {
              name: 'textHide',
            },
          ],
        },
      },
      linear: {
        label: {
          constraints: [
            'elementDist',
          ],
          rules: [
            {
              name: 'nodesResampling',
              options: {
                keep: [ 'end' ],
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 45,
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 90,
              },
            },
            {
              name: 'robustAbbrevaite',
              options: {
                unit: 'thousand',
                decimal:1,
                abbreviateBy: 'end',
              },
            },
            {
              name: 'textHide',
            },
          ],
        },
      },
      dateTime: {
        label:{
          constraints: [
            'elementDist',
          ],
          rules:[
            {
              name:'datetimeStringAbbrevaite',
            },
            {
              name:'nodesResamplingByAbbrevate',
              options: {
                               // keep:['end']
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 45,
              },
            },
            {
              name: 'textRotation',
              options: {
                degree: 90,
              },
            },
            {
              name:'textHide',
            },
          ],
        },
      },
    },
    y:{
      linear:{
        label:{
          constraints: [
            'elementMaxWidth',
          ],
          rules: [

          ],
        },

      }, // linear y axis
      category:{

      }, // categroy y axis， 条形图
    },
  },
};

export default responsiveTheme;
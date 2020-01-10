import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from 'styled-components'
import ApexCharts from 'react-apexcharts'
import MonoChrom from './themes/example'

const StyledChart = styled.div`
  background-color: white;
  padding: 15px;
`;

class BasicBarChart extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      },
    };
  }

  render() {
    return (
      <StyledChart>

        <ApexCharts 
          options={this.state.options} 
          series={this.state.series} 
          type="bar" 
          height={350} 
        />

      </StyledChart>
    );
  }
}

export default BasicBarChart
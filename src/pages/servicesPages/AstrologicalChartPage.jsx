import React from 'react'
import AstralChart from '../../Components/ComponentsServices/AstralChart/AstralChart'
import '../../Components/ComponentsServices/AstralChart/astralChart.css'

const AstrologicalChartPage = () => {
  return (
    <div className='backgroundPageAstralChart'>
        <h1>Astrological Chart</h1>
        <AstralChart />
    </div>
  )
}

export default AstrologicalChartPage
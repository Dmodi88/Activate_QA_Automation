class ScPerfReportPage

{
    
    runReport_Btn ="//button[@data-automation='Run_Report']"
    dataTableTopRows ="//div[@data-testid='top']//table[contains(@class,'Table-table table-bordered')]//tbody//tr"
    dataTableBottomRows ="//div[@data-testid='bottom']//table[contains(@class,'Table-table table-bordered')]//tbody//tr"
    graphsOnTrend = "//*[contains(@class,'ciCompareMultiHighChart__ChartWrapperStyle')]"
    trendReportLink = "//h3[text()='Trend']"
    runReportAggregatedView()
  {
    cy.xpath(this.runReport_Btn).should('be.visible').click()
    cy.wait(10000)
  }


  runReportTrendView()
  {
    cy.xpath(this.trendReportLink).should('be.visible').click()
    cy.xpath(this.runReport_Btn).should('be.visible').click()
    cy.wait(5000)
  }
  verifyRows(){


    // Get table rows and verify the count is greatee then 5
    
    cy.xpath(this.dataTableTopRows).then(($rows) => {
      const rowCount = $rows.length;
      expect(rowCount).to.be.greaterThan(0);
    });    

    cy.xpath(this.dataTableBottomRows).then(($rows) => {
        const rowCount = $rows.length;
        expect(rowCount).to.be.greaterThan(0);
      });  
}

veriyScReportPage(){
    cy.xpath(this.scPerformance_Txt).should('be.visible');

}

verifyGraphs(){


    // Get table rows and verify the count is greatee then 5
    
    cy.xpath(this.graphsOnTrend).then(($graphs) => {
      const graphsCount = $graphs.length;
      expect(graphsCount).to.be.greaterThan(0);
    });    

    
}

}
export default ScPerfReportPage;
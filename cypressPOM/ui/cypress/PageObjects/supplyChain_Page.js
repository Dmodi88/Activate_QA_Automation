class supplyChain {

  // pageLoader = "//div[contains(@class, 'loader')]/..//p[text()='loading']"
  txtuserName = '#username'
  txtpassword = '#password'
  txtsubmitBtn = "button[type='submit']"
  pageLoader = "//div[@class='loader']"
  pageSpinner = "//span[@role='progressbar']//*[name()='svg']"
  supplyChainTab = "//*[text()='Supply Chain']"
  searchBox = "//input[contains(@placeholder, 'Search')]"
  supplyChainReports = "//div[contains(@class, 'MuiCardContent')]"
  apply = '.MuiButton-contained'
  favorites = "(//*[@data-testid='StarBorderIcon'])[1]"
  closeFavorites = "(//*[@data-testid='StarIcon'])[1]"
  listView = "(//*[@data-testid='TableRowsIcon'])"
  gridView = "(//*[@data-testid='GridViewRoundedIcon'])"
  scInstructionMsg = "//*[text()='Select filters from the filters menu, and run report to show data']"
  accountIcon = "(//*[@data-testid='AccountCircleIcon'])"
  logoutButton = "//*[contains(@class, 'MuiTypography-root')]/..//*[text()='Log out']"

  dropdown_Profile ="//div[text()='Admin Role']"
  option_Evgeni = "//li[@data-value='Evgeni Grin']"
  option_Admin  = "//li[@data-value='Admin Role']"
  option_RetailerProfile  = "//li[@data-value='Retailer profile - without data export']"
  option_Gregarion  = "//li[@data-value='Gregorian Calendar Profile']"

  openSupplyChain(reportCount) {
    cy.xpath(this.supplyChainTab).should('be.visible').click()
    cy.xpath(this.supplyChainReports).should('have.length', reportCount)
    cy.xpath(this.favorites).should('be.visible').click()
    cy.get(this.getElementByXpathExactText("No favorite reports have been selected"))
    cy.xpath(this.closeFavorites).should('be.visible').click()
    cy.xpath(this.listView).should('be.visible').click()
  }
  validateSupplyChainReport(reportname) {
    cy.xpath(`//*[text()="${reportname}"]`).should('be.visible').scrollIntoView().click()
    cy.xpath(this.scInstructionMsg).should('be.visible')
  }


  localLogin(username) {
    //   const t0 = performance.now()
    //   cy.wait(2000)
    //   cy.log(`sec ${t0}`)
    //  cy.wrap(performance.now()).then(t1 => {
    //     cy.log(`sec ${t0}`)
    //     cy.log(`sec ${t1}`)


    var start = 0;
    cy.get(this.txtuserName).type(username)
    cy.get(this.txtsubmitBtn).click()
    cy.wait(5000)
    cy.then(() => {
      start = performance.now();
    });
    cy.xpath(this.pageLoader).should('not.be.visible')
    cy.get(this.apply).should('be.enabled').then(() => {
      const load = (performance.now() - start) / 1000
      cy.log(`duration land on profile switching tab: ${load} seconds`);
    });
    var star = 0;
    cy.get(this.apply).should('be.enabled').click()
    cy.then(() => {
      star = performance.now();
    });
    //cy.get(this.apply).should('be.enabled').click()
    cy.xpath(this.pageLoader).should('not.be.visible')
    cy.xpath(this.supplyChainTab).then(() => {
      cy.log(`duration to land on home page: ${(performance.now() - star) / 1000} ms`);
    });








    // const endTime = new Date().getSeconds();
    // const elapsedTimeInSeconds = (endTime - startTime)/1000;

    // cy.log(`Time Taken to Land on Profile switching tab :${elapsedTimeInSeconds} seconds`);


    //cy.log(`Time Taken to Land on Profile switching tab :${elapsedTimes} seconds`);

    // cy.log(`Time Taken to Land on Profile switching tab :${elapsedTime} seconds`);
    // const startTime2 = new Date().getTime()
    // cy.get(this.apply).should('be.enabled').click()
    // cy.xpath(this.pageSpinner, { timeout: 200000 }).should('not.exist')
    // const endTime2 = new Date().getTime();
    // const elapsedTime2 = endTime - startTime/10000;
    // cy.log(`Time Taken to load Homepage after selecting user group:  ${elapsedTime2} seconds`);


  }

  localLogout() {
    cy.xpath(this.accountIcon).should('be.visible').click()
    cy.xpath(this.logoutButton).should('be.visible').click()
  }
  getElementByXpathExactText(exactText) {
    cy.log(`Getting Cypress element by "${exactText}"`);
    return cy.xpath(`(//*[text()='${exactText}'])`).should('be.visible');
  }

 localLogin(username,profile) {
    //   const t0 = performance.now()
    //   cy.wait(2000)
    //   cy.log(`sec ${t0}`)
    //  cy.wrap(performance.now()).then(t1 => {
    //     cy.log(`sec ${t0}`)
    //     cy.log(`sec ${t1}`)


    var start = 0;
    cy.get(this.txtuserName).type(username)
    cy.get(this.txtsubmitBtn).click()
    cy.wait(10000)
    cy.then(() => {
      start = performance.now();
    });
    cy.xpath(this.pageLoader).should('not.be.visible')
   /* cy.get(this.apply).should('be.enabled').then(() => {
      const load = (performance.now() - start) / 1000
      cy.log(`duration land on profile switching tab: ${load} seconds`);
    });
    var star = 0;
*/
    cy.xpath(this.dropdown_Profile).click()
    cy.log("text is: "+ profile)
    if (profile == 'Admin Role') {
      //Do Something
      cy.xpath(this.option_Admin).click()
      cy.log('clicked admin role')
      }
       else if(profile == 'Evgeni Grin')
      {
        cy.xpath(this.option_Evgeni).click()
        cy.log("clicked evgeni grin")
      //Do Something
      }
      else if(profile == 'Retailer Profile')
      {
        cy.xpath(this.option_RetailerProfile).click()
        cy.log("clicked retailer profile")

      //Do Something
      }
      else if(profile == 'Gregarion Calendar Profile')
      {
        cy.xpath(this.option_Gregarion).click()
        cy.log("clicked gregarion calendar profile")

      //Do Something
      }
   // cy.get(this.apply).should('be.enabled').click()
   /* cy.then(() => {
      star = performance.now();
    });
    */
    //cy.get(this.apply).should('be.enabled').click()
    //cy.xpath(this.pageLoader).should('not.be.visible')
    /*cy.xpath(this.supplyChainTab).then(() => {
      cy.log(`duration to land on home page: ${(performance.now() - star) / 1000} ms`);
    });
*/


  }


}
export default supplyChain;
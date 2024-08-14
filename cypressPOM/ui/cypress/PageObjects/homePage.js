class HomePage

{
    kpiDropdown1 = "(//div[@id='kpi-select'])[1]"
    kpiDropdown2 = "(//div[@id='kpi-select'])[2]"
    $_per_trip = "(//span[normalize-space()='$ per Trip'])[1]"
    Avg_price_unit = "(//span[@class='sc-kImNAt hhOxWq'][normalize-space()='Avg. Price per unit ($)'])[1]"
    comparativeMarket = "//div[@class='MuiInputBase-root-jyCQLz MuiOutlinedInput-root-hcREcK buWlgs gkjzhL MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary Mui-disabled MuiInputBase-formControl MuiSelect-root-kUbPPr']//*[name()='svg']"
    compMarket_enabled = "(//*[name()='svg'][@class='MuiSvgIcon-root-ffjXHZ jwkaMg MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon-fwkDVF ickJjY MuiSelect-icon MuiSelect-iconOutlined'])[1]"
    clearbtn = "//button[normalize-space()='Clear']"
    selectAll = "(//span[normalize-space()='Select All'])[1]"
    // profdropdownbtn = "div[role='button']"
    
    // adminProfile = "li[aria-label='Admin Role'] div[aria-label='Admin Role']"
    // greenprofile = "div[aria-label='Evgeni Grin']"
    // retailerProfile = "div[aria-label='Retailer profile - without data export']"
    // gregProfile = "div[aria-label='Gregorian Calendar Profile']"
    // profileApplybtn = "(//button[normalize-space()='Apply'])[1]"
    // home  = "//span[normalize-space()='Home']"
    // msdHover = '//span[text()="Market Share ($)"]'
    // msuHover = '//span[text()="Market Share Unit"]'
    // msdHovertxt = "//*[text()='Percentage of sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']"
    // msuHovertxt = "//*[text()='Percentage of unit sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']"
    // homepagetitle = "//div[text()='Home Page']"
    // kpiCardbox = "//div[@class='HomeCardsPanelComp__ChartsWrapperStyle-sc-r1tj2i-3 iZORex']/div"
    // filterCardbox = "(//div[@class='HomeCardsPanelComp__FiltersWrapperStyle-sc-r1tj2i-2 ljDxkG'])[1]/div"
    // category = "(//span[contains(text(),'Category')])[1]"
    // brand = "(//span[contains(text(),'Brand')])[1]"
    // geo = "(//span[contains(text(),'GEO')])[1]"
    // bostonNorth = "//p[normalize-space()='BOSTON - NORTH']"
    // comparativeMarket = "(//h3[normalize-space()='CMxAOC'])[1]"
    // cmxaoc = "(//h3[normalize-space()='CMxAOC'])[2]"
    // comparativePeriod = "(//h3[normalize-space()='Previous'])[1]"
    // totalCompperiod = "//ul[@role='listbox']/li"
    // yoy = "//h3[normalize-space()='Year Over Year']"
    // loader = "//span[@role='progressbar']//*[name()='svg']"



    clickkpiDropdown1()
    {
        cy.xpath(this.kpiDropdown1).click()
    }

    clickkpiDropdown2()
    {
        cy.xpath(this.kpiDropdown2).click()
    }

    setkpidropdown(index)
    {
        cy.xpath(`(//div[@id='kpi-select'])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    select$_per_trip()
    {
        cy.xpath(this.$_per_trip).click()
    }

    select_avg_price_unit()
    {
        cy.xpath(this.Avg_price_unit).click()
    }

    coparative_market_disabled()
    {
        cy.xpath(this.comparativeMarket).should('not.be.enabled');
    }

    coparative_market_enabled()
    {
        cy.xpath(this.compMarket_enabled).should('not.be.disabled');
    }

    verify_barchart_weeks(exactText,index)
    {
        cy.xpath(`(//*[name()='text'][contains(text(),'${exactText}')])[${index}]`).should('be.visible')
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }
    Select_KPI_From_DD(exactText,index)
    {
        cy.xpath(`(//span[normalize-space()='${exactText}'])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    Select_GEO_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }

    Select_Category_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }

    Select_Brand_From_DD(exactText)
    {
        cy.xpath(`//p[normalize-space()='${exactText}']`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()  
    }




    Select_all()
    {
        cy.xpath(this.selectAll).should('be.visible').click()
    }


    Verify_message_multi_selection(index)
    {
        cy.xpath(`(//div[contains(text(),'Market Share only available with single product (R')])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }

    Verify_message_noncoded_selection(index)
    {
        cy.xpath(`(//div[contains(text(),'Market Share is not available due to being non-coded deferred products')])[${index}]`).should('be.visible').click()
        // const kpiDropdown = "(//div[@id='kpi-select'])[${index}]"
        // cy.xpath(this.kpiDropdown).click()
        
    }




    clear_Btn()
    {
        cy.xpath(this.clearbtn).click()
    }

    waitforselectall()
    {
        cy.xpath(this.selectAll).should("be.visible")
    }




    // verifyLogin()
    // {
    //     cy.get(this.profdropdownbtn)
    // }

    // clickDropdownbtn()
    // {
    //     cy.get(this.profdropdownbtn).click()
    // }

    // selectAdmnprofile()
    // {
    //     cy.get(this.adminProfile).click()
    // }

    // selectGreenprofile()
    // {
    //     cy.get(this.greenprofile).click()
    // }

    // selectRetailerprofile()
    // {
    //     cy.get(this.retailerProfile).click()
    // }

    // selectGregprofile()
    // {
    //     cy.get(this.gregProfile).click() 
    // }

    // clickApply()
    // {
    //     cy.xpath(this.profileApplybtn).click()
    // }

    // verifyLandingpage()
    // {
    //     cy.xpath(this.home).wait(5000) 
    // }

    // marketSharedollhover()
    // {
    //     cy.xpath(this.msdHover).trigger('mouseover').wait(2000)
    // }

    // marketShareunithover()
    // {
    //     cy.xpath(this.msuHover).trigger('mouseover').wait(3000)       
    // }

    // verifyMSDtext()
    // {
    //     cy.xpath(this.msdHovertxt).wait(3000)
    // }

    // verifyMSUtext()
    // {
    //     cy.xpath(this.msuHovertxt).wait(3000)
    // }

    // verifyHomepagetitle()
    // {
    //     cy.xpath(this.homepagetitle).click({force: true})
    // }

    // verifyTotalkpicards()
    // {
    //     cy.xpath(this.kpiCardbox).should('have.length',5)
    // }

    // verifyTotalfilters()
    // {
    //     cy.xpath(this.filterCardbox).should('have.length',5)
    // }

    // verifyCategory()
    // {
    //     cy.xpath(this.category).click({force: true}).wait(3000)
    // }

    // verifyBrand()
    // {
    //     cy.xpath(this.brand).click({force: true}).wait(3000)
    // }

    // verifyGEO()
    // {
    //     cy.xpath(this.geo).click({force: true}).wait(12000) 
    // }

    // // waitforGeoloader()
    // // {
    // //     cy.xpath(this.geo).click({force: true}).wait(12000) 
    // // }


    // selectGeoBostan()
    // {
    //     cy.xpath(this.bostonNorth).contains("BOSTON - NORTH").click().wait(3000) 
    // }

    // verifyComparativeMarket()
    // {
    //     cy.xpath(this.comparativeMarket).click({force: true}).wait(3000)
    // }

    // selectCMAxOC()
    // {
    //     cy.xpath(this.cmxaoc).click({force: true}).wait(2000)
    // }

    // selectCompareperiod()
    // {
    //     cy.xpath(this.comparativePeriod).click({force: true})
    // }

    // verifytotalCompareperiod()
    // {
    //     cy.xpath(this.totalCompperiod).should('have.length', 2)     
    // }

    // selectYOY()
    // {
    //     cy.xpath(this.yoy).click()
    // }

   


}
export default HomePage;
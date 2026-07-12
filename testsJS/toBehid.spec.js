import {test, expect} from "@playwright/test"

test('To Be Hid', async({page}) => {

    await page.goto("https://www.walgreens.com/login.jsp?ru=%2F");
    await page.locator("//button[@id='submit_btn']").click();
    await page.locator("//body/div[@id='page-content']/div/div[@class='login-page-bg color__neutral pb10']/div[@role='main']/div[@class='row justify-content-center']/div[@class='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pt10 login-wrapper-wid']/div[@class='row justify-content-center']/div[@class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12']/div[@class='login-bdr']/form/div[@name='username-form']/div[@class='form__input mb15']/span[@class='input__error-text']/span[@id='user_error']/span[1]").highlight();
    // await expect(page.locator("//body/div[@id='page-content']/div/div[@class='login-page-bg color__neutral pb10']/div[@role='main']/div[@class='row justify-content-center']/div[@class='col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 pt10 login-wrapper-wid']/div[@class='row justify-content-center']/div[@class='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12']/div[@class='login-bdr']/form/div[@name='username-form']/div[@class='form__input mb15']/span[@class='input__error-text']/span[@id='user_error']/span[1]")).toBeHidden();


});



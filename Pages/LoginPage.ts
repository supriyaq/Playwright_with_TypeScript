import {test,expect,Locator,Page} from '@playwright/test';

export class LoginPage
{

    //variables==>here we are using encapsulation concept
    //wrapping up of data into a class and we cannot acess the variables outside the class we can only acess them through action methods// we can make the variables as private and readonly

    private readonly page:Page;
    private readonly LoginLink:Locator;
    private readonly UserName:Locator;
    private readonly Password:Locator;
    private readonly LoginButton:Locator;





    //constructor
    constructor(page_:Page)
    {
        this.page=page_;
        this.LoginLink=this.page.locator("#login2");
        this.UserName=this.page.locator("#loginusername");
        this.Password=this.page.locator("#loginpassword");
        this.LoginButton=this.page.locator("button[onclick='logIn()']");
    }



    //action methods

    async clickLoginLink():Promise<void>
    {
        await this.LoginLink.click();
    }

    async enterUserName(username1:string):Promise<void>
    {
        await this.UserName.clear();
        await this.UserName.fill(username1);

    }


    async enterPassword(password1:string):Promise<void>
    {
        await this.Password.clear();
        await this.Password.fill(password1);

    }

    async clickLoginButton():Promise<void>
    {
        await this.LoginButton.click();
    }




    //combining all the login Actions//
    async LoginAction(username2:string,password2:string):Promise<void>
    {
        await this.clickLoginLink();
        await this.enterUserName(username2);
        await this.enterPassword(password2);
        await this.clickLoginButton();

    }


}
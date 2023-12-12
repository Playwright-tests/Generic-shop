import { test as base } from "@playwright/test";
import { MainMenu } from "../page-object/main-menu/mainMenu.spec";
import { URLs } from "../enums/URLs.spec";

type MainMenuFixture = {

    mainMenu: MainMenu
}

export const test = base.extend<MainMenuFixture>({

    mainMenu:async ({page}, use) => {
        
        const mainMenu = new MainMenu(page);

        await mainMenu.goto(URLs.HomePage);
        await use(mainMenu);
    }
})

export { expect } from "@playwright/test";
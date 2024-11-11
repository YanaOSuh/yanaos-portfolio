const changeLanguage = function(language) {

    const offBtn = document.querySelector(".off");
    const onBtn = document.querySelector(".on");
    const sound = document.querySelector(".sound");
    const webDeveloper = document.querySelector(".webDeveloper");
    const aboutLink = document.querySelector(".aboutLink");
    const sitesLink = document.querySelector(".sitesLink");
    const appLink = document.querySelector(".appLink");
    const contactLink = document.querySelector(".contactLink");
    
    const text = document.querySelector(".text");
    const greyText = document.querySelector(".grey-text");

    const parOne = document.querySelector(".parOne");
    const parTwo = document.querySelector(".parTwo");
    const parThree = document.querySelector(".parThree");
    const parFour = document.querySelector(".parFour");
    const parFive = document.querySelector(".parFive");
    const parSix = document.querySelector(".parSix");
    const myName = document.querySelector(".myName");
    const sendEmail = document.querySelector(".sendEmail");

    const headerAbout = document.querySelector(".header-about");
    const headerWebsites = document.querySelector(".header-websites");
    const headerApps = document.querySelector(".header-apps");
    const headerContact = document.querySelector(".header-contact");
    const gearApp = document.querySelector("#header-apps-gear");
    const gearSite = document.querySelector("#header-websites-gear");

    const siteOne = document.querySelector(".siteOne");
    const siteTwo = document.querySelector(".siteTwo");
    const siteThree = document.querySelector(".siteThree");
    const siteFour = document.querySelector(".siteFour");
    const siteFive = document.querySelector(".siteFive");
    const siteSix = document.querySelector(".siteSix");
    const appOne = document.querySelector(".appOne");
    const appTwo = document.querySelector(".appTwo");
    const appThree = document.querySelector(".appThree");
    const appFour = document.querySelector(".appFour");
    const appFive = document.querySelector(".appFive");
    const appSix = document.querySelector(".appSix");
    const viewProject = document.querySelectorAll(".prjct-btn-a");

    const contactText = document.querySelector(".contactText");
    const formName = document.querySelector(".name")
    const formEmail = document.querySelector(".email");
    const formMessage = document.querySelector(".textarea");
    const sendButton = document.querySelector(".sendButton");

    if (language === 'en') {
        offBtn.textContent = "OFF";
        onBtn.textContent = "ON";
        sound.textContent ="Sound";
        webDeveloper.textContent = "Web developer";
        aboutLink.textContent = "About";
        sitesLink.textContent = "Web sites";
        appLink.textContent = "Applications";
        contactLink.textContent = "Contact";

        document.getElementById("greeting").innerHTML = `<h1 id="greeting">Hi, <br> I'm
        <span class="yLetter">Y</span>ana,<br> web&nbsp;developer </h1>`;
        text.textContent = "Contact me";
        greyText.textContent = "Front End Developer";

        parOne.textContent = "Hi there!";
        parTwo.textContent = "I'm";
        parThree.textContent = "A web developer passionate about designing and coding beautiful, functional, and user-friendly websites and applications.";
        parFour.textContent = "Your website often serves as the first impression for potential customers, so it's essential to make it count. I aim to create projects that are not only unique but also a true reflection of your individuality. Attention to detail is at the heart of everything I design and code.";
        parFive.textContent = "Feel free to explore my portfolio below. If you believe I’m the right fit for your project, don’t hesitate to reach out via ";
        parSix.textContent = "Let me help you tell your story through web development.";

        headerAbout.textContent = "About";
        headerWebsites.textContent = "Web sites";
        headerApps.textContent = "Applications";
        headerContact.textContent = "Contact";

        siteOne.textContent = "PHOTOGRAPHER website";
        siteTwo.textContent = "SIBCOINS website";
        siteThree.textContent = "PET PLANET store";
        siteFour.textContent = "COZY COFFEE cafe";
        siteFive.textContent = "GOSHOP Clothing";
        siteSix.textContent = "COOKIES store";
        appOne.textContent = "QUIZ Pirates";
        appTwo.textContent = "RECIPE search";
        appThree.textContent = "WEATHER now";
        appFour.textContent = "TO DO list";
        appFive.textContent = "СHRISTMAS countdown";
        appSix.textContent = "CRACK the safe";
        viewProject.forEach((element => {
            element.textContent = "View project";
        }));

        formName.placeholder = "Name";
        formEmail.placeholder = "Email";
        formMessage.placeholder = "Message";
        contactText.textContent = "Please do not hesitate to contact me if you have any questions, new projects in mind or job offers.";
        sendButton.textContent = "Send message";
    }
    else if (language === 'ru') {
        offBtn.textContent = "выкл";
        onBtn.textContent = "вкл";
        sound.textContent ="Звук";
        webDeveloper.textContent = "Веб разработчик";
        aboutLink.textContent = "Обо мне";
        sitesLink.textContent = "Сайты";
        appLink.textContent = "Приложения";
        contactLink.textContent = "Контакты";

        document.getElementById("greeting").innerHTML = `<h1 id="greeting">Hi, <br> I'm  
                    <span class="yLetter">Я</span>на,<br> web&nbsp;developer </h1>`;
        document.getElementById("greeting").style.fontSize = "5rem";
        text.textContent = "Связаться";
        greyText.textContent = "Frontend-разработчик";

        parOne.textContent = "Привет!";
        parTwo.textContent = "Меня зовут ";
        parThree.textContent = "Я веб-разработчик, увлеченная созданием красивых, функциональных и удобных сайтов и приложений.";
        parFour.textContent = "Ваш сайт — это первое, что видят ваши клиенты, поэтому важно произвести хорошее впечатление. Я стремлюсь создавать уникальные проекты, которые подчеркивают индивидуальность каждого клиента. Внимание к деталям — основа моей работы.";
        parFive.textContent = "Ознакомьтесь с моим портфолио ниже. Если вы видите меня частью вашего проекта, буду рада обсудить его с вами по ";
        parSix.textContent = "С помощью веб-разработки я помогу воплотить ваши идеи в жизнь.";

        headerAbout.textContent = "Обо мне";
        headerWebsites.textContent = "Сайты";
        headerApps.textContent = "Приложения";
        headerContact.textContent = "Контакты";

        siteOne.textContent = "Сайт ФОТОГРАФА";
        siteTwo.textContent = "Сайт SIBCOINS";
        siteThree.textContent = "PET PLANET магазин";
        siteFour.textContent = "Сайт КОФЕЙНИ";
        siteFive.textContent = "Магазин GOSHOP";
        siteSix.textContent = "Сайт ПЕЧЕНЬЕ";
        appOne.textContent = "КВИЗ Пираты";
        appTwo.textContent = "Поиск РЕЦЕПТОВ";
        appThree.textContent = "Прогноз ПОГОДЫ";
        appFour.textContent = "Список ДЕЛ";
        appFive.textContent = "Обратный ОТСЧЕТ";
        appSix.textContent = "Вскрой СЕЙФ";
        viewProject.forEach((element => {
            element.textContent = "Посмотреть";
        }));

        formName.placeholder = "Ваше имя";
        formEmail.placeholder = "Ваша почта";
        formMessage.placeholder = "Ваш текст";
        contactText.textContent = "Буду рада ответить на ваши вопросы, обсудить новые проекты или предложения о работе.";
        sendButton.innerText = "Отправить";
    }

    headerApps.appendChild(gearApp);
    headerWebsites.appendChild(gearSite);
    parTwo.appendChild(myName);
    parFive.appendChild(sendEmail);
}

"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[51443],{70902:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var i=o(83117),n=o(80102),a=(o(67294),o(3905)),s=o(13904),p=["components"],l={title:"Moodle App Customisation",sidebar_label:"Customisation",sidebar_position:5,tags:["Moodle App"]},r=void 0,d={unversionedId:"moodleapp/customisation/index",id:"moodleapp/customisation/index",title:"Moodle App Customisation",description:"The Moodle App can be customised in different ways:",source:"@site/docs/moodleapp/customisation/index.md",sourceDirName:"moodleapp/customisation",slug:"/moodleapp/customisation/",permalink:"/devdocs/docs/moodleapp/customisation/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/customisation/index.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655298862,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:5,frontMatter:{title:"Moodle App Customisation",sidebar_label:"Customisation",sidebar_position:5,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Accessibility",permalink:"/devdocs/docs/moodleapp/accessibility"},next:{title:"Remote themes",permalink:"/devdocs/docs/moodleapp/customisation/remote-themes"}},u={},h=[{value:"Changing the app appearance for your site",id:"changing-the-app-appearance-for-your-site",level:2},{value:"Adding support in your plugin for the mobile app",id:"adding-support-in-your-plugin-for-the-mobile-app",level:2},{value:"Configuring how the app should work via Moodle site settings",id:"configuring-how-the-app-should-work-via-moodle-site-settings",level:2},{value:"Testing and developing",id:"testing-and-developing",level:2},{value:"See also",id:"see-also",level:2}],c={toc:h};function m(e){var t=e.components,o=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,(0,i.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"The Moodle App can be customised in different ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changing the app appearance for your site."),(0,a.kt)("li",{parentName:"ul"},"Adding support in your plugin for the mobile app."),(0,a.kt)("li",{parentName:"ul"},"Configuring how the app should work via Moodle site settings."),(0,a.kt)("li",{parentName:"ul"},"Creating a custom application (with your custom name and icon) based on the open source code.")),(0,a.kt)("p",null,"With the first three options, you are not required to work with the source code and your users can use the standard app."),(0,a.kt)("p",null,"The fourth option involves building your own application, and it is not covered in this documentation. You can learn more about that in the ",(0,a.kt)("a",{parentName:"p",href:"./customisation/custom-apps"},"Custom Moodle Apps")," page."),(0,a.kt)("h2",{id:"changing-the-app-appearance-for-your-site"},"Changing the app appearance for your site"),(0,a.kt)("p",null,"The app can retrieve your custom styles from your Moodle site. Since it is an HTML5 app, you can safely apply CSS3 styles."),(0,a.kt)("p",null,'In your Moodle installation, go to "Plugins > Web services > Mobile" and enter in the ',(0,a.kt)("inlineCode",{parentName:"p"},"mobilecssurl")," field a valid URL pointing to a CSS file containing your custom styles (theme). The CSS should be placed inside your Moodle installation (in your custom theme or inside a local plugin)."),(0,a.kt)("p",null,"Once the user is logged in to the app, there is a periodical process that retrieves your remote CSS files for applying your custom styles into the app. So if you don't see the styles right away, try removing the site from the app and adding it again."),(0,a.kt)("p",null,'Notice that the first time a user opens the app, they will see the default styles. Your custom styles will be applied once the user has added a site in the app. Given that styles come from a site, there is no way to change the initial "Add site / Manage account" pages styles.'),(0,a.kt)("p",null,"You can learn more about this in the ",(0,a.kt)("a",{parentName:"p",href:"./customisation/remote-themes"},"Moodle App Remote themes")," page."),(0,a.kt)("h2",{id:"adding-support-in-your-plugin-for-the-mobile-app"},"Adding support in your plugin for the mobile app"),(0,a.kt)("p",null,"You can create Moodle plugins to change how the app works. You can learn about this in the ",(0,a.kt)("a",{parentName:"p",href:"./development/plugins-development-guide"},"Moodle App Plugins development guide")," page."),(0,a.kt)("h2",{id:"configuring-how-the-app-should-work-via-moodle-site-settings"},"Configuring how the app should work via Moodle site settings"),(0,a.kt)("p",null,"The app can be configured via Moodle site settings. You can disable features, rename strings, add new elements to the main menu, or change how log out works in the app."),(0,a.kt)("p",null,"You can learn about all the configuration options in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Moodle_app_guide_for_admins#Configuring_the_app_from_your_site"},"the user guide"),"."),(0,a.kt)("h2",{id:"testing-and-developing"},"Testing and developing"),(0,a.kt)("p",null,"You can test your changes using any Chromium-based browser, but you should launch it with some security features disabled. You can learn more about that in the ",(0,a.kt)("a",{parentName:"p",href:"./development/setup/app-in-browser"},"Using the Moodle App in a browser")," page."),(0,a.kt)("p",null,"Also, keep in mind that the usage of Remote themes and Moodle settings could be limited depending on your ",(0,a.kt)("a",{parentName:"p",href:"https://apps.moodle.com"},"Moodle App plan"),"."),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.com/branded-app/"},"Branded Moodle Apps service by Moodle HQ"))))}m.isMDXComponent=!0}}]);
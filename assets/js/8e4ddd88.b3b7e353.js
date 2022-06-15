"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[85113],{36877:function(e,o,t){t.r(o),t.d(o,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=t(83117),n=t(80102),a=(t(67294),t(3905)),r=t(13904),s=["components"],l={title:"Configuration information leakage",sidebar_label:"Configuration leakage",sidebar_position:9,tags:["Coding guidelines","Policies","Security"]},d=void 0,u={unversionedId:"development/policies/security/configinfo-leakage",id:"development/policies/security/configinfo-leakage",title:"Configuration information leakage",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/configinfo-leakage.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/configinfo-leakage",permalink:"/devdocs/general/development/policies/security/configinfo-leakage",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/configinfo-leakage.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655298862,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:9,frontMatter:{title:"Configuration information leakage",sidebar_label:"Configuration leakage",sidebar_position:9,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Information leakage",permalink:"/devdocs/general/development/policies/security/info-leakage"},next:{title:"Session fixation",permalink:"/devdocs/general/development/policies/security/session-fixation"}},c={},p=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],h={toc:p};function m(e){var o=e.components,t=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},h,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,(0,i.Z)({frontMatter:l},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page forms part of the ",(0,a.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,a.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,a.kt)("p",null,"Suppose it is well know, at least by Evil Hacker and their friends, that certain versions of  PHP have a critical security vulnerability. Suppose it is easy for Evil Hacker to find out which version of PHP (or Apache, Linux, Windows, Moodle, ...) you are running. Suppose you are running a version that is vulnerable, then you are big trouble."),(0,a.kt)("p",null,"For example, as I write this, the front page of MoodleDocs is announcing to the world (via the HTTP headers):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," HTTP/1.x 200 OK\n Date: Fri, 06 Nov 2009 15:15:29 GMT\n Server: Apache\n X-Powered-By: PHP/5.2.5\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," line is good. Many web sites use Apache. We are not revealing much there. The ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Powered-By")," line is not following good practice. It is revealing the exact version of PHP being used."),(0,a.kt)("p",null,"One very common method that lets users learn a lot about how your server is set up is error messages. It is not only exact version numbers that can help an attacker. For example knowing where things are stored on the server's hard disc can also be useful information, and error messages often include file paths."),(0,a.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,a.kt)("p",null,"Moodle makes it easy for you to hide error messages, or only have them sent to your log files."),(0,a.kt)("p",null,"There are warnings for administrators if errors are set to be displayed on-screen."),(0,a.kt)("p",null,"However, there are options in Moodle to display errors on-screen, for the benefit of developers working on development servers."),(0,a.kt)("p",null,"Similarly, Moodle provides easy access to the PHP info page, which reveals almost everything about your sever, but only if you are logged in as admin."),(0,a.kt)("p",null,"Moodle is naughty. With the standard theme, it is easy to find out exactly which version of Moodle is being used from the site home page."),(0,a.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only reveal technical information in the parts of error messages that go into the log files. The user-facing error message should describe the problem in more general terms.")),(0,a.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure your sever to only send out minimal information about which platform and Moodle version you are running."),(0,a.kt)("li",{parentName:"ul"},"Make sure technical error messages are only sent to log files, not displayed on screen.")),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[81190],{75879:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.9.10",tags:["Release notes","Moodle 3.9"],sidebar_position:10,moodleVersion:"3.9.10"},d=void 0,u={unversionedId:"releases/3.9/3.9.10",id:"releases/3.9/3.9.10",title:"Moodle 3.9.10",description:"Release date: 13 September 2021",source:"@site/general/releases/3.9/3.9.10.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.10",permalink:"/devdocs/general/releases/3.9/3.9.10",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.10.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655298862,formattedLastUpdatedAt:"15/06/2022",sidebarPosition:10,frontMatter:{title:"Moodle 3.9.10",tags:["Release notes","Moodle 3.9"],sidebar_position:10,moodleVersion:"3.9.10"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.9",permalink:"/devdocs/general/releases/3.9/3.9.9"},next:{title:"Moodle 3.9.11",permalink:"/devdocs/general/releases/3.9/3.9.11"}},p={},m=[{value:"Backported bug fixes",id:"backported-bug-fixes",level:2},{value:"Backported security improvements",id:"backported-security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 13 September 2021"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.10%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.10"),"."),(0,s.kt)("h2",{id:"backported-bug-fixes"},"Backported bug fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72494"},"MDL-72494")," - Cannot change course format with Chrome 93.0"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72312"},"MDL-72312")," - PHP 7.2 tests failing in 3.10 & 3.9, caused by buggy php-igbinary extension"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72265"},"MDL-72265")," - Backup code added in ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56310"},"MDL-56310")," incorrectly checks moodle/role:safeoverride for users who already have moodle/role:override")),(0,s.kt)("h2",{id:"backported-security-improvements"},"Backported security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72014"},"MDL-72014")," - Update grunt and some components to avoid some security reports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72187"},"MDL-72187")," - Log visibility change of log stores")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427103"},"MSA-21-0032")," Session Hijack risk when Shibboleth authentication is enabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427104"},"MSA-21-0033")," Course participants download did not restrict which users could be exported"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427105"},"MSA-21-0034")," Authentication bypass risk when using external database authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427106"},"MSA-21-0035")," Arbitrary file read by site administrators via LaTeX preamble"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=427107"},"MSA-21-0036")," Quiz unreleased grade disclosure via web service")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.10"},"Notes de mise \xe0 jour de Moodle 3.9.10")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.10"},"Notas de Moodle 3.9.10"))))}k.isMDXComponent=!0}}]);
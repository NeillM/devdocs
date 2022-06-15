"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[64151],{12406:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(13904),i=["components"],d={title:"Plugin types",tags:["Plugins","core","API"]},s=void 0,p={unversionedId:"apis/plugintypes/index",id:"apis/plugintypes/index",title:"Plugin types",description:"Moodle is a powerful, and very extensible, Learning Management System. One of its core tenets is its extensibility, and this is primarily achieved through the development of plugins.",source:"@site/docs/apis/plugintypes/index.md",sourceDirName:"apis/plugintypes",slug:"/apis/plugintypes/",permalink:"/devdocs/docs/apis/plugintypes/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/plugintypes/index.md",tags:[{label:"Plugins",permalink:"/devdocs/docs/tags/plugins"},{label:"core",permalink:"/devdocs/docs/tags/core"},{label:"API",permalink:"/devdocs/docs/tags/api"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655298862,formattedLastUpdatedAt:"15/06/2022",frontMatter:{title:"Plugin types",tags:["Plugins","core","API"]},sidebar:"docs",previous:{title:"DML exceptions",permalink:"/devdocs/docs/apis/core/dml/exceptions"},next:{title:"Antivirus plugins",permalink:"/devdocs/docs/apis/plugintypes/antivirus/"}},m={},u=[{value:"Things you can find in all plugins",id:"things-you-can-find-in-all-plugins",level:2},{value:"Naming conventions",id:"naming-conventions",level:2},{value:"See also",id:"see-also",level:2}],g={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,(0,n.Z)({frontMatter:d},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Moodle is a powerful, and very extensible, Learning Management System. One of its core tenets is its extensibility, and this is primarily achieved through the development of plugins."),(0,l.kt)("p",null,"A wider range of plugin types are available and these should be selected depending on your needs."),(0,l.kt)("h2",{id:"things-you-can-find-in-all-plugins"},"Things you can find in all plugins"),(0,l.kt)("p",null,"Although there are many different types of plugin, there are some things that work the same way in all plugin types. Please see the ",(0,l.kt)("a",{parentName:"p",href:"./commonfiles"},"Plugin files")," documentation that describes common files which are found in many plugin types."),(0,l.kt)("h2",{id:"naming-conventions"},"Naming conventions"),(0,l.kt)("p",null,"Plugins typically have at least two names:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The friendly name, shown to users, and"),(0,l.kt)("li",{parentName:"ul"},"A machine name used internally.")),(0,l.kt)("p",null,"The machine name must meet the following rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It must start with a lowercase latin letter"),(0,l.kt)("li",{parentName:"ul"},"It may contain only lowercase latin letters, numbers, and underscores"),(0,l.kt)("li",{parentName:"ul"},"It must end with a lowercase latin letter, or a number"),(0,l.kt)("li",{parentName:"ul"},"The hyphen, and minus character ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," are not allowed")),(0,l.kt)("p",null,"If a plugin does not meet these requirements then it will be silently ignored."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Plugin name validation takes place in ",(0,l.kt)("inlineCode",{parentName:"p"},"core_component::is_valid_plugin_name()")," and the following regular expression is used:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"/^[a-z](?:[a-z0-9_](?!__))*[](a-z0-9)+$/\n")))),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Activity module exception")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The underscore character is not supported in activity modules for legacy reasons."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin type"),(0,l.kt)("th",{parentName:"tr",align:null},"Component name (",(0,l.kt)("a",{parentName:"th",href:"https://docs.moodle.org/dev/Frankenstyle"},"Frankenstyle"),")"),(0,l.kt)("th",{parentName:"tr",align:null},"Moodle path"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Moodle versions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/mod/"},"Activity modules")),(0,l.kt)("td",{parentName:"tr",align:null},"mod"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod"),(0,l.kt)("td",{parentName:"tr",align:null},"Activity modules are essential types of plugins in Moodle as they provide activities in courses. For example: Forum, Quiz and Assignment."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/antivirus/"},"Antivirus plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"antivirus"),(0,l.kt)("td",{parentName:"tr",align:null},"/lib/antivirus"),(0,l.kt)("td",{parentName:"tr",align:null},"Antivirus scanner plugins provide functionality for virus scanning user uploaded files using third-party virus scanning tools in Moodle. For example: ClamAV."),(0,l.kt)("td",{parentName:"tr",align:null},"3.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/assign/submission"},"Assignment submission plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"assignsubmission"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/assign/submission"),(0,l.kt)("td",{parentName:"tr",align:null},"Different forms of assignment submissions"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/assign/feedback"},"Assignment feedback plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"assignfeedback"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/assign/feedback"),(0,l.kt)("td",{parentName:"tr",align:null},"Different forms of assignment feedbacks"),(0,l.kt)("td",{parentName:"tr",align:null},"2.3+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Book_tools"},"Book tools")),(0,l.kt)("td",{parentName:"tr",align:null},"booktool"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/book/tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Small information-displays or tools that can be moved around pages"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Course_Custom_fields"},"Course Custom fields")),(0,l.kt)("td",{parentName:"tr",align:null},"customfield"),(0,l.kt)("td",{parentName:"tr",align:null},"/customfield/field"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom field types, used e. g. in Custom course fields"),(0,l.kt)("td",{parentName:"tr",align:null},"3.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Database_fields"},"Database fields")),(0,l.kt)("td",{parentName:"tr",align:null},"datafield"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/data/field"),(0,l.kt)("td",{parentName:"tr",align:null},"Different types of data that may be added to the Database activity module"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Database_presets"},"Database presets")),(0,l.kt)("td",{parentName:"tr",align:null},"datapreset"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/data/preset"),(0,l.kt)("td",{parentName:"tr",align:null},"Pre-defined templates for the Database activity module"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/External_tool_source"},"LTI sources")),(0,l.kt)("td",{parentName:"tr",align:null},"ltisource"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/lti/source"),(0,l.kt)("td",{parentName:"tr",align:null},"LTI providers can be added to external tools easily through the external tools interface see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/en/External_tool"},"Documentation on External Tools"),". This type of plugin is specific to LTI providers that need a plugin that can register custom handlers to process LTI messages"),(0,l.kt)("td",{parentName:"tr",align:null},"2.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/File_Converters"},"File Converters")),(0,l.kt)("td",{parentName:"tr",align:null},"fileconverter"),(0,l.kt)("td",{parentName:"tr",align:null},"/files/converter"),(0,l.kt)("td",{parentName:"tr",align:null},"Allow conversion between different types of user-submitted file. For example from .doc to PDF."),(0,l.kt)("td",{parentName:"tr",align:null},"3.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/LTI_services"},"LTI services")),(0,l.kt)("td",{parentName:"tr",align:null},"ltiservice"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/lti/service"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows the implementation of LTI services as described by the IMS LTI specification"),(0,l.kt)("td",{parentName:"tr",align:null},"2.8+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/mlbackend/"},"Machine learning backends")),(0,l.kt)("td",{parentName:"tr",align:null},"mlbackend"),(0,l.kt)("td",{parentName:"tr",align:null},"/lib/mlbackend"),(0,l.kt)("td",{parentName:"tr",align:null},"Prediction processors for analytics API"),(0,l.kt)("td",{parentName:"tr",align:null},"3.4+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Forum_reports"},"Forum reports")),(0,l.kt)("td",{parentName:"tr",align:null},"forumreport"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/forum/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Display various reports in the forum activity"),(0,l.kt)("td",{parentName:"tr",align:null},"3.8+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Quiz_reports"},"Quiz reports")),(0,l.kt)("td",{parentName:"tr",align:null},"quiz"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/quiz/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Display and analyse the results of quizzes, or just plug miscellaneous behaviour into the quiz module"),(0,l.kt)("td",{parentName:"tr",align:null},"1.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Quiz_access_rules"},"Quiz access rules")),(0,l.kt)("td",{parentName:"tr",align:null},"quizaccess"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/quiz/accessrule"),(0,l.kt)("td",{parentName:"tr",align:null},"Add conditions to when or where quizzes can be attempted, for example only from some IP addresses, or student must enter a password first"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/SCORM_reports"},"SCORM reports")),(0,l.kt)("td",{parentName:"tr",align:null},"scormreport"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/scorm/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Analysis of SCORM attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop_grading_strategies"},"Workshop grading strategies")),(0,l.kt)("td",{parentName:"tr",align:null},"workshopform"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/workshop/form"),(0,l.kt)("td",{parentName:"tr",align:null},"Define the type of the grading form and implement the calculation of the grade for submission in the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop"},"Workshop")," module"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop_allocation_methods"},"Workshop allocation methods")),(0,l.kt)("td",{parentName:"tr",align:null},"workshopallocation"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/workshop/allocation"),(0,l.kt)("td",{parentName:"tr",align:null},"Define ways how submissions are assigned for assessment in the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop"},"Workshop")," module"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop_evaluation_methods"},"Workshop evaluation methods")),(0,l.kt)("td",{parentName:"tr",align:null},"workshopeval"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/workshop/eval"),(0,l.kt)("td",{parentName:"tr",align:null},"Implement the calculation of the grade for assessment (grading grade) in the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Workshop"},"Workshop")," module"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/blocks/"},"Blocks")),(0,l.kt)("td",{parentName:"tr",align:null},"block"),(0,l.kt)("td",{parentName:"tr",align:null},"/blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"Small information-displays or tools that can be moved around pages"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Question_types"},"Question types")),(0,l.kt)("td",{parentName:"tr",align:null},"qtype"),(0,l.kt)("td",{parentName:"tr",align:null},"/question/type"),(0,l.kt)("td",{parentName:"tr",align:null},"Different types of question (e.g. multiple-choice, drag-and-drop) that can be used in quizzes and other activities"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Question_behaviours"},"Question behaviours")),(0,l.kt)("td",{parentName:"tr",align:null},"qbehaviour"),(0,l.kt)("td",{parentName:"tr",align:null},"/question/behaviour"),(0,l.kt)("td",{parentName:"tr",align:null},"Control how student interact with questions during an attempt"),(0,l.kt)("td",{parentName:"tr",align:null},"2.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Question_formats"},"Question import/export formats")),(0,l.kt)("td",{parentName:"tr",align:null},"qformat"),(0,l.kt)("td",{parentName:"tr",align:null},"/question/format"),(0,l.kt)("td",{parentName:"tr",align:null},"Import and export question definitions to/from the question bank"),(0,l.kt)("td",{parentName:"tr",align:null},"1.6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/filter/"},"Text filters")),(0,l.kt)("td",{parentName:"tr",align:null},"filter"),(0,l.kt)("td",{parentName:"tr",align:null},"/filter"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically convert, highlight, and transmogrify text posted into Moodle."),(0,l.kt)("td",{parentName:"tr",align:null},"1.4+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Editors"},"Editors")),(0,l.kt)("td",{parentName:"tr",align:null},"editor"),(0,l.kt)("td",{parentName:"tr",align:null},"/lib/editor"),(0,l.kt)("td",{parentName:"tr",align:null},"Alternative text editors for editing content"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Atto"},"Atto editor plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"atto"),(0,l.kt)("td",{parentName:"tr",align:null},"/lib/editor/atto/plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra functionality for the Atto text editor"),(0,l.kt)("td",{parentName:"tr",align:null},"2.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/TinyMCE_editor_plugins"},"TinyMCE editor plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"tinymce"),(0,l.kt)("td",{parentName:"tr",align:null},"/lib/editor/tinymce/plugins"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra functionality for the TinyMCE text editor."),(0,l.kt)("td",{parentName:"tr",align:null},"2.4+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/enrol/"},"Enrolment plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"enrol"),(0,l.kt)("td",{parentName:"tr",align:null},"/enrol"),(0,l.kt)("td",{parentName:"tr",align:null},"Ways to control who is enrolled in courses"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Authentication_plugins"},"Authentication plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"auth"),(0,l.kt)("td",{parentName:"tr",align:null},"/auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows connection to external sources of authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Admin_tools"},"Admin tools")),(0,l.kt)("td",{parentName:"tr",align:null},"tool"),(0,l.kt)("td",{parentName:"tr",align:null},"/admin/tool"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides utility scripts useful for various site administration and maintenance tasks"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Log_stores"},"Log stores")),(0,l.kt)("td",{parentName:"tr",align:null},"logstore"),(0,l.kt)("td",{parentName:"tr",align:null},"/admin/tool/log/store"),(0,l.kt)("td",{parentName:"tr",align:null},"Event logs storage back-ends"),(0,l.kt)("td",{parentName:"tr",align:null},"2.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Availability_conditions"},"Availability conditions")),(0,l.kt)("td",{parentName:"tr",align:null},"availability"),(0,l.kt)("td",{parentName:"tr",align:null},"/availability/condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Conditions to restrict user access to activities and sections."),(0,l.kt)("td",{parentName:"tr",align:null},"2.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Calendar_types"},"Calendar types")),(0,l.kt)("td",{parentName:"tr",align:null},"calendartype"),(0,l.kt)("td",{parentName:"tr",align:null},"/calendar/type"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines how dates are displayed throughout Moodle"),(0,l.kt)("td",{parentName:"tr",align:null},"2.6+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Messaging_consumers"},"Messaging consumers")),(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"/message/output"),(0,l.kt)("td",{parentName:"tr",align:null},"Represent various targets where messages and notifications can be sent to (email, sms, jabber, ...)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/format/"},"Course formats")),(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"/course/format"),(0,l.kt)("td",{parentName:"tr",align:null},"Different ways of laying out the activities and blocks in a course"),(0,l.kt)("td",{parentName:"tr",align:null},"1.3+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Data_formats"},"Data formats")),(0,l.kt)("td",{parentName:"tr",align:null},"dataformat"),(0,l.kt)("td",{parentName:"tr",align:null},"/dataformat"),(0,l.kt)("td",{parentName:"tr",align:null},"Formats for data exporting and downloading"),(0,l.kt)("td",{parentName:"tr",align:null},"3.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/User_profile_fields"},"User profile fields")),(0,l.kt)("td",{parentName:"tr",align:null},"profilefield"),(0,l.kt)("td",{parentName:"tr",align:null},"/user/profile/field"),(0,l.kt)("td",{parentName:"tr",align:null},"Add new types of data to user profiles"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Reports"},"Reports")),(0,l.kt)("td",{parentName:"tr",align:null},"report"),(0,l.kt)("td",{parentName:"tr",align:null},"/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides useful views of data in a Moodle site for admins and teachers"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Course_reports"},"Course reports")),(0,l.kt)("td",{parentName:"tr",align:null},"coursereport"),(0,l.kt)("td",{parentName:"tr",align:null},"/course/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Reports of activity within the course"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2.1 (for 2.2+ see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Reports"},"Reports"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Gradebook_export"},"Gradebook export")),(0,l.kt)("td",{parentName:"tr",align:null},"gradeexport"),(0,l.kt)("td",{parentName:"tr",align:null},"/grade/export"),(0,l.kt)("td",{parentName:"tr",align:null},"Export grades in various formats"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Gradebook_import"},"Gradebook import")),(0,l.kt)("td",{parentName:"tr",align:null},"gradeimport"),(0,l.kt)("td",{parentName:"tr",align:null},"/grade/import"),(0,l.kt)("td",{parentName:"tr",align:null},"Import grades in various formats"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Gradebook_reports"},"Gradebook reports")),(0,l.kt)("td",{parentName:"tr",align:null},"gradereport"),(0,l.kt)("td",{parentName:"tr",align:null},"/grade/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Display/edit grades in various layouts and reports"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Grading_methods"},"Advanced grading methods")),(0,l.kt)("td",{parentName:"tr",align:null},"gradingform"),(0,l.kt)("td",{parentName:"tr",align:null},"/grade/grading/form"),(0,l.kt)("td",{parentName:"tr",align:null},"Interfaces for actually performing grading in activity modules (eg Rubrics)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/MNet_services"},"MNet services")),(0,l.kt)("td",{parentName:"tr",align:null},"mnetservice"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnet/service"),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to implement remote services for the ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/MNet"},"MNet")," environment (deprecated, use web services instead)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Webservice_protocols"},"Webservice protocols")),(0,l.kt)("td",{parentName:"tr",align:null},"webservice"),(0,l.kt)("td",{parentName:"tr",align:null},"/webservice"),(0,l.kt)("td",{parentName:"tr",align:null},"Define new protocols for web service communication (such as SOAP, XML-RPC, JSON, REST ...)"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/repository/"},"Repository plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"repository"),(0,l.kt)("td",{parentName:"tr",align:null},"/repository"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect to external sources of files to use in Moodle"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Portfolio_plugins"},"Portfolio plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"/portfolio"),(0,l.kt)("td",{parentName:"tr",align:null},"Connect external portfolio services as destinations for users to store Moodle content"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Search_engines"},"Search engines")),(0,l.kt)("td",{parentName:"tr",align:null},"search"),(0,l.kt)("td",{parentName:"tr",align:null},"/search/engine"),(0,l.kt)("td",{parentName:"tr",align:null},"Search engine backends to index Moodle's contents."),(0,l.kt)("td",{parentName:"tr",align:null},"3.1+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Media_players"},"Media players")),(0,l.kt)("td",{parentName:"tr",align:null},"media"),(0,l.kt)("td",{parentName:"tr",align:null},"/media/player"),(0,l.kt)("td",{parentName:"tr",align:null},"Pluggable media players"),(0,l.kt)("td",{parentName:"tr",align:null},"3.2+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Plagiarism_plugins"},"Plagiarism plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"plagiarism"),(0,l.kt)("td",{parentName:"tr",align:null},"/plagiarism"),(0,l.kt)("td",{parentName:"tr",align:null},"Define external services to process submitted files and content"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Cache_store"},"Cache store")),(0,l.kt)("td",{parentName:"tr",align:null},"cachestore"),(0,l.kt)("td",{parentName:"tr",align:null},"/cache/stores"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache storage back-ends."),(0,l.kt)("td",{parentName:"tr",align:null},"2.4+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Cache_locks"},"Cache locks")),(0,l.kt)("td",{parentName:"tr",align:null},"cachelock"),(0,l.kt)("td",{parentName:"tr",align:null},"/cache/locks"),(0,l.kt)("td",{parentName:"tr",align:null},"Cache lock implementations."),(0,l.kt)("td",{parentName:"tr",align:null},"2.4+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Themes"},"Themes")),(0,l.kt)("td",{parentName:"tr",align:null},"theme"),(0,l.kt)("td",{parentName:"tr",align:null},"/theme"),(0,l.kt)("td",{parentName:"tr",align:null},"Change the look of Moodle by changing the the HTML and the CSS."),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/local/"},"Local plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"/local"),(0,l.kt)("td",{parentName:"tr",align:null},"Generic plugins for local customisations"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Assignment_types"},"Legacy assignment types")),(0,l.kt)("td",{parentName:"tr",align:null},"assignment"),(0,l.kt)("td",{parentName:"tr",align:null},"/mod/assignment/type"),(0,l.kt)("td",{parentName:"tr",align:null},"Different forms of assignments to be graded by teachers"),(0,l.kt)("td",{parentName:"tr",align:null},"1.x - 2.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Admin_reports"},"Legacy admin reports")),(0,l.kt)("td",{parentName:"tr",align:null},"report"),(0,l.kt)("td",{parentName:"tr",align:null},"/admin/report"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides useful views of data in a Moodle site, for admins only."),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2.1 (for 2.2+ see ",(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Reports"},"Reports"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/Content_bank_content_types"},"Content bank content types")),(0,l.kt)("td",{parentName:"tr",align:null},"contenttype"),(0,l.kt)("td",{parentName:"tr",align:null},"/contentbank/contenttype"),(0,l.kt)("td",{parentName:"tr",align:null},"Content types to upload, create or edit in the content bank and use all over the Moodle site"),(0,l.kt)("td",{parentName:"tr",align:null},"3.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.moodle.org/dev/H5P_libraries"},"H5P libraries")),(0,l.kt)("td",{parentName:"tr",align:null},"h5plib"),(0,l.kt)("td",{parentName:"tr",align:null},"/h5p/h5plib"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin type for the particular versions of the H5P integration library."),(0,l.kt)("td",{parentName:"tr",align:null},"3.9+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/devdocs/docs/apis/plugintypes/qbank/"},"Question bank plugins")),(0,l.kt)("td",{parentName:"tr",align:null},"qbank"),(0,l.kt)("td",{parentName:"tr",align:null},"/question/bank"),(0,l.kt)("td",{parentName:"tr",align:null},"Plugin type for extending question bank functionality."),(0,l.kt)("td",{parentName:"tr",align:null},"4.0+")))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Obtaining the list of plugin types known to your Moodle "),(0,l.kt)("p",null,"You can get an exact list of valid plugin types for your Moodle version using the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="/plugintypes.php"',title:'"/plugintypes.php"'},"<?php\ndefine('CLI_SCRIPT', true);\nrequire('config.php');\n\n$pluginman = core_plugin_manager::instance();\n\nforeach ($pluginman->get_plugin_types() as $type => $dir) {\n    $dir = substr($dir, strlen($CFG->dirroot));\n    printf(\n        \"%-20s %-50s %s\" . PHP_EOL,\n        $type,\n        $pluginman->plugintype_name_plural($type),\n        $dir)\n    ;\n}\n"))),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Guidelines_for_contributed_code"},"Guidelines for contributing code")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:".."},"Core APIs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Frankenstyle"},"Frankenstyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://moodle.org/plugins"},"Moodle Plugins directory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tutorial"},"Tutorial")," to help you learn how to write plugins for Moodle from start to finish, while showing you how to navigate the most important developer documentation along the way.")))}k.isMDXComponent=!0}}]);
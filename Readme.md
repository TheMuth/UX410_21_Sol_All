# SAP UX410 Developing SAP Fiori UIs 
## (Course Version 21)

This repository contains the solutions for all exercises of this course.

The configuration of Deployments of OData services are linked to a SAP BTP Destination with the name S4D_100.
If you want to run/test against an other backend system, then check the **ui5.yaml**, **ui5-local.yaml** and **ui5-deploy.yaml** for the values of the *destination* and corresponding *url*.
```
    url: http://s4d.virtual:8000
    destination: S4D_100
```

To run an application you start a terminal, navigate to the folder of the project (this is the one with the package.json file). Then execute the folowing commands:
```shell
npm install
npm run build
npm run start-noflp
```

If you want to deploy the application to your own SAP ABAP system, then check the values in the **.abap-deployrc.json** or **ui5-deploy.yaml** files.

[Exercise 2](Ex02): Create a Simple SAPUI5 Application with the Help of the Layout Editor.<br/>
[Exercise 5](Ex05): Work with Diagrams.<br/>
[Exercise 6](Ex06): Navigate in SAP Fiori.<br/> 
[Exercise 7](Ex07): Create a Dynamic Page App.<br/>
[Exercise 8](Ex08): Create a Master-Detail using the Flexible Column Layout.<br/>
[Exercise 9](Ex09): Implement Value Helps.<br/>
[Exercise 10](Ex10): Implement a List Report.<br/>
[Exercise 11](Ex11): Implement a Object Page.<br/>
[Exercise 12](Ex12): Implement and Extend an Extension Point.<br/>
[Exercise 13](Ex13): Implement List Report using SAP Fiori Elements.<br/>
[Exercise 14](Ex14): Implement Search and Filter.<br/>
[Exercise 15](Ex15): Implement Object Page SAP Fiori Elements.<br/>
[Exercise 16](Ex16): Display Dependent Entities as SAP Fiori Elements.<br/>
[zui5_language](zui5_language): Demo of i18n usage with different languages.<br/>

> Tip: When during your developments it is no longer possible to start your application. Then you can try to delete the **dist** and **node_modules** folders and the **package-lock.json** file. Then run the three commands again: 
```shell
npm install
npm run build
npm run start-noflp
```

> Tip: In the Trial environment you can sometimes get the message that you are low on resources (disk space). If you have a lot of projects you can clean up unneeded code with the next commands from the terminal in the **projects** folder:
```shell
find . -type d -name node_modules -print0|xargs -0 rm -rf --
find . -type d -name .git -print0|xargs -0 rm -rf --
find . -type d -name dist -print0|xargs -0 rm -rf --
find . -name package-lock.json -print0|xargs -0 rm -rf --
```

Leon Boeijen<br/>
NL for Business v.o.f.
# WSL Setup

Only tested with WSL2, if you are using WSL1, it's recommended that you upgrade.

## Cypress

In order to run cypress tests locally, you will need to install a couple things:

### In Windows

Install [vcxsrv](https://sourceforge.net/projects/vcxsrv/)
It will install as XLaunch on your Windows machine, open it.

Choose the following settings:

* Multiple windows
* Start no client
* Disable (untick) Native OpenGL
* Disable (tick) access control

Once configuration is complete, XLaunch will run and will prompt you to select the allowed networks. Allow both Private and Public networks.

### In WSL

* `sudo apt update`
* `sudo apt upgrade`
* `sudo apt-get install xdg-utils --fix-missing`
* `export DISPLAY=$(route.exe print | grep 0.0.0.0 | head -1 | awk '{print $4}'):0.0`
  * add this to your .bashrc or .zshrc profile if you don't want to do this every time you run the tests

You should now be able to run cypress tests.

---
layout:            post
title:             Vowpal Wabbit Installation
author:            praveen
resource:          true
categories:        [tech_n_gizmos, tech, data_analytics]
tags:              [vowapal_wabbit, installation, ubuntu]
---

##Installing the prerequisites for `vowpal_wabbit`
{{ more }}

```
sudo apt-get -y install build-essential
sudo apt-get -y install automake
sudo apt-get -y install autoconf
sudo apt-get -y install libxmu-dev
sudo apt-get -y install gcc
sudo apt-get -y install libpthread-stubs0-dev
sudo apt-get -y install libtool
sudo apt-get -y install libboost-program-options-dev
sudo apt-get -y install zlib1g-dev
sudo apt-get -y install libc6
sudo apt-get -y install libgcc1
sudo apt-get -y install libstdc++6
```
##Configure Environment

```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/local/lib
```

##Install vowpal_wabbit

```
git clone https://github.com/JohnLangford/vowpal_wabbit.git
cd vowpal_wabbit
./autogen.sh
./configure
make
sudo make install
```

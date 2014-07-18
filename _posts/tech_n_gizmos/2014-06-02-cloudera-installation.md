---
layout:            post
title:             Cloudera Installation
author:            praveen
resource:          true
categories:        [tech_n_gizmos, tech, hadoop]
tags:              [cloudera, installation, ubuntu]
---

##Installing Cloudera on Ubuntu 12.04 LTS
-------

- Install the **prerequisites** for Cloudera-Manager and CDH
{{ more }}
    + Install ssh

    ```
    sudo apt-get -y install ssh
    sudo apt-get -y install rsync
    sudo apt-get -y install openssh-server
    ```

    + Install python avro

    ```
    sudo apt-get -y install python-virtualenv
    sudo apt-get -y install python-setuptools
    sudo easy_install virtualenv
    sudo easy_install avro
    ```
- Set up **cloudera user account**

    Create the cloudera user account

    ```
    sudo useradd -G sudo -s /bin/bash -m cloudera
    ```

    Set a password for the account

    ```
    sudo passwd cloudera
    ```

- The installation requires an account with **password less sudo rights**. Hence, make the following temporary changes and *revert back these changes after the installation*

    + Open the file /etc/sudoers
    ```
    sudo nano /etc/sudoers
    ```

    + Add the following line to the file

    ```
    %cloudera ALL=(ALL:ALL) NOPASSWD:ALL
    ```
- Config **hostname** on all the nodes

    + This article assumes the use of IPv4 entries only
    + Use FQDN in `/etc/hosts`
    + Make the necessary changes to `/etc/hosts` and `/etc/hostname`
    + Comment out all the lines which start with `127.*`, as we would be using the host's network ip-address
    + Add the appropriate ip-addresses and hostnames for all the nodes in the below mentioned format

        ```
        IP-Address  Full-Qualified-Hostname  Short-Hostname
        ```
    + For example:

        ```
        10.47.82.249 abc00.abc.com abc00
        10.47.83.45  abc01.abc.com abc01
        10.47.82.83  abc02.abc.com abc02
        10.47.82.89  abc03.abc.com abc03
        ```
    + Use the Short-hostname in the `/etc/hostname`
    + To make sure all the configurations work run the following commands

        ```
        hostname
        hostname -a
        hostname -f
        ```
    + For Example

        ```
        ~ hostname
        abc00
        ~ hostname -a
        abc00
        ~ hostname -f
        abc00.abc.com
        ```

- Set up **keyless ssh login** for user cloudera

    + Generate the SSH Keypair file, this would enable login without password

        ```
        ssh-keygen -t rsa
        sudo chmod 600 ~/.ssh/id_dsa.pub
        ```

        + When prompted for a file, use default
        + When prompted for a password, leave it blank

    + Copy the SSH Keypair file to all the remote host

        ```
        ssh-copy-id -i ~/.ssh/id_rsa.pub cloudera@abc00.abc.com
        ssh-copy-id -i ~/.ssh/id_rsa.pub cloudera@abc01.abc.com
        ```
- Run the Cloudera Manager Installer

    ```
    wget http://archive.cloudera.com/cm5/installer/latest/cloudera-manager-installer.bin
    chmod +x cloudera-manager-installer.bin
    sudo ./cloudera-manager-installer.bin
    ```
    + Once the cloudera manager is installed it would automatically open the browser window with a web interface
    + The default password for the application is *admin:admin*
    + The same can the done manually at any time by invoking hostname:7180 in the browser

- To uninstall the Cloudera Manager and CDH at any moment do the follows:
    + Step 1: Stop all of your services.
    + Step 2:
        - Uninstall the Cloudera Manager Server and its components

        ```
        sudo /usr/share/cmf/uninstall-cloudera-manager.sh
        ```

        - If uninstall-cloudera-manager.sh somehow doesn't work, do as follows:

            ```
            sudo service cloudera-scm-server stop
            sudo service cloudera-scm-server-db stop
            ```
    + Step 3: On all Agent hosts, uninstall CDH and the Cloudera Manager Agents.

        ```
        sudo service cloudera-scm-agent stop
        ```
    + Step 4: On all Agent hosts, remove all Cloudera Manager data.

        ```
        sudo rm -Rf /usr/share/{cmf,hue} /var/lib/cloudera* /var/cache/yum/cloudera*
        ```
    + Step 5: Remove the Cloudera Manager lock file.

        ```
        sudo rm /tmp/.scm_prepare_node.lock
        ```
    + Step 6: Finally (just to make sure nothing is left out)

        ```
        sudo service cloudera-scm-server stop
        sudo service cloudera-scm-server-db stop
        sudo apt-get remove  cloudera-manager-server cloudera-manager-server-db cloudera-manager-daemons
        sudo service cloudera-scm-agent hard_stop
        sudo apt-get remove cloudera-manager-agent cloudera-manager-daemons
        sudo rm -rf /usr/share/cmf
        ```


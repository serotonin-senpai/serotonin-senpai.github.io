# serotonin-senpai.github.io

## Install ruby

To use jekyll development magic, you need ruby to run it.

### Windows
Install the recommended Ruby+Devkit from here:  
https://rubyinstaller.org/downloads/  
(At the time of writing, `Ruby+Devkit 2.6.6-1 (x64)`)

### MacOS

Ruby **should** be installed by default on MacOS, but on the offhand it's not it can be installed using [homebrew](https://brew.sh/) with:  
`brew install ruby`

### Debian/Ubuntu

`sudo apt-get install ruby-full`

## Install bundler

Once you have ruby installed, install the bundler gem by running this command:  
`gem install bundler`

## Install website dependencies

`bundle install`

## Launch site in development mode

`bundle exec jekyll serve`
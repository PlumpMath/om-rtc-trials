# rtc

Working on scultping out an web rtc om component.

Currently a (barely) working example of using clojure/clojurescript to coordinate two peer connections with a data channel.

Uses Om for client side rendering.


Here are the orienting questions that I am staring at currently:
-> Right now all of my thoughts are burried in web-rtc jargon. So excuse unqualified terms, for now. Clarity shall come.

* What streams do I want to be added to the peer connection?
  - Right now the component should be passed a 'settings' map in state that reasons out whether the user's video, audio, and/or data channel gets added to the peer connection

* How do streams get initiated?
  - Right now the local user media gets requested when the component gets mounted. This is stupid.
  - The most modular thing I can think of is to let the user pass in an opt component that is meant to let the user say "I'm ready to be asked for my camera/audio"

* When the streams are gathered, what dom-nodes should get passed the steam?
  - Should this be encapsulated in the component? Or a property the user can configure?

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

Clone this repo and enter the following commands in the directory in your terminal    

    lein cljsbuild release once     
    lein trampoline run 5000 

## License

Copyright ©  FIXME

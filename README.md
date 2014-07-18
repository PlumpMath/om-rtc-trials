# rtc

Working on scultping out an web rtc om component.

Currently a (barely) working example of using clojure/clojurescript to coordinate two peer connections with a data channel.

Uses Om for client side rendering.

*Totally almost there, you guys.*

As of now, the example works--it's just very non-obvious how. My bad. Will keep chiseling.

## Prerequisites

You will need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:      

    lein cljsbuild release once     
    lein trampoline run 5000 

## License

Copyright ©  FIXME
